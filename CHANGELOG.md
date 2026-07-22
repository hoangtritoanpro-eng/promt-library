# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2026-07-20

### Added
- **Tính năng AI Prompt Generator:**
  - Tích hợp `@google/generative-ai` gọi API Gemini 1.5 Flash.
  - Xây dựng hệ thống System Prompt dựa trên công thức 4 bước chuẩn giáo dục.
  - Phát triển Component `PromptGenerator` (Modal UI) để người dùng tự do nhập API Key cá nhân và nhận câu lệnh nâng cao.
  - Bổ sung nút "✨ Tạo Prompt Bằng AI" vào thanh điều hướng.
- Khởi tạo dự án Vite + React.
- Thiết lập hệ thống CSS toàn cục với các biến màu, typography, flexbox/grid layout (Neo-brutalism nhẹ + Glassmorphism).
- Xây dựng component `Sidebar` chứa danh mục và thông tin tác giả.
- Xây dựng component `PromptCard` hiển thị chi tiết câu lệnh, tích hợp chức năng "Copy to Clipboard".
- File `data.js` lưu trữ kho dữ liệu tĩnh mẫu của ứng dụng.
- Hoàn thiện `App.jsx` làm Layout chính, tích hợp thanh tìm kiếm, bộ lọc trạng thái và hiển thị dạng grid.
