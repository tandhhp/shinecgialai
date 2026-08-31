"use client";

import type { FormEvent } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AdvantagesSection,
  ClusterSection,
  ConsultationCta,
  ConsultationForm,
  Hero,
  IntroSection,
  InvestmentSections,
  NewsSection,
  SiteFooter,
  SiteHeader,
  VideoModal,
} from "./components/home-sections";

const advantages: [string, string, string][] = [
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
  const video = useRef<HTMLVideoElement>(null);
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function openConsultationForm() {
    setIsSubmitted(false);
    setIsConsultationFormOpen(true);
  }

  function submitConsultationForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function closeVideo() {
    video.current?.pause();
    if (video.current) video.current.currentTime = 0;
    setIsVideoOpen(false);
  }

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.set(".hero-copy > *, .facts, .scroll", { autoAlpha: 0 });
      gsap.set(".hero-copy > *", { y: 24 });
      gsap.set(".facts", { x: 32 });
      gsap.timeline()
        .to(".hero-copy > *", { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" })
        .to(".facts", { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }, "<0.15")
        .to(".scroll", { autoAlpha: 1, duration: 0.4 }, "<0.2");
      gsap.utils.toArray<HTMLElement>(".intro, .why, .cluster, .two-col, .bottom, .invest").forEach((section) => {
        gsap.from(section, { autoAlpha: 0, y: 34, duration: 0.75, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 82%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>(".advantages, .mini, .stats, .esg > div, .process > div, .news > div").forEach((group) => {
        gsap.from(group.children, { autoAlpha: 0, y: 20, duration: 0.45, stagger: 0.08, ease: "power2.out", scrollTrigger: { trigger: group, start: "top 88%", once: true } });
      });
    }, page);

    return () => context.revert();
  }, []);

  return <main ref={page}>
    <SiteHeader onConsultation={openConsultationForm} />
    <Hero onConsultation={openConsultationForm} />
    <IntroSection />
    <AdvantagesSection advantages={advantages} />
    <ClusterSection onPlay={() => setIsVideoOpen(true)} />
    <InvestmentSections industry={industry} />
    <NewsSection />
    <ConsultationCta onConsultation={openConsultationForm} />
    <SiteFooter />
    {isConsultationFormOpen && <ConsultationForm submitted={isSubmitted} onClose={() => setIsConsultationFormOpen(false)} onSubmit={submitConsultationForm} />}
    {isVideoOpen && <VideoModal video={video} onClose={closeVideo} />}
  </main>;
}
