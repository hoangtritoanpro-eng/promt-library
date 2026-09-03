import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const SYSTEM_PROMPT = `Bạn là một Kỹ sư Prompt (Prompt Engineer) đỉnh cao và Cố vấn Giáo dục hàng đầu.
Nhiệm vụ của bạn là lấy một yêu cầu sơ khai (User Input) và phát triển thành một CÂU LỆNH PROMPT NÂNG CAO chuyên nghiệp, chuẩn mực và hoàn chỉnh nhất theo đúng công thức Kỹ sư Prompt 4 phần.

CẤU TRÚC PROMPT NÂNG CAO TRẢ VỀ PHẢI BAO GỒM ĐẦY ĐỦ 4 TIÊU ĐỀ SAU:

🎯 [VAI TRÒ / ROLE]
Gán vai trò chuyên gia hàng đầu có kiến thức chuyên sâu trong lĩnh vực (VD: Chuyên gia thiết kế giáo dục, Kỹ sư phần mềm, Giáo viên chủ nhiệm tâm huyết...).

📋 [NHIỆM VỤ / TASK]
Trình bày rõ ràng, dứt khoát nhiệm vụ chính AI cần thực hiện.

🔍 [BỐI CẢNH & YÊU CẦU CHI TIẾT / CONTEXT & REQUIREMENTS]
- Bối cảnh thực hiện, đối tượng áp dụng (VD: Học sinh lớp 7, phong cách trẻ trung DIY...).
- Phân tích và liệt kê chi tiết từng thành phần/yêu cầu nhỏ (VD: Chi tiết từng ô cửa 1, ô cửa 2, màu sắc, vật liệu, tính khả thi...).
- Tiêu chí đánh giá, các lưu ý quan trọng.

📊 [ĐỊNH DẠNG ĐẦU RA & QUY TẮC / OUTPUT FORMAT & RULES]
- Quy định rõ cấu trúc kết quả mong muốn (Bảng biểu, gạch đầu dòng, các bước thực hiện...).
- Giọng điệu và ngôn ngữ phản hồi.

QUY TẮC BẮT BUỘC:
1. KHÔNG tự động trả lời yêu cầu của người dùng. Bạn CHỈ tạo ra câu prompt nâng cao để người dùng dán vào AI.
2. Trả về duy nhất câu prompt hoàn chỉnh có đầy đủ 4 tiêu đề 🎯, 📋, 🔍, 📊.
3. TUYỆT ĐỐI KHÔNG CẮT DỞ, KHÔNG VIẾT NỬA CHỪNG. Phải triển khai chi tiết từng mục đến tận cùng.
4. KHÔNG có câu chào hỏi hay giải thích phụ trước hoặc sau prompt.
5. KHÔNG tạo ra các prompt mẫu điền vào chỗ trống (ví dụ: [Nhập chủ đề...]). Bạn phải TỰ SUY NGHĨ VÀ ĐIỀN SẴN các chi tiết cụ thể dựa trên yêu cầu của người dùng để tạo ra một prompt CÓ THỂ SỬ DỤNG NGAY.

Ví dụ Output Chuẩn:
Input: "trang trí 2 ô cửa 7/5 lớp học hạnh phúc"
Output:
🎯 [VAI TRÒ]
Đóng vai một Chuyên gia Thiết kế Không gian Giáo dục Sáng tạo và là một Giáo viên Chủ nhiệm tận tâm.

📋 [NHIỆM VỤ]
Hãy gợi ý cho tôi các ý tưởng trang trí chi tiết, độc đáo, giàu tính thẩm mỹ và giáo dục cho 2 ô cửa sổ của lớp 7/5 với chủ đề 'Lớp học hạnh phúc - Tích cực - Đoàn kết'.

🔍 [BỐI CẢNH & YÊU CẦU CHI TIẾT]
- Đối tượng: Học sinh lớp 7 (trung học cơ sở). Ý tưởng cần trẻ trung, năng động, dễ thương.
- Tính khả thi: Ưu tiên các sản phẩm thủ công (DIY) để học sinh có thể cùng làm với nhau, tăng tính gắn kết tập thể.
- Ô cửa sổ 1 (Tích cực & Khát vọng): Cắt dán khinh khí cầu mang ước mơ từng em, cờ đuôi nheo slogan tích cực ở khung trên, dây treo hạc giấy.
- Ô cửa sổ 2 (Đoàn kết & Hạnh phúc): Cây đại đoàn kết mang in vân tay hoặc bàn tay giấy của 100% học sinh lớp 7/5, khung ảnh Polaroid kỷ niệm, các chậu cây xanh nhỏ ở bệ cửa.
- Yêu cầu bổ sung: Liệt kê vật liệu giá rẻ, dễ tìm và hướng dẫn các bước phân công học sinh làm.

📊 [ĐỊNH DẠNG ĐẦU RA]
- Trình bày dạng danh sách gạch đầu dòng mạch lạc.
- Chia thành 3 phần chính: (1) Ý tưởng chi tiết từng ô cửa, (2) Danh sách vật liệu DIY, (3) Hướng dẫn tổ chức thực hiện.
- Giọng điệu tích cực, truyền cảm hứng.`;

const IMAGE_ENHANCE_PROMPT = `Bạn là một chuyên gia về Midjourney và Stable Diffusion Prompting.
Nhiệm vụ của bạn là lấy một ý tưởng hình ảnh ngắn gọn (thường bằng tiếng Việt) và biến nó thành một câu prompt cực kỳ chi tiết, sống động bằng **TIẾNG ANH**.

Quy tắc:
1. Dịch toàn bộ ý tưởng sang Tiếng Anh.
2. Thêm các từ khóa về phong cách, ánh sáng, chất lượng ảnh (VD: masterpiece, best quality, highly detailed, photorealistic, cinematic lighting, 8k resolution, unreal engine 5, octane render...).
3. Chỉ trả về câu prompt tiếng Anh cuối cùng, tuyệt đối KHÔNG có câu chào hỏi hay giải thích.
4. Đảm bảo mô tả đầy đủ, trọn vẹn và không bị cắt dở giữa chừng.

Ví dụ:
Input: Vẽ tế bào thực vật
Output: a highly detailed 3D microscopic view of a plant cell, educational scientific illustration, showing nucleus, chloroplasts, mitochondria, glowing organelles, neon accents, cinematic lighting, 8k resolution, unreal engine 5 render, masterpiece, photorealistic`;

const PREFERRED_MODELS = [
  "gemini-3.5-flash",
  "gemini-3.6-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash"
];

function cleanGeneratedPrompt(rawText) {
  let text = (rawText || "").trim();

  // Loại bỏ markdown code blocks nếu có
  text = text.replace(/^```[a-zA-Z]*\n/, "").replace(/```$/, "").trim();

  // Loại bỏ dấu nháy kép ở đầu và cuối nếu model tự thêm vào
  if (text.startsWith('"')) {
    text = text.slice(1).trim();
  }
  if (text.endsWith('"')) {
    text = text.slice(0, -1).trim();
  }
  
  return text;
}

const callGeminiWithFallback = async (apiKey, { userPrompt, systemInstruction, generationConfig }) => {
  const genAI = new GoogleGenerativeAI(apiKey);
  let lastError = null;

  for (const modelName of PREFERRED_MODELS) {
    try {
      const modelParams = { 
        model: modelName,
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
          }
        ]
      };
      if (systemInstruction) {
        modelParams.systemInstruction = systemInstruction;
      }

      const model = genAI.getGenerativeModel(modelParams);
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: userPrompt }] }],
        generationConfig: generationConfig || {
          temperature: 0.7,
          maxOutputTokens: 8192,
        }
      });

      const response = result.response;
      let text = "";

      if (response.candidates && response.candidates[0]?.content?.parts) {
        const parts = response.candidates[0].content.parts;
        const textParts = parts
          .filter(p => !p.thought && typeof p.text === "string")
          .map(p => p.text);
        if (textParts.length > 0) {
          text = textParts.join("");
        }
      }

      if (!text) {
        text = response.text();
      }

      if (text && text.trim()) {
        return text.trim();
      }
    } catch (err) {
      console.warn(`Thử model ${modelName} thất bại, đang chuyển model khác:`, err);
      lastError = err;
    }
  }

  throw new Error(lastError?.message || "Đã xảy ra lỗi khi kết nối với Gemini AI. Vui lòng kiểm tra lại API Key.");
};

/**
 * Tạo câu lệnh chuyên nghiệp từ yêu cầu ngắn gọn của giáo viên.
 */
export const generateProfessionalPrompt = async (apiKey, userRequest) => {
  try {
    const rawResult = await callGeminiWithFallback(apiKey, {
      userPrompt: `Yêu cầu sơ khai của người dùng: "${userRequest}"

Hãy thiết kế và viết ra một CÂU LỆNH PROMPT NÂNG CAO hoàn chỉnh, chi tiết nhất theo cấu trúc 4 phần (🎯 Vai Trò, 📋 Nhiệm Vụ, 🔍 Bối Cảnh & Yêu Cầu Chi Tiết, 📊 Định Dạng Đầu Ra). Bắt buộc viết đầy đủ tất cả các phần, tự suy nghĩ các chi tiết cụ thể để ĐIỀN SẴN vào prompt (KHÔNG dùng các placeholder như [Nhập...]) và TUYỆT ĐỐI KHÔNG ĐƯỢC CẮT DỞ GIỮA CHỪNG.`,
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
      }
    });

    return cleanGeneratedPrompt(rawResult);
  } catch (error) {
    console.warn("Lỗi gọi Gemini API, chuyển sang chế độ tự động tạo Prompt nâng cao:", error);
    throw new Error(error.message || "Không thể tạo prompt nâng cao do lỗi kết nối hoặc API Key.");
  }
};

/**
 * Thực thi một prompt hoàn chỉnh với Gemini và trả về kết quả.
 */
export const runPromptWithAI = async (apiKey, promptContent) => {
  try {
    return await callGeminiWithFallback(apiKey, {
      userPrompt: promptContent,
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 8192,
      }
    });
  } catch (error) {
    console.error("Lỗi thực thi prompt:", error);
    throw error;
  }
};

/**
 * Tự động dịch và làm đẹp Prompt hình ảnh sang tiếng Anh cho Pollinations
 */
export const enhanceImagePrompt = async (apiKey, userRequest) => {
  try {
    return await callGeminiWithFallback(apiKey, {
      userPrompt: `Ý tưởng hình ảnh: ${userRequest}\n\nHãy tạo ra câu prompt tiếng Anh thật đẹp, sống động và hoàn chỉnh.`,
      systemInstruction: IMAGE_ENHANCE_PROMPT,
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 4096,
      }
    });
  } catch (error) {
    console.error("Lỗi enhance image prompt:", error);
    throw error;
  }
};
