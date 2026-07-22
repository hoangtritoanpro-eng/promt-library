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
];

