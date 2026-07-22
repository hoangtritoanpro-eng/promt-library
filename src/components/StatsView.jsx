import React, { useState, useEffect } from 'react';
import { getStats, clearStats } from '../services/stats';

// ─── Mini bar chart component ──────────────────────────────────────────────────
const Bar = ({ value, max, color }) => (
  <div style={{ flex: 1, background: '#f1f5f9', borderRadius: '4px', height: '10px', overflow: 'hidden' }}>
    <div style={{
      width: `${max > 0 ? (value / max) * 100 : 0}%`,
      height: '100%',
      background: color,
      borderRadius: '4px',
      transition: 'width 0.6s ease',
    }} />
  </div>
);

// ─── StatCard component ─────────────────────────────────────────────────────────
const StatCard = ({ icon, label, value, color, sub }) => (
  <div className="stat-card" style={{ borderTop: `4px solid ${color}` }}>
    <div className="stat-icon" style={{ color }}>{icon}</div>
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
    {sub && <div className="stat-sub">{sub}</div>}
  </div>
);

const StatsView = ({ prompts }) => {
  const [stats, setStats] = useState({});
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    setStats(getStats());
  }, []);

  const handleClear = () => {
    clearStats();
    setStats({});
    setShowClear(false);
  };

  // ─── Tính toán dữ liệu ─────────────────────────────────────────────────────
  const totalLikes = prompts.reduce((sum, p) => sum + (p.likes || 0), 0);
  const totalSaves = prompts.reduce((sum, p) => sum + (p.saves || 0), 0);

  const statEntries = Object.entries(stats);
  const totalCopies = statEntries.reduce((sum, [, v]) => sum + v.copies, 0);
  const totalAiRuns = statEntries.reduce((sum, [, v]) => sum + v.aiRuns, 0);

  // Top 5 prompt được copy nhiều nhất
  const topCopied = statEntries
    .filter(([, v]) => v.copies > 0)
    .sort((a, b) => b[1].copies - a[1].copies)
    .slice(0, 5);

  // Top 5 prompt chạy AI nhiều nhất
  const topAiRun = statEntries
    .filter(([, v]) => v.aiRuns > 0)
    .sort((a, b) => b[1].aiRuns - a[1].aiRuns)
    .slice(0, 5);

  // Top 5 prompt được like nhất (từ data prompts)
  const topLiked = [...prompts]
    .filter(p => (p.likes || 0) > 0)
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 5);

  // Thống kê danh mục
  const categoryCount = prompts.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  const topCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const maxCatCount = topCategories[0]?.[1] || 1;

  const COLORS = ['#a855f7', '#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4'];

  const maxCopied = topCopied[0]?.[1].copies || 1;
  const maxAiRun = topAiRun[0]?.[1].aiRuns || 1;
  const maxLiked = topLiked[0]?.likes || 1;

  return (
    <div className="stats-view">
      {/* ── HEADER ── */}
      <div className="stats-header">
        <div>
          <h2 className="stats-title">📊 Thống kê sử dụng</h2>
          <p className="stats-sub">Dữ liệu thống kê từ kho lệnh của Thầy Toàn AI</p>
        </div>
        <button className="btn-outline" style={{ color: '#ef4444', borderColor: '#ef4444', fontSize: '0.85rem' }}
          onClick={() => setShowClear(!showClear)}>
          🗑️ Xóa thống kê
        </button>
      </div>

      {showClear && (
        <div className="stats-confirm-clear">
          <span>⚠️ Xác nhận xóa toàn bộ dữ liệu thống kê?</span>
          <button className="btn-primary" style={{ background: '#ef4444', fontSize: '0.85rem', padding: '6px 16px' }} onClick={handleClear}>Xóa</button>
          <button className="btn-outline" style={{ fontSize: '0.85rem', padding: '6px 16px' }} onClick={() => setShowClear(false)}>Hủy</button>
        </div>
      )}

      {/* ── TỔNG QUAN ── */}
      <div className="stats-cards">
        <StatCard icon="📚" label="Tổng số Prompt" value={prompts.length} color="#a855f7" sub="trong kho lệnh" />
        <StatCard icon="❤️" label="Tổng lượt Thích" value={totalLikes} color="#ef4444" sub="tất cả prompt" />
        <StatCard icon="🔖" label="Tổng lượt Lưu" value={totalSaves} color="#3b82f6" sub="tất cả prompt" />
        <StatCard icon="📋" label="Lượt Sao chép" value={totalCopies} color="#22c55e" sub="trong phiên này" />
        <StatCard icon="✨" label="Lượt Chạy AI" value={totalAiRuns} color="#f59e0b" sub="trong phiên này" />
      </div>

      <div className="stats-grid">
        {/* ── TOP PROMPT COPY NHIỀU NHẤT ── */}
        <div className="stats-panel">
          <div className="stats-panel-title">📋 Prompt được sao chép nhiều nhất</div>
          {topCopied.length === 0 ? (
            <div className="stats-empty">Chưa có dữ liệu. Hãy sao chép một số prompt!</div>
          ) : topCopied.map(([id, v]) => (
            <div key={id} className="stats-row">
              <div className="stats-row-name">{v.title}</div>
              <div className="stats-row-bar">
                <Bar value={v.copies} max={maxCopied} color="#22c55e" />
                <span className="stats-row-count">{v.copies}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── TOP PROMPT CHẠY AI NHIỀU NHẤT ── */}
        <div className="stats-panel">
          <div className="stats-panel-title">✨ Prompt chạy AI nhiều nhất</div>
          {topAiRun.length === 0 ? (
            <div className="stats-empty">Chưa có dữ liệu. Hãy chạy thử AI với một số prompt!</div>
          ) : topAiRun.map(([id, v]) => (
            <div key={id} className="stats-row">
              <div className="stats-row-name">{v.title}</div>
              <div className="stats-row-bar">
                <Bar value={v.aiRuns} max={maxAiRun} color="#f59e0b" />
                <span className="stats-row-count">{v.aiRuns}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── TOP PROMPT ĐƯỢC LIKE NHẤT ── */}
        <div className="stats-panel">
          <div className="stats-panel-title">❤️ Prompt được thích nhất</div>
          {topLiked.length === 0 ? (
            <div className="stats-empty">Chưa có lượt thích nào.</div>
          ) : topLiked.map((p) => (
            <div key={p.id} className="stats-row">
              <div className="stats-row-name">{p.title}</div>
              <div className="stats-row-bar">
                <Bar value={p.likes} max={maxLiked} color="#ef4444" />
                <span className="stats-row-count">{p.likes}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── PHÂN BỐ DANH MỤC ── */}
        <div className="stats-panel">
          <div className="stats-panel-title">🏷️ Phân bố danh mục</div>
          {topCategories.map(([cat, count], i) => (
            <div key={cat} className="stats-row">
              <div className="stats-row-name">
                <span className="stats-cat-dot" style={{ background: COLORS[i % COLORS.length] }}></span>
                {cat}
              </div>
              <div className="stats-row-bar">
                <Bar value={count} max={maxCatCount} color={COLORS[i % COLORS.length]} />
                <span className="stats-row-count">{count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── GHI CHÚ ── */}
      <div className="stats-note">
        💡 Dữ liệu lượt sao chép và chạy AI được lưu trong phiên làm việc hiện tại (localStorage trình duyệt này).
        Lượt thích và lưu yêu thích được tính toàn bộ từ kho dữ liệu.
      </div>
    </div>
  );
};

export default StatsView;
