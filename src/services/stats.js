// ─── Stats Tracking Utilities ─────────────────────────────────────────────────
const STATS_KEY = 'prompt_usage_stats';

export const trackUsage = (promptId, promptTitle, action) => {
  try {
    const stats = JSON.parse(localStorage.getItem(STATS_KEY) || '{}');
    if (!stats[promptId]) {
      stats[promptId] = { title: promptTitle, copies: 0, aiRuns: 0, lastUsed: null };
    }
    if (action === 'copy') stats[promptId].copies += 1;
    if (action === 'ai_run') stats[promptId].aiRuns += 1;
    stats[promptId].lastUsed = new Date().toISOString();
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) { /* silent */ }
};

export const getStats = () => {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY) || '{}');
  } catch { return {}; }
};

export const clearStats = () => localStorage.removeItem(STATS_KEY);
