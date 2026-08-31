"use client";

import type { FormEvent, RefObject } from "react";

type Advantage = [string, string, string];
type PanelProps = { title: string; items: string[]; visual?: boolean };

export function SiteHeader({ onConsultation }: { onConsultation: () => void }) {
  return <header><a className="brand" href="#top"><i>≋</i><span>DAKDOA<small>INDUSTRIAL CLUSTER</small></span></a><nav><a href="#top">TRANG CHỦ</a><a href="#about">GIỚI THIỆU</a><a href="#planning">DỰ ÁN ĐẦU TƯ</a><a href="#why">LỢI THẾ ĐẦU TƯ</a><a href="#infra">HẠ TẦNG</a><a href="/tin-tuc">TIN TỨC</a></nav><button className="header-button" onClick={onConsultation}>NHẬN HỒ SƠ ĐẦU TƯ</button></header>;
}

export function Hero({ onConsultation }: { onConsultation: () => void }) {
  return <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">SHINEC GIA LAI</p><h1>KIẾN TẠO CỤM CÔNG NGHIỆP <strong>SINH THÁI ĐẮK ĐOA</strong></h1><p>Điểm đến đầu tư xanh của Tây Nguyên với hạ tầng hiện đại, hệ sinh thái công nghiệp tuần hoàn và định hướng phát triển bền vững.</p><div className="actions"><a className="button lime" href="#about">KHÁM PHÁ DỰ ÁN <b>→</b></a><button className="button outline" onClick={onConsultation}>NHẬN HỒ SƠ <b>↓</b></button></div></div><div className="facts"><Fact icon="♧" value="75 ha" label="Quy mô dự án"/><Fact icon="◎" value="VỊ TRÍ" label="Chiến lược"/><Fact icon="◉" value="100%" label="Hạ tầng đồng bộ"/><Fact icon="♙" value="ESG" label="Industrial Cluster"/></div><a className="scroll" href="#about">⌄<small>CUỘN XUỐNG</small></a></section>;
}

export function IntroSection() {
  return <section className="section intro" id="about"><div><p className="eyebrow green">VỀ SHINEC GIA LAI</p><h2>Thành viên hệ sinh thái Shinec<br/>Chủ đầu tư Cụm công nghiệp Đắk Đoa</h2><p>Shinec Gia Lai kế thừa kinh nghiệm và tầm lực của hệ sinh thái Shinec, phát triển Cụm công nghiệp Đắk Đoa theo mô hình khu công nghiệp sinh thái, kiến tạo không gian làm việc xanh.</p><div className="mini"><span>◉<b>Kinh nghiệm phát triển KCN hơn 20 năm</b></span><span>♧<b>Phát triển theo mô hình công nghiệp sinh thái</b></span><span>♙<b>Hạ tầng hiện đại, bền vững</b></span><span>⌘<b>Đồng hành cùng nhà đầu tư lâu dài</b></span></div><a className="text-button" href="#why">TÌM HIỂU THÊM <b>→</b></a></div><div className="building"/></section>;
}

export function AdvantagesSection({ advantages }: { advantages: Advantage[] }) {
  return <section className="section why" id="why"><h2>VÌ SAO LỰA CHỌN ĐẮK ĐOA?</h2><div className="advantages">{advantages.map(([icon,title,text])=><article key={title}><i>{icon}</i><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}

export function ClusterSection({ onPlay }: { onPlay: () => void }) {
  return <section className="section cluster"><button onClick={onPlay} aria-label="Phát video giới thiệu Cụm công nghiệp Đắk Đoa">▶</button><div><p>CỤM CÔNG NGHIỆP</p><h2>ĐẮK ĐOA</h2><span>Trung tâm công nghiệp xanh của Tây Nguyên</span></div><div className="stats"><span><b>75 ha</b>Quy mô</span><span><b>GIA LAI</b>Tỉnh</span><span><b>ĐẮK ĐOA</b>Huyện</span><span><b>◉</b>Industrial Cluster</span></div></section>;
}

export function InvestmentSections({ industry }: { industry: string[] }) {
  return <><section className="section two-col" id="planning"><Panel title="QUY HOẠCH TỔNG THỂ" visual items={["Khu sản xuất","Khu kho vận","Khu hành chính - dịch vụ","Cây xanh, cảnh quan","Hồ điều hòa","Trạm xử lý nước thải"]}/><Panel title="HẠ TẦNG ĐỒNG BỘ" items={["Giao thông kết nối","Cấp điện ổn định","Cấp nước đạt chuẩn","Xử lý nước thải","Viễn thông hiện đại","Phòng cháy chữa cháy"]}/></section><section className="section two-col"><Panel title="NGÀNH NGHỀ ƯU TIÊN" items={industry}/><article className="esg"><p>ESG - CÔNG NGHIỆP XANH</p><div>{[["♧","MÔI TRƯỜNG","100%"],["♙","XÃ HỘI","35%+"],["♜","QUẢN TRỊ","100%"]].map(([icon,label,value])=><span key={label}><i>{icon}</i><b>{label}</b><strong>{value}</strong><small>Phát triển bền vững</small></span>)}</div></article></section></>;
}

export function NewsSection() {
  return <section className="section bottom" id="news"><article className="process"><h2>QUY TRÌNH ĐẦU TƯ</h2><div>{["Đăng ký đầu tư","Khảo sát địa điểm","Tư vấn đầu tư","Ký kết hợp đồng","Triển khai dự án"].map((step,index)=><span key={step}><i>0{index+1}</i>{step}</span>)}</div></article><article className="news"><h2>TIN TỨC & SỰ KIỆN</h2><div>{["Cụm công nghiệp Đắk Đoa","Định hướng công nghiệp xanh","Gia Lai - Điểm đến mới"].map((title,index)=><a href="/tin-tuc" key={title}><i className={`news-image image-${index}`}/><small>15/06/2024</small><b>{title}</b><em>Xem chi tiết →</em></a>)}</div></article></section>;
}

export function ConsultationCta({ onConsultation }: { onConsultation: () => void }) {
  return <section className="invest"><p>SẴN SÀNG ĐẦU TƯ TẠI</p><h2>CỤM CÔNG NGHIỆP ĐẮK ĐOA?</h2><span>Đội ngũ của chúng tôi luôn sẵn sàng đồng hành cùng nhà đầu tư.</span><button className="button lime" onClick={onConsultation}>ĐĂNG KÝ TƯ VẤN <b>→</b></button></section>;
}

export function SiteFooter() { return <footer id="contact"><div className="footer-brand"><a className="brand" href="#top"><i>≋</i><span>DAKDOA<small>INDUSTRIAL CLUSTER</small></span></a><p>CÔNG TY CỔ PHẦN SHINEC GIA LAI<br/>Khu 7, xã Đắk Đoa, tỉnh Gia Lai, Việt Nam<br/>Hotline: 0269 3 666 666<br/>Email: info@shinecgialai.vn</p></div><FooterColumn title="VỀ CHÚNG TÔI" links={["Giới thiệu","Tầm nhìn - Sứ mệnh","Năng lực thực hiện"]}/><FooterColumn title="DỰ ÁN ĐẦU TƯ" links={["Quy hoạch tổng thể","Hạ tầng","Ngành nghề ưu tiên"]}/><FooterColumn title="THÔNG TIN" links={["Tin tức","Tài liệu","Câu hỏi thường gặp"]}/><div><h3>LIÊN HỆ</h3><div className="map">ĐẮK ĐOA<br/>GIA LAI</div></div></footer>; }

export function ConsultationForm({ submitted, onClose, onSubmit }: { submitted: boolean; onClose: () => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) { return <div className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onMouseDown={onClose}><div className="consultation-card" onMouseDown={(event) => event.stopPropagation()}>{submitted ? <div className="form-success"><i>✓</i><p className="eyebrow green">ĐĂNG KÝ THÀNH CÔNG</p><h2>Cảm ơn quý nhà đầu tư</h2><p>Thông tin đã được tiếp nhận. Đội ngũ Shinec Gia Lai sẽ liên hệ trong thời gian sớm nhất.</p><button className="button lime" onClick={onClose}>ĐÓNG <b>→</b></button></div> : <><button className="close-form" onClick={onClose} aria-label="Đóng biểu mẫu">×</button><p className="eyebrow green">SHINEC GIA LAI</p><h2 id="consultation-title">ĐĂNG KÝ NHẬN TƯ VẤN</h2><p className="form-intro">Để lại thông tin, chúng tôi sẽ liên hệ và gửi hồ sơ đầu tư phù hợp với nhu cầu của quý doanh nghiệp.</p><form onSubmit={onSubmit}><label>HỌ VÀ TÊN<input name="fullName" required placeholder="Nhập họ và tên" /></label><label>SỐ ĐIỆN THOẠI<input name="phone" required type="tel" pattern="[0-9+ ]{8,}" placeholder="Nhập số điện thoại" /></label><label>EMAIL<input name="email" required type="email" placeholder="Nhập địa chỉ email" /></label><label>NHU CẦU QUAN TÂM<select name="interest" defaultValue=""><option value="" disabled>Chọn nhu cầu tư vấn</option><option>Thuê đất công nghiệp</option><option>Hạ tầng và tiện ích</option><option>Nhận hồ sơ đầu tư</option><option>Khác</option></select></label><label>GHI CHÚ<textarea name="message" rows={3} placeholder="Nội dung cần tư vấn" /></label><label className="consent"><input required type="checkbox" /> <span>Tôi đồng ý để Shinec Gia Lai liên hệ và sử dụng thông tin phục vụ tư vấn đầu tư.</span></label><button className="button lime" type="submit">GỬI ĐĂNG KÝ <b>→</b></button></form></>}</div></div>; }

export function VideoModal({ video, onClose }: { video: RefObject<HTMLVideoElement | null>; onClose: () => void }) { return <div className="video-modal" role="dialog" aria-modal="true" aria-label="Video giới thiệu Cụm công nghiệp Đắk Đoa" onMouseDown={onClose}><div className="video-player" onMouseDown={(event) => event.stopPropagation()}><button className="close-video" onClick={onClose} aria-label="Đóng video">×</button><video ref={video} controls autoPlay muted playsInline poster="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=85"><source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />Trình duyệt của bạn không hỗ trợ video HTML5.</video><p>VIDEO GIỚI THIỆU CỤM CÔNG NGHIỆP ĐẮK ĐOA</p></div></div>; }

function Fact({ icon, value, label }: { icon: string; value: string; label: string }) { return <div><i>{icon}</i><b>{value}</b><span>{label}</span></div>; }
function Panel({ title, items, visual = false }: PanelProps) { return <article className={`panel ${visual ? "with-visual" : ""}`} id={title.includes("HẠ TẦNG") ? "infra" : undefined}><h2>{title}</h2><div className="panel-body">{visual && <i className="plan-image"/>}<div className="panel-items">{items.map((item,index) => <span key={item}><i>{["◈","⌘","♧","◉","♙","⌖"][index]}</i>{item}</span>)}</div></div><a className="text-button" href="#contact">TÌM HIỂU THÊM <b>→</b></a></article>; }
function FooterColumn({ title, links }: { title: string; links: string[] }) { return <div><h3>{title}</h3>{links.map((link) => <a href="#top" key={link}>{link}</a>)}</div>; }
