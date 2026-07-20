"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import AreaModal from "./AreaModal";
import { AREAS } from "@/lib/content";

export default function AreasSection() {
  const [activeArea, setActiveArea] = useState<(typeof AREAS)[number] | null>(null);

  return (
    <section
      id="areas"
      className="flex min-h-dvh flex-col justify-center bg-ink-2 px-6 py-16 sm:px-8 lg:snap-start lg:px-[clamp(48px,7vw,110px)] lg:py-0"
    >
      <Reveal className="mx-auto max-w-[640px] text-center">
        <span className="text-xs tracking-[0.4em] text-gold uppercase">Especialidades</span>
        <h2 className="mt-4 font-serif text-[clamp(34px,3.8vw,56px)] font-medium text-cream">Áreas de Atuação</h2>
      </Reveal>
      <div className="mx-auto mt-12 grid w-full max-w-[1080px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {AREAS.map((a, i) => (
          <Reveal
            key={a.numeral}
            delayMs={i * 100}
            onClick={() => setActiveArea(a)}
            className="cursor-pointer rounded-[3px] border border-gold/16 bg-ink-3 px-8 py-9 pb-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,.25)]"
          >
            <span className="font-serif text-4xl leading-none text-gold">{a.numeral}</span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-cream">{a.title}</h3>
            <p className="mt-3.5 text-[14.5px] leading-[1.7] font-light text-cream/60">{a.desc}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveArea(a);
              }}
              className="mt-6 inline-block cursor-pointer border-b border-gold/40 pb-1 text-xs tracking-[0.14em] text-gold uppercase"
            >
              Consultar →
            </button>
          </Reveal>
        ))}
      </div>

      <AreaModal area={activeArea} onClose={() => setActiveArea(null)} />
    </section>
  );
}
