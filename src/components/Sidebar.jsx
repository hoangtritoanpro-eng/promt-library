import React from 'react';
import { categories } from '../data';

const Sidebar = ({ selectedCategory, setSelectedCategory, onViewHistory, totalPrompts, onViewAdmin, user }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">🤖</div>
        <div className="logo-text">Kho Lệnh<br/>AI</div>
        <span className="badge-pro">PRO</span>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-section-container">
          <div className="section-title">DANH MỤC</div>
          <div className="sidebar-section">
            <ul className="category-list">
              {categories.map((cat, idx) => (
                <li 
                  key={idx} 
                  className={`category-item ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sidebar-section-container">
          <div className="section-title">TÁC GIẢ</div>
          <div className="sidebar-section">
            <ul className="category-list">
              <li className="category-item active">
                <span>Tất cả</span>
                <span style={{opacity: 0.7, fontSize: '0.8rem'}}>({totalPrompts})</span>
              </li>
              <li className="category-item">
                <span>Thầy Toàn AI</span>
                <span style={{opacity: 0.7, fontSize: '0.8rem'}}>({totalPrompts})</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="history-btn">
        <button onClick={onViewHistory}>📜 Lịch sử AI đã sinh</button>
        {user && (
          <button onClick={onViewAdmin} style={{marginTop: '10px', backgroundColor: '#e2e8f0', color: '#0f172a'}}>
            👑 Admin Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
