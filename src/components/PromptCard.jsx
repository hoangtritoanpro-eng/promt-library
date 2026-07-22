import React, { useState } from 'react';
import { trackUsage } from '../services/stats';

const PromptCard = ({ prompt, isSaved, onLike, onSave, onDetail }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content).then(() => {
      setCopied(true);
      trackUsage(prompt.id, prompt.title, 'copy');
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="prompt-card">
      <div className="card-header">
        <div className="card-tag">{prompt.category}</div>
        <div className="status-dot"></div>
      </div>
      
      <h3 className="card-title">{prompt.title}</h3>
      <p className="card-desc">{prompt.description}</p>
      
      <div className="author-info">
        <div className="author-avatar">
          <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=${prompt.author}`} alt="Avatar" />
        </div>
        <span>{prompt.author}</span>
      </div>
      
      <div className="card-divider"></div>

      {/* Nút Copy nổi bật */}
      <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
        {copied ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Đã sao chép!
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Sao chép Prompt
          </>
        )}
      </button>
      
      <div className="card-footer" style={{marginTop: '12px'}}>
        <div className="action-group">
          <button className="icon-btn" onClick={() => onLike(prompt.id)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            {prompt.likes || 0}
          </button>
          <button className="icon-btn" onClick={() => onSave(prompt.id)} style={{ color: isSaved ? 'var(--primary-color)' : 'inherit' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill={isSaved ? 'var(--primary-color)' : 'none'} stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            {prompt.saves || 0}
          </button>
        </div>
        <button className="btn-outline" onClick={() => onDetail(prompt)}>Chi tiết</button>
      </div>
    </div>
  );
};

export default PromptCard;
