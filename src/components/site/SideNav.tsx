"use client";

import { NAV_META, SECTIONS, type SectionId } from "@/lib/content";

type SideNavProps = {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
};

export default function SideNav({ activeSection, onNavigate }: SideNavProps) {
  return (
    <div className="fixed top-1/2 right-8 z-55 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex">
      {SECTIONS.map((id) => {
        const isActive = id === activeSection;
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            aria-label={NAV_META[id].label}
            className="group flex cursor-pointer items-center gap-3"
          >
            <span
              className={`text-[10px] tracking-[0.18em] uppercase transition-all duration-300 ${
                isActive ? "text-gold opacity-100" : "text-cream opacity-0 group-hover:opacity-50"
              }`}
            >
              {NAV_META[id].short}
            </span>
            <span
              className={`block h-0.5 transition-all duration-350 ${
                isActive ? "w-6.5 bg-gold" : "w-2 bg-cream/30 group-hover:bg-cream/50"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
