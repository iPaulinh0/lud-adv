"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import aboutPhoto from "@/assets/images/about.jpg";
import Reveal from "./Reveal";
import { COUNTER_TARGETS } from "@/lib/content";

export default function SobreSection() {
  const countersRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState(() => COUNTER_TARGETS.map(() => 0));
  const done = useRef(false);

  useEffect(() => {
    const el = countersRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            const start = performance.now();
            const duration = 1500;
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setCounts(COUNTER_TARGETS.map((c) => Math.round(c.target * eased)));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="grid min-h-dvh grid-cols-1 bg-cream text-charcoal lg:grid-cols-[1fr_1.1fr] lg:items-center lg:snap-start"
    >
      <div className="relative w-full px-6 pt-24 sm:px-8 sm:pt-28 lg:h-full lg:w-auto lg:px-0 lg:py-[clamp(40px,6vh,90px)] lg:pl-[clamp(48px,7vw,110px)]">
        <Reveal className="relative aspect-3/4 w-full border border-charcoal/16 lg:aspect-auto lg:h-full">
          <div className="absolute inset-3.5 overflow-hidden">
            <Image
              src={aboutPhoto}
              alt="Dra. Ludmila Amazonas"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="px-6 py-10 sm:px-8 sm:py-14 lg:px-[clamp(48px,7vw,110px)] lg:py-[clamp(40px,6vh,90px)]">
        <Reveal as="span" className="block text-xs tracking-[0.4em] text-gold-muted uppercase">
          Sobre a advogada
        </Reveal>
        <Reveal
          as="h2"
          delayMs={100}
          className="m-0 mt-4 font-serif text-[clamp(34px,3.6vw,54px)] leading-[1.08] font-medium text-charcoal"
        >
          Compromisso com a
          <br />
          justiça e com você
        </Reveal>
        <Reveal
          as="p"
          delayMs={200}
          className="m-0 mt-6 max-w-[520px] text-base leading-[1.8] text-charcoal/72"
        >
          A Dra. Ludmila Amazonas constrói sua atuação sobre escuta atenta, técnica apurada e defesa incansável dos
          interesses de cada cliente. Com pós-graduação em Direito de Família, dedica-se a transformar questões
          delicadas em soluções sólidas e humanas.
        </Reveal>

        <Reveal delayMs={300} className="mt-11 border-t border-charcoal/14 pt-8">
          <div ref={countersRef} className="grid grid-cols-3 gap-5">
            {COUNTER_TARGETS.map((c, i) => {
              const value = c.pad ? String(counts[i]).padStart(2, "0") : String(counts[i]);
              return (
                <div key={c.label}>
                  <div className="font-serif text-[clamp(38px,3.8vw,54px)] leading-none text-charcoal">
                    {value}
                    {c.suffix}
                  </div>
                  <div className="mt-2 text-xs font-semibold tracking-[0.14em] text-gold-muted uppercase">
                    {c.label}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
