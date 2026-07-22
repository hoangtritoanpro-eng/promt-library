import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `Bạn là một Chuyên gia Kỹ sư Prompt (Prompt Engineer) chuyên nghiệp và là một Cố vấn Giáo dục.
Nhiệm vụ của bạn là lấy một yêu cầu ngắn gọn của giáo viên (User Input) và biến đổi nó thành một CÂU LỆNH (PROMPT) chi tiết, hoàn chỉnh và mạnh mẽ nhất theo công thức 4 bước:

1. [VAI TRÒ]: Gán vai trò cụ thể cho AI (VD: "Đóng vai một giáo viên xuất sắc...", "Đóng vai một chuyên gia giáo dục...").
2. [NHIỆM VỤ]: Trình bày rõ ràng, dứt khoát nhiệm vụ AI cần làm (VD: "Hãy soạn...", "Hãy tạo...").
3. [BỐI CẢNH/YÊU CẦU]: Đưa ra thông tin về đối tượng học sinh, bối cảnh bài học, hoặc các ràng buộc chi tiết (VD: "Học sinh lớp 9", "Tuân thủ công văn 5512", "Dành cho học sinh yếu").
4. [ĐỊNH DẠNG]: Yêu cầu định dạng đầu ra (VD: "Trình bày dưới dạng bảng", "Chia làm 3 phần rõ ràng", "Gạch đầu dòng").

QUY TẮC QUAN TRỌNG:
- KHÔNG tự động trả lời yêu cầu của người dùng. Tức là, nếu người dùng nói "soạn đề toán lớp 9", BẠN KHÔNG SOẠN ĐỀ TOÁN. BẠN CHỈ VIẾT RA MỘT CÂU LỆNH (PROMPT) ĐỂ NGƯỜI DÙNG CÓ THỂ COPY VÀ DÁN VÀO CHATGPT/GEMINI SAU ĐÓ ĐỂ NÓ SOẠN ĐỀ.
- Kết quả trả về CHỈ BAO GỒM nội dung của câu lệnh (Prompt) cuối cùng, không kèm giải thích dài dòng. Hãy viết thẳng vào vấn đề.

Ví dụ: 
Input: "viết nhận xét sổ liên lạc"
Output: "Đóng vai một giáo viên chủ nhiệm tận tâm và thấu hiểu học sinh. Hãy gợi ý cho tôi 10 mẫu câu nhận xét đánh giá cuối kì để viết vào sổ liên lạc cho học sinh cấp THCS. Nhận xét cần mang giọng điệu tích cực, khích lệ sự cố gắng, đánh giá cả về học lực lẫn đạo đức. Hãy chia thành 3 nhóm: Học sinh Giỏi, Học sinh Khá, và Học sinh Cần cố gắng. Trình bày dưới dạng danh sách gạch đầu dòng."
`;

const IMAGE_ENHANCE_PROMPT = `Bạn là một chuyên gia về Midjourney và Stable Diffusion Prompting.
Nhiệm vụ của bạn là lấy một ý tưởng hình ảnh ngắn gọn (thường bằng tiếng Việt) và biến nó thành một câu prompt cực kỳ chi tiết, sống động bằng **TIẾNG ANH**.

Quy tắc:
1. Dịch toàn bộ ý tưởng sang Tiếng Anh.
2. Thêm các từ khóa về phong cách, ánh sáng, chất lượng ảnh (VD: masterpiece, best quality, highly detailed, photorealistic, cinematic lighting, 8k resolution, unreal engine 5, octane render...).
3. Chỉ trả về câu prompt tiếng Anh cuối cùng, tuyệt đối KHÔNG có câu chào hỏi hay giải thích.

Ví dụ:
Input: Vẽ tế bào thực vật
Output: a highly detailed 3D microscopic view of a plant cell, educational scientific illustration, showing nucleus, chloroplasts, mitochondria, glowing organelles, neon accents, cinematic lighting, 8k resolution, unreal engine 5 render, masterpiece, photorealistic`;

/**
 * Tạo câu lệnh chuyên nghiệp từ yêu cầu ngắn gọn của giáo viên.
 */
export const generateProfessionalPrompt = async (apiKey, userRequest) => {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    let model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: `Yêu cầu của giáo viên: ${userRequest}\n\nHãy tạo ra câu lệnh (Prompt) hoàn chỉnh dựa trên hướng dẫn.` }] }],
        systemInstruction: {
          role: "system",
          parts: [{ text: SYSTEM_PROMPT }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        }
      });
      return result.response.text();
    } catch (err) {
      console.warn("Lỗi với gemini-3.5-flash, thử lại với gemini-3.1-flash-lite:", err);
      // Fallback
      model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: `Yêu cầu của giáo viên: ${userRequest}\n\nHãy tạo ra câu lệnh (Prompt) hoàn chỉnh dựa trên hướng dẫn.` }] }],
        systemInstruction: {
          role: "system",
          parts: [{ text: SYSTEM_PROMPT }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        }
      });
      return result.response.text();
    }
  } catch (error) {
    console.error("Lỗi gọi Gemini API:", error);
    throw new Error(error.message || "Đã xảy ra lỗi khi kết nối với AI.");
  }
};

/**
 * Thực thi một prompt hoàn chỉnh với Gemini và trả về kết quả.
 */
export const runPromptWithAI = async (apiKey, promptContent) => {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    let model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: promptContent }] }],
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 4096,
        }
      });
      return result.response.text();
    } catch (err) {
      console.warn("Lỗi với gemini-3.5-flash, thử lại với gemini-3.1-flash-lite:", err);
      // Fallback
      model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: promptContent }] }],
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 4096,
        }
      });
      return result.response.text();
    }
  } catch (error) {
    console.error("Lỗi thực thi prompt:", error);
    throw new Error(error.message || "Đã xảy ra lỗi khi kết nối với AI.");
  }
};

/**
 * Tự động dịch và làm đẹp Prompt hình ảnh sang tiếng Anh cho Pollinations
 */
export const enhanceImagePrompt = async (apiKey, userRequest) => {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    let model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: `Ý tưởng hình ảnh: ${userRequest}\n\nHãy tạo ra câu prompt tiếng Anh thật đẹp.` }] }],
        systemInstruction: {
          role: "system",
          parts: [{ text: IMAGE_ENHANCE_PROMPT }]
        },
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 1024,
        }
      });
      return result.response.text();
    } catch (err) {
      // Fallback
      model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: `Ý tưởng hình ảnh: ${userRequest}\n\nHãy tạo ra câu prompt tiếng Anh thật đẹp.` }] }],
        systemInstruction: {
          role: "system",
          parts: [{ text: IMAGE_ENHANCE_PROMPT }]
        },
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 1024,
        }
      });
      return result.response.text();
    }
  } catch (error) {
    console.error("Lỗi enhance image prompt:", error);
    throw new Error(error.message || "Đã xảy ra lỗi khi kết nối với AI.");
  }
};
