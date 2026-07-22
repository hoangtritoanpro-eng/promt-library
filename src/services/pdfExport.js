import jsPDF from 'jspdf';

/**
 * Xuất kết quả AI ra file PDF đẹp mắt.
 * @param {string} promptTitle - Tiêu đề của Prompt
 * @param {string} promptCategory - Danh mục
 * @param {string} promptContent - Nội dung prompt đã điền biến
 * @param {string} aiResult - Kết quả trả về từ AI
 */
export const exportToPDF = (promptTitle, promptCategory, promptContent, aiResult) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentW = pageW - margin * 2;
  let y = margin;

  // ─── Hàm tiện ích ─────────────────────────────────────────────────────────
  const addText = (text, x, fontSize, fontStyle = 'normal', color = [30, 41, 59]) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, contentW - (x - margin));
    lines.forEach(line => {
      if (y + 8 > pageH - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, x, y);
      y += fontSize * 0.45;
    });
    return y;
  };

  const addLine = (color = [200, 200, 200]) => {
    if (y + 4 > pageH - margin) { doc.addPage(); y = margin; }
    doc.setDrawColor(...color);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageW - margin, y);
    y += 6;
  };

  const addSpace = (h = 6) => { y += h; };

  // ─── Header Banner ────────────────────────────────────────────────────────
  doc.setFillColor(168, 85, 247); // Purple
  doc.roundedRect(margin, y, contentW, 22, 4, 4, 'F');

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('🤖 KHO LỆNH AI — THẦY TOÀN AI', margin + 6, y + 8);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`Xuất lúc: ${new Date().toLocaleString('vi-VN')}`, margin + 6, y + 16);

  y += 30;

  // ─── Category tag ─────────────────────────────────────────────────────────
  doc.setFillColor(253, 224, 71); // Yellow
  doc.setDrawColor(30, 41, 59);
  doc.setLineWidth(0.8);
  const tagW = doc.getTextWidth(promptCategory) + 12;
  doc.roundedRect(margin, y - 5, tagW, 8, 2, 2, 'FD');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text(promptCategory, margin + 6, y);
  y += 10;

  // ─── Prompt Title ─────────────────────────────────────────────────────────
  addText(promptTitle, margin, 18, 'bold', [30, 41, 59]);
  addSpace(4);
  addLine([168, 85, 247]);

  // ─── Prompt đã điền biến ──────────────────────────────────────────────────
  addText('📤 PROMPT ĐÃ ĐIỀN', margin, 10, 'bold', [100, 116, 139]);
  addSpace(3);

  doc.setFillColor(248, 250, 252);
  const promptLines = doc.splitTextToSize(promptContent, contentW - 4);
  const promptBoxH = Math.min(promptLines.length * 5.5 + 8, 60);
  if (y + promptBoxH > pageH - margin) { doc.addPage(); y = margin; }
  doc.roundedRect(margin, y, contentW, promptBoxH, 3, 3, 'F');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  let py = y + 6;
  promptLines.forEach((line, i) => {
    if (i < 10) { // Max 10 dòng preview
      doc.text(line, margin + 4, py);
      py += 5.5;
    }
  });
  if (promptLines.length > 10) {
    doc.setTextColor(168, 85, 247);
    doc.text('...', margin + 4, py);
  }
  y += promptBoxH + 8;
  addLine();

  // ─── Kết quả AI ───────────────────────────────────────────────────────────
  // Header kết quả
  doc.setFillColor(168, 85, 247);
  doc.roundedRect(margin, y, contentW, 10, 2, 2, 'F');
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('🤖 KẾT QUẢ TỪ GEMINI AI', margin + 6, y + 7);
  y += 16;

  // Nội dung kết quả (parse markdown cơ bản)
  const resultLines = aiResult.split('\n');
  resultLines.forEach(line => {
    if (y > pageH - margin - 10) { doc.addPage(); y = margin; }

    if (line.startsWith('## ') || line.startsWith('# ')) {
      addSpace(4);
      const headText = line.replace(/^#+\s/, '');
      addText(headText, margin, 13, 'bold', [168, 85, 247]);
      addSpace(2);
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const bulletText = '• ' + line.slice(2);
      addText(bulletText, margin + 4, 10, 'normal', [30, 41, 59]);
    } else if (line.trim() === '') {
      addSpace(3);
    } else {
      // Xử lý **bold**
      const boldParts = line.split(/\*\*([^*]+)\*\*/g);
      if (boldParts.length > 1) {
        // Có chứa bold text - render từng phần
        let lineX = margin;
        doc.setFontSize(10);
        boldParts.forEach((part, i) => {
          if (i % 2 === 1) {
            doc.setFont('helvetica', 'bold');
          } else {
            doc.setFont('helvetica', 'normal');
          }
          doc.setTextColor(30, 41, 59);
          const partW = doc.getTextWidth(part);
          if (lineX + partW > pageW - margin) {
            y += 5.5;
            lineX = margin;
          }
          doc.text(part, lineX, y);
          lineX += partW;
        });
        y += 5.5;
      } else {
        addText(line, margin, 10, 'normal', [30, 41, 59]);
      }
    }
  });

  // ─── Footer ───────────────────────────────────────────────────────────────
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184);
    doc.text(`Thầy Toàn AI — Kho Lệnh AI Giáo Dục`, margin, pageH - 8);
    doc.text(`Trang ${i}/${totalPages}`, pageW - margin, pageH - 8, { align: 'right' });
  }

  // ─── Lưu file ─────────────────────────────────────────────────────────────
  const fileName = `KhoLenh_${promptTitle.slice(0, 30).replace(/\s+/g, '_')}_${Date.now()}.pdf`;
  doc.save(fileName);
};
