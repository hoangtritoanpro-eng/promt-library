import React, { useState, useEffect } from 'react';
import { getPendingCommunityPrompts, updatePromptStatus } from '../services/firestore';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [pendingPrompts, setPendingPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPendingPrompts = async () => {
    setLoading(true);
    try {
      const prompts = await getPendingCommunityPrompts();
      setPendingPrompts(prompts);
    } catch (error) {
      console.error("Error fetching pending prompts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingPrompts();
  }, []);

  const handleApprove = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn duyệt prompt này?")) {
      await updatePromptStatus(id, 'approved');
      setPendingPrompts(pendingPrompts.filter(p => p.id !== id));
      alert("Đã duyệt thành công!");
    }
  };

  const handleReject = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn từ chối prompt này?")) {
      await updatePromptStatus(id, 'rejected');
      setPendingPrompts(pendingPrompts.filter(p => p.id !== id));
      alert("Đã từ chối prompt.");
    }
  };

  if (loading) {
    return <div className="admin-container"><div className="loading-spinner">Đang tải dữ liệu...</div></div>;
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2 className="admin-title">👑 Admin Dashboard - Quản lý Prompt</h2>
        <p className="admin-subtitle">Danh sách các prompt đang chờ phê duyệt từ cộng đồng.</p>
      </div>

      {pendingPrompts.length === 0 ? (
        <div className="empty-state">
          Không có prompt nào đang chờ duyệt.
        </div>
      ) : (
        <div className="admin-grid">
          {pendingPrompts.map(prompt => (
            <div key={prompt.id} className="admin-card">
              <div className="admin-card-header">
                <span className="admin-badge pending">Đang chờ duyệt</span>
                <span className="admin-author">Tác giả: {prompt.authorName}</span>
              </div>
              <h3 className="admin-card-title">{prompt.title}</h3>
              <p className="admin-card-desc">{prompt.description}</p>
              
              <div className="admin-prompt-content">
                <strong>Nội dung:</strong>
                <pre>{prompt.content}</pre>
              </div>
              
              <div className="admin-card-actions">
                <button 
                  className="btn-approve" 
                  onClick={() => handleApprove(prompt.id)}
                >
                  ✅ Duyệt
                </button>
                <button 
                  className="btn-reject" 
                  onClick={() => handleReject(prompt.id)}
                >
                  ❌ Từ chối
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
