export const categories = [
  "Tất cả",
  "Giáo án",
  "Đề kiểm tra",
  "Bài tập về nhà",
  "Thảo luận nhóm",
  "Phiếu học tập",
  "Nhận xét học sinh",
  "Trò chơi học tập",
  "Đánh giá thường xuyên",
  "Nhận xét học bạ",
  "Kế hoạch bài dạy",
  "Giao tiếp Phụ huynh",
  "Quản lý lớp học",
  "Ngoại khóa",
  "Sáng tạo",
  "Dự án",
  "Sức khỏe tinh thần",
  "Ảnh Minh Họa",
  "Khác"
];

export const prompts = [
  {
    id: 1,
    title: "Tạo bài tập về nhà cho bất kỳ môn học",
    description: "Tạo bài tập về nhà đa dạng (các dạng bài) kèm đáp án cho mọi môn",
    category: "Bài tập về nhà",
    author: "Thầy Toàn AI",
    content: "Đóng vai một giáo viên xuất sắc và giàu kinh nghiệm giảng dạy. Nhiệm vụ của bạn là tạo 5 bài tập về nhà môn [Môn học] lớp [Lớp] về chủ đề [Chủ đề]. Bối cảnh: Học sinh của tôi có học lực ở mức độ trung bình - khá, cần các bài tập vừa sức để củng cố kiến thức nền tảng và 1-2 bài nâng cao nhẹ nhàng để kích thích tư duy. Định dạng: Trình bày dưới dạng danh sách được đánh số rõ ràng, chia làm 2 phần: Phần 1 là Đề bài, Phần 2 là Đáp án chi tiết và giải thích các bước làm.",
    likes: 124,
    date: "2024-11-18",
    isNew: false
  },
  {
    id: 39,
    title: "Tạo ảnh minh họa bài giảng",
    description: "Tạo hình ảnh chất lượng cao để chèn vào Slide bài giảng, mô phỏng các hiện tượng khoa học hoặc lịch sử.",
    category: "Ảnh Minh Họa",
    content: "A highly detailed, realistic illustration of [Chủ đề/Hiện tượng]. The style should be [Phong cách vẽ, ví dụ: 3D render, Pixar style, watercolor]. The background is [Mô tả bối cảnh]. Cinematic lighting, 8k resolution, educational illustration.",
    author: "Thầy Toàn AI",
    likes: 156,
    saves: 88,
    date: "2024-11-20",
    isNew: true
  },
  {
    id: 2,
    title: "Lập ma trận đề kiểm tra cho bất kỳ môn học",
    description: "Xây dựng ma trận đề theo cấp độ và trọng số cho mọi môn",
    category: "Đề kiểm tra",
    author: "Thầy Toàn AI",
    content: "Đóng vai chuyên gia ra đề thi và kiểm định chất lượng giáo dục. Hãy lập một ma trận đề kiểm tra môn [Môn học] lớp [Lớp], thời gian [Thời gian] phút. Bối cảnh: Đây là bài kiểm tra định kì giữa học kì, yêu cầu đánh giá sát năng lực thực tế của học sinh đại trà. Trọng số yêu cầu: Nhận biết (40%), Thông hiểu (30%), Vận dụng (20%), Vận dụng cao (10%). Định dạng: Trình bày nghiêm ngặt dưới dạng BẢNG (Table), chia rõ các cột chủ đề, số câu hỏi ở từng mức độ nhận thức và tổng số điểm tương ứng.",
    likes: 215,
    date: "2024-02-20"
  },
  {
    id: 3,
    title: "Tạo câu hỏi thảo luận nhóm",
    description: "Sinh các câu hỏi mở kích thích tư duy phản biện cho học sinh",
    category: "Thảo luận nhóm",
    author: "Thầy Toàn AI",
    content: "Đóng vai một nhà giáo dục theo phương pháp kiến tạo học tập. Hãy soạn 3 chủ đề/câu hỏi mở môn [Môn học] chủ đề [Chủ đề] để học sinh lớp [Lớp] thảo luận nhóm. Bối cảnh: Lớp học có 40 học sinh chia làm 8 nhóm, thời gian thảo luận là 15 phút. Các em thường thụ động nên cần câu hỏi có tính tranh luận cao, gắn với tình huống thực tiễn đời sống để các em dễ liên hệ. Định dạng: Với mỗi câu hỏi, hãy cung cấp 3 gạch đầu dòng gợi ý hướng trả lời (cả ý kiến thuận và chống) để giáo viên dễ dàng điều phối.",
    likes: 89,
    date: "2024-03-05"
  },
  {
    id: 4,
    title: "Tạo phiếu học tập",
    description: "Thiết kế phiếu học tập điền khuyết, nối từ, trắc nghiệm nhanh",
    category: "Phiếu học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia thiết kế tài liệu học tập (Instructional Designer). Nhiệm vụ của bạn là thiết kế một Phiếu học tập (Worksheet) môn [Môn học] lớp [Lớp] bài [Tên bài]. Bối cảnh: Phiếu học tập này được phát vào 10 phút cuối giờ để học sinh tự làm nhằm củng cố và kiểm tra mức độ ghi nhớ bài ngay tại lớp. Định dạng: Trình bày rõ ràng bằng Markdown, bao gồm: 1 bài điền khuyết (5 chỗ trống tóm tắt lý thuyết), 1 bài nối cột A-B (4 cặp), và 3 câu hỏi trắc nghiệm nhanh.",
    likes: 156,
    date: "2024-03-10"
  },
  {
    id: 5,
    title: "Soạn giáo án 5512",
    description: "Soạn giáo án 1 tiết theo chuẩn công văn 5512",
    category: "Giáo án",
    author: "Thầy Toàn AI",
    content: "Đóng vai một giáo viên cốt cán, am hiểu sâu sắc chương trình GDPT 2018. Hãy soạn một giáo án chi tiết 45 phút môn [Môn học] lớp [Lớp], bài [Tên bài]. Bối cảnh: Giáo án này sẽ được dùng để dạy thao giảng cấp trường, có Ban giám hiệu dự giờ nên cần thể hiện rõ sự đổi mới phương pháp, lấy học sinh làm trung tâm. Định dạng: Cấu trúc bắt buộc tuân theo công văn 5512 gồm: I. Mục tiêu, II. Thiết bị, III. Tiến trình tổ chức hoạt động (Hoạt động 1: Khởi động, Hoạt động 2: Hình thành kiến thức, Hoạt động 3: Luyện tập, Hoạt động 4: Vận dụng).",
    likes: 312,
    date: "2024-01-10"
  },
  {
    id: 6,
    title: "Viết nhận xét sổ liên lạc",
    description: "Nhận xét cuối kì tinh tế, khích lệ cho học sinh theo nhiều mức độ",
    category: "Nhận xét học sinh",
    author: "Thầy Toàn AI",
    content: "Đóng vai một giáo viên chủ nhiệm vô cùng tâm lý, thấu hiểu và yêu thương học trò. Nhiệm vụ của bạn là viết các mẫu nhận xét môn [Môn học] cuối học kì vào sổ liên lạc điện tử. Bối cảnh: Phụ huynh hiện đại rất nhạy cảm với lời phê, họ cần biết điểm mạnh để phát huy và điểm yếu để khắc phục, nhưng lời lẽ phải mang tính xây dựng, tuyệt đối không chê bai gây áp lực. Định dạng: Chia làm 3 nhóm, mỗi nhóm 3 mẫu: 1) Học sinh Giỏi (khen ngợi tư duy), 2) Học sinh Khá (động viên nỗ lực), 3) Học sinh Cần cố gắng (khích lệ tinh thần và chỉ ra giải pháp nhỏ).",
    likes: 420,
    date: "2024-05-15"
  },
  {
    id: 7,
    title: "Tạo trò chơi Kahoot/Quizizz",
    description: "Sinh danh sách câu hỏi trắc nghiệm ngắn để làm game",
    category: "Trò chơi học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia ứng dụng Gamification (trò chơi hóa) vào giáo dục. Hãy tạo 15 câu hỏi trắc nghiệm môn [Môn học] chủ đề [Chủ đề]. Bối cảnh: Bộ câu hỏi này dùng để nhập vào hệ thống Kahoot/Quizizz cho học sinh chơi khởi động đầu giờ, nên yêu cầu câu hỏi cực ngắn gọn (đọc xong trong 5-10 giây), từ ngữ vui tươi. Định dạng: Đánh số thứ tự từ 1 đến 15. Mỗi câu gồm Nội dung câu hỏi, 4 đáp án A B C D (mỗi đáp án không quá 5 từ), và bôi đậm/gắn dấu (*) vào đáp án đúng.",
    likes: 275,
    date: "2024-04-12"
  },
  {
    id: 8,
    title: "Kế hoạch bài giảng STEM",
    description: "Thiết kế giáo án định hướng STEM ứng dụng thực tế",
    category: "Giáo án",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia giáo dục STEM. Hãy thiết kế một kế hoạch bài học định hướng STEM môn [Môn học] lớp [Lớp] với chủ đề [Chủ đề]. Bối cảnh: Học sinh trường tôi ở khu vực nông thôn, vật liệu thực hành cần là những phế liệu hoặc đồ dùng giá rẻ, dễ kiếm (bìa carton, chai nhựa, v.v.). Các em rất thích học qua hành động (learning by doing). Định dạng: Trình bày chi tiết: 1) Vấn đề thực tiễn cần giải quyết, 2) Danh sách vật liệu cần thiết, 3) 5 bước thiết kế kỹ thuật (EDP), 4) Bảng tiêu chí (Rubric) đánh giá sản phẩm.",
    likes: 198,
    date: "2024-06-01"
  },
  {
    id: 9,
    title: "Biên soạn tài liệu tóm tắt lý thuyết",
    description: "Tóm tắt ngắn gọn, sơ đồ tư duy cho bài học dài",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia kỹ năng học tập và ghi nhớ nhanh (như Tony Buzan). Nhiệm vụ của bạn là đọc nội dung bài học và tóm tắt lại. Bối cảnh: Học sinh đang ôn thi cấp tốc, đối diện với những văn bản lý thuyết quá dài và hàn lâm khiến các em buồn ngủ. Cần những từ khóa \"đinh\" để nhớ bài ngay. Định dạng: Phần 1: Tóm tắt dưới dạng gạch đầu dòng ngắn gọn (Bulleted list), dùng in đậm ở các từ khóa quan trọng. Phần 2: Đề xuất cấu trúc vẽ một sơ đồ tư duy (Mindmap) với 1 nhánh trung tâm và 3-4 nhánh phụ (cụ thể tên từng nhánh). Nội dung gốc: [Dán nội dung bài học]",
    likes: 145,
    date: "2024-02-28"
  },
  {
    id: 10,
    title: "Tạo đề thi HSG",
    description: "Sinh câu hỏi Vận dụng cao cho học sinh giỏi",
    category: "Đề kiểm tra",
    author: "Thầy Toàn AI",
    content: "Đóng vai một Giáo sư đầu ngành chuyên bồi dưỡng Đội tuyển Học sinh giỏi Quốc gia. Hãy ra 3 bài toán/câu hỏi ở mức độ Vận dụng cao (cực khó) môn [Môn học] lớp [Lớp] thuộc chuyên đề [Chủ đề]. Bối cảnh: Học sinh là những em có tư duy xuất chúng, đã quá quen với các dạng bài cơ bản. Câu hỏi cần sự đột phá, kết hợp nhiều luồng kiến thức, đôi khi có yếu tố đánh lừa (trick) tinh tế. Định dạng: Trình bày Phần 1 là Đề bài. Phần 2 là Hướng dẫn giải chi tiết từng bước, phân tích tư duy tại sao lại nghĩ ra cách giải đó và đưa ra thang điểm chi tiết cho từng bước.",
    likes: 310,
    date: "2024-07-10"
  },
  {
    id: 11,
    title: "Kịch bản sinh hoạt lớp",
    description: "Gợi ý nội dung sinh hoạt lớp đầu tuần thú vị",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia tổ chức sự kiện học đường và là một giáo viên chủ nhiệm tràn đầy năng lượng. Hãy soạn kịch bản chi tiết cho một tiết sinh hoạt lớp (45 phút) với chủ đề [Chủ đề]. Bối cảnh: Học sinh đang bước vào giai đoạn giữa học kì với nhiều áp lực thi cử, tiết sinh hoạt cần mang không khí thư giãn, xả stress nhưng vẫn đảm bảo tổng kết được kỉ luật tuần qua. Định dạng: Chia làm 4 phần rõ ràng kèm mốc thời gian: 1) Trò chơi khởi động (10p - mô tả luật chơi chi tiết), 2) Sơ kết tuần nhẹ nhàng (10p), 3) Hoạt động chuyên đề/Thảo luận (20p), 4) Thông điệp truyền cảm hứng cuối tuần (5p).",
    likes: 88,
    date: "2024-01-20"
  },
  {
    id: 12,
    title: "Phân tích tâm lý học đường",
    description: "Tư vấn cách xử lý tình huống sư phạm",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai chuyên gia tâm lý học đường với hơn 20 năm kinh nghiệm tư vấn tuổi vị thành niên. Hãy phân tích và đưa ra hướng xử lý cho tình huống sư phạm sau: [Mô tả tình huống]. Bối cảnh: Giáo viên đang bối rối vì nếu xử lý mạnh tay sẽ làm tổn thương lòng tự trọng của học sinh (đang ở tuổi dậy thì rất nhạy cảm), nhưng nếu bỏ qua thì ảnh hưởng đến kỉ luật lớp. Cần giải pháp thấu tình đạt lý, lấy sự tôn trọng làm gốc. Định dạng: Đưa ra 3 phương án giải quyết (Từ an toàn đến đột phá). Với mỗi phương án, hãy phân tích Ưu điểm, Nhược điểm và liệt kê cụ thể Lời thoại (Script) giáo viên nên nói với học sinh.",
    likes: 112,
    date: "2024-03-22"
  },
  {
    id: 13,
    title: "Tạo flashcard từ vựng/công thức",
    description: "Chuyển đổi văn bản thành thẻ ghi nhớ flashcard",
    category: "Phiếu học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia ứng dụng công nghệ giáo dục (EdTech). Nhiệm vụ của bạn là trích xuất dữ liệu từ văn bản cung cấp để tạo bộ thẻ ghi nhớ (Flashcard) dùng cho ứng dụng Anki/Quizlet. Bối cảnh: Học sinh cần học thuộc lòng một lượng lớn thuật ngữ chuyên ngành/công thức chuẩn bị cho bài kiểm tra 15 phút. Thông tin cần cực kỳ cô đọng, loại bỏ mọi từ ngữ thừa thãi. Định dạng: Trình bày nghiêm ngặt dưới dạng BẢNG 2 CỘT. Cột 1 (Mặt trước) là Thuật ngữ/Ký hiệu/Câu hỏi. Cột 2 (Mặt sau) là Định nghĩa/Ý nghĩa/Câu trả lời (giới hạn dưới 20 từ). Dữ liệu đầu vào: [Dán văn bản]",
    likes: 201,
    date: "2024-04-05"
  },
  {
    id: 14,
    title: "Soạn bài thuyết trình cho giáo viên",
    description: "Tạo dàn ý slide thuyết trình chuyên đề",
    category: "Giáo án",
    author: "Thầy Toàn AI",
    content: "Đóng vai một diễn giả giáo dục (Keynote Speaker) và chuyên gia thiết kế Slide chuyên nghiệp. Hãy tạo dàn ý chi tiết cho 10 slide PowerPoint thuyết trình về chuyên đề [Tên chuyên đề]. Bối cảnh: Khán giả là hàng trăm giáo viên đồng nghiệp tại một buổi hội thảo cấp Tỉnh. Họ cần những kiến thức thực chiến, đi thẳng vào vấn đề, không thích lý thuyết suông. Bài thuyết trình cần truyền cảm hứng và có tính tương tác cao. Định dạng: Với mỗi Slide (từ 1 đến 10), hãy trình bày theo cấu trúc: [Tiêu đề Slide] - [3 Gạch đầu dòng nội dung (tối đa 5 chữ/dòng)] - [Gợi ý hình ảnh minh họa/Biểu đồ] - [Ghi chú lời thoại cho người thuyết trình (Speaker Notes)].",
    likes: 67,
    date: "2024-05-30"
  },
  {
    id: 15,
    title: "Bài tập dự án (Project-based learning)",
    description: "Gợi ý bài tập dự án dài hạn cho học sinh",
    category: "Bài tập về nhà",
    author: "Thầy Toàn AI",
    content: "Đóng vai một nhà giáo dục tiên phong trong phương pháp Học tập qua Dự án (PBL). Hãy thiết kế một bài tập dự án kéo dài 4 tuần môn [Môn học] chủ đề [Chủ đề]. Bối cảnh: Dự án này thay thế cho bài kiểm tra 1 tiết. Đòi hỏi học sinh làm việc nhóm 5 người, vận dụng kiến thức sách vở để giải quyết một vấn đề bức xúc tại địa phương. Định dạng: Báo cáo dưới dạng văn bản gồm: 1) Tên dự án (hấp dẫn, bắt tai), 2) Câu hỏi định hướng (Driving question), 3) Lộ trình 4 tuần (mỗi tuần nộp sản phẩm gì), 4) Bảng tiêu chí (Rubric) đánh giá sản phẩm cuối cùng.",
    likes: 150,
    date: "2024-02-14"
  },
  {
    id: 16,
    title: "Phản hồi bài tập làm văn",
    description: "Nhận xét chi tiết bài viết của học sinh",
    category: "Nhận xét học sinh",
    author: "Thầy Toàn AI",
    content: "Đóng vai một nhà phê bình văn học và là một giáo viên Ngữ Văn chấm thi quốc gia. Hãy đọc bài văn sau của học sinh và đưa ra lời nhận xét chi tiết. Bối cảnh: Học sinh này có tố chất văn chương nhưng hành văn còn lủng củng, lan man. Em cần một lời nhận xét sắc sảo để nhận ra lỗi sai, nhưng vẫn thấy tự hào về ý tưởng của mình. Định dạng: Đưa ra phản hồi theo cấu trúc bánh mì kẹp (Khen - Chê - Khen). Cụ thể: 2 điểm sáng của bài viết (cách dùng từ, ý tưởng), 2 lỗi sai nghiêm trọng nhất cần sửa (trích dẫn lại câu sai và viết lại câu đúng để làm mẫu), điểm dự kiến trên thang điểm 10. Bài văn: [Dán bài văn]",
    likes: 230,
    date: "2024-06-18"
  },
  {
    id: 17,
    title: "Trò chơi giải mã (Escape Room)",
    description: "Tạo câu hỏi mật mã dựa trên kiến thức bài học",
    category: "Trò chơi học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một nhà thiết kế trò chơi (Game Designer). Hãy tạo một kịch bản trò chơi Giải mã (Escape Room) trên giấy môn [Môn học] chủ đề [Chủ đề]. Bối cảnh: Trò chơi dùng để ôn tập cuối chương. Lớp chia thành các đội thi đua xem ai thoát khỏi 'căn phòng' nhanh nhất. Cần sự kịch tính, bí ẩn để lôi cuốn học sinh cấp 2. Định dạng: 1) Viết một đoạn Cốt truyện nhập vai (ví dụ: bị mắc kẹt trên đảo hoang). 2) Thiết kế 4 Trạm thử thách: Mỗi trạm là một bài toán/câu đố logic liên quan đến kiến thức môn học. Trả lời đúng mỗi trạm sẽ nhận được 1 chữ số mật mã. 3) Đáp án mật mã cuối cùng là gì.",
    likes: 189,
    date: "2024-07-02"
  },
  {
    id: 18,
    title: "Lên ý tưởng báo tường",
    description: "Gợi ý chủ đề, cấu trúc làm báo tường ngày 20/11",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một Giám đốc Nghệ thuật (Art Director) và chuyên gia thiết kế ấn phẩm báo chí. Nhiệm vụ của bạn là đưa ra ý tưởng làm Báo tường chào mừng ngày Nhà giáo Việt Nam 20/11. Bối cảnh: Các lớp thường làm báo tường theo mô tuýp cũ (vẽ hoa, viết thơ truyền thống) rất nhàm chán. Lớp tôi cần những Concept (Chủ đề) cực kỳ hiện đại, độc lạ, mang hơi thở Gen Z nhưng vẫn giữ được sự tri ân sâu sắc. Định dạng: Đưa ra 3 Concept khác biệt. Với mỗi Concept, trình bày: Tiêu đề báo tường, Thông điệp chính (Slogan), Màu sắc chủ đạo (Bảng màu), Hình ảnh trung tâm (Key visual) cần vẽ là gì, và 5 chuyên mục bài viết bên trong (tên chuyên mục thật sáng tạo).",
    likes: 95,
    date: "2024-10-10"
  },
  {
    id: 19,
    title: "Chữa lỗi sai phổ biến",
    description: "Tổng hợp các lỗi sai học sinh hay mắc phải",
    category: "Phiếu học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một giáo viên lão làng, người đã chấm hàng chục ngàn bài thi và nắm lòng mọi 'cái bẫy' kiến thức. Hãy chỉ ra các lỗi sai phổ biến mà học sinh thường mắc phải khi học bài [Tên bài] môn [Môn học]. Bối cảnh: Tài liệu này được in ra phát cho học sinh trước kì thi 1 ngày để các em đọc và cảnh giác, không mất điểm oan ở những câu dễ. Định dạng: Lập BẢNG liệt kê 5 lỗi sai kinh điển. Bảng gồm 3 cột: Cột 1 (Lỗi sai học sinh hay mắc / Quan niệm sai lầm), Cột 2 (Nguyên nhân bản chất tại sao lại sai), Cột 3 (Bí kíp/Cách nhớ mẹo để tránh lỗi này mãi mãi).",
    likes: 260,
    date: "2024-03-18"
  },
  {
    id: 20,
    title: "Sáng tác thơ/vè ghi nhớ kiến thức",
    description: "Làm thơ vui giúp học sinh thuộc bài nhanh",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một nhà thơ tài hoa mang tâm hồn sư phạm. Hãy sáng tác thơ hoặc vè để giúp học sinh ghi nhớ các kiến thức khô khan môn [Môn học]. Bối cảnh: Học sinh đang gặp khó khăn cực độ khi phải nhớ các công thức/mốc lịch sử/đặc điểm địa lý dài ngoằng. Cần một bài thơ vui nhộn, bắt tai, có vần điệu (lục bát, song thất lục bát hoặc thơ tự do vần chân), ngôn ngữ tuổi teen gần gũi. Định dạng: Trình bày bài thơ phân chia theo từng khổ rõ ràng. Dưới bài thơ, hãy giải nghĩa nhanh các 'từ khóa kiến thức' được giấu trong thơ. Kiến thức cần chuyển hóa: [Liệt kê các kiến thức cần nhớ].",
    likes: 412,
    date: "2024-04-25"
  },
  {
    id: 21,
    title: "Viết bài phát biểu cho giáo viên trong sự kiện",
    description: "Tạo bài phát biểu truyền cảm hứng, đúng nghi thức",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một Hiệu trưởng/Giáo viên giàu tâm huyết và giỏi diễn thuyết. Nhiệm vụ của bạn là soạn một bài phát biểu khoảng 5 phút trong sự kiện [Tên sự kiện]. Bối cảnh: Khán giả gồm có học sinh, phụ huynh và lãnh đạo địa phương. Cần một giọng văn trang trọng, truyền cảm hứng và chạm đến cảm xúc người nghe. Định dạng: Viết dưới dạng văn xuôi, chia làm 3 phần (Mở bài - Lời chào & Lý do; Thân bài - Thông điệp chính & Câu chuyện truyền cảm hứng; Kết bài - Lời hứa & Cảm ơn). Có kèm gợi ý cử chỉ điệu bộ (ví dụ: *mỉm cười*, *giọng trầm xuống*).",
    likes: 310,
    date: "2024-05-10"
  },
  {
    id: 22,
    title: "Tạo bộ câu hỏi phỏng vấn cho học sinh",
    description: "Thiết kế câu hỏi khai thác sở thích, năng lực, xu hướng nghề nghiệp",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia tư vấn hướng nghiệp/tâm lý học đường. Nhiệm vụ của bạn là thiết kế một bộ 10 câu hỏi phỏng vấn/khảo sát dành cho học sinh lớp [Lớp]. Bối cảnh: Học sinh đang đứng trước ngưỡng cửa chọn trường/định hướng khối thi nhưng rất mông lung không biết mình thích gì. Câu hỏi cần gần gũi, khơi gợi trí tưởng tượng để khám phá thiên hướng tự nhiên của các em. Định dạng: Danh sách 10 câu hỏi chia làm 3 nhóm: 1. Khám phá sở thích cá nhân, 2. Xử lý tình huống, 3. Tưởng tượng tương lai. Dưới mỗi câu hỏi có gợi ý mục đích hỏi câu đó.",
    likes: 245,
    date: "2024-06-15"
  },
  {
    id: 23,
    title: "Thiết kế trò chơi học tập (gamification)",
    description: "Tạo trò chơi tương tác (cá nhân/nhóm) để ôn tập hoặc khởi động",
    category: "Trò chơi học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một Game Designer chuyên thiết kế hoạt động Gamification trong giáo dục. Nhiệm vụ của bạn là thiết kế một trò chơi vận động/tương tác nhẹ trong lớp học 45 phút môn [Môn học] bài [Tên bài]. Bối cảnh: Học sinh đang uể oải ở tiết 4-5, cần một hoạt động kéo dài 10 phút để hâm nóng không khí và ôn lại bài cũ mà không cần dùng máy chiếu hay điện thoại. Định dạng: Mô tả chi tiết: 1. Tên trò chơi (nghe thật kêu), 2. Đạo cụ chuẩn bị (nếu có), 3. Luật chơi (chia nhóm, cách ghi điểm), 4. Ví dụ 3 câu hỏi mẫu dùng trong game.",
    likes: 189,
    date: "2024-07-20"
  },
  {
    id: 24,
    title: "Soạn tài liệu hướng dẫn ôn thi cuối kỳ",
    description: "Tạo bộ tài liệu ôn tập có cấu trúc, mẹo làm bài, bài tập mẫu",
    category: "Đề kiểm tra",
    author: "Thầy Toàn AI",
    content: "Đóng vai một giáo viên luyện thi xuất sắc, chuyên trị những lớp có học sinh yếu. Nhiệm vụ của bạn là soạn Đề cương/Tài liệu hướng dẫn ôn thi cuối kỳ môn [Môn học] lớp [Lớp]. Bối cảnh: Thời gian ôn tập chỉ còn 2 tuần, học sinh không thể nhồi nhét toàn bộ sách giáo khoa. Cần chắt lọc kiến thức cốt lõi nhất và chỉ ra các 'mẹo' làm bài để lấy điểm tối đa ở phần cơ bản. Định dạng: Lập dàn ý tài liệu gồm: Trọng tâm lý thuyết (Bullet points), 5 Lỗi sai thường gặp cần tránh, 3 Công thức/Mẹo ghi nhớ nhanh, và 1 Đề thi mẫu thu nhỏ (10 câu trắc nghiệm).",
    likes: 420,
    date: "2024-11-05"
  },
  {
    id: 25,
    title: "Xây dựng kế hoạch học tập cá nhân",
    description: "Tạo bảng kế hoạch chi tiết giúp học sinh quản lý thời gian, mục tiêu",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một huấn luyện viên (Coach) kỹ năng học tập. Nhiệm vụ của bạn là lập một Kế hoạch học tập cá nhân (Personal Study Plan) cho một học sinh lớp [Lớp] trong thời gian 30 ngày. Bối cảnh: Học sinh này có mục tiêu đạt điểm [Mục tiêu] môn [Môn học], nhưng em ấy bị chứng trì hoãn và nghiện mạng xã hội. Kế hoạch cần thực tế, có các bước nhỏ dễ đạt được (Quick wins) để tạo động lực. Định dạng: Trình bày dưới dạng BẢNG. Cột 1: Tuần (1-4), Cột 2: Mục tiêu trọng tâm, Cột 3: Nhiệm vụ chi tiết mỗi ngày (chỉ học 45 phút/ngày), Cột 4: Phần thưởng nhỏ nếu hoàn thành.",
    likes: 315,
    date: "2024-09-12"
  },
  {
    id: 26,
    title: "Viết thư thông báo - kết nối với phụ huynh",
    description: "Tạo mẫu thư gửi phụ huynh về tình hình học tập, sự kiện hoặc lời nhắc",
    category: "Nhận xét học sinh",
    author: "Thầy Toàn AI",
    content: "Đóng vai một giáo viên chủ nhiệm chuyên nghiệp và thân thiện. Nhiệm vụ của bạn là soạn một bức thư/email/tin nhắn gửi nhóm Zalo phụ huynh lớp [Lớp]. Bối cảnh: Thông báo về việc [Nội dung thông báo: ví dụ: chuẩn bị thi giữa kì, hoặc mời họp phụ huynh]. Yêu cầu văn phong lịch sự, rành mạch, thể hiện sự quan tâm của giáo viên và kêu gọi sự đồng hành từ gia đình. Định dạng: Cấu trúc gồm: Tiêu đề (thu hút sự chú ý), Lời chào trang trọng, Thông tin chính (viết ngắn gọn, bôi đậm thời gian/địa điểm), Lời khuyên phụ huynh nên làm gì để hỗ trợ con, Lời cảm ơn.",
    likes: 278,
    date: "2024-10-01"
  },
  {
    id: 27,
    title: "Tạo phiếu khảo sát ý kiến học sinh",
    description: "Thiết kế bảng hỏi (Likert, câu mở) để thu thập phản hồi từ học sinh",
    category: "Phiếu học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một nhà nghiên cứu giáo dục. Nhiệm vụ của bạn là thiết kế một Phiếu khảo sát (Survey) để lấy ý kiến phản hồi ẩn danh của học sinh về [Chủ đề khảo sát: ví dụ: phương pháp giảng dạy của giáo viên, chất lượng bữa ăn bán trú]. Bối cảnh: Học sinh thường ngại nói thật vì sợ bị trù dập. Khảo sát cần câu từ an toàn, cởi mở để các em sẵn sàng chia sẻ suy nghĩ thực sự. Định dạng: Gồm 3 phần: Phần 1 - Giới thiệu mục đích (tạo sự an tâm), Phần 2 - 5 câu trắc nghiệm thang đo Likert (Từ Rất không đồng ý đến Rất đồng ý), Phần 3 - 2 câu hỏi mở để học sinh tự luận.",
    likes: 156,
    date: "2024-11-20"
  },
  {
    id: 28,
    title: "Soạn kế hoạch tổ chức buổi sinh hoạt kỹ năng",
    description: "Lên chương trình, nội dung và phương pháp cho một buổi sinh hoạt kỹ năng",
    category: "Giáo án",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia đào tạo Kỹ năng mềm (Soft Skills Trainer). Nhiệm vụ của bạn là thiết kế kịch bản chi tiết cho 1 buổi sinh hoạt ngoại khóa (90 phút) dành cho học sinh cấp [Cấp học] với chủ đề Kỹ năng [Tên kỹ năng: ví dụ: Quản lý cảm xúc, Chống bạo lực học đường]. Bối cảnh: Học sinh hiện nay tiếp xúc nhiều với Internet, cần những ví dụ thực tiễn (case study) nóng hổi trên mạng xã hội để phân tích, tránh nói đạo lý sáo rỗng. Định dạng: Lập BẢNG KẾ HOẠCH gồm: Thời gian, Tên hoạt động, Phương pháp tổ chức (Trò chơi/Thảo luận/Sắm vai), Thiết bị/Đạo cụ cần thiết.",
    likes: 290,
    date: "2024-12-05"
  },
  {
    id: 29,
    title: "Tạo kịch bản sinh hoạt lớp thú vị",
    description: "Biến giờ sinh hoạt lớp khô khan thành hoạt động kết nối",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một giáo viên chủ nhiệm cực kỳ tâm lý và sáng tạo. Nhiệm vụ của bạn là soạn kịch bản 45 phút cho giờ sinh hoạt lớp tuần [Tuần/Tháng] với chủ đề [Chủ đề]. Bối cảnh: Học sinh thường chán nản trong giờ sinh hoạt vì hay bị kiểm điểm. Cần một giờ sinh hoạt vui vẻ, gắn kết, học sinh được lắng nghe và tôn trọng. Định dạng: 1. Khởi động (10p): Trò chơi giải trí ngắn. 2. Nhìn lại tuần qua (10p): Cách vinh danh tích cực, không bêu rếu. 3. Thảo luận chủ đề (20p): Câu hỏi mở. 4. Đúc kết (5p).",
    likes: 312,
    date: "2024-06-10"
  },
  {
    id: 30,
    title: "Viết thư khen ngợi gửi phụ huynh",
    description: "Tạo thư khen ngợi sự tiến bộ của học sinh",
    category: "Nhận xét học sinh",
    author: "Thầy Toàn AI",
    content: "Đóng vai một giáo viên luôn tìm kiếm và công nhận sự nỗ lực. Nhiệm vụ của bạn là viết một bức thư/tin nhắn ngắn gọn gửi phụ huynh em [Tên học sinh] để khen ngợi về sự tiến bộ trong môn [Môn học]. Bối cảnh: Học sinh này trước đây học kém hoặc hay nghịch, nhưng tuần này đã có một hành động/kết quả rất tốt. Định dạng: Lời chào thân thiện, Nêu cụ thể hành động/tiến bộ của học sinh, Thể hiện sự tự hào của giáo viên, Lời chúc và mong phụ huynh cùng khích lệ con.",
    likes: 450,
    date: "2024-08-15"
  },
  {
    id: 31,
    title: "Giải thích khái niệm bằng ngôn ngữ Gen Z",
    description: "Biến các khái niệm phức tạp thành ví dụ trending dễ hiểu",
    category: "Khác",
    author: "Thầy Toàn AI",
    content: "Đóng vai một gia sư Gen Z cực kỳ hài hước và am hiểu trend mạng xã hội. Nhiệm vụ của bạn là giải thích khái niệm [Tên khái niệm] trong môn [Môn học] cho một học sinh đang không hiểu gì. Bối cảnh: Học sinh mất gốc, nghe từ ngữ hàn lâm là buồn ngủ. Định dạng: Giải thích khái niệm bằng một ví dụ thực tế liên quan đến trà sữa, đu idol, hoặc game. Sau đó chốt lại bằng định nghĩa chuẩn mực nhưng ngắn gọn, dễ nhớ.",
    likes: 520,
    date: "2024-09-05"
  },
  {
    id: 32,
    title: "Tạo bộ flashcard ôn tập cấp tốc",
    description: "Thiết kế thẻ nhớ Flashcard để ôn thi trắc nghiệm",
    category: "Phiếu học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia trí nhớ học đường. Nhiệm vụ của bạn là tạo một bộ 15 thẻ Flashcard để học sinh ôn tập bài [Tên bài] môn [Môn học]. Bối cảnh: Học sinh cần học thuộc nhanh để mai thi trắc nghiệm. Định dạng: Lập BẢNG 2 cột. Cột 1 (Mặt trước Flashcard): Câu hỏi ngắn, hình ảnh tưởng tượng (mô tả bằng chữ). Cột 2 (Mặt sau Flashcard): Câu trả lời từ khóa, thần chú ghi nhớ.",
    likes: 389,
    date: "2024-10-12"
  },
  {
    id: 33,
    title: "Lên ý tưởng Dự án học tập (Project)",
    description: "Thiết kế dự án thực tế liên môn cho học sinh",
    category: "Giáo án",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia giáo dục STEM/STEAM. Nhiệm vụ của bạn là thiết kế một Dự án học tập kéo dài 4 tuần cho học sinh lớp [Lớp] về chủ đề [Chủ đề]. Bối cảnh: Muốn học sinh áp dụng kiến thức vào thực tiễn để giải quyết một vấn đề xã hội/môi trường. Định dạng: Tên dự án (hấp dẫn), Mục tiêu kiến thức, Các giai đoạn thực hiện (Tuần 1 đến 4), Sản phẩm đầu ra mong đợi, và Tiêu chí chấm điểm (Rubric) đơn giản.",
    likes: 415,
    date: "2024-11-20"
  },
  {
    id: 34,
    title: "Soạn kịch bản đóng vai (Role-play)",
    description: "Viết kịch bản phân vai để thực hành tình huống bài học",
    category: "Trò chơi học tập",
    author: "Thầy Toàn AI",
    content: "Đóng vai một biên kịch sân khấu học đường. Nhiệm vụ của bạn là viết một kịch bản đóng vai ngắn (khoảng 5-7 phút) cho nhóm 4 học sinh về tình huống/sự kiện [Tên tình huống]. Bối cảnh: Dùng trong giờ học môn [Môn học] để học sinh trải nghiệm thực tế cảm xúc nhân vật. Định dạng: Mô tả bối cảnh sân khấu, Danh sách nhân vật (tính cách đặc trưng), Lời thoại (có cao trào, có yếu tố hài hước nhẹ nhàng), và bài học đúc kết sau vở diễn.",
    likes: 275,
    date: "2024-12-01"
  },
  {
    id: 35,
    title: "Tạo Rubric chấm điểm minh bạch",
    description: "Lập bảng tiêu chí đánh giá rõ ràng cho bài luận/thuyết trình",
    category: "Đề kiểm tra",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia kiểm tra đánh giá (Assessment Specialist). Nhiệm vụ của bạn là tạo một Bảng tiêu chí đánh giá (Rubric) cho bài tập [Tên bài tập] của học sinh lớp [Lớp]. Bối cảnh: Tránh việc giáo viên chấm điểm cảm tính, học sinh cần biết rõ mình cần làm gì để được điểm cao. Định dạng: Lập BẢNG gồm 5 cột: Tiêu chí (VD: Nội dung, Trình bày), Kém (1-3đ), Đạt (4-6đ), Khá (7-8đ), Xuất sắc (9-10đ). Dưới mỗi ô mô tả rõ hành vi đạt mức điểm đó.",
    likes: 340,
    date: "2024-12-15"
  },
  {
    id: 36,
    title: "Xử lý học sinh vi phạm kỷ luật",
    description: "Kịch bản nói chuyện áp dụng Kỷ luật tích cực",
    category: "Nhận xét học sinh",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia tâm lý giáo dục am hiểu Kỷ luật tích cực (Positive Discipline). Nhiệm vụ của bạn là đưa ra kịch bản đối thoại 1-1 giữa giáo viên và học sinh đang vi phạm lỗi [Tên lỗi]. Bối cảnh: Học sinh đang trong trạng thái phòng thủ. Mục tiêu là để em tự nhận ra lỗi và sửa sai chứ không phải trừng phạt. Định dạng: 3 phần: Phân tích tâm lý học sinh lúc đó, Kịch bản lời thoại cụ thể của giáo viên (câu hỏi khơi gợi thấu cảm), và Cam kết cuối buổi.",
    likes: 490,
    date: "2025-01-05"
  },
  {
    id: 37,
    title: "Thiết kế Sơ đồ tư duy (Mindmap)",
    description: "Tạo cấu trúc nhánh cho sơ đồ tổng hợp chương/bài",
    category: "Giáo án",
    author: "Thầy Toàn AI",
    content: "Đóng vai một bậc thầy về Sơ đồ tư duy (Mindmap). Nhiệm vụ của bạn là thiết kế cấu trúc chi tiết cho sơ đồ tư duy tóm tắt chương [Tên chương] môn [Môn học]. Bối cảnh: Học sinh dùng sơ đồ này để nhìn bức tranh tổng thể trước khi bước vào ôn thi. Định dạng: Trình bày dạng cây phân cấp (Bullet points): Ý tưởng trung tâm (Central Idea) -> Các nhánh chính (Main Branches) -> Các nhánh phụ (Sub-branches). Gợi ý biểu tượng minh họa cho mỗi nhánh.",
    likes: 310,
    date: "2025-01-20"
  },
  {
    id: 38,
    title: "Soạn bài giảng siêu ngắn (Microlearning)",
    description: "Thiết kế kịch bản bài học 3 phút (Tiktok/Shorts) giáo dục",
    category: "Giáo án",
    author: "Thầy Toàn AI",
    content: "Đóng vai một chuyên gia thiết kế E-learning (Instructional Designer). Nhiệm vụ của bạn là thiết kế kịch bản bài giảng vi mô (Microlearning) dài đúng 3-5 phút để giải thích khái niệm cốt lõi [Tên khái niệm]. Bối cảnh: Phục vụ học sinh tự học trên điện thoại hoặc làm video ngắn. Định dạng: Kịch bản gồm 4 phần: Hook (3 giây đầu gây tò mò), Thân bài (Chỉ tập trung 1 ý, dùng ẩn dụ), Thực hành nhanh (1 câu đố), và Call to Action (Giao bài tập nhỏ).",
    likes: 580,
    date: "2025-02-10"
  }
,
  {
    "id": 40,
    "title": "Bo_Prompt_AI_On_Tap_Sieu_Toc_10_Prompt",
    "description": "BỘ PROMPT AI ÔN TẬP SIÊU TỐC (10 PROMPT)...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "BỘ PROMPT AI ÔN TẬP SIÊU TỐC (10 PROMPT)\nCopy – dán – thay (… ) là dùng ngay, dành cho giáo viên ôn tập trong thời gian ngắn nhưng vẫn đủ – đúng – dễ hiểu.\nCập nhật: 16/03/2026\nPROMPT 01 — Tạo kế hoạch ôn tập theo số buổi\nPROMPT 02 — Nén kiến thức thành đề cương 1 trang A4\nPROMPT 03 — Giải thích siêu dễ hiểu cho học sinh yếu\nPROMPT 04 — Bài tập phân tầng 3 mức + đáp án\nPROMPT 05 — Phiếu ôn tập 45 phút (cầm tay chỉ việc)\nPROMPT 06 — Đề kiểm tra ôn tập + ma trận\nPROMPT 07 — Kịch bản tiết ôn để dạy trôi chảy\nPROMPT 08 — Chẩn đoán lỗi sai và cách chữa trong 1 buổi\nPROMPT 09 — Flashcard câu hỏi nhanh cuối giờ\nPROMPT 10 — Gói ôn gấp cho lớp nhiều học sinh mất gốc\nGợi ý: nếu thầy cô muốn AI bám sát lớp mình, hãy thêm vào cuối prompt: “Dùng ngôn ngữ phù hợp học sinh lớp (lớp), ưu tiên ví dụ gần gũi, ngắn gọn, dễ hiểu.”\nNếu thấy tài liệu hữu ích hãy mời tác giả 1 ly cà phê nhé: 7604205005935, Agribank Trang Hoai Vu",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 41,
    "title": "CÂU LỆNH STEM TIỂU HỌC",
    "description": "CÂU LỆNH...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH\nSOẠN KẾ HOẠCH BÀI HỌC, HOẠT ĐỘNG STEM, \n2. Câu lệnh tạo hoạt động trải nghiệm STEM\nHãy đóng vai chuyên gia giáo dục STEM của Bộ GD&ĐT và SOẠN MỘT HOẠT ĐỘNG TRẢI NGHIỆM STEM cấp Tiểu học theo đúng mẫu giáo án trong tài liệu tập huấn STEM (Công văn 909 và mẫu minh họa trang 129–134).\nBạn phải tự chọn chủ đề STEM, tự mô tả sản phẩm, tự xác định yêu cầu cần đạt và môn học tích hợp. Không yêu cầu tôi nhập thêm thông tin.\nPHẢI SOẠN THEO ĐÚNG CẤU TRÚC SAU:\n-------------------------------------\nTHÔNG TIN HOẠT ĐỘNG TRẢI NGHIỆM STEM  \nLớp: …………  \nThời lượng: ……… tiết  \nThời điểm tổ chức: ………… (bạn tự đề xuất nội dung phù hợp)  \nMô tả bài học/hoạt động trải nghiệm:  \n– Nội dung môn học có yêu cầu cần đạt như sau:  \n  + …  \n  + …  \n– Để đạt được các yêu cầu này, trong hoạt động STEM “……………”, học sinh sẽ:  \n  + … (mô tả sản phẩm hoặc nhiệm vụ)\nNội dung tích hợp (trình bày dạng bảng):\n| Môn học | Yêu cầu cần đạt |\n|--------|-----------------|\n| Tự nhiên & Xã hội / Khoa học (môn chủ đạo) | … |\n| Toán | … |\n| Công nghệ | … |\n| Tin học | … |\n| Mĩ thuật | … |\n-------------------------------------\nI. MỤC TIÊU  \n– Kiến thức  \n– Kỹ năng  \n– Năng lực  \n– Phẩm chất  \n-------------------------------------\nII. ĐỒ DÙNG DẠY HỌC  \n1. Chuẩn bị của giáo viên:  \n   – Sách giáo khoa môn tương ứng (mặc định phải có)  \n   – Phiếu học tập  \n   – Học liệu, thiết bị, vật liệu minh họa  \n2. Chuẩn bị của học sinh:  \n   – SGK  \n   – Vật liệu chế tạo sản phẩm (bạn tự đề xuất)  \n-------------------------------------\nIII. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU\nHoạt động 1: Mở đầu (Xác định vấn đề) (… phút)  \na) Khởi động  \n– Nêu tình huống hoặc video gợi vấn đề  \n– Câu hỏi gợi mở  \n– Hoạt động GV – HS (ghi bảng 2 cột)  \nb) Nhận nhiệm vụ  \n– Giáo viên giao nhiệm vụ STEM  \n– Học sinh xác định tiêu chí sản phẩm  \n– Sản phẩm của hoạt động  \n(Dừng và hỏi: “Bạn có muốn chỉnh sửa phần này không?”)\n-------------------------------------\nHoạt động 2: Luyện tập & vận dụng (Tìm giải pháp – chế tạo – chia sẻ) (… phút)\na) Đề xuất và lựa chọn giải pháp  \n– Quan sát – thí nghiệm – dự đoán  \n– HS đề xuất cách làm  \n– GV hỗ trợ – chỉnh hướng  \n– Bảng GV – HS  \nb) Chế tạo mẫu – thử nghiệm – đánh giá  \n– Các bước chế tạo (ghi rõ từng bước theo hình minh họa)  \n– Thử nghiệm – ghi kết quả  \n– Tiêu chí đánh giá (Rubric 3–4 mức)  \n– Sản phẩm của nhóm  \nc) Chia sẻ – thảo luận – điều chỉnh  \n– Trình bày sản phẩm  \n– Nhận xét chéo  \n– GV nhận xét – kết luận  \n(Dừng và hỏi)\n-------------------------------------\nIV. PHỤ LỤC  \n– Phiếu học tập  \n– Hình minh họa  \n– Dụng cụ – vật liệu  \n– Checklist sản phẩm\n-------------------------------------\nYÊU CẦU BẮT BUỘC:\n– Mỗi hoạt động phải có thời lượng sau tên hoạt động.  \n– Hoạt động GV – HS phải trình bày bằng bảng hai cột.  \n– Không viết toàn bộ giáo án một lần; phải dừng sau từng hoạt động và hỏi lại tôi.\n\n2. Câu lệnh tạo kế hoạch bài dạy STEM\nĐể xem được câu lệnh đầy đủ hãy ủng hộ tác giả bằng cách chuyển khoản 50k vào tài khoản 7604205005935, Agribank Trang Hoai Vu\nSau đó chụp bill, kết bạn zalo số điện thoại 0399329262 để được hỗ trợ câu lệnh",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 42,
    "title": "Bộ gỡ bí sáng kiến kinh nghiệm",
    "description": "BỘ GỠ BÍ SÁNG KIẾN KINH NGHIỆM...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "BỘ GỠ BÍ SÁNG KIẾN KINH NGHIỆM\nTừ đề tài đến minh chứng, dùng AI như trợ lý biên tập dành cho giáo viên\nTài liệu quà tặng có thể dùng ngay\n1. Vì sao nhiều thầy cô viết sáng kiến mãi không xong?\nKhông phải vì thầy cô không có kinh nghiệm. Cái khó là kinh nghiệm ngoài lớp học thì rất thật, nhưng khi đưa vào bài sáng kiến lại phải đúng cấu trúc, có lý lẽ, có minh chứng, có số liệu, có tính mới, có hiệu quả.\nNhiều người rơi vào ba tình huống rất quen: có làm thật nhưng không biết viết sao cho đúng mẫu; có nội dung nhưng viết ra lại rời rạc, thiếu dữ liệu; dùng AI cho nhanh nhưng sợ bài đều đều, không ra chất của mình.\nVì vậy, cách an toàn hơn là không dùng AI để viết hộ toàn bộ, mà dùng AI để gợi ý đề tài, lên khung, đặt câu hỏi ngược, diễn đạt cho rõ và phát hiện điểm yếu trước khi nộp. Khi đó, AI không phải là cây bút chính, mà là trợ lý biên tập.\n2. Quy trình 5 bước dùng AI để hỗ trợ viết sáng kiến kinh nghiệm\n3. Bộ 10 prompt thực chiến dùng ngay\nPrompt 1. Tìm đề tài sáng kiến dễ viết, dễ có minh chứng.\nPrompt 2. Dựng dàn ý chi tiết theo cấu trúc chuẩn.\nPrompt 3. Viết phần lý do chọn đề tài.\nPrompt 4. Viết phần thực trạng thật, không chung chung.\nPrompt 5. Biến cách làm thành giải pháp rõ quy trình.\nPrompt 6. Viết phần hiệu quả có bảng so sánh.\nPrompt 7. Viết phần khả năng nhân rộng.\nPrompt 8. Khử văn phong máy, tăng chất thật.\nPrompt 9. Tìm chỗ yếu trong bài.\nPrompt 10. Rà lỗi trước khi nộp.\n4. Mẫu phiếu thu thập dữ liệu để nạp cho AI\nThầy cô có thể điền nhanh biểu mẫu dưới đây trước khi dùng prompt. Càng nhiều dữ liệu thật, bài sáng kiến càng ra chất của mình và càng dễ thuyết phục.\n5. Checklist trước khi nộp sáng kiến\n6. Lời nhắn dành cho thầy cô\nViết sáng kiến kinh nghiệm chưa bao giờ là việc nhẹ. Nhưng nó sẽ đỡ áp lực hơn rất nhiều nếu thầy cô có một quy trình rõ ràng.\nĐừng cố ngồi chờ cảm hứng rồi mới viết. Hãy đi theo thứ tự: chốt vấn đề thật, chốt giải pháp thật, gom dữ liệu thật, rồi dùng AI để sắp xếp, diễn đạt và phản biện.\nKhi đó, bài vẫn là của thầy cô. AI chỉ giúp thầy cô viết ra điều mình thật sự đã làm.\nNếu thầy cô thấy tài liệu hữu ích hãy mời tác giả 1 ly cà phê nhé: 7604205005935, Agribank Trang Hoai Vu\nCảm ơn thầy cô!",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 43,
    "title": "CÂU LỆNH SOẠN GIÁO ÁN TÍCH HỢP NĂNG LỰC SỐ",
    "description": "CÂU LỆNH SOẠN GIÁO ÁN TÍCH HỢP NĂNG LỰC SỐ...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH SOẠN GIÁO ÁN TÍCH HỢP NĂNG LỰC SỐ\nTải phụ lục tích hợp Năng lực số\nBạn hãy đóng vai một giáo viên giỏi, có nhiều kinh nghiệm thiết kế kế hoạch bài dạy theo Chương trình GDPT 2018, am hiểu Phụ lục IV Công văn 5512/BGDĐT-GDTrH và có khả năng tích hợp năng lực số vào bài dạy một cách tự nhiên, phù hợp.\nNhiệm vụ của bạn là giúp tôi soạn KẾ HOẠCH BÀI DẠY theo đúng cấu trúc Phụ lục IV Công văn 5512, đồng thời tích hợp năng lực số cho học sinh vào:\n1. Phần I. Mục tiêu, mục 2. Về năng lực.\n2. Các hoạt động dạy học trong phần III. Tiến trình dạy học.\nLƯU Ý QUAN TRỌNG:\n- Không yêu cầu tôi đính kèm Phụ lục IV Công văn 5512.\n- Hãy tự sử dụng đúng cấu trúc chuẩn của Phụ lục IV Công văn 5512 để soạn kế hoạch bài dạy.\n- Cấu trúc kế hoạch bài dạy gồm:\n  I. Mục tiêu.\n  II. Thiết bị dạy học và học liệu.\n  III. Tiến trình dạy học.\n- Phần III. Tiến trình dạy học gồm 4 hoạt động:\n  1. Hoạt động mở đầu/xác định vấn đề.\n  2. Hoạt động hình thành kiến thức mới.\n  3. Hoạt động luyện tập.\n  4. Hoạt động vận dụng.\nDỮ LIỆU TÔI SẼ CUNG CẤP:\n1. Tên bài dạy:\n[Nhập tên bài dạy]\n2. Môn học/Hoạt động giáo dục:\n[Nhập môn học]\n3. Lớp:\n[Nhập lớp]\n4. Số tiết:\n[Nhập số tiết]\n5. Chuẩn kiến thức, kĩ năng hoặc yêu cầu cần đạt của bài/chủ đề:\n[Dán chuẩn kiến thức, kĩ năng hoặc yêu cầu cần đạt tại đây]\n6. File bảng chỉ báo năng lực số:\n[Tải lên file bảng chỉ báo năng lực số]\nYÊU CẦU VỀ TÍCH HỢP NĂNG LỰC SỐ:\n- Căn cứ vào lớp dạy để chọn đúng mức chỉ báo năng lực số:\n  + Lớp 1, 2, 3: dùng cột L1-L2-L3 (CB1).\n  + Lớp 4, 5: dùng cột L4-L5 (CB2).\n  + Lớp 6, 7: dùng cột L6-L7 (TC1).\n  + Lớp 8, 9: dùng cột L8-L9 (TC2).\n  + Lớp 10, 11, 12: dùng cột L10-L11-L12 (NC1).\n- Chỉ chọn những chỉ báo năng lực số thật sự phù hợp với bài học.\n- Không tích hợp năng lực số một cách hình thức.\n- Mỗi biểu hiện năng lực số phải gắn với nhiệm vụ học tập cụ thể, công cụ/học liệu số cụ thể và sản phẩm học tập cụ thể.\n- Không biến tiết học thành tiết Tin học nếu môn học không phải Tin học.\n- Nội dung tích hợp năng lực số phải được đánh dấu rõ bằng cụm:\n  [TÍCH HỢP NĂNG LỰC SỐ]\n- Khi xuất sang file Word, toàn bộ nội dung có gắn nhãn [TÍCH HỢP NĂNG LỰC SỐ] phải được tô màu đỏ để người đọc dễ nhận diện.\nYÊU CẦU VỀ CÁCH LÀM:\n- Không viết ngay toàn bộ giáo án một lần.\n- Hãy làm theo từng bước.\n- Sau mỗi bước phải dừng lại và hỏi tôi:\n  “Thầy/cô có cần điều chỉnh gì ở bước này không? Nếu ổn, tôi sẽ chuyển sang bước tiếp theo.”\n- Chỉ khi tôi trả lời “tiếp”, “ổn”, “đồng ý”, “được rồi” hoặc nội dung tương tự thì mới chuyển sang bước kế tiếp.\nQUY TRÌNH THỰC HIỆN:\nBƯỚC 1. PHÂN TÍCH DỮ LIỆU ĐẦU VÀO\nHãy đọc và phân tích:\n- Tên bài dạy.\n- Môn học/hoạt động giáo dục.\n- Lớp.\n- Số tiết.\n- Chuẩn kiến thức, kĩ năng hoặc yêu cầu cần đạt.\n- File bảng chỉ báo năng lực số.\nSau đó trình bày các nội dung sau:\n1. Bài học thuộc lớp nào, tương ứng với mức năng lực số nào.\n2. Các yêu cầu cần đạt chính của bài học.\n3. Những kiến thức trọng tâm học sinh cần hình thành.\n4. Những năng lực đặc thù môn học có thể phát triển.\n5. Những năng lực chung có thể phát triển.\n6. Những phẩm chất có thể phát triển.\n7. Những chỉ báo năng lực số phù hợp nhất để tích hợp vào bài học.\n8. Giải thích ngắn gọn vì sao chọn các chỉ báo năng lực số đó.\n9. Gợi ý những hoạt động có thể tích hợp năng lực số tự nhiên, không gượng ép.\nSau khi hoàn thành bước 1, hãy dừng lại và hỏi tôi có cần điều chỉnh gì không.\nBƯỚC 2. XÂY DỰNG PHẦN I. MỤC TIÊU\nDựa trên kết quả bước 1, hãy viết phần I. Mục tiêu theo cấu trúc sau:\nI. Mục tiêu\n1. Về kiến thức\n- Nêu cụ thể những kiến thức học sinh cần đạt sau bài học.\n- Viết bằng động từ đo lường được.\n- Bám sát chuẩn kiến thức, kĩ năng hoặc yêu cầu cần đạt tôi đã cung cấp.\n2. Về năng lực\na) Năng lực chung\n- Nêu các năng lực chung phù hợp như: tự chủ và tự học, giao tiếp và hợp tác, giải quyết vấn đề và sáng tạo.\n- Mỗi năng lực cần có biểu hiện cụ thể trong bài học.\nb) Năng lực đặc thù môn học\n- Nêu năng lực đặc thù của môn học phù hợp với nội dung bài.\n- Viết rõ học sinh làm được gì qua hoạt động học.\nc) [TÍCH HỢP NĂNG LỰC SỐ] Năng lực số\n- Nêu rõ mã/chỉ báo năng lực số được chọn.\n- Ghi đúng mức chỉ báo theo lớp học.\n- Mô tả biểu hiện cụ thể của học sinh.\n- Gắn với nhiệm vụ học tập, công cụ/học liệu số và sản phẩm học tập.\n- Viết tự nhiên, phù hợp với bài học.\n3. Về phẩm chất\n- Nêu các phẩm chất phù hợp như: chăm chỉ, trung thực, trách nhiệm, nhân ái, yêu nước.\n- Mỗi phẩm chất phải gắn với hành vi cụ thể trong quá trình học tập.\nSau khi hoàn thành bước 2, hãy dừng lại và hỏi tôi có cần điều chỉnh gì không.\nBƯỚC 3. XÂY DỰNG PHẦN II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU\nHãy viết phần II theo cấu trúc:\nII. Thiết bị dạy học và học liệu\n1. Đối với giáo viên\n- Thiết bị dạy học.\n- Tài liệu, học liệu.\n- Phiếu học tập, tranh ảnh, mô hình, thí nghiệm, bài tập hoặc tình huống nếu có.\n- Công cụ số nếu có sử dụng.\n2. Đối với học sinh\n- Sách giáo khoa, vở ghi, đồ dùng học tập.\n- Thiết bị hoặc học liệu cần chuẩn bị.\n- Nhiệm vụ chuẩn bị trước bài nếu cần.\n3. Học liệu số, công cụ số, thiết bị số được sử dụng\n- Nêu rõ tên công cụ/học liệu số.\n- Nêu mục đích sử dụng.\n- Chỉ đưa vào những công cụ thật sự phục vụ bài học.\n- Không lạm dụng công nghệ.\nSau khi hoàn thành bước 3, hãy dừng lại và hỏi tôi có cần điều chỉnh gì không.\nBƯỚC 4. THIẾT KẾ PHẦN III. TIẾN TRÌNH DẠY HỌC\nHãy thiết kế phần III theo đúng cấu trúc Phụ lục IV Công văn 5512:\nIII. Tiến trình dạy học\n1. Hoạt động 1. Mở đầu/Xác định vấn đề\na) Mục tiêu\nb) Nội dung\nc) Sản phẩm\nd) Tổ chức thực hiện\n2. Hoạt động 2. Hình thành kiến thức mới\na) Mục tiêu\nb) Nội dung\nc) Sản phẩm\nd) Tổ chức thực hiện\n3. Hoạt động 3. Luyện tập\na) Mục tiêu\nb) Nội dung\nc) Sản phẩm\nd) Tổ chức thực hiện\n4. Hoạt động 4. Vận dụng\na) Mục tiêu\nb) Nội dung\nc) Sản phẩm\nd) Tổ chức thực hiện\nYêu cầu khi viết từng hoạt động:\n- Tên hoạt động phải rõ, thể hiện được nhiệm vụ học tập.\n- Mục tiêu hoạt động phải gắn với mục tiêu bài học.\n- Nội dung phải nêu rõ học sinh làm gì.\n- Sản phẩm phải cụ thể, có thể quan sát hoặc đánh giá được.\n- Tổ chức thực hiện phải có đủ 4 bước:\n  + Giao nhiệm vụ học tập.\n  + Thực hiện nhiệm vụ.\n  + Báo cáo, thảo luận.\n  + Kết luận, nhận định.\nYêu cầu về tích hợp năng lực số trong hoạt động:\n- Tích hợp vào hoạt động phù hợp, không bắt buộc hoạt động nào cũng phải có.\n- Mỗi chỗ tích hợp năng lực số phải ghi rõ:\n  [TÍCH HỢP NĂNG LỰC SỐ] + mã/chỉ báo + biểu hiện học sinh cần thực hiện + công cụ/học liệu số sử dụng + sản phẩm học tập.\n- Có thể tích hợp các nội dung như:\n  + Tìm kiếm thông tin.\n  + Đánh giá nguồn tin.\n  + Thu thập, phân loại, xử lí dữ liệu.\n  + Sử dụng công cụ số để học tập.\n  + Trình bày sản phẩm số.\n  + Hợp tác qua công cụ số.\n  + Chia sẻ sản phẩm học tập đúng cách.\n  + Tôn trọng bản quyền, ghi nguồn.\n  + Bảo vệ dữ liệu cá nhân.\n  + Ứng xử văn minh trong môi trường số.\n- Không đưa công nghệ vào chỉ để cho có.\nSau khi hoàn thành bước 4, hãy dừng lại và hỏi tôi có cần điều chỉnh gì không.\nBƯỚC 5. THIẾT KẾ KIỂM TRA, ĐÁNH GIÁ TRONG BÀI HỌC\nHãy bổ sung nội dung kiểm tra, đánh giá thường xuyên trong từng hoạt động, gồm:\n1. Hình thức đánh giá.\n2. Công cụ đánh giá.\n3. Tiêu chí đánh giá ngắn gọn.\n4. Minh chứng/sản phẩm học tập.\n5. Tiêu chí riêng cho phần [TÍCH HỢP NĂNG LỰC SỐ] nếu hoạt động có tích hợp.\nYêu cầu:\n- Đánh giá phải phù hợp với mục tiêu.\n- Ưu tiên đánh giá bằng nhận xét.\n- Có thể sử dụng hỏi đáp, quan sát, phiếu học tập, sản phẩm học tập, sản phẩm số, bài trình bày, báo cáo nhóm.\n- Tiêu chí đánh giá phải ngắn gọn, dễ dùng, không quá hình thức.\nSau khi hoàn thành bước 5, hãy dừng lại và hỏi tôi có cần điều chỉnh gì không.\nBƯỚC 6. RÀ SOÁT TÍNH PHÙ HỢP CỦA KẾ HOẠCH BÀI DẠY\nHãy tự rà soát toàn bộ kế hoạch bài dạy theo bảng kiểm sau:\n1. Kế hoạch bài dạy đã đúng cấu trúc Phụ lục IV Công văn 5512 chưa?\n2. Phần I. Mục tiêu đã đủ kiến thức, năng lực, phẩm chất chưa?\n3. Năng lực số đã được đưa vào phần I, mục 2. Về năng lực chưa?\n4. Chỉ báo năng lực số đã đúng với lớp học chưa?\n5. Năng lực số đã được tích hợp vào hoạt động dạy học phù hợp chưa?\n6. Các hoạt động đã đủ mục tiêu, nội dung, sản phẩm, tổ chức thực hiện chưa?\n7. Các bước tổ chức thực hiện đã rõ việc giáo viên làm gì, học sinh làm gì chưa?\n8. Nhiệm vụ học tập có phù hợp thời lượng bài học không?\n9. Thiết bị, học liệu, công cụ số có phù hợp điều kiện thực tế không?\n10. Có nội dung nào tích hợp năng lực số bị gượng ép không? Nếu có, hãy đề xuất chỉnh.\n11. Có hoạt động nào quá tải không? Nếu có, hãy đề xuất rút gọn.\n12. Sản phẩm học tập có đủ căn cứ để kiểm tra, đánh giá không?\nSau khi rà soát, hãy trình bày:\n- Những điểm đã phù hợp.\n- Những điểm cần cân nhắc điều chỉnh nếu có.\n- Bản đề xuất chỉnh sửa ngắn gọn.\nSau khi hoàn thành bước 6, hãy dừng lại và hỏi tôi có cần điều chỉnh gì không.\nBƯỚC 7. HOÀN THIỆN BẢN CUỐI\nKhi tôi xác nhận đã ổn, hãy trình bày lại bản kế hoạch bài dạy hoàn chỉnh gồm:\n- Thông tin chung:\n  Trường, tổ, họ tên giáo viên, tên bài dạy, môn học/hoạt động giáo dục, lớp, thời gian thực hiện.\n- I. Mục tiêu.\n- II. Thiết bị dạy học và học liệu.\n- III. Tiến trình dạy học.\n- Kiểm tra, đánh giá trong bài học nếu cần trình bày riêng.\n- Phụ lục phiếu học tập, câu hỏi, rubric hoặc bảng kiểm nếu cần.\nYêu cầu:\n- Văn phong chuẩn giáo án.\n- Trình bày rõ ràng, dễ dùng.\n- Không viết lời thoại dài của giáo viên.\n- Tập trung mô tả hoạt động dạy học.\n- Giữ các nội dung [TÍCH HỢP NĂNG LỰC SỐ] để chuẩn bị tô màu đỏ ở bản Word.\nSau khi hoàn thành bước 7, hãy hỏi tôi có muốn xuất sang file Word không.\nBƯỚC 8. XUẤT FILE WORD\nKhi tôi yêu cầu xuất file Word, hãy tạo file Word với yêu cầu:\n- Khổ giấy A4.\n- Căn lề chuẩn:\n  + Trên: 2 cm.\n  + Dưới: 2 cm.\n  + Trái: 3 cm.\n  + Phải: 2 cm.\n- Font chữ: Times New Roman.\n- Cỡ chữ: 13.\n- Giãn dòng: 1.15.\n- Canh đều hai lề.\n- Tiêu đề bài dạy in hoa, đậm, căn giữa.\n- Các đề mục chính in đậm.\n- Bảng biểu trình bày gọn, dễ đọc.\n- Toàn bộ nội dung có nhãn [TÍCH HỢP NĂNG LỰC SỐ] phải được tô màu đỏ.\n- Nếu tôi yêu cầu, có thể bỏ nhãn [TÍCH HỢP NĂNG LỰC SỐ] trong bản Word cuối nhưng vẫn giữ nội dung tích hợp được tô màu đỏ.\n- Tên file Word đặt theo mẫu:\n  Ke_hoach_bai_day_[Ten_bai]_tich_hop_nang_luc_so.docx\nTrước khi xuất file Word, hãy hỏi lại tôi:\n“Thầy/cô muốn giữ nhãn [TÍCH HỢP NĂNG LỰC SỐ] trong bản Word hay chỉ tô màu đỏ phần tích hợp?”\n---------------------\nNếu thấy câu lệnh hữu ích, hãy mời mình 1 ly cà phê nhé: 0399329262",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 44,
    "title": "CÂU LỆNH BIẾN BÀI HỌC KHÔ THÀNH HOẠT ĐỘNG HẤP DẪN",
    "description": "CÂU LỆNH BIẾN BÀI HỌC KHÔ THÀNH HOẠT ĐỘNG HẤP DẪN...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH BIẾN BÀI HỌC KHÔ THÀNH HOẠT ĐỘNG HẤP DẪN\nBạn hãy đóng vai là một giáo viên giỏi, có kinh nghiệm thiết kế hoạt động dạy học tích cực, biết cách biến những nội dung lý thuyết khô khan thành hoạt động học tập sinh động, dễ hiểu và phù hợp với học sinh phổ thông.\nDựa vào nội dung bài học tôi cung cấp, hãy thiết kế lại bài học thành các hoạt động hấp dẫn, giúp học sinh chủ động tham gia, thảo luận, thực hành và vận dụng kiến thức.\nYêu cầu thiết kế:\nPhân tích nhanh nội dung bài học\nXác định kiến thức trọng tâm.\nChỉ ra phần nào dễ gây nhàm chán hoặc khó hiểu với học sinh.\nĐề xuất cách chuyển nội dung đó thành hoạt động học tập.\nThiết kế hoạt động dạy học\nHãy tạo từ 4 đến 6 hoạt động, gồm:\nHoạt động khởi động tạo hứng thú\nHoạt động khám phá kiến thức\nHoạt động thảo luận nhóm\nHoạt động luyện tập/củng cố\nHoạt động vận dụng vào thực tế\nVới mỗi hoạt động, trình bày rõ\nTên hoạt động\nMục tiêu\nThời gian dự kiến\nCách tổ chức của giáo viên\nNhiệm vụ của học sinh\nSản phẩm học tập\nCâu hỏi gợi mở\nCách đánh giá nhanh\nYêu cầu sư phạm\nHoạt động phải đơn giản, dễ tổ chức trong lớp học thật.\nKhông cần thiết bị phức tạp.\nƯu tiên hoạt động nhóm, trò chơi học tập, tình huống thực tế, tranh luận ngắn, phiếu học tập.\nPhù hợp với học sinh lớp ………\nKhông làm lệch kiến thức trọng tâm của bài.\nCó thể gợi ý dùng công cụ số như Padlet, Quizizz, Kahoot, Canva, Mentimeter, Wordwall nếu phù hợp.\nTạo thêm phần hỗ trợ giáo viên\n5 câu hỏi gợi mở để dẫn dắt học sinh.\n3 cách tạo hứng thú đầu giờ.\n1 trò chơi học tập phù hợp với bài.\n1 nhiệm vụ vận dụng gắn với đời sống.\n1 bảng tiêu chí đánh giá sản phẩm học tập.\nThông tin bài học:\nMôn học: ………\nLớp: ………\nTên bài: ………\nThời lượng dạy: ……… tiết\nĐặc điểm lớp học: ………\nNội dung bài học: ………\nHãy trình bày kết quả rõ ràng, dễ đọc, có thể dùng ngay để đưa vào kế hoạch bài dạy hoặc triển khai trên lớp.",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 45,
    "title": "Câu lệnh chuyển sáng kiến king nghiệm thành đơn yêu cầu sáng kiến",
    "description": "Bạn là chuyên gia viết hồ sơ sáng kiến trong ngành giáo dục Việt Nam, rất am hiểu cách chuyển một sáng kiến kinh nghiệm thành nội dung điền theo Mẫu đ...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "Bạn là chuyên gia viết hồ sơ sáng kiến trong ngành giáo dục Việt Nam, rất am hiểu cách chuyển một sáng kiến kinh nghiệm thành nội dung điền theo Mẫu đơn yêu cầu công nhận sáng kiến.\nNhiệm vụ của bạn là:\nĐọc toàn bộ nội dung sáng kiến kinh nghiệm tôi cung cấp, sau đó chuyển hóa thành bản nội dung hoàn chỉnh, chuẩn hành chính, đúng logic xét công nhận sáng kiến, để tôi có thể chép hoặc dán trực tiếp vào mẫu đơn.\nYÊU CẦU CHUNG\nBám sát hoàn toàn nội dung sáng kiến tôi cung cấp, không bịa đặt thông tin.\nVăn phong phải:\nTrang trọng, hành chính, mạch lạc, thuyết phục\nPhù hợp hồ sơ xét công nhận sáng kiến trong ngành giáo dục\nNhấn mạnh được tính mới, tính hiệu quả, tính khả thi, khả năng nhân rộng\nKhi xử lý nội dung, hãy ưu tiên cách viết phù hợp với bối cảnh:\ntrường học\nlớp học\ntổ chuyên môn\nhoạt động dạy học, quản lý, chủ nhiệm, chuyển đổi số, bồi dưỡng học sinh, phụ đạo học sinh yếu, ứng dụng CNTT, AI, STEM, kiểm tra đánh giá...\nNếu trong sáng kiến có thông tin còn thiếu, hãy xử lý theo thứ tự:\nBước 1: suy luận hợp lý từ phần nội dung đã có\nBước 2: nếu vẫn chưa đủ cơ sở thì ghi rõ [Cần bổ sung thông tin]\nKhông dùng các câu quá chung chung như “mang lại hiệu quả cao”, “rất cần thiết”, “rất khả thi” nếu không có giải thích đi kèm.\nỞ những mục đánh giá, phải viết theo hướng:\ncó đối chiếu trước khi áp dụng / sau khi áp dụng\ncó phân tích khó khăn cũ – cải tiến mới – hiệu quả đạt được\nưu tiên nhấn mạnh hiệu quả trong giáo dục như:\nnâng cao chất lượng dạy học\ntăng hứng thú học tập\nphát triển năng lực, phẩm chất học sinh\ngiảm áp lực cho giáo viên\ntiết kiệm thời gian, công sức\ndễ triển khai ở đơn vị khác\nKhông chèn ký hiệu đầu dòng lộn xộn. Trình bày rõ ràng, sạch, dễ sao chép vào Word.\nCÁCH LÀM BẮT BUỘC\nBước 1. Đọc và phân tích sáng kiến\nTự xác định:\nVấn đề thực tiễn mà sáng kiến muốn giải quyết\nGiải pháp cũ đang tồn tại là gì\nHạn chế của cách làm cũ\nĐiểm mới của sáng kiến\nQuy trình hoặc biện pháp thực hiện\nKết quả, tác động, hiệu quả\nKhả năng áp dụng ở phạm vi rộng hơn\nBước 2. Chuyển hóa thành nội dung đúng cấu trúc mẫu đơn\nHãy viết đầy đủ theo đúng các mục sau:\n1. Tên sáng kiến\nViết lại tên sáng kiến ngắn gọn, đúng phong cách hồ sơ chuyên môn giáo dục.\nNếu tên gốc quá dài, hãy chỉnh nhẹ để rõ ý hơn nhưng không làm sai nội dung.\n2. Chủ đầu tư tạo ra sáng kiến\nNếu tác giả đồng thời là người thực hiện tại đơn vị thì diễn đạt phù hợp theo bối cảnh trường học.\nNếu chưa đủ dữ liệu, ghi: [Cần bổ sung tên đơn vị/chủ đầu tư]\n3. Lĩnh vực áp dụng sáng kiến\nXác định đúng theo bối cảnh giáo dục.\nCó thể viết theo hướng: dạy học môn học, công tác chủ nhiệm, quản lý giáo dục, ứng dụng CNTT trong dạy học, chuyển đổi số, kiểm tra đánh giá, hoạt động trải nghiệm...\nDiễn đạt ngắn gọn nhưng đúng phạm vi.\n4. Ngày sáng kiến được áp dụng lần đầu hoặc áp dụng thử\nNếu sáng kiến có nêu thời điểm thực hiện, trích ra chính xác.\nNếu không có ngày cụ thể, ghi: [Cần bổ sung thời điểm áp dụng lần đầu]\n5. Mô tả bản chất của sáng kiến\nMục này phải viết sâu, rõ, có sức thuyết phục, chia đúng 5 phần sau:\n5.1. Phân tích tình trạng của giải pháp đã biết, ưu điểm và nhược điểm\nMô tả thực trạng trước khi có sáng kiến.\nNêu rõ cách làm cũ hoặc giải pháp đã biết ở đơn vị.\nChỉ ra ưu điểm của cách cũ.\nPhân tích sâu nhược điểm, hạn chế, khó khăn, bất cập trong thực tế giáo dục.\nNội dung phải sát với nhà trường, giáo viên, học sinh, điều kiện cơ sở vật chất, thời gian, năng lực tiếp cận công nghệ nếu có.\n5.2. Nêu các bước thực hiện giải pháp\nTrình bày thành các bước rõ ràng, logic, có thứ tự thực hiện.\nMỗi bước nên có:\nmục đích\ncách tiến hành\nđối tượng thực hiện\ncông cụ/phương tiện nếu có\nNếu sáng kiến là biện pháp dạy học, cần thể hiện được quy trình triển khai trong lớp học.\nNếu sáng kiến là giải pháp quản lý, cần thể hiện quy trình tổ chức, theo dõi, kiểm tra, đánh giá.\n5.3. Nêu các điều kiện cần thiết để áp dụng giải pháp\nXác định đầy đủ các điều kiện như:\nnhân lực\ncơ sở vật chất\nthiết bị dạy học\nhạ tầng CNTT\nsự phối hợp của tổ chuyên môn, nhà trường, phụ huynh\nnăng lực của giáo viên, học sinh\nViết theo hướng thực tế, không phóng đại.\n5.4. Nêu nội dung đã cải tiến, sáng tạo để khắc phục nhược điểm của giải pháp đã biết\nĐây là phần quan trọng nhất.\nPhải chỉ ra rõ:\nsáng kiến mới ở đâu\ncải tiến điểm nào\nsáng tạo ở khâu nào\nkhắc phục được hạn chế cũ ra sao\nTránh viết chung chung.\nNếu có nhiều biện pháp, hãy nhóm lại thành các ý lớn, mỗi ý làm rõ giá trị mới.\n5.5. Chứng minh khả năng áp dụng của sáng kiến\nPhân tích sáng kiến đã được áp dụng hoặc áp dụng thử như thế nào.\nChỉ ra đối tượng, phạm vi, điều kiện áp dụng.\nĐánh giá khả năng nhân rộng trong:\ncùng khối lớp\ncùng môn học\ntoàn trường\ncác trường có điều kiện tương tự\nNếu phù hợp, nêu rõ vì sao giải pháp dễ chuyển giao, dễ sử dụng, chi phí thấp, phù hợp thực tế.\n6. Những thông tin cần được bảo mật, nếu có\nNếu không có, ghi rõ: Không\nKhông tự ý bịa đặt nội dung mật.\n7. Đánh giá lợi ích thu được hoặc dự kiến có thể thu được theo ý kiến của tác giả\nViết theo giọng đánh giá chuyên môn, thuyết phục.\nPhân tích lợi ích trên các phương diện:\nchất lượng dạy học/giáo dục\nhiệu quả quản lý/tổ chức\nphát triển năng lực học sinh\ngiảm áp lực, tiết kiệm thời gian cho giáo viên\nkhả năng áp dụng rộng rãi\nNếu sáng kiến có số liệu, hãy lồng ghép khéo léo.\nNếu không có số liệu cụ thể, vẫn phải viết theo hướng định tính nhưng có căn cứ logic.\n8. Đánh giá lợi ích thu được hoặc dự kiến có thể thu được theo ý kiến của tổ chức hoặc cá nhân đã tham gia áp dụng sáng kiến lần đầu\nViết theo góc nhìn khách quan hơn tác giả.\nThể hiện sự ghi nhận từ phía nhà trường, tổ chuyên môn, đồng nghiệp hoặc đơn vị áp dụng thử.\nNêu rõ lợi ích về giáo dục, xã hội, hiệu quả thực tiễn.\nNếu chưa có dữ liệu xác thực từ tổ chức/cá nhân khác, ghi: [Cần bổ sung ý kiến xác nhận của tổ chức/cá nhân áp dụng]\n9. Danh sách những người đã tham gia áp dụng thử hoặc áp dụng sáng kiến lần đầu, nếu có\nNếu sáng kiến chỉ do một cá nhân thực hiện và chưa có danh sách cụ thể, ghi:\n[Cần bổ sung danh sách nếu hồ sơ yêu cầu]\nKhông tự bịa tên người.\n10. Các thông tin cần người viết tự điền thêm trước khi hoàn thiện hồ sơ\nCuối cùng, hãy tạo riêng một mục liệt kê ngắn gọn các thông tin còn thiếu, ví dụ:\ntên cơ quan nhận đơn\nchủ đầu tư sáng kiến\nngày áp dụng lần đầu\ný kiến xác nhận của tổ chức/cá nhân áp dụng\ndanh sách người tham gia áp dụng thử\nngày tháng năm làm đơn\nchữ ký, họ tên\nYÊU CẦU VỀ ĐỊNH DẠNG ĐẦU RA\nTrình bày theo từng mục đánh số rõ ràng từ 1 đến 10.\nMỗi mục có tiêu đề riêng.\nNội dung viết thành đoạn văn hoàn chỉnh, không viết quá ngắn.\nRiêng mục 5 phải chia rõ 5.1 đến 5.5.\nKhông giải thích lan man ngoài đề.\nKhông nói kiểu “dưới đây là...”, hãy vào thẳng nội dung.\nĐầu ra phải sẵn sàng để đưa vào Word.\nDỮ LIỆU ĐẦU VÀO\nTôi sẽ dán toàn bộ nội dung sáng kiến kinh nghiệm ở bên dưới.\nHãy đọc kỹ và thực hiện đúng yêu cầu trên.\n[ DÁN TOÀN BỘ NỘI DUNG SÁNG KIẾN KINH NGHIỆM Ở ĐÂY ]\nNẾU THẤY HỮU ÍCH HÃY ỦNG HỘ MÌNH LY CÀ PHÊ BẰNG CÁCH CHUYỂN KHOẢN VÀO TK NÀY NHÉ 7604205005935, AGRIBANK TRANG HOAI VU (SỐ ĐT: 0399329262)",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 46,
    "title": "CÂU LỆNH MẪU TẠO CÁC PHỤ LỤC I,II,III THEO CÔNG VĂN 2345",
    "description": "CÂU LỆNH MẪU...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH MẪU\nTẠO CÁC PHỤ LỤC I,II,III THEO\nCÔNG VĂN 2345\nXem video hướng dẫn:\nLên kế hoạch bài dạy tích hợp năng lực số bằng ChatGPT (Dễ – Nhanh – Hiệu quả)\n1️⃣ PHỤ LỤC 1 – KẾ HOẠCH GIÁO DỤC NHÀ TRƯỜNG (CÓ TÍCH HỢP NLS)\nHãy giúp tôi tạo “PHỤ LỤC 1 – KẾ HOẠCH GIÁO DỤC CỦA NHÀ TRƯỜNG TIỂU HỌC”\ntheo Công văn 2345/BGDĐT-GDTH, CÓ TÍCH HỢP NĂNG LỰC SỐ.\nTôi sẽ cung cấp cho bạn 2 nhóm thông tin:\n1) THÔNG TIN VỀ NHÀ TRƯỜNG\n   – Tên trường, địa bàn, quy mô lớp/học sinh, đội ngũ giáo viên, \n     cơ sở vật chất, thiết bị dạy học, đặc điểm học sinh…\n   – Định hướng nhiệm vụ năm học, các yêu cầu trọng tâm.\n   – Thời gian năm học (học kì I, II…).\n2) PHỤ LỤC 1 – BẢNG MÃ CHỈ BÁO NĂNG LỰC SỐ THEO CÔNG VĂN 3456/BGDĐT-GDPT\n   – Tôi sẽ dán vào toàn bộ bảng mã NLS (mã + mô tả).\n   – Bạn CHỈ ĐƯỢC sử dụng các mã xuất hiện trong bảng này, \n     KHÔNG được tự tạo mã mới.\nDựa trên đó, hãy lập KẾ HOẠCH GIÁO DỤC CỦA NHÀ TRƯỜNG với cấu trúc:\nI. Đặc điểm tình hình nhà trường\n   – Mô tả, nhưng có gợi mở: điều kiện triển khai chuyển đổi số, \n     thiết bị CNTT, khả năng tổ chức hoạt động có ứng dụng công nghệ.\nII. Mục tiêu giáo dục năm học\n   1. Mục tiêu chung\n   2. Các chỉ tiêu cụ thể (học tập, phẩm chất, năng lực…)\n   3. ĐỊNH HƯỚNG PHÁT TRIỂN NĂNG LỰC SỐ CHO HỌC SINH\n      – Nêu rõ: HS cần hình thành những năng lực số nào (theo nhóm chỉ báo NLS).\n      – Có thể trích dẫn 3–5 mã chỉ báo tiêu biểu từ bảng NLS (3456) để làm định hướng toàn trường.\nIII. Kế hoạch giáo dục\n   1. Phân phối thời lượng các môn học, hoạt động giáo dục (bảng 1.1)\n      – Nếu có tích hợp nội dung/hoạt động phát triển năng lực số trong một số môn,\n        hãy ghi chú hoặc gợi ý cột “Ghi chú/Tích hợp NLS”.\n   2. Kế hoạch hoạt động giáo dục tập thể theo tháng (bảng 1.2)\n      – Gợi ý các hoạt động có ứng dụng công nghệ số (nếu phù hợp) \n        và gắn 1–2 mã NLS tiêu biểu vào phần ghi chú.\n   3. Kế hoạch hoạt động sau giờ học chính khóa/bán trú (bảng 1.3)\n      – Nếu có CLB, hoạt động STEAM, trải nghiệm số… thì đề xuất phát triển NLS.\n   4. Thời gian tổ chức các hoạt động giáo dục (bảng 1.4)\n      – Có thể chú thích hoạt động nào ưu tiên phát triển năng lực số.\nQUY TẮC:\n– Không được bịa số liệu; nếu thiếu thông tin hãy để “(Nhà trường bổ sung)”.\n– Khi trích mã NLS, CHỈ DÙNG mã trong bảng 3456 tôi cung cấp.\n– Không tự ý sinh mã kiểu 1.3.CB1a nếu bảng không có.\nHãy xuất bản dự thảo KẾ HOẠCH GIÁO DỤC CỦA NHÀ TRƯỜNG (Phụ lục 1 – CÓ TÍCH HỢP NLS).\n2️⃣ PHỤ LỤC 2 – KẾ HOẠCH DẠY HỌC KHỐI LỚP (CÓ TÍCH HỢP NLS)\nHãy giúp tôi tạo “PHỤ LỤC 2 – KẾ HOẠCH DẠY HỌC CÁC MÔN HỌC, HOẠT ĐỘNG GIÁO DỤC KHỐI LỚP”\ntheo Công văn 2345/BGDĐT-GDTH, CÓ TÍCH HỢP NĂNG LỰC SỐ, cho khối [KHỐI LỚP] \ntại trường [TÊN TRƯỜNG].\nTôi sẽ cung cấp 2 loại dữ liệu:\n1) PHÂN PHỐI CHƯƠNG TRÌNH CÁC MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC CỦA KHỐI [KHỐI LỚP]\n   – Gồm: môn, chủ đề/mạch nội dung, tên bài, số tiết/thời lượng, tuần/tháng thực hiện…\n   – Bạn phải giữ nguyên tên bài, số tiết, thứ tự tuần; KHÔNG được tự thêm/bớt bài.\n2) PHỤ LỤC 1 – BẢNG MÃ CHỈ BÁO NĂNG LỰC SỐ THEO CV 3456/BGDĐT-GDPT\n   – Tôi sẽ dán bảng mã NLS (mã + mô tả).\n   – Bạn CHỈ được dùng những mã này; KHÔNG được tự tạo mã.\nYÊU CẦU:\nI. Căn cứ xây dựng kế hoạch\n   – Nêu các căn cứ (CTGDPT, 2345, kế hoạch năm học, đặc điểm khối lớp),\n     và có nhắc ngắn gọn: “Định hướng phát triển năng lực số cho học sinh tiểu học theo các chỉ báo năng lực số tại Phụ lục 1 (CV 3456/BGDĐT-GDPT).”\nII. Mục tiêu giáo dục của khối [KHỐI LỚP]\n   – Mục tiêu về kiến thức, kĩ năng, phẩm chất.\n   – Mục tiêu riêng về NĂNG LỰC SỐ:\n     + Chọn 3–5 chỉ báo NLS phù hợp lứa tuổi từ bảng mã và nêu làm mục tiêu năm học.\nIII. Kế hoạch dạy học các môn học, hoạt động giáo dục\nĐối với MỖI MÔN HỌC, hãy lập bảng với các cột:\n1. Tuần/tháng\n2. Chương trình và sách giáo khoa:\n   – Mạch nội dung/Chủ đề\n   – Tên bài học\n3. Tiết học/thời lượng\n4. Nội dung điều chỉnh, bổ sung (nếu có)\n   – Điều chỉnh nội dung, thời lượng, thiết bị, hình thức tổ chức, \n     tích hợp nội dung GD địa phương, trải nghiệm…\n   – TÍCH HỢP NĂNG LỰC SỐ:\n     + Nếu bài có hoạt động phù hợp, hãy gợi ý 1–3 mã NLS (từ bảng 3456)\n       và ghi vào ngay trong cột này, ví dụ: \n       “Tăng cường cho HS kĩ năng tìm kiếm thông tin số (NLS – 1.3.CB1a, 1.3.CB1b)”.\n5. Ghi chú (nếu trường muốn tách riêng mã NLS, có thể ghi mã tại đây).\nQUY TẮC GÁN MÃ NĂNG LỰC SỐ:\n– Đọc yêu cầu cần đạt/nội dung chính của bài học.\n– Chọn 1–3 mã NLS trong bảng phù hợp nhất, ghi kèm nội dung.\n– Nếu không tìm được mã phù hợp, hãy ghi:\n  “Chưa xác định mã NLS, cần tổ khối xem xét”.\nIV. Tổ chức thực hiện\n   – Nêu vai trò GVCN, GV bộ môn, tổ khối, BGH trong việc triển khai KẾ HOẠCH DẠY HỌC\n     CÓ LỒNG GHÉP PHÁT TRIỂN NĂNG LỰC SỐ.\nHãy xuất dự thảo KẾ HOẠCH DẠY HỌC (Phụ lục 2 – CÓ TÍCH HỢP NLS) cho khối [KHỐI LỚP].\n3️⃣ PHỤ LỤC 3 – KẾ HOẠCH BÀI DẠY TIỂU HỌC (CÓ TÍCH HỢP NLS)\nĐể xem được câu lệnh hãy ủng hộ tác giả bằng cách chuyển khoản 50k vào tài khoản 7604205005935, Agribank Trang Hoai Vu\nSau đó chụp bill, kết bạn zalo số điện thoại 0399329262 để được hỗ trợ câu lệnh.",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 47,
    "title": "Câu lệnh mẫu",
    "description": "CÂU LỆNH MẪU...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH MẪU\nTẠO PHỤ LỤC 1,3,4 CÔNG VĂN 5512 TÍCH HỢP NĂNG LỰC SỐ THEO CÔNG VĂN 3456\nXem video Lên kế hoạch bài dạy tích hợp năng lực số bằng ChatGPT (Dễ – Nhanh – Hiệu quả)\n1. Câu lệnh tạo phụ lục I\nBảng phải có các cột sau:\n1. Tuần\n   – Chủ đề/Mạch nội dung\n   – Tên bài học\n3. Nội dung điều chỉnh, bổ sung (nếu có)\n   (điều chỉnh nội dung, thời lượng, thiết bị, hình thức tổ chức,  tích hợp liên môn, tích hợp năng lực số…)\n4. Ghi chú\nĐỂ LÀM ĐƯỢC VIỆC NÀY, BẠN CHỈ ĐƯỢC SỬ DỤNG 2 NGUỒN DỮ LIỆU TÔI CUNG CẤP SAU ĐÂY:\n   – Tôi sẽ dán vào danh sách các bài học theo tuần của môn [TÊN MÔN] lớp [LỚP], gồm ít nhất: Tuần, Chủ đề/Mạch nội dung, Tên bài học, Số tiết/thời lượng.\n   – Bạn phải giữ nguyên tên chủ đề, tên bài, số tiết và thứ tự tuần, KHÔNG được tự ý thêm hoặc bớt bài.\n2) PHỤ LỤC 1: BẢNG MÃ CHỈ BÁO NĂNG LỰC SỐ\n   – Tôi sẽ dán vào Bảng mã chỉ báo năng lực số theo Công văn 3456/BGDĐT-GDPT, gồm các mã kiểu như: 1.3.CB1a, 1.3.CB1b, …\n   – Bạn CHỈ ĐƯỢC sử dụng những mã xuất hiện trong bảng này, KHÔNG được tự ý tạo thêm mã mới.\nCÁCH XỬ LÝ:\n– Dùng PHÂN PHỐI CHƯƠNG TRÌNH để điền các cột:\n  • Tuần\n  • Chủ đề/Mạch nội dung\n  • Tên bài học\n– Dùng BẢNG MÃ CHỈ BÁO NĂNG LỰC SỐ để:\n  • Gợi ý các mã chỉ báo năng lực số phù hợp cho từng bài học và ghi vào cột “Nội dung điều chỉnh, bổ sung” hoặc “Ghi chú” (ví dụ: 1.3.CB1a; 1.3.CB1b; …).\n  • Mỗi bài có thể gán từ 1 đến 3 mã chỉ báo phù hợp.\n  • Nếu không tìm được mã phù hợp, hãy ghi rõ: “Chưa xác định mã, cần tổ CM xem xét”.\n– Không được thay đổi nội dung gốc tôi cung cấp, chỉ được sắp xếp lại theo cấu trúc bảng PHỤ LỤC 1 và bổ sung mã NLS từ Bảng mã.\nKhi tôi gửi xong:\n(2) Bảng mã chỉ báo năng lực số (Phụ lục 1 – Công văn 3456), hãy xuất ra \nBẢNG PHỤ LỤC 1 HOÀN CHỈNH theo mẫu:\nTuần – Chủ đề/Mạch nội dung – Tên bài học – Tiết học – Nội dung điều chỉnh, bổ sung – Ghi chú.\n2. Câu lệnh tạo phụ lục III\nĐể xem được câu lệnh hãy ủng hộ tác giả bằng cách chuyển khoảng 50k vào tài khoản 7604205005935, Agribank Trang Hoai Vu\nSau đó chụp bill, kết bạn zalo số điện thoại 0399329262 để được hỗ trợ câu lệnh",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 48,
    "title": "CÂU LỆNH THIẾT KẾ HOẠT ĐỘNG TRẢI NGHIỆM MÙA HÈ",
    "description": "CÂU LỆNH THIẾT KẾ HOẠT ĐỘNG TRẢI NGHIỆM MÙA HÈ...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH THIẾT KẾ HOẠT ĐỘNG TRẢI NGHIỆM MÙA HÈ\nBạn hãy đóng vai là một giáo viên chủ nhiệm, Tổng phụ trách Đội và chuyên gia thiết kế hoạt động trải nghiệm cho học sinh phổ thông.\nTôi muốn thiết kế một chương trình hoạt động trải nghiệm mùa hè cho học sinh. Chương trình cần nhẹ nhàng, an toàn, bổ ích, giúp học sinh không chỉ nghỉ hè mà còn biết rèn luyện kỹ năng, sống có trách nhiệm, biết quan sát cuộc sống và phát triển bản thân.\nThông tin cần thiết:\nCấp học: ………\nKhối/lớp: ………\nSố lượng học sinh tham gia: ………\nThời gian tổ chức: ……… buổi / ……… tuần\nHình thức tổ chức: tại trường / tại địa phương / trực tuyến / kết hợp\nĐối tượng phụ trách: GVCN / Tổng phụ trách Đội / giáo viên bộ môn / phụ huynh\nĐiều kiện thực tế: ………\nMục tiêu chính của hoạt động: rèn kỹ năng sống / giáo dục địa phương / bảo vệ môi trường / đọc sách / thể thao / thiện nguyện / chuyển đổi số / trải nghiệm nghề nghiệp\nHãy thiết kế cho tôi một chương trình “Một mùa hè biết trải nghiệm” gồm các phần sau:\nTên chương trình\nĐề xuất 5 tên chương trình ngắn gọn, hay, phù hợp với học sinh.\nTên cần tạo cảm giác tích cực, vui vẻ, có ý nghĩa giáo dục.\nMục tiêu chương trình\nHãy viết mục tiêu theo 3 nhóm:\nVề nhận thức\nVề kỹ năng\nVề thái độ, phẩm chất\nChủ đề hoạt động trải nghiệm mùa hè\nHãy đề xuất từ 6 đến 10 chủ đề phù hợp, ví dụ:\nEm biết tự chăm sóc bản thân\nMột ngày làm việc tốt\nĐọc một cuốn sách, viết một điều hay\nDọn góc học tập, dọn lại chính mình\nEm yêu quê hương em\nMột ngày không lãng phí điện thoại\nTrải nghiệm nghề nghiệp quanh em\nBảo vệ môi trường từ việc nhỏ\nHè an toàn, vui khỏe\nLàm bạn với AI và công nghệ đúng cách\nKế hoạch tổ chức theo từng buổi\nVới mỗi buổi, hãy trình bày rõ:\nTên hoạt động\nMục tiêu\nThời lượng\nĐịa điểm\nCách tổ chức\nNhiệm vụ của học sinh\nSản phẩm cần hoàn thành\nVai trò của giáo viên/phụ huynh\nLưu ý an toàn\nHoạt động cụ thể\nHãy thiết kế ít nhất ……… hoạt động trải nghiệm, gồm:\nHoạt động cá nhân\nHoạt động nhóm\nHoạt động tại gia đình\nHoạt động tại địa phương\nHoạt động có thể làm online\nHoạt động chia sẻ sản phẩm cuối chương trình\nPhiếu nhiệm vụ cho học sinh\nHãy tạo phiếu nhiệm vụ đơn giản cho học sinh, gồm:\nTên nhiệm vụ\nViệc em cần làm\nThời gian thực hiện\nNgười có thể hỗ trợ em\nSản phẩm em cần nộp\nĐiều em học được sau hoạt động\nSản phẩm sau hoạt động\nHãy gợi ý các sản phẩm học sinh có thể làm, ví dụ:\nNhật ký trải nghiệm hè\nẢnh/video ngắn\nBài cảm nhận\nPoster tuyên truyền\nSổ tay việc tốt\nBảng theo dõi thói quen tốt\nBài thuyết trình ngắn\nAlbum “Mùa hè của em”\nBảng tiêu chí đánh giá\nHãy tạo bảng tiêu chí đánh giá nhẹ nhàng, không gây áp lực, gồm:\nMức độ tham gia\nTinh thần trách nhiệm\nSản phẩm hoàn thành\nKhả năng chia sẻ cảm nhận\nThái độ hợp tác\nÝ thức an toàn\nKhả năng vận dụng vào cuộc sống\nGợi ý thông báo gửi phụ huynh\nHãy viết một mẫu thông báo ngắn gửi phụ huynh qua Zalo lớp, giới thiệu chương trình, mục đích, thời gian, cách phụ huynh hỗ trợ con và tinh thần không tạo áp lực học hè.\nTổng kết chương trình\nHãy thiết kế một buổi tổng kết ngắn, gồm:\nHoạt động chia sẻ cảm nhận\nTrưng bày sản phẩm\nKhen ngợi học sinh\nRút ra bài học\nGợi ý duy trì thói quen tốt sau hè\nYêu cầu khi thiết kế:\nHoạt động phải an toàn, dễ tổ chức, phù hợp thực tế nhà trường và địa phương.\nKhông tốn nhiều kinh phí.\nKhông biến mùa hè thành áp lực học thêm.\nƯu tiên trải nghiệm thật, việc làm nhỏ, gần gũi với đời sống.\nPhù hợp với học sinh lớp ………\nCó thể điều chỉnh cho vùng nông thôn, thành thị hoặc vùng ven.\nVăn phong rõ ràng, dễ đưa vào kế hoạch hoạt động của lớp, Liên đội hoặc nhà trường.",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 49,
    "title": "CÂU LỆNH TẠO GIÁO ÁN STEM CHO GIÁO VIÊN CẤP THCS-THPT",
    "description": "CÂU LỆNH...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH\nTẠO GIÁO ÁN STEM CHO GIÁO VIÊN CẤP THCS-THPT\nXem video hướng dẫn\nBạn sẽ không tin chỉ 1 câu lệnh có thể tạo giáo án STEM thế này!\nCÂU LỆNH:\nBạn là chuyên gia thiết kế bài dạy STEM cấp THCS/THPT, am hiểu quy trình thiết kế kỹ thuật và cấu trúc bài dạy STEM gồm 5 hoạt động: \n(1) Xác định vấn đề/ yêu cầu sản phẩm \n(2) Nghiên cứu kiến thức nền và đề xuất giải pháp \n(3) Lựa chọn giải pháp thiết kế \n(4) Chế tạo – thử nghiệm – đánh giá \n(5) Trình bày – chia sẻ – điều chỉnh.\nNhiệm vụ của bạn:\nSoạn CHI TIẾT một kế hoạch bài dạy STEM theo đúng cấu trúc dưới đây và TRÌNH BÀY TỪNG PHẦN.  \nĐể xem được câu lệnh đầy đủ hãy ủng hộ tác giả bằng cách chuyển khoản 50k vào tài khoản 7604205005935, Agribank Trang Hoai Vu\nSau đó chụp bill, kết bạn zalo số điện thoại 0399329262 để được hỗ trợ câu lệnh",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 50,
    "title": "CÂU LỆNH TẠO POSTER THÔNG BÁO",
    "description": "CÂU LỆNH TẠO POSTER THÔNG BÁO...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH TẠO POSTER THÔNG BÁO\n1) Câu lệnh khung tạo prompt vẽ poster thông báo (tiếng việt)\nBạn là chuyên gia thiết kế poster thông báo (10 năm kinh nghiệm) và cũng là chuyên gia viết prompt cho AI tạo ảnh.\nNhiệm vụ: Tạo 01 PROMPT VẼ ẢNH POSTER chất lượng cao, dùng cho công cụ tạo ảnh (Midjourney / DALL·E / Gemini / Leonardo…).\nYêu cầu: Poster phong cách chuyên nghiệp, bố cục rõ, đọc dễ từ xa, chữ tiếng Việt có dấu sắc nét, KHÔNG sai chính tả, KHÔNG thiếu chữ.\nXuất kết quả gồm 2 phần:\n(1) PROMPT CHÍNH (dán vào công cụ tạo ảnh)\n(2) NEGATIVE PROMPT (những điều phải tránh)\nTHÔNG TIN ĐẦU VÀO (người dùng điền):\nA. Đơn vị/Logo: [TÊN CƠ QUAN/TRƯỜNG/CÔNG TY] (nếu có logo: mô tả logo ngắn gọn [LOGO…])\nB. Loại thông báo: [nghỉ lễ / nghỉ tết / tiệc tất niên / họp phụ huynh / thông báo tuyển sinh / sự kiện…]\nC. Tiêu đề lớn: [TIÊU ĐỀ CHÍNH VIẾT HOA]\nD. Thời gian áp dụng: [TỪ NGÀY… ĐẾN NGÀY…] \n   - Nếu có kèm thứ: [DANH SÁCH THỨ TƯƠNG ỨNG] (VD: Thứ Năm 01/01/2026…)\nE. Địa điểm (nếu có): [ĐỊA ĐIỂM]\nF. Nội dung chi tiết (bullet): \n   - [DÒNG 1]\n   - [DÒNG 2]\n   - [DÒNG 3] …\nG. Liên hệ (nếu có): [SĐT/EMAIL/FANPAGE]\nH. Chữ ký cuối poster: [BAN GIÁM HIỆU / PHÒNG HCNS / BAN TỔ CHỨC…]\nI. Tỷ lệ poster: [4:5 dọc / 1:1 / 16:9 / A4 dọc / A3 dọc]\nJ. Phong cách thị giác: [hiện đại / rực rỡ lễ hội / trang trọng / tối giản / vui tươi học đường]\nK. Màu chủ đạo: [đỏ-vàng-xanh dương / xanh navy-vàng / đỏ-đen / pastel…]\nL. Hình minh hoạ phù hợp chủ đề (chọn 2–4): \n   [pháo hoa, confetti, hoa mai/hoa đào, trống đồng, bánh chưng/bánh tét, cờ đỏ sao vàng, biểu tượng trường học, bóng bay, ánh sáng bokeh, ruy băng, hoa sen…]\nM. Đối tượng chính: [học sinh/giáo viên/phụ huynh/nhân viên công ty/khách mời]\nN. Nơi sử dụng: [Facebook/Website/print dán bảng/LED màn hình…]\nRÀNG BUỘC THIẾT KẾ BẮT BUỘC:\n1) Bố cục 3 tầng: (Top: tên đơn vị + logo) / (Center: tiêu đề lớn) / (Bottom: thời gian + nội dung + chữ ký).\n2) Hệ thống chữ rõ ràng: tiêu đề cực lớn; thời gian nổi bật; nội dung nhỏ hơn nhưng dễ đọc, khoảng cách dòng thoáng.\n3) Tương phản cao, nền không rối; ưu tiên nền gradient sạch + họa tiết mờ.\n4) Dùng font gợi ý: sans Việt hoá (VD: Be Vietnam Pro / Inter / Montserrat) hoặc tương đương; KHÔNG dùng font thư pháp khó đọc cho thông báo cơ quan.\n5) Chèn đúng nguyên văn phần “NỘI DUNG CHỮ” bên dưới, giữ nguyên xuống dòng.\n6) Tạo cảm giác đúng ngữ cảnh: trường học thì tươi, thân thiện; cơ quan nhà nước thì trang trọng; công ty tiệc tất niên thì sang + vui.\nNỘI DUNG CHỮ CẦN IN TRÊN POSTER (GIỮ NGUYÊN 100%):\n[DÁN NGUYÊN VĂN TOÀN BỘ NỘI DUNG CHỮ Ở ĐÂY, CÓ XUỐNG DÒNG]\nCHECKLIST CHỐNG LỖI CHỮ (phải đưa vào prompt):\n- “Vietnamese diacritics, sharp Vietnamese typography, no misspellings, no missing letters”\n- “Text must be exactly as provided”\n- “High legibility, clean layout, print-ready”\nBÂY GIỜ: Hãy tạo PROMPT CHÍNH + NEGATIVE PROMPT.\nPROMPT CHÍNH phải mô tả rõ: bố cục, màu, nền, biểu tượng, phong cách, ánh sáng, độ nét, chất lượng in, và quy tắc chữ tiếng Việt.\nNEGATIVE PROMPT phải liệt kê: sai dấu, chữ méo, chữ thiếu, nền rối, watermark, logo lỗi, font khó đọc, text artifact.\n---------------------------\n2) Mẫu điền nhanh (ví dụ nghỉ lễ 30/4 - 1/5)\nBạn chỉ cần thay phần “NỘI DUNG CHỮ…” theo mẫu:\n“TRƯỜNG THCS HUỲNH HỮU NGHĨA”\n“THÔNG BÁO NGHỈ LỄ 30/4 VÀ 1/5”\n“Thời gian nghỉ: 02 ngày”\n“Từ Thứ Tư, 30/04/2026 đến hết Thứ Năm, 01/05/2026”\n“Học sinh trở lại học bình thường vào Thứ Sáu, 02/05/2026”\n“Trân trọng thông báo!”\n“BAN GIÁM HIỆU”\n------------------------------\n3) Mẹo nhỏ để ra poster “đúng chất cơ quan”\nCơ quan/nhà nước: chọn phong cách “trang trọng”, màu xanh navy – vàng – trắng, nền sạch, họa tiết trống đồng/hoa sen mờ.\nTrường học: “vui tươi học đường”, thêm icon vở/bút/thước, màu đỏ – vàng – xanh dương, confetti nhẹ.\nTiệc tất niên công ty: “sang + lễ hội”, nền tối gradient + ánh sáng bokeh, pháo hoa/kim tuyến, typography dày dặn.",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 51,
    "title": "Câu lệnh tạo trò chơi ôn tập, củng cố",
    "description": "CÂU LỆNH TẠO TRÒ CHƠI ÔN TẬP, THI THỬ...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH TẠO TRÒ CHƠI ÔN TẬP, THI THỬ\nBạn là chuyên gia thiết kế trò chơi học tập và sư phạm lớp học.\nHãy tạo 01 trò chơi học tập để dạy/ôn [MÔN] lớp [LỚP], chủ đề [CHỦ ĐỀ], theo mục tiêu [MỤC TIÊU]. \nTrò chơi phải phù hợp bối cảnh [BỐI CẢNH TRIỂN KHAI] và thời lượng [THỜI LƯỢNG] phút.\n========================\nDỮ LIỆU NGƯỜI DÙNG ĐIỀN (SỬA Ở ĐÂY)\n- [MÔN]: Toán\n- [LỚP]: 3\n- [CHỦ ĐỀ]: Ôn tập học kỳ 1\n- [MỤC TIÊU]: Củng cố cộng trừ 3 chữ số, nhân chia bảng 2–9, giải toán có lời văn 1 bước\n- [BỐI CẢNH TRIỂN KHAI]: 1 máy tính + máy chiếu, ưu tiên chạy offline (không cần internet)\n- [THỜI LƯỢNG]: 20\n- [NỘI DUNG TRỌNG TÂM]:\n  1) Cộng/trừ số có 3 chữ số (có nhớ)\n  2) Nhân/chia trong bảng 2–9\n  3) Bài toán lời văn 1 bước (nhân hoặc chia)\n  4) So sánh số, điền dấu > < =\n- [DẠNG BÀI]: Trắc nghiệm 4 lựa chọn + 3 câu lời văn ngắn\n- [MỨC ĐỘ & TỈ LỆ]: Nhận biết 40% | Thông hiểu 40% | Vận dụng 20%\n- [SỐ LƯỢNG CÂU/NHIỆM VỤ]: 15\n- [KIỂU GAME MONG MUỐN]: Trắc nghiệm tính điểm (nếu phù hợp có thêm 1 minigame lật thẻ ghép cặp)\n- [TÍNH ĐIỂM]: Đúng +10, sai 0\n- [GIỚI HẠN THỜI GIAN MỖI CÂU]: 15 giây/câu\n- [YÊU CẦU THÊM]: Có đếm thời gian; hiển thị đáp án đúng sau khi trả lời; cuối game chốt 5 lỗi sai thường gặp\n- [ĐẦU RA MONG MUỐN]: 1 file HTML chạy offline (nếu không làm được thì xuất kịch bản + bộ câu hỏi)\n========================\nĐẦU VÀO NỘI DUNG (CHỌN 1 TRONG 3 CÁCH)\nCÁCH 1: TỰ SINH CÂU HỎI THEO NỘI DUNG TRỌNG TÂM\n- Bạn tự tạo câu hỏi theo đúng số lượng, đúng tỉ lệ mức độ ở trên.\nCÁCH 2: DÁN NGÂN HÀNG CÂU HỎI (NẾU NGƯỜI DÙNG CÓ SẴN)\n- Dán theo mẫu sau (người dùng sửa/điền):\n  Câu 1 | Mức độ: Nhận biết | Dạng: Trắc nghiệm | Nội dung: 345 + 120 = ? | \n  A: 465 | B: 455 | C: 475 | D: 445 | Đáp án: A | Giải thích: 345+100=445, +20=465\n  Câu 2 | Mức độ: Thông hiểu | Dạng: Trắc nghiệm | Nội dung: 96 ÷ 8 = ? | \n  A: 12 | B: 10 | C: 14 | D: 11 | Đáp án: A | Giải thích: 8×12=96\n  Câu 3 | Mức độ: Vận dụng | Dạng: Lời văn | Nội dung: Có 4 thùng, mỗi thùng 25 chai. Hỏi có tất cả bao nhiêu chai? |\n  Đáp án: 100 | Gợi ý: 4×25\nCÁCH 3: GỬI CHUẨN KIẾN THỨC/KĨ NĂNG (AI TỰ CHUYỂN THÀNH CÂU HỎI)\n- Người dùng dán chuẩn cần bám theo, bạn tự chuyển thành câu hỏi đúng yêu cầu.\nYÊU CẦU THIẾT KẾ TRÒ CHƠI\n1) Chọn 01 kiểu game đúng [KIỂU GAME MONG MUỐN]. Nếu người dùng ghi “trộn/tuỳ chọn”, bạn chọn 01 kiểu tối ưu.\n2) Luật chơi rõ ràng, dễ triển khai, có phương án chơi cá nhân/đội.\n3) Có cơ chế tính điểm + cách xử lý khi trả lời sai.\n4) Có phần “chốt kiến thức” cuối game: 3–5 ý/mẹo/lỗi sai thường gặp.\n5) Có phương án “điều chỉnh độ khó”: phiên bản dễ hơn và khó hơn (nêu rõ thay đổi gì).\nĐỊNH DẠNG ĐẦU RA (BẮT BUỘC)\nXuất kết quả theo đúng cấu trúc sau:\nA. Tên trò chơi (ngắn, hấp dẫn)\nB. Mục tiêu học tập (3 gạch đầu dòng)\nC. Chuẩn bị (dụng cụ, in ấn, thiết bị, link nếu cần)\nD. Kịch bản triển khai theo phút (ví dụ 0–2’, 2–8’, …)\nE. Luật chơi & tính điểm (viết cực rõ)\nF. Nội dung câu hỏi/nhiệm vụ (đầy đủ đáp án, giải thích ngắn 1–2 dòng/câu)\nG. Phương án phân hoá (dễ/khó) + gợi ý hỗ trợ học sinh yếu\nH. Phiếu tổng kết cuối giờ (3–5 câu hỏi nhanh hoặc checklist)\nRÀNG BUỘC CHẤT LƯỢNG\n- Nội dung đúng chương trình, không mẹo đánh đố.\n- Câu hỏi ngắn gọn, không mơ hồ, đáp án duy nhất.\n- Nếu thiếu thông tin, hãy tự giả định hợp lý và ghi rõ “Giả định: …” (không hỏi lại).\nPHẦN BỔ SUNG (CHỈ ÁP DỤNG NẾU [ĐẦU RA MONG MUỐN] = HTML OFFLINE)\n- Xuất 1 file HTML duy nhất (gồm HTML/CSS/JS trong cùng 1 file), chạy offline trên Chrome/Edge.\n- Có nút: Bắt đầu, Làm lại; có điểm, số câu, tiến độ, đồng hồ thời gian.\n- Có hướng dẫn sửa ngân hàng câu hỏi trong file (đánh dấu rõ khu vực cần sửa).\n[KIỂU GAME MONG MUỐN]: (chọn 1 hoặc 2 kiểu bên dưới, hoặc ghi “AI tự chọn”)\n  1) Trắc nghiệm tính điểm (quiz): 10–30 câu, đúng + điểm, sai 0/ trừ điểm.\n  2) Ai là triệu phú: 10–15 câu tăng dần độ khó, có quyền trợ giúp (50/50, hỏi tổ, hỏi khán giả).\n  3) Rung chuông vàng: cả lớp cùng làm, sai bị loại, cuối cùng còn 1–3 bạn.\n  4) Bingo kiến thức: phát bảng 3×3 hoặc 4×4, GV đọc câu hỏi, HS đánh dấu đáp án.\n  5) Lật thẻ ghép cặp (memory): ghép “khái niệm–định nghĩa”, “phép tính–kết quả”, “từ–nghĩa”.\n  6) Ô chữ bí mật / vượt chướng ngại vật: trả lời câu hỏi để mở ô chữ, đoán từ khoá cuối.\n  7) Đua xe theo điểm: trả lời đúng xe tiến lên, đội nào về đích trước thắng.\n  8) Vòng quay may mắn: quay chọn chủ đề/câu hỏi, có điểm thưởng/điểm phạt.\n  9) Tìm kho báu (nhiệm vụ theo trạm): 4–6 trạm, mỗi trạm 1 thử thách, gom “mảnh ghép” để thắng.\n  10) Escape room lớp học: giải chuỗi câu đố theo trình tự để mở “mật mã” cuối cùng.\n  11) Kéo thả/ghép nối (drag-drop): kéo đáp án vào đúng vị trí, hợp với phân loại, nối cặp.\n  12) Đúng sai nhanh: HS giơ bảng A/B hoặc thẻ Đúng/Sai, chấm điểm tốc độ.\n  13) Săn lỗi sai: đưa bài giải mẫu có lỗi, HS tìm lỗi và sửa (rất hợp Toán/Tiếng Việt).\n  14) Xếp thứ tự: sắp xếp các bước/quy trình/sự kiện theo đúng thứ tự (Lịch sử, Khoa học, Tin học).\n  15) Điền khuyết tăng tốc: câu có chỗ trống, HS điền số/từ còn thiếu trong thời gian ngắn.\n  16) “Ai nhanh hơn” theo đội: mỗi đội cử 1 bạn lên bảng trả lời, luân phiên, tính điểm tổng.\n  Nếu người dùng để trống, bạn tự chọn 01 kiểu tối ưu theo môn và bối cảnh.",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 52,
    "title": "TrangHoaiVu_LỘ TRÌNH 7 NGÀY TỰ HỌC AI CHO GIÁO VIÊN TRONG HÈ",
    "description": "CÂU LỆNH LẬP KẾ HOẠCH TỰ HỌC AI TRONG HÈ...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "CÂU LỆNH LẬP KẾ HOẠCH TỰ HỌC AI TRONG HÈ\nBạn hãy đóng vai là một chuyên gia đào tạo AI ứng dụng trong giáo dục, có kinh nghiệm hướng dẫn giáo viên phổ thông bắt đầu học AI từ con số 0.\nTôi là giáo viên muốn tranh thủ thời gian hè để học AI phục vụ công việc giảng dạy, soạn bài, tạo học liệu, kiểm tra đánh giá và quản lý công việc cá nhân.\nHãy thiết kế cho tôi một lộ trình 7 ngày làm chủ AI cơ bản cho giáo viên, phù hợp với người mới bắt đầu, không yêu cầu kiến thức kỹ thuật phức tạp.\nThông tin của tôi:\n* Môn dạy: ………\n* Cấp học: ………\n* Mức độ hiện tại với AI: chưa biết / biết sơ / đã từng dùng\n* Thời gian có thể học mỗi ngày: ……… phút\n* Thiết bị sử dụng: điện thoại / máy tính / cả hai\n* Mục tiêu muốn đạt được sau 7 ngày: ………\nYêu cầu lộ trình gồm:\n1. Mục tiêu tổng quát sau 7 ngày\n* Tôi sẽ biết dùng AI để làm được những việc gì trong công việc giáo viên.\n* Kết quả cụ thể cần đạt sau khóa tự học 7 ngày.\n2. Kế hoạch học từng ngày\nVới mỗi ngày, hãy trình bày rõ:\n* Chủ đề học trong ngày\n* Mục tiêu cần đạt\n* Việc cần làm\n* Công cụ AI gợi ý sử dụng\n* Bài thực hành nhỏ\n* Sản phẩm cần hoàn thành\n* Thời gian thực hiện dự kiến\n3. Nội dung 7 ngày cần bao gồm\n* Ngày 1: Hiểu đúng về AI và vai trò của AI đối với giáo viên\n* Ngày 2: Cách viết câu lệnh AI hiệu quả\n* Ngày 3: Dùng AI để soạn giáo án/kế hoạch bài dạy\n* Ngày 4: Dùng AI để tạo slide, phiếu học tập và học liệu\n* Ngày 5: Dùng AI để tạo đề kiểm tra, câu hỏi trắc nghiệm, rubric\n* Ngày 6: Dùng AI cho công tác chủ nhiệm, nhận xét học sinh, trao đổi phụ huynh\n* Ngày 7: Xây dựng quy trình làm việc cá nhân với AI cho năm học mới\n4. Bộ câu lệnh thực hành\n* Với mỗi ngày, hãy tạo ít nhất 1 câu lệnh mẫu để tôi thực hành ngay.\n* Câu lệnh phải dễ hiểu, có chỗ trống để tôi thay thông tin môn học, lớp học, tên bài học.\n5. Lưu ý khi giáo viên sử dụng AI\n* Những việc AI có thể hỗ trợ tốt.\n* Những việc giáo viên bắt buộc phải kiểm tra lại.\n* Cách tránh phụ thuộc máy móc vào AI.\n* Cách bảo vệ thông tin cá nhân, thông tin học sinh khi dùng AI.\n6. Bảng tự đánh giá cuối lộ trình\nHãy tạo bảng kiểm gồm các tiêu chí:\n* Tôi đã biết viết câu lệnh AI cơ bản.\n* Tôi đã biết dùng AI để soạn giáo án.\n* Tôi đã biết tạo học liệu bằng AI.\n* Tôi đã biết tạo đề/câu hỏi bằng AI.\n* Tôi đã biết dùng AI hỗ trợ công tác chủ nhiệm.\n* Tôi đã có quy trình dùng AI phù hợp với công việc của mình.\nYêu cầu trình bày:\n* Viết rõ ràng, dễ hiểu, phù hợp giáo viên mới bắt đầu.\n* Không dùng quá nhiều thuật ngữ kỹ thuật.\n* Mỗi ngày học phải nhẹ, thực tế, có sản phẩm cụ thể.\n* Ưu tiên ứng dụng vào công việc thật của giáo viên.\n* Có thể học bằng điện thoại nếu không có máy tính.\n* Kết quả phải dùng được như một kế hoạch tự học trong hè.",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 53,
    "title": "Tài liệu khung năng lực số_chi so (DÙNG ĐỂ ĐƯA VÀO CHATGPT)",
    "description": "PHỤ LỤC 1- BẢNG MÔ TẢ CÁC NĂNG LỰC THÀNH PHẦN THEO CÁC BẬC CỦA KHUNG NLS CHO HỌC SINH...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "PHỤ LỤC 1- BẢNG MÔ TẢ CÁC NĂNG LỰC THÀNH PHẦN THEO CÁC BẬC CỦA KHUNG NLS CHO HỌC SINH\nTài liệu sử dụng tại Hội nghị tập huấn phát triển năng lực số cho học sinh phổ thông, tiếp tục hoàn thiện trước khi  ban hành chính thức \n68\nPHỤ LỤC 2: MỘT SỐ GỢI Ý CHO CÁC TÌNH HUỐNG SƯ PHẠM",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  },
  {
    "id": 54,
    "title": "Tài liệu khung năng lực số_chi so",
    "description": "PHỤ LỤC 1- BẢNG MÔ TẢ CÁC NĂNG LỰC THÀNH PHẦN THEO CÁC BẬC CỦA KHUNG NLS CHO HỌC SINH...",
    "category": "Giáo án",
    "author": "Thầy Toàn AI",
    "content": "PHỤ LỤC 1- BẢNG MÔ TẢ CÁC NĂNG LỰC THÀNH PHẦN THEO CÁC BẬC CỦA KHUNG NLS CHO HỌC SINH\nTài liệu sử dụng tại Hội nghị tập huấn phát triển năng lực số cho học sinh phổ thông, tiếp tục hoàn thiện trước khi  ban hành chính thức \n68\nPHỤ LỤC 2: MỘT SỐ GỢI Ý CHO CÁC TÌNH HUỐNG SƯ PHẠM",
    "likes": 0,
    "date": "2026-08-07",
    "isNew": true
  }
];

