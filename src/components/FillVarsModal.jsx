import React, { useState, useEffect, useRef } from 'react';
import { runPromptWithAI, enhanceImagePrompt } from '../services/gemini';
import { exportToPDF } from '../services/pdfExport';
import { trackUsage } from '../services/stats';
import { getComments, addComment } from '../services/firestore';
import { useAuth } from '../hooks/useAuth';

// ─── Helpers ─────────────────────────────────────────────────────────────────
const extractVars = (content) => {
  const regex = /\[([^\]]+)\]/g;
  const vars = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (!vars.includes(match[1])) vars.push(match[1]);
  }
  return vars;
};

const buildFinalPrompt = (content, values) => {
  let result = content;
  Object.entries(values).forEach(([key, val]) => {
    if (val.trim()) result = result.replaceAll(`[${key}]`, val.trim());
  });
  return result;
};

// Simple markdown-like renderer (bold, bullets)
const renderMarkdown = (text) => {
  if (!text) return null;
  return text.split('\n').map((line, i) => {
    // Bold
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((p, j) =>
      p.startsWith('**') && p.endsWith('**')
        ? <strong key={j}>{p.slice(2, -2)}</strong>
        : p
    );
    // Bullets
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return <li key={i} style={{ marginLeft: '20px', marginBottom: '4px' }}>{parts.slice(1)}</li>;
    }
    if (line.startsWith('## ')) return <h3 key={i} style={{ margin: '16px 0 8px', fontSize: '1.1rem', fontWeight: 800 }}>{line.slice(3)}</h3>;
    if (line.startsWith('# '))  return <h2 key={i} style={{ margin: '16px 0 8px', fontSize: '1.25rem', fontWeight: 800 }}>{line.slice(2)}</h2>;
    if (line.trim() === '') return <br key={i} />;
    return <p key={i} style={{ marginBottom: '8px', lineHeight: 1.7 }}>{parts}</p>;
  });
};
// ─────────────────────────────────────────────────────────────────────────────

const FillVarsModal = ({ prompt, onClose }) => {
  const variables = extractVars(prompt.content);
  const [tab, setTab] = useState(variables.length > 0 ? 'fill' : 'preview');
  const [values, setValues] = useState(() => Object.fromEntries(variables.map(v => [v, ''])));
  const [copied, setCopied] = useState(false);
  const { user } = useAuth();

  // Comments state
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    if (tab === 'comments') {
      setLoadingComments(true);
      getComments(prompt.id).then(data => {
        setComments(data);
        setLoadingComments(false);
      });
    }
  }, [tab, prompt.id]);

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return;
    try {
      const added = await addComment(prompt.id, { content: newComment, rating }, user);
      setComments([added, ...comments]);
      setNewComment('');
      alert("Đã đăng bình luận!");
    } catch (err) {
      alert("Lỗi đăng bình luận");
    }
  };

  // AI run state
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('gemini_api_key') || '');
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [aiCopied, setAiCopied] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const resultRef = useRef(null);

  // Image Generation state
  const [imgLoading, setImgLoading] = useState(false);
  const [imgResult, setImgResult] = useState('');
  const [imgError, setImgError] = useState('');
  const [enhancing, setEnhancing] = useState(false);
  const [enhancedPrompt, setEnhancedPrompt] = useState('');

  // History state
  const IMAGE_HISTORY_KEY = 'image_history_' + prompt.id;
  const [imgHistory, setImgHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(IMAGE_HISTORY_KEY)) || [];
    } catch {
      return [];
    }
  });

  // Share state
  const [shareCopied, setShareCopied] = useState(false);

  // Notes state
  const NOTES_KEY = `prompt_note_${prompt.id}`;
  const [note, setNote] = useState(() => localStorage.getItem(NOTES_KEY) || '');
  const [noteSaved, setNoteSaved] = useState(false);

  const finalPrompt = buildFinalPrompt(prompt.content, values);
  const allFilled = variables.every(v => values[v]?.trim());

  useEffect(() => {
    if (apiKey) localStorage.setItem('gemini_api_key', apiKey);
  }, [apiKey]);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt).then(() => {
      setCopied(true);
      trackUsage(prompt.id, prompt.title, 'copy');
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleRunAI = async () => {
    if (!apiKey.trim()) { setAiError('Vui lòng nhập Gemini API Key.'); return; }
    setAiLoading(true);
    setAiError('');
    setAiResult('');
    setTab('ai');
    try {
      const result = await runPromptWithAI(apiKey, finalPrompt);
      setAiResult(result);
      trackUsage(prompt.id, prompt.title, 'ai_run');
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch (err) {
      setAiError(err.message);
    } finally {
      setAiLoading(false);
    }
  };

  const handleExportPDF = async () => {
    setPdfLoading(true);
    try {
      await exportToPDF(resultRef.current, `Prompt_${prompt.id}`);
    } catch (err) {
      alert('Lỗi xuất PDF: ' + err.message);
    } finally {
      setPdfLoading(false);
    }
  };

  const handleEnhancePrompt = async () => {
    setEnhancing(true);
    setImgError('');
    try {
      if (!apiKey) throw new Error("Vui lòng nhập API Key để làm đẹp Prompt!");
      const result = await enhanceImagePrompt(apiKey, finalPrompt);
      setEnhancedPrompt(result);
    } catch (err) {
      setImgError(err.message);
    } finally {
      setEnhancing(false);
    }
  };

  const handleGenerateImage = async () => {
    setImgLoading(true);
    setImgError('');
    setImgResult('');
    setTab('image');
    
    try {
      const activePrompt = enhancedPrompt || finalPrompt;
      const safePrompt = activePrompt.length > 800 ? activePrompt.substring(0, 800) : activePrompt;
      const encodedPrompt = encodeURIComponent(safePrompt);
      const seed = Math.floor(Math.random() * 1000000);
      const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${seed}`;
      
      const img = new Image();
      img.onload = () => {
        setImgResult(url);
        
        // Cập nhật lịch sử
        const newHistory = [{ url, prompt: activePrompt, date: new Date().toLocaleString() }, ...imgHistory].slice(0, 10);
        setImgHistory(newHistory);
        localStorage.setItem(IMAGE_HISTORY_KEY, JSON.stringify(newHistory));

        setImgLoading(false);
        trackUsage(prompt.id, prompt.title, 'image_run');
      };
      img.onerror = () => {
        setImgError("Không thể tải ảnh từ máy chủ. Vui lòng thử lại.");
        setImgLoading(false);
      };
      img.src = url;
    } catch (err) {
      setImgError(err.message);
      setImgLoading(false);
    }
  };

  const handleDownloadImage = async () => {
    try {
      const response = await fetch(imgResult);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `AI_Image_${prompt.id}_${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      // Fallback nếu fetch bị chặn CORS
      window.open(imgResult, '_blank');
    }
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?prompt=${prompt.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    });
  };

  const handleSaveNote = () => {
    localStorage.setItem(NOTES_KEY, note);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const handleDeleteNote = () => {
    localStorage.removeItem(NOTES_KEY);
    setNote('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content detail-modal" onClick={e => e.stopPropagation()}>

        {/* ── HEADER ── */}
        <div className="detail-header">
          <div className="detail-header-meta">
            <span className="card-tag" style={{ background: 'rgba(255,255,255,0.25)', color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
              {prompt.category}
            </span>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>bởi {prompt.author}</span>
          </div>
          <h2 className="detail-title">{prompt.title}</h2>
          <p className="detail-desc">{prompt.description}</p>
          <button className="modal-close" onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px' }}>×</button>
        </div>

        {/* ── TABS ── */}
        <div className="detail-tabs">
          {variables.length > 0 && (
            <button className={`detail-tab ${tab === 'fill' ? 'active' : ''}`} onClick={() => setTab('fill')}>
              ✏️ Điền biến
            </button>
          )}
          <button className={`detail-tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>
            👁️ Xem Prompt
          </button>
            <button className={`detail-tab ${tab === 'ai' ? 'active' : ''}`} onClick={() => setTab('ai')}>
              ✨ Chạy với AI
            </button>
            <button className={`detail-tab ${tab === 'image' ? 'active' : ''}`} onClick={() => setTab('image')}>
              🎨 Tạo Ảnh AI
            </button>
            <button className={`detail-tab ${tab === 'notes' ? 'active' : ''}`} onClick={() => setTab('notes')}>
              📝 Ghi chú
            </button>
            <button className={`detail-tab ${tab === 'comments' ? 'active' : ''}`} onClick={() => setTab('comments')}>
              💬 Bình luận
            </button>
            <button className={`detail-tab ${tab === 'share' ? 'active' : ''}`} onClick={() => setTab('share')}>
              🔗 Chia sẻ
            </button>
        </div>

        {/* ── BODY ── */}
        <div className="detail-body">

          {/* Tab: Điền biến */}
          {tab === 'fill' && (
            <div className="detail-fill">
              <div className="fill-grid">
                {variables.map(varName => (
                  <div key={varName} className="fill-vars-field">
                    <label className="fill-vars-label">
                      <span className="fill-vars-bracket">[{varName}]</span>
                    </label>
                    <input
                      type="text"
                      className="fill-vars-input"
                      placeholder={`Nhập ${varName}...`}
                      value={values[varName]}
                      onChange={e => setValues(prev => ({ ...prev, [varName]: e.target.value }))}
                    />
                  </div>
                ))}
              </div>
              <div className="detail-fill-actions">
                <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                  {copied ? <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Đã sao chép!</> 
                          : <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Sao chép Prompt</>}
                </button>
                <button className="btn-primary" onClick={() => { setTab('preview'); }}>
                  👁️ Xem trước
                </button>
                <button className="btn-ai-run" onClick={() => setTab('ai')}>
                  ✨ Chạy với AI →
                </button>
              </div>
            </div>
          )}

          {/* Tab: Xem Prompt */}
          {tab === 'preview' && (
            <div className="detail-preview-tab">
              <div className="detail-prompt-box">
                {/* Highlight biến đã điền vs chưa điền */}
                {finalPrompt.split(/(\[[^\]]+\])/).map((part, i) => {
                  if (/^\[[^\]]+\]$/.test(part)) {
                    return <mark key={i} className="fill-vars-empty">{part}</mark>;
                  }
                  // Highlight các giá trị đã được điền (text thay thế biến)
                  return <span key={i}>{part}</span>;
                })}
              </div>
              
              <div className="detail-fill-actions" style={{ marginTop: '20px' }}>
                <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                  {copied ? '✓ Đã sao chép!' : '📋 Sao chép Prompt'}
                </button>
                <button className="btn-ai-run" onClick={() => setTab('ai')}>
                  ✨ Chạy với AI →
                </button>
              </div>
            </div>
          )}

          {/* Tab: Ai Run */}
          {tab === 'ai' && (
            <div className="ai-tab">
              <div className="api-key-banner">
                <div>
                  <strong>Gemini API Key:</strong>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Yêu cầu có API Key từ Google AI Studio (miễn phí). <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" style={{color: 'white', textDecoration: 'underline'}}>Lấy key tại đây</a>.</div>
                </div>
                <input 
                  type="password" 
                  className="api-key-input"
                  placeholder="AIzaSy..." 
                  value={apiKey} 
                  onChange={e => setApiKey(e.target.value)} 
                />
              </div>

              <div className="ai-actions">
                <button 
                  className={`btn-primary ${aiLoading ? 'loading' : ''}`}
                  onClick={handleRunAI}
                  disabled={aiLoading}
                  style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}
                >
                  {aiLoading ? '🔄 Đang xử lý...' : '▶️ Chạy Prompt ngay'}
                </button>
              </div>

              {aiError && <div className="error-message">❌ {aiError}</div>}

              {aiResult && (
                <div className="ai-result-box" ref={resultRef}>
                  <div className="ai-result-header">
                    <h3>Kết quả từ AI:</h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button 
                        className="btn-outline" 
                        style={{ fontSize: '0.85rem', padding: '6px 12px' }}
                        onClick={handleExportPDF}
                        disabled={pdfLoading}
                      >
                        {pdfLoading ? '🔄 Đang xuất...' : '📄 Xuất PDF'}
                      </button>
                      <button 
                        className="btn-outline" 
                        style={{ fontSize: '0.85rem', padding: '6px 12px' }}
                        onClick={() => {
                          navigator.clipboard.writeText(aiResult);
                          setAiCopied(true);
                          setTimeout(() => setAiCopied(false), 2000);
                        }}
                      >
                        {aiCopied ? '✓ Đã Copy' : '📋 Copy Text'}
                      </button>
                    </div>
                  </div>
                  <div className="ai-result-content">
                    {renderMarkdown(aiResult)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab: Tạo Ảnh AI */}
          {tab === 'image' && (
            <div className="ai-tab">
              <div className="api-key-banner" style={{ background: 'var(--accent-color)' }}>
                <div>
                  <strong>Trình tạo ảnh AI (Sử dụng Pollinations.ai):</strong>
                  <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Chất lượng ngang Midjourney. Miễn phí & Không cần đăng nhập.</div>
                </div>
              </div>

              <div className="ai-actions" style={{ flexDirection: 'column', gap: '12px' }}>
                {enhancedPrompt ? (
                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px dashed var(--accent-color)', fontSize: '0.9rem' }}>
                    <strong>✨ Prompt tiếng Anh đã được làm đẹp:</strong><br/>
                    {enhancedPrompt}
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input 
                      type="password" 
                      className="api-key-input"
                      style={{ flex: 1 }}
                      placeholder="Nhập API Key để làm đẹp Prompt bằng Gemini (Tùy chọn)" 
                      value={apiKey} 
                      onChange={e => setApiKey(e.target.value)} 
                    />
                    <button 
                      className={`btn-outline ${enhancing ? 'loading' : ''}`}
                      onClick={handleEnhancePrompt}
                      disabled={enhancing || !apiKey}
                      title={!apiKey ? 'Bạn cần nhập API Key' : ''}
                      style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)', whiteSpace: 'nowrap' }}
                    >
                      {enhancing ? 'Đang dịch...' : '✨ Dịch & Làm đẹp'}
                    </button>
                  </div>
                )}

                <button 
                  className={`btn-primary ${imgLoading ? 'loading' : ''}`}
                  onClick={handleGenerateImage}
                  disabled={imgLoading}
                  style={{ width: '100%', padding: '16px', fontSize: '1.1rem', background: 'var(--accent-color)' }}
                >
                  {imgLoading ? '🔄 Đang vẽ ảnh (Mất khoảng 5-10s)...' : '🎨 Bắt đầu vẽ ảnh'}
                </button>
              </div>

              {imgError && <div className="error-message">❌ {imgError}</div>}

              {imgResult && (
                <div className="ai-result-box" style={{ textAlign: 'center' }}>
                  <div className="ai-result-header" style={{ justifyContent: 'space-between', marginBottom: '16px' }}>
                    <h3 style={{ margin: 0 }}>Kết quả:</h3>
                    <button 
                      className="btn-primary" 
                      style={{ fontSize: '0.85rem', padding: '6px 16px', background: 'var(--accent-color)' }}
                      onClick={handleDownloadImage}
                    >
                      ⬇️ Tải Ảnh
                    </button>
                  </div>
                  <div className="img-container" style={{ border: '3px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
                    <img src={imgResult} alt="AI Generated" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
                  </div>
                </div>
              )}

              {imgHistory.length > 0 && (
                <div className="image-history">
                  <h4 style={{ margin: '20px 0 10px 0', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>🕒 Lịch sử ảnh đã tạo</h4>
                  <div className="history-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
                    {imgHistory.map((hist, idx) => (
                      <div key={idx} className="history-item" onClick={() => setImgResult(hist.url)} style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden', border: hist.url === imgResult ? '2px solid var(--accent-color)' : '2px solid transparent' }}>
                        <img src={hist.url} alt="History item" style={{ width: '100%', height: '100px', objectFit: 'cover', display: 'block' }} title={hist.prompt} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab: Ghi chú cá nhân */}
          {tab === 'notes' && (
            <div className="notes-tab">
              <div className="notes-header-row">
                <div>
                  <div className="notes-title">📝 Ghi chú của bạn</div>
                  <div className="notes-sub">Ghi chú được lưu riêng cho prompt này trên máy bạn.</div>
                </div>
                {note && (
                  <button className="btn-outline" style={{ color: '#ef4444', borderColor: '#ef4444', fontSize: '0.8rem' }} onClick={handleDeleteNote}>
                    🗑️ Xóa
                  </button>
                )}
              </div>
              <textarea
                className="notes-textarea"
                placeholder={`Ghi lại kinh nghiệm sử dụng prompt "${prompt.title}"...\n\nVí dụ:\n- Dùng tốt cho lớp 8, bài Phương trình\n- Kết hợp với biến [Lớp] = 8A là ra kết quả rất hay\n- Chạy AI mất ~10 giây`}
                value={note}
                onChange={e => setNote(e.target.value)}
                rows={10}
              />
              <div className="notes-actions">
                <span className="notes-char-count">{note.length} ký tự</span>
                <button
                  className={`btn-primary ${noteSaved ? 'saved-pulse' : ''}`}
                  onClick={handleSaveNote}
                  style={noteSaved ? { background: '#22c55e' } : {}}
                >
                  {noteSaved ? '✓ Đã lưu!' : '💾 Lưu ghi chú'}
                </button>
              </div>
            </div>
          )}

          {/* Tab: Chia sẻ */}
          {tab === 'share' && (
            <div className="share-tab">
              <div className="share-banner">
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🔗</div>
                <h3 className="share-title">Chia sẻ Prompt này</h3>
                <p className="share-sub">Gửi link cho đồng nghiệp để họ truy cập và sử dụng prompt ngay lập tức</p>
              </div>

              {/* Link chia sẻ */}
              <div className="share-url-box">
                <div className="share-url-label">🌐 Link chia sẻ:</div>
                <div className="share-url-row">
                  <div className="share-url-text">
                    {`${window.location.origin}${window.location.pathname}?prompt=${prompt.id}`}
                  </div>
                  <button
                    className={`btn-primary ${shareCopied ? '' : ''}`}
                    style={{ flexShrink: 0, background: shareCopied ? '#22c55e' : undefined }}
                    onClick={handleShare}
                  >
                    {shareCopied ? '✓ Đã copy!' : '📋 Copy Link'}
                  </button>
                </div>
              </div>

              {/* Chia sẻ văn bản */}
              <div className="share-text-box">
                <div className="share-url-label">📤 Chia sẻ qua tin nhắn / Zalo:</div>
                <div className="share-message-preview">
                  {`🤖 *KHO LỆNH AI - Thầy Toàn AI*\n\n📌 *${prompt.title}*\n📁 Danh mục: ${prompt.category}\n\n💡 ${prompt.description}\n\n🔗 Xem chi tiết: ${window.location.origin}${window.location.pathname}?prompt=${prompt.id}`}
                </div>
                <button className="copy-btn" style={{ marginTop: '12px' }} onClick={() => {
                  const msg = `🤖 *KHO LỆNH AI - Thầy Toàn AI*\n\n📌 *${prompt.title}*\n📁 Danh mục: ${prompt.category}\n\n💡 ${prompt.description}\n\n🔗 Xem chi tiết: ${window.location.origin}${window.location.pathname}?prompt=${prompt.id}`;
                  navigator.clipboard.writeText(msg);
                }}>
                  📋 Copy tin nhắn chia sẻ
                </button>
              </div>

              {/* Chia sẻ nội dung prompt */}
              <div className="share-text-box">
                <div className="share-url-label">📝 Chia sẻ nội dung Prompt (để dán vào ChatGPT/Gemini):</div>
                <div className="share-message-preview" style={{ fontSize: '0.85rem' }}>
                  {finalPrompt.slice(0, 200)}{finalPrompt.length > 200 ? '...' : ''}
                </div>
                <button className="copy-btn" style={{ marginTop: '12px' }} onClick={() => navigator.clipboard.writeText(finalPrompt)}>
                  📋 Copy nội dung Prompt
                </button>
              </div>
            </div>
          )}

          {/* Tab: Comments & Ratings */}
          {tab === 'comments' && (
            <div className="comments-tab" style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>💬 Đánh giá & Bình luận</h3>
              
              <div className="comment-form" style={{ background: 'var(--bg-color)', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid var(--border-color)' }}>
                {!user ? (
                  <p style={{ color: 'var(--text-secondary)' }}>Vui lòng đăng nhập để gửi bình luận.</p>
                ) : (
                  <>
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Đánh giá:</label>
                      <select value={rating} onChange={e => setRating(Number(e.target.value))} style={{ padding: '6px', borderRadius: '4px' }}>
                        <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                        <option value="4">⭐⭐⭐⭐ (4/5)</option>
                        <option value="3">⭐⭐⭐ (3/5)</option>
                        <option value="2">⭐⭐ (2/5)</option>
                        <option value="1">⭐ (1/5)</option>
                      </select>
                    </div>
                    <textarea 
                      placeholder="Chia sẻ kinh nghiệm sử dụng Prompt này..."
                      value={newComment}
                      onChange={e => setNewComment(e.target.value)}
                      style={{ width: '100%', height: '80px', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '12px', resize: 'vertical' }}
                    />
                    <button className="btn-primary" onClick={handleSubmitComment}>Gửi bình luận</button>
                  </>
                )}
              </div>

              <div className="comments-list">
                {loadingComments ? (
                  <p>Đang tải bình luận...</p>
                ) : comments.length === 0 ? (
                  <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Chưa có bình luận nào. Hãy là người đầu tiên!</p>
                ) : (
                  comments.map(c => (
                    <div key={c.id} className="comment-item" style={{ padding: '12px', borderBottom: '1px solid var(--border-color)', marginBottom: '12px', borderRadius: '8px', background: 'white' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <strong>{c.userName}</strong>
                        <span>{'⭐'.repeat(c.rating)}</span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-wrap', margin: 0 }}>{c.content}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FillVarsModal;

