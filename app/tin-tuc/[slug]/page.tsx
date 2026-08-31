import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticle, newsArticles } from "../../news-data";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();
  const relatedArticles = newsArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return <main className="article-page">
    <SiteHeader />
    <article><div className="article-top"><div className="breadcrumb"><Link href="/">TRANG CHỦ</Link><span>/</span><Link href="/tin-tuc">TIN TỨC</Link><span>/</span>{article.category}</div><p className="article-category">{article.category}</p><h1>{article.title}</h1><div className="article-info"><span>{article.date}</span><i /> <span>{article.readTime}</span></div></div><div className="article-cover" style={{ backgroundImage: `url(${article.image})` }} /><div className="article-layout"><div className="article-body"><p className="article-lead">{article.excerpt}</p>{article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<blockquote>“Cụm công nghiệp Đắk Đoa được kiến tạo để trở thành nền tảng phát triển xanh, bền vững và hiệu quả cho cộng đồng doanh nghiệp.”</blockquote><p>Đội ngũ Shinec Gia Lai luôn sẵn sàng cung cấp thông tin chi tiết và hỗ trợ nhà đầu tư trong suốt quá trình tìm hiểu, triển khai dự án.</p><Link className="back-news" href="/tin-tuc">← QUAY LẠI DANH SÁCH TIN TỨC</Link></div><aside><p>CHIA SẺ BÀI VIẾT</p><div><a href="#top">f</a><a href="#top">in</a><a href="#top">↗</a></div></aside></div></article><section className="related"><div><p className="eyebrow green">TIN LIÊN QUAN</p><h2>KHÁM PHÁ THÊM</h2></div><Link href="/tin-tuc">XEM TẤT CẢ <b>→</b></Link><div className="related-grid">{relatedArticles.map((item) => <Link className="article-card" href={`/tin-tuc/${item.slug}`} key={item.slug}><div className="article-image" style={{ backgroundImage: `url(${item.image})` }} /><div className="article-meta">{item.category}<span>{item.date}</span></div><h3>{item.title}</h3><b>ĐỌC THÊM <i>→</i></b></Link>)}</div></section><NewsFooter />
  </main>;
}

function SiteHeader() { return <header><Link className="brand" href="/"><i>≋</i><span>DAKDOA<small>INDUSTRIAL CLUSTER</small></span></Link><nav><Link href="/">TRANG CHỦ</Link><Link href="/#about">GIỚI THIỆU</Link><Link href="/#planning">DỰ ÁN ĐẦU TƯ</Link><Link href="/#why">LỢI THẾ ĐẦU TƯ</Link><Link href="/#infra">HẠ TẦNG</Link><Link href="/tin-tuc">TIN TỨC</Link></nav><Link className="header-button" href="/#contact">NHẬN HỒ SƠ ĐẦU TƯ</Link></header>; }
function NewsFooter() { return <footer><div className="footer-brand"><Link className="brand" href="/"><i>≋</i><span>DAKDOA<small>INDUSTRIAL CLUSTER</small></span></Link><p>CÔNG TY CỔ PHẦN SHINEC GIA LAI<br/>Khu 7, xã Đắk Đoa, tỉnh Gia Lai, Việt Nam<br/>Hotline: 0269 3 666 666</p></div><div><h3>VỀ CHÚNG TÔI</h3><Link href="/#about">Giới thiệu</Link><Link href="/#why">Lợi thế đầu tư</Link></div><div><h3>DỰ ÁN ĐẦU TƯ</h3><Link href="/#planning">Quy hoạch tổng thể</Link><Link href="/#infra">Hạ tầng</Link></div><div><h3>THÔNG TIN</h3><Link href="/tin-tuc">Tin tức</Link><Link href="/#contact">Liên hệ</Link></div></footer>; }
