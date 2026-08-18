"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import WhatsAppButton from "./WhatsAppButton";
import HeroSection from "./HeroSection";
import SobreSection from "./SobreSection";
import AreasSection from "./AreasSection";
import ContatoSection from "./ContatoSection";
import type { SectionId } from "@/lib/content";

export default function LandingPage() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const sections = scroller.querySelectorAll<HTMLElement>("section[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToSection = (id: SectionId) => {
    const el = scrollerRef.current?.querySelector<HTMLElement>(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <SideNav activeSection={activeSection} onNavigate={scrollToSection} />
      <WhatsAppButton />
      <div
        ref={scrollerRef}
        className="scroller relative h-dvh overflow-y-scroll scroll-smooth bg-ink font-sans text-cream [-webkit-overflow-scrolling:touch] lg:snap-y lg:snap-mandatory"
      >
        <HeroSection onNavigate={scrollToSection} />
        <SobreSection />
        <AreasSection />
        <ContatoSection />
      </div>
    </>
  );
}
