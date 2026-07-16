"use client";

import { useState } from "react";
import { NAV_META, SECTIONS, buildWhatsAppLink, type SectionId } from "@/lib/content";

type HeaderProps = {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
};

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id: SectionId) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
    <header className="fixed top-0 right-0 left-0 z-60 flex items-center justify-between border-b border-gold/16 bg-ink/55 px-6 py-5 backdrop-blur-md sm:px-8 lg:px-12">
      <button
        onClick={() => handleNavigate("hero")}
        className="flex cursor-pointer flex-col text-left leading-none"
      >
        <span className="font-serif text-lg font-semibold tracking-wide text-cream sm:text-xl lg:text-[23px]">
          Dr. Ludmila Amazonas
        </span>
        <span className="mt-1 text-[9px] tracking-[0.34em] text-gold uppercase sm:text-[10px]">
          família · penal&nbsp;<span className="tracking-[3.4px]">·</span>&nbsp;consumidor
        </span>
      </button>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-8 lg:flex">
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
          className="rounded-[3px] border border-gold px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          Agendar
        </a>
      </nav>

      {/* Mobile controls */}
      <div className="flex items-center gap-3 lg:hidden">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] border border-gold px-4 py-2 text-[11px] font-semibold tracking-[0.1em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          Agendar
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
