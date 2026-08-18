"use client";

import { useState } from "react";
import { NAV_META, SECTIONS, buildWhatsAppLink, type SectionId } from "@/lib/content";

type HeaderProps = {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
};

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isFloating = activeSection !== "hero";

  const handleNavigate = (id: SectionId) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
    <header
      className={`fixed left-1/2 z-60 flex -translate-x-1/2 items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isFloating
          ? "top-4 w-[min(94%,1160px)] rounded-full border border-gold/25 bg-ink/85 px-5 py-3 shadow-[0_14px_40px_rgba(0,0,0,.45)] backdrop-blur-lg sm:px-7"
          : "top-0 w-full rounded-none border-b border-gold/16 bg-ink/55 px-6 py-5 backdrop-blur-md sm:px-8 lg:px-12"
      }`}
    >
      <button
        onClick={() => handleNavigate("hero")}
        className="flex cursor-pointer flex-col text-left leading-none"
      >
        <span
          className={`font-serif font-semibold tracking-wide text-cream transition-all duration-500 ${
            isFloating ? "text-base sm:text-lg" : "text-lg sm:text-xl lg:text-[23px]"
          }`}
        >
          Ludmila Amazonas
        </span>
        <span
          className={`hidden overflow-hidden text-[9px] tracking-[0.34em] text-gold uppercase transition-all duration-500 sm:block sm:text-[10px] ${
            isFloating ? "mt-0 max-h-0 opacity-0" : "mt-1 max-h-4 opacity-100"
          }`}
        >
          civil · família · consumidor&nbsp;<span className="tracking-[3.4px]">·</span>&nbsp;mulher
        </span>
      </button>

      {/* Desktop nav */}
      <nav className={`hidden items-center transition-all duration-500 lg:flex ${isFloating ? "gap-6" : "gap-8"}`}>
        {SECTIONS.map((id) => {
          const isActive = id === activeSection;
          return (
            <button
              key={id}
              onClick={() => handleNavigate(id)}
              className={`cursor-pointer border-b pb-1 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${
                isActive ? "border-gold text-gold" : "border-transparent text-cream/72 hover:text-gold hover:border-gold"
              }`}
            >
              {NAV_META[id].label}
            </button>
          );
        })}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full border border-gold font-semibold whitespace-nowrap text-gold uppercase transition-all duration-300 hover:bg-gold hover:text-ink ${
            isFloating ? "px-4 py-2 text-[11px] tracking-[0.06em]" : "rounded-[3px] px-5 py-2.5 text-xs tracking-[0.08em]"
          }`}
        >
          Entre em contato
        </a>
      </nav>

      {/* Mobile controls */}
      <div className="flex items-center gap-3 lg:hidden">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] border border-gold px-3 py-2 text-[10px] font-semibold tracking-[0.04em] whitespace-nowrap text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          Entre em contato
        </a>
        <button
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[3px] border border-cream/20"
        >
          <span
            className={`block h-px w-5 bg-cream transition-transform duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-cream transition-transform duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>
    </header>

    {/* Mobile menu overlay */}
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-ink/98 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
        menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {SECTIONS.map((id) => {
        const isActive = id === activeSection;
        return (
          <button
            key={id}
            onClick={() => handleNavigate(id)}
            className={`font-serif text-3xl font-medium tracking-wide transition-colors duration-300 ${
              isActive ? "text-gold" : "text-cream/80"
            }`}
          >
            {NAV_META[id].label}
          </button>
        );
      })}
    </div>
    </>
  );
}
