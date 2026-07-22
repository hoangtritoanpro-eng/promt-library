import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PromptCard from './components/PromptCard';
import PromptGenerator from './components/PromptGenerator';
import PostPrompt from './components/PostPrompt';
import FillVarsModal from './components/FillVarsModal';
import StatsView from './components/StatsView';
import AdminDashboard from './components/AdminDashboard';
import { prompts as initialPrompts } from './data';
import { useAuth } from './hooks/useAuth';
import { getUserFavorites, updateUserFavorites, getApprovedCommunityPrompts, submitCommunityPrompt } from './services/firestore';
import './index.css';

function App() {
  const { user, loading: authLoading, signInWithGoogle, logout } = useAuth();
  
  const [prompts, setPrompts] = useState(initialPrompts);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [showPromptGen, setShowPromptGen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'history', 'post', 'search', 'favorites'
  const [historyItems, setHistoryItems] = useState([]);
  const [selectedDetailPrompt, setSelectedDetailPrompt] = useState(null);
  const [fillVarsPrompt, setFillVarsPrompt] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Favorites local state
  const [savedPrompts, setSavedPrompts] = useState(() => {
    return JSON.parse(localStorage.getItem('saved_prompts') || '[]');
  });

  // Sync favorites with Firestore when user logs in
  useEffect(() => {
    if (user) {
      getUserFavorites(user.uid).then((cloudFavorites) => {
        // Merge local and cloud favorites
        const merged = [...new Set([...savedPrompts, ...cloudFavorites])];
        setSavedPrompts(merged);
        localStorage.setItem('saved_prompts', JSON.stringify(merged));
        // Update cloud with merged list
        updateUserFavorites(user.uid, merged);
      });
    }
  }, [user]);

  // Load community prompts
  useEffect(() => {
    getApprovedCommunityPrompts().then(communityPrompts => {
      if (communityPrompts.length > 0) {
        setPrompts(prev => {
          const newPrompts = [...prev];
          communityPrompts.forEach(cp => {
            if (!newPrompts.find(p => p.id === cp.id)) {
              newPrompts.push(cp);
            }
          });
          return newPrompts;
        });
      }
    });
  }, []);

  const basePrompts = currentView === 'favorites'
    ? prompts.filter(p => savedPrompts.includes(p.id))
    : (selectedCategory === "Tất cả" ? prompts : prompts.filter(p => p.category === selectedCategory));

  const displayPrompts = searchQuery.trim() === ''
    ? basePrompts
    : prompts.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleShowHistory = () => {
    const data = JSON.parse(localStorage.getItem('ai_prompts_history') || '[]');
    setHistoryItems(data);
    setCurrentView('history');
  };

  const clearHistory = () => {
    localStorage.removeItem('ai_prompts_history');
    setHistoryItems([]);
  };

  const handlePostPrompt = async (newPrompt) => {
    try {
      await submitCommunityPrompt(newPrompt, user);
      alert("Đăng Prompt thành công! Lệnh của bạn đang chờ duyệt.");
      setCurrentView('home');
    } catch (error) {
      alert("Có lỗi xảy ra khi đăng prompt. Vui lòng thử lại.");
    }
  };

  const handleLike = (id) => {
    setPrompts(prompts.map(p => p.id === id ? { ...p, likes: (p.likes || 0) + 1 } : p));
  };

  const toggleSave = (id) => {
    const updated = savedPrompts.includes(id)
      ? savedPrompts.filter(pid => pid !== id)
      : [...savedPrompts, id];
      
    setSavedPrompts(updated);
    localStorage.setItem('saved_prompts', JSON.stringify(updated));
    
    if (user) {
      updateUserFavorites(user.uid, updated).catch(err => console.error("Lỗi đồng bộ yêu thích", err));
    }
  };

  return (
    <div className="app-container">
      <Sidebar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          setCurrentView('home');
        }} 
        onViewHistory={handleShowHistory}
        totalPrompts={prompts.length}
        user={user}
        onViewAdmin={() => setCurrentView('admin')}
      />
      
      <div className="main-content">
        <div className="topbar">
          <div className="topbar-nav">
            <div 
              className={`topbar-nav-item ${currentView === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentView('home')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Khám phá
            </div>
            <div 
              className={`topbar-nav-item ${currentView === 'search' ? 'active' : ''}`}
              onClick={() => { setCurrentView('search'); setTimeout(() => document.getElementById('search-input')?.focus(), 100); }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              Tìm kiếm
            </div>
            <div 
              className={`topbar-nav-item ${currentView === 'favorites' ? 'active' : ''}`}
              onClick={() => setCurrentView('favorites')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              Yêu thích
            </div>
            <div 
              className={`topbar-nav-item ${currentView === 'stats' ? 'active' : ''}`}
              onClick={() => setCurrentView('stats')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Thống kê
            </div>
            <div 
              className={`topbar-nav-item ${currentView === 'post' ? 'active' : ''}`} 
              onClick={() => setCurrentView('post')}
              style={{
                backgroundColor: currentView === 'post' ? 'var(--primary-color)' : 'white',
                color: currentView === 'post' ? 'white' : 'var(--text-primary)',
                padding: '8px 24px',
                borderRadius: '30px',
                border: '2px solid var(--border-color)',
                boxShadow: '2px 2px 0px var(--border-color)',
                cursor: 'pointer'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Đăng Prompt
            </div>
          </div>
          
          <div style={{ marginLeft: 'auto' }}>
            <button className="btn-primary" onClick={() => setShowPromptGen(true)}>
              ✨ Tạo Prompt Bằng AI
            </button>
          </div>
          
          <div className="topbar-right">
            {authLoading ? (
               <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Đang tải...</div>
            ) : user ? (
              <div className="user-profile-menu">
                <img src={user.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName}`} alt="Avatar" className="user-avatar" style={{width: 36, height: 36, borderRadius: '50%', border: '2px solid var(--border-color)'}}/>
                <div className="user-info">
                  <span className="user-name" style={{ fontWeight: 700, fontSize: '0.9rem' }}>{user.displayName}</span>
                  <button onClick={logout} className="logout-btn" style={{ fontSize: '0.75rem', color: '#ef4444', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>Đăng xuất</button>
                </div>
              </div>
            ) : (
              <button className="btn-primary" onClick={signInWithGoogle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Đăng nhập
              </button>
            )}
          </div>
        </div>

        <div className="content-area">
          {currentView === 'stats' && (
            <StatsView prompts={prompts} />
          )}

          {currentView === 'history' && (
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
                <h2>Lịch sử AI đã sinh</h2>
                {historyItems.length > 0 && (
                  <button className="btn-outline" style={{borderColor: 'red', color: 'red'}} onClick={clearHistory}>
                    Xóa tất cả
                  </button>
                )}
              </div>
              
              {historyItems.length === 0 ? (
                <p>Bạn chưa sử dụng AI để sinh câu lệnh nào.</p>
              ) : (
                <div style={{maxWidth: '800px'}}>
                  {historyItems.map(item => (
                    <div key={item.id} className="history-item">
                      <div className="history-item-header">
                        <strong>Yêu cầu:</strong> {item.request}
                        <span>{item.date}</span>
                      </div>
                      <div className="history-item-content">
                        {item.prompt}
                      </div>
                      <div style={{marginTop: '12px', textAlign: 'right'}}>
                        <button className="btn-outline" onClick={() => {
                          navigator.clipboard.writeText(item.prompt);
                          alert('Đã copy!');
                        }}>Copy</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentView === 'post' && (
            <PostPrompt onPost={handlePostPrompt} onCancel={() => setCurrentView('home')} />
          )}

          {currentView === 'admin' && (
            <AdminDashboard />
          )}

          {(currentView === 'home' || currentView === 'favorites' || currentView === 'search') && (
            <div>
              {/* Search bar - hiện khi ở view search */}
              {currentView === 'search' && (
                <div className="search-bar-container">
                  <div className="search-bar-wrapper">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Tìm kiếm theo tiêu đề, nội dung, danh mục..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="search-input"
                    />
                    {searchQuery && (
                      <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    )}
                  </div>
                  <div className="search-meta">
                    {searchQuery ? (
                      <span>Tìm thấy <strong>{displayPrompts.length}</strong> kết quả cho &quot;<em>{searchQuery}</em>&quot;</span>
                    ) : (
                      <span>Nhập từ khóa để bắt đầu tìm kiếm trong <strong>{prompts.length}</strong> prompt...</span>
                    )}
                  </div>
                </div>
              )}

              <div className="cards-grid">
                {displayPrompts.length === 0 ? (
                  <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '60px', color: 'var(--text-secondary)'}}>
                    {currentView === 'favorites' ? (
                      <><div style={{fontSize: '3rem', marginBottom: '16px'}}>🔖</div><p>Bạn chưa lưu yêu thích Prompt nào.</p></>
                    ) : (
                      <><div style={{fontSize: '3rem', marginBottom: '16px'}}>🔍</div><p>Không tìm thấy kết quả nào phù hợp.</p></>
                    )}
                  </div>
                ) : (
                  displayPrompts.map(prompt => (
                    <PromptCard 
                      key={prompt.id} 
                      prompt={prompt}
                      isSaved={savedPrompts.includes(prompt.id)}
                      onLike={() => handleLike(prompt.id)}
                      onSave={() => toggleSave(prompt.id)}
                      onDetail={() => setSelectedDetailPrompt(prompt)}
                    />
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {showPromptGen && <PromptGenerator onClose={() => setShowPromptGen(false)} />}
      
      {fillVarsPrompt && (
        <FillVarsModal prompt={fillVarsPrompt} onClose={() => setFillVarsPrompt(null)} />
      )}

      {/* Modal chi tiết cũ (fallback) — giờ mở FillVarsModal */}
      {selectedDetailPrompt && !fillVarsPrompt && (
        <FillVarsModal prompt={selectedDetailPrompt} onClose={() => setSelectedDetailPrompt(null)} />
      )}
    </div>
  );
}

export default App;
