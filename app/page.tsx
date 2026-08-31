"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const advantages = [
  ["⌖", "VỊ TRÍ CHIẾN LƯỢC", "Nằm tại cửa ngõ Tây Nguyên, kết nối thuận lợi liên vùng."],
  ["♙", "QUỸ ĐẤT SẴN SÀNG", "Quỹ đất lớn, pháp lý đầy đủ, sẵn sàng đầu tư."],
  ["⌘", "HẠ TẦNG ĐỒNG BỘ", "Đầu tư bài bản theo tiêu chuẩn quốc tế."],
  ["♧", "CÔNG NGHIỆP XANH", "Tiết kiệm năng lượng, thân thiện môi trường."],
  ["◎", "ESG BỀN VỮNG", "Phát triển hài hòa, hướng đến tương lai dài hạn."],
  ["▱", "KẾT NỐI LOGISTICS", "Kết nối cảng biển, sân bay và các vùng lân cận."],
];
const industry = ["Chế biến nông sản", "Chế biến lâm sản", "Thực phẩm - đồ uống", "Năng lượng tái tạo", "Công nghiệp phụ trợ", "Logistics & kho vận"];

export default function Home() {
  const page = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.set(".hero-copy > *, .facts, .scroll", { autoAlpha: 0 });
      gsap.timeline()
        .to(".hero-copy > *", { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" })
        .to(".facts", { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }, "<0.15")
        .to(".scroll", { autoAlpha: 1, duration: 0.4 }, "<0.2");

      gsap.set(".hero-copy > *", { y: 24 });
      gsap.set(".facts", { x: 32 });

      gsap.utils.toArray<HTMLElement>(".intro, .why, .cluster, .two-col, .bottom, .invest").forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 34,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 82%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".advantages, .mini, .stats, .esg > div, .process > div, .news > div").forEach((group) => {
        gsap.from(group.children, {
          autoAlpha: 0,
          y: 20,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: group, start: "top 88%", once: true },
        });
      });
    }, page);

    return () => context.revert();
  }, []);

  return <main ref={page}>
    <header><a className="brand" href="#top"><i>≋</i><span>DAKDOA<small>INDUSTRIAL CLUSTER</small></span></a><nav><a href="#top">TRANG CHỦ</a><a href="#about">GIỚI THIỆU</a><a href="#planning">DỰ ÁN ĐẦU TƯ</a><a href="#why">LỢI THẾ ĐẦU TƯ</a><a href="#infra">HẠ TẦNG</a><a href="/tin-tuc">TIN TỨC</a></nav><a className="header-button" href="#contact">NHẬN HỒ SƠ ĐẦU TƯ</a></header>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">SHINEC GIA LAI</p><h1>KIẾN TẠO CỤM CÔNG NGHIỆP <strong>SINH THÁI ĐẮK ĐOA</strong></h1><p>Điểm đến đầu tư xanh của Tây Nguyên với hạ tầng hiện đại, hệ sinh thái công nghiệp tuần hoàn và định hướng phát triển bền vững.</p><div className="actions"><a className="button lime" href="#about">KHÁM PHÁ DỰ ÁN <b>→</b></a><a className="button outline" href="#contact">NHẬN HỒ SƠ <b>↓</b></a></div></div><div className="facts"><Fact icon="♧" value="75 ha" label="Quy mô dự án"/><Fact icon="◎" value="VỊ TRÍ" label="Chiến lược"/><Fact icon="◉" value="100%" label="Hạ tầng đồng bộ"/><Fact icon="♙" value="ESG" label="Industrial Cluster"/></div><a className="scroll" href="#about">⌄<small>CUỘN XUỐNG</small></a></section>
    <section className="section intro" id="about"><div><p className="eyebrow green">VỀ SHINEC GIA LAI</p><h2>Thành viên hệ sinh thái Shinec<br/>Chủ đầu tư Cụm công nghiệp Đắk Đoa</h2><p>Shinec Gia Lai kế thừa kinh nghiệm và tầm lực của hệ sinh thái Shinec, phát triển Cụm công nghiệp Đắk Đoa theo mô hình khu công nghiệp sinh thái, kiến tạo không gian làm việc xanh.</p><div className="mini"><span>◉<b>Kinh nghiệm phát triển KCN hơn 20 năm</b></span><span>♧<b>Phát triển theo mô hình công nghiệp sinh thái</b></span><span>♙<b>Hạ tầng hiện đại, bền vững</b></span><span>⌘<b>Đồng hành cùng nhà đầu tư lâu dài</b></span></div><a className="text-button" href="#why">TÌM HIỂU THÊM <b>→</b></a></div><div className="building"/></section>
    <section className="section why" id="why"><h2>VÌ SAO LỰA CHỌN ĐẮK ĐOA?</h2><div className="advantages">{advantages.map(([icon,title,text])=><article key={title}><i>{icon}</i><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section cluster"><button>▶</button><div><p>CỤM CÔNG NGHIỆP</p><h2>ĐẮK ĐOA</h2><span>Trung tâm công nghiệp xanh của Tây Nguyên</span></div><div className="stats"><span><b>75 ha</b>Quy mô</span><span><b>GIA LAI</b>Tỉnh</span><span><b>ĐẮK ĐOA</b>Huyện</span><span><b>◉</b>Industrial Cluster</span></div></section>
    <section className="section two-col" id="planning"><Panel title="QUY HOẠCH TỔNG THỂ" visual items={["Khu sản xuất","Khu kho vận","Khu hành chính - dịch vụ","Cây xanh, cảnh quan","Hồ điều hòa","Trạm xử lý nước thải"]}/><Panel title="HẠ TẦNG ĐỒNG BỘ" items={["Giao thông kết nối","Cấp điện ổn định","Cấp nước đạt chuẩn","Xử lý nước thải","Viễn thông hiện đại","Phòng cháy chữa cháy"]}/></section>
    <section className="section two-col"><Panel title="NGÀNH NGHỀ ƯU TIÊN" items={industry}/><article className="esg"><p>ESG - CÔNG NGHIỆP XANH</p><div>{[["♧","MÔI TRƯỜNG","100%"],["♙","XÃ HỘI","35%+"],["♜","QUẢN TRỊ","100%"]].map(([icon,label,value])=><span key={label}><i>{icon}</i><b>{label}</b><strong>{value}</strong><small>Phát triển bền vững</small></span>)}</div></article></section>
    <section className="section bottom" id="news"><article className="process"><h2>QUY TRÌNH ĐẦU TƯ</h2><div>{["Đăng ký đầu tư","Khảo sát địa điểm","Tư vấn đầu tư","Ký kết hợp đồng","Triển khai dự án"].map((step,index)=><span key={step}><i>0{index+1}</i>{step}</span>)}</div></article><article className="news"><h2>TIN TỨC & SỰ KIỆN</h2><div>{["Cụm công nghiệp Đắk Đoa","Định hướng công nghiệp xanh","Gia Lai - Điểm đến mới"].map((title,index)=><a href="/tin-tuc" key={title}><i className={`news-image image-${index}`}/><small>15/06/2024</small><b>{title}</b><em>Xem chi tiết →</em></a>)}</div></article></section>
    <section className="invest"><p>SẴN SÀNG ĐẦU TƯ TẠI</p><h2>CỤM CÔNG NGHIỆP ĐẮK ĐOA?</h2><span>Đội ngũ của chúng tôi luôn sẵn sàng đồng hành cùng nhà đầu tư.</span><a className="button lime" href="#contact">ĐĂNG KÝ TƯ VẤN <b>→</b></a></section>
    <footer id="contact"><div className="footer-brand"><a className="brand" href="#top"><i>≋</i><span>DAKDOA<small>INDUSTRIAL CLUSTER</small></span></a><p>CÔNG TY CỔ PHẦN SHINEC GIA LAI<br/>Khu 7, xã Đắk Đoa, tỉnh Gia Lai, Việt Nam<br/>Hotline: 0269 3 666 666<br/>Email: info@shinecgialai.vn</p></div><FooterColumn title="VỀ CHÚNG TÔI" links={["Giới thiệu","Tầm nhìn - Sứ mệnh","Năng lực thực hiện"]}/><FooterColumn title="DỰ ÁN ĐẦU TƯ" links={["Quy hoạch tổng thể","Hạ tầng","Ngành nghề ưu tiên"]}/><FooterColumn title="THÔNG TIN" links={["Tin tức","Tài liệu","Câu hỏi thường gặp"]}/><div><h3>LIÊN HỆ</h3><div className="map">ĐẮK ĐOA<br/>GIA LAI</div></div></footer>
  </main>;
}
function Fact({icon,value,label}:{icon:string;value:string;label:string}) { return <div><i>{icon}</i><b>{value}</b><span>{label}</span></div>; }
function Panel({title,items,visual=false}:{title:string;items:string[];visual?:boolean}) { return <article className={`panel ${visual ? "with-visual" : ""}`} id={title.includes("HẠ TẦNG") ? "infra" : undefined}><h2>{title}</h2><div className="panel-body">{visual&&<i className="plan-image"/>}<div className="panel-items">{items.map((item,index)=><span key={item}><i>{["◈","⌘","♧","◉","♙","⌖"][index]}</i>{item}</span>)}</div></div><a className="text-button" href="#contact">TÌM HIỂU THÊM <b>→</b></a></article>; }
function FooterColumn({title,links}:{title:string;links:string[]}) { return <div><h3>{title}</h3>{links.map(link=><a href="#top" key={link}>{link}</a>)}</div>; }
