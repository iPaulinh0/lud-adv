"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/content";

export default function DepoimentosSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[index];

  return (
    <section
      id="depoimentos"
      className="flex min-h-dvh flex-col items-center justify-center bg-cream px-6 py-16 text-charcoal sm:px-8 lg:snap-start lg:px-[clamp(48px,7vw,110px)] lg:py-0"
    >
      <Reveal className="text-center">
        <span className="text-xs tracking-[0.4em] text-gold-muted uppercase">Depoimentos</span>
        <h2 className="mt-4 font-serif text-[clamp(34px,3.8vw,56px)] font-medium text-charcoal">
          Quem confiou, recomenda
        </h2>
      </Reveal>

      <Reveal
        delayMs={120}
        className="mt-12 flex min-h-[230px] max-w-[820px] flex-col justify-center text-center lg:mt-13"
      >
        <div className="h-8.5 font-serif text-7xl leading-[0.6] text-gold">&ldquo;</div>
        <p className="m-0 font-serif text-[clamp(24px,2.6vw,34px)] leading-[1.5] font-medium text-charcoal italic transition-opacity duration-400">
          {active.quote}
        </p>
        <div className="mt-7">
          <div className="text-[15px] font-bold tracking-[0.02em] text-charcoal">{active.name}</div>
          <div className="mt-1.5 text-xs tracking-[0.16em] text-gold-muted uppercase">{active.role}</div>
        </div>
      </Reveal>

      <div className="mt-11 flex items-center gap-3">
        <button
          onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          aria-label="Depoimento anterior"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[3px] border border-charcoal/20 text-charcoal transition-colors duration-300 hover:border-gold hover:text-gold-muted"
        >
          ←
        </button>
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setIndex(i)}
            aria-label={`Ir para depoimento de ${t.name}`}
            className={`block h-2 cursor-pointer rounded-full transition-all duration-350 ${
              i === index ? "w-6.5 bg-gold" : "w-2 bg-charcoal/20"
            }`}
          />
        ))}
        <button
          onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
          aria-label="Próximo depoimento"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[3px] border border-charcoal/20 text-charcoal transition-colors duration-300 hover:border-gold hover:text-gold-muted"
        >
          →
        </button>
      </div>
    </section>
  );
}
