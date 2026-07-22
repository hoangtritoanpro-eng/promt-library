import React, { useState } from 'react';
import { categories } from '../data';

const PostPrompt = ({ onPost, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: categories[1] || 'Khác',
    content: '',
    author: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) {
      alert("Vui lòng điền đầy đủ Tiêu đề, Nội dung và Tác giả!");
      return;
    }
    
    // Pass data up to App
    onPost({
      id: Date.now(),
      title: formData.title,
      description: "Prompt do người dùng đóng góp", // Default since we removed it
      category: formData.category,
      author: formData.author,
      content: formData.content,
      likes: 0,
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="post-prompt-container">
      {/* Banner */}
      <div className="post-banner">
        <div className="post-banner-content">
          <h1>Đăng Prompt</h1>
          <p>Chia sẻ những prompt tuyệt vời của bạn với cộng đồng.</p>
        </div>
        <div className="post-banner-icon">
          🤖
        </div>
      </div>

      {/* Form Container */}
      <div className="post-form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">TIÊU ĐỀ PROMPT *</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Ví dụ: Đề kiểm tra Toán 15 phút" 
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">DANH MỤC *</label>
            <select 
              className="form-input" 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              {categories.filter(c => c !== "Tất cả").map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">NỘI DUNG PROMPT *</label>
            <textarea 
              className="form-input form-textarea" 
              placeholder="Nhập nội dung prompt chi tiết..." 
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              style={{ minHeight: '150px' }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">TÁC GIẢ *</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Ví dụ: Thầy Toàn" 
              value={formData.author}
              onChange={(e) => setFormData({...formData, author: e.target.value})}
              required
            />
          </div>

          <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
            <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              Đăng Prompt
            </button>
            <button type="button" className="btn-outline" onClick={onCancel}>
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPrompt;
