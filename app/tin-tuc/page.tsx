import Link from "next/link";
import { newsArticles } from "../news-data";

export const metadata = {
  title: "Tin tức | Cụm công nghiệp Đắk Đoa",
  description: "Tin tức và sự kiện mới nhất từ Cụm công nghiệp Đắk Đoa.",
};

export default function NewsIndexPage() {
  const [featuredArticle, ...otherArticles] = newsArticles;

  return <main className="news-page">
    <SiteHeader />
    <section className="news-hero"><div><p className="eyebrow">CẬP NHẬT TỪ SHINEC GIA LAI</p><h1>TIN TỨC <strong>& SỰ KIỆN</strong></h1><p>Thông tin mới nhất về Cụm công nghiệp Đắk Đoa, môi trường đầu tư và hành trình phát triển công nghiệp xanh tại Gia Lai.</p></div></section>
    <section className="news-content"><div className="breadcrumb"><Link href="/">TRANG CHỦ</Link><span>/</span>TIN TỨC & SỰ KIỆN</div><h2>CÂU CHUYỆN TỪ ĐẮK ĐOA</h2><Link className="featured-news" href={`/tin-tuc/${featuredArticle.slug}`}><div className="featured-image" style={{ backgroundImage: `url(${featuredArticle.image})` }} /><div className="featured-copy"><p>{featuredArticle.category}<span>{featuredArticle.date}</span></p><h3>{featuredArticle.title}</h3><span>{featuredArticle.excerpt}</span><b>ĐỌC BÀI VIẾT <i>→</i></b></div></Link><div className="news-toolbar"><span>TẤT CẢ BÀI VIẾT</span><small>{newsArticles.length} bài viết</small></div><div className="article-grid">{otherArticles.map((article) => <Link className="article-card" href={`/tin-tuc/${article.slug}`} key={article.slug}><div className="article-image" style={{ backgroundImage: `url(${article.image})` }} /><div className="article-meta">{article.category}<span>{article.date}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><b>ĐỌC THÊM <i>→</i></b></Link>)}</div></section>
    <NewsFooter />
  </main>;
}

function SiteHeader() { return <header><Link className="brand" href="/"><i>≋</i><span>DAKDOA<small>INDUSTRIAL CLUSTER</small></span></Link><nav><Link href="/">TRANG CHỦ</Link><Link href="/#about">GIỚI THIỆU</Link><Link href="/#planning">DỰ ÁN ĐẦU TƯ</Link><Link href="/#why">LỢI THẾ ĐẦU TƯ</Link><Link href="/#infra">HẠ TẦNG</Link><Link href="/tin-tuc">TIN TỨC</Link></nav><Link className="header-button" href="/#contact">NHẬN HỒ SƠ ĐẦU TƯ</Link></header>; }
function NewsFooter() { return <footer><div className="footer-brand"><Link className="brand" href="/"><i>≋</i><span>DAKDOA<small>INDUSTRIAL CLUSTER</small></span></Link><p>CÔNG TY CỔ PHẦN SHINEC GIA LAI<br/>Khu 7, xã Đắk Đoa, tỉnh Gia Lai, Việt Nam<br/>Hotline: 0269 3 666 666</p></div><div><h3>VỀ CHÚNG TÔI</h3><Link href="/#about">Giới thiệu</Link><Link href="/#why">Lợi thế đầu tư</Link></div><div><h3>DỰ ÁN ĐẦU TƯ</h3><Link href="/#planning">Quy hoạch tổng thể</Link><Link href="/#infra">Hạ tầng</Link></div><div><h3>THÔNG TIN</h3><Link href="/tin-tuc">Tin tức</Link><Link href="/#contact">Liên hệ</Link></div></footer>; }
