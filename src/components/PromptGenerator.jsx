import React, { useState } from 'react';
import { generateProfessionalPrompt } from '../services/gemini';

const PromptGenerator = ({ onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [request, setRequest] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!apiKey) {
      setError("Vui lòng nhập API Key của Gemini.");
      return;
    }
    if (!request) {
      setError("Vui lòng nhập yêu cầu của bạn.");
      return;
    }

    setLoading(true);
    setError('');
    setGeneratedPrompt('');

    try {
      const prompt = await generateProfessionalPrompt(apiKey, request);
      setGeneratedPrompt(prompt);
      
      // Lưu vào LocalStorage
      const history = JSON.parse(localStorage.getItem('ai_prompts_history') || '[]');
      const newEntry = {
        id: Date.now(),
        request: request,
        prompt: prompt,
        date: new Date().toLocaleString()
      };
      localStorage.setItem('ai_prompts_history', JSON.stringify([newEntry, ...history]));

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">✨ Tạo Prompt Bằng AI</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Gemini API Key</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Nhập API Key của bạn..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <small style={{ color: 'var(--text-secondary)', marginTop: '4px', display: 'block' }}>
              *Key của bạn chỉ lưu tạm trên trình duyệt và không được gửi đi đâu khác.
            </small>
          </div>

          <div className="form-group">
            <label className="form-label">Yêu cầu của bạn (Viết ngắn gọn)</label>
            <textarea 
              className="form-input form-textarea" 
              placeholder="VD: Viết đề toán lớp 9 về phương trình bậc 2..."
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            ></textarea>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? 'Đang phân tích & tạo Prompt...' : 'Tạo Prompt Nâng Cao'}
          </button>

          {generatedPrompt && (
            <div className="result-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h3 className="form-label" style={{ margin: 0 }}>Prompt Đề Xuất Của Bạn:</h3>
                <button className="copy-btn" style={{ padding: '4px 8px', fontSize: '0.85rem', border: '1px solid var(--text-primary)' }} onClick={handleCopy}>
                  {copied ? 'Đã Copy!' : 'Copy Prompt'}
                </button>
              </div>
              <textarea 
                className="form-input form-textarea result-textarea" 
                readOnly 
                value={generatedPrompt}
              ></textarea>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;
