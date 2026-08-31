export type NewsArticle = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "shinec-gia-lai-khoi-cong-cum-cong-nghiep-dak-doa",
    category: "TIN DỰ ÁN",
    date: "15/06/2024",
    readTime: "5 phút đọc",
    title: "Shinec Gia Lai khởi động Cụm công nghiệp Đắk Đoa",
    excerpt: "Cụm công nghiệp Đắk Đoa đánh dấu một bước phát triển mới cho hệ sinh thái công nghiệp xanh tại khu vực Tây Nguyên.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=85",
    content: [
      "Cụm công nghiệp Đắk Đoa được phát triển với định hướng trở thành điểm đến đầu tư xanh, hiện đại và bền vững của tỉnh Gia Lai. Dự án tập trung hoàn thiện hạ tầng kỹ thuật đồng bộ, đáp ứng nhu cầu đa dạng của doanh nghiệp.",
      "Với quy mô 75 ha, cụm công nghiệp ưu tiên các ngành chế biến nông lâm sản, thực phẩm, năng lượng tái tạo, công nghiệp phụ trợ và logistics. Quy hoạch dành diện tích phù hợp cho cây xanh, mặt nước và hệ thống xử lý nước thải tập trung.",
      "Shinec Gia Lai cam kết đồng hành cùng nhà đầu tư từ quá trình khảo sát địa điểm, tư vấn thủ tục đến triển khai dự án, tạo dựng môi trường sản xuất hiệu quả và dài hạn."
    ]
  },
  {
    slug: "dak-doa-huong-den-cong-nghiep-xanh",
    category: "PHÁT TRIỂN BỀN VỮNG",
    date: "10/06/2024",
    readTime: "4 phút đọc",
    title: "Đắk Đoa định hướng phát triển công nghiệp xanh",
    excerpt: "Mô hình phát triển công nghiệp sinh thái tạo nền tảng tăng trưởng bền vững cho cộng đồng doanh nghiệp tại Gia Lai.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    content: [
      "Phát triển công nghiệp xanh đang trở thành hướng đi tất yếu trong chiến lược thu hút đầu tư của Đắk Đoa. Cụm công nghiệp được quy hoạch với mục tiêu cân bằng giữa hiệu quả sản xuất, bảo vệ môi trường và lợi ích cộng đồng.",
      "Hạ tầng dùng chung được thiết kế để tối ưu sử dụng tài nguyên, giảm phát thải và khuyến khích các doanh nghiệp áp dụng giải pháp sản xuất sạch hơn. Đây là nền tảng quan trọng để nâng cao năng lực cạnh tranh dài hạn.",
      "Thông qua các tiêu chí ESG, dự án hướng đến không gian công nghiệp có trách nhiệm, tạo công ăn việc làm ổn định và đóng góp tích cực cho sự phát triển kinh tế địa phương."
    ]
  },
  {
    slug: "gia-lai-diem-den-moi-cua-nha-dau-tu",
    category: "THỊ TRƯỜNG",
    date: "01/06/2024",
    readTime: "6 phút đọc",
    title: "Gia Lai - điểm đến mới của các nhà đầu tư",
    excerpt: "Lợi thế vị trí, quỹ đất và tiềm năng nông nghiệp đưa Gia Lai trở thành lựa chọn đáng chú ý cho các nhà đầu tư.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
    content: [
      "Gia Lai sở hữu vị trí kết nối quan trọng của vùng Tây Nguyên, cùng nguồn nguyên liệu nông lâm sản phong phú và dư địa phát triển lớn. Đây là những lợi thế hấp dẫn đối với các ngành chế biến sâu và chuỗi cung ứng phụ trợ.",
      "Bên cạnh vị trí địa lý, địa phương đang từng bước hoàn thiện hạ tầng giao thông và cải thiện môi trường đầu tư. Các khu, cụm công nghiệp được định hướng phát triển bài bản để đón dòng vốn sản xuất mới.",
      "Cụm công nghiệp Đắk Đoa góp phần bổ sung quỹ đất sạch, sẵn sàng tiếp nhận doanh nghiệp với dịch vụ hỗ trợ đầu tư xuyên suốt."
    ]
  },
  {
    slug: "ha-tang-dong-bo-san-sang-don-dau-tu",
    category: "HẠ TẦNG",
    date: "25/05/2024",
    readTime: "4 phút đọc",
    title: "Hạ tầng đồng bộ sẵn sàng đón đầu tư tại Đắk Đoa",
    excerpt: "Hệ thống giao thông, điện, nước và viễn thông được đầu tư đồng bộ nhằm đảm bảo hoạt động sản xuất ổn định.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85",
    content: [
      "Hạ tầng kỹ thuật là một trong những yếu tố trọng tâm trong quá trình phát triển Cụm công nghiệp Đắk Đoa. Dự án đầu tư hệ thống giao thông nội bộ, cấp điện, cấp nước và viễn thông theo tiêu chuẩn phù hợp cho sản xuất hiện đại.",
      "Khu xử lý nước thải tập trung cùng giải pháp phòng cháy chữa cháy được bố trí khoa học, hỗ trợ doanh nghiệp vận hành an toàn và tuân thủ các yêu cầu môi trường.",
      "Việc hoàn thiện hạ tầng đồng bộ giúp rút ngắn thời gian chuẩn bị dự án, tạo điều kiện để nhà đầu tư nhanh chóng đưa nhà máy vào hoạt động."
    ]
  }
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
