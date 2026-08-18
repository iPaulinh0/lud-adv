import Image from "next/image";
import heroPhoto from "@/assets/images/hero.png";
import Reveal from "./Reveal";
import type { SectionId } from "@/lib/content";

type HeroSectionProps = {
  onNavigate: (id: SectionId) => void;
};

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center overflow-hidden px-6 pt-24 pb-10 lg:block lg:px-0 lg:pt-0 lg:pb-0 lg:snap-start"
      style={{
        background: "radial-gradient(120% 90% at 50% 15%, #16202e 0%, #0e131b 55%, #090d13 100%)",
      }}
    >
      {/* ambient glow behind figure */}
      <div
        className="pointer-events-none absolute top-[44%] left-1/2 z-1 h-[min(760px,80vw)] w-[min(760px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(198,161,91,.16) 0%, rgba(198,161,91,0) 65%)",
        }}
      />

      {/* identity: stacked in normal flow on mobile, fused behind the figure on desktop */}
      <div className="relative z-2 text-center lg:pointer-events-none lg:absolute lg:top-[clamp(100px,15vh,160px)] lg:right-0 lg:left-0">
        <h1
          className="animate-hero-rise m-0 font-serif text-[clamp(44px,12vw,62px)] leading-[0.86] font-medium tracking-[-0.02em] text-cream lg:text-[clamp(50px,9vw,130px)]"
          style={{ textShadow: "0 6px 50px rgba(9,13,19,.85)" }}
        >
          Ludmila Amazonas
        </h1>
        <p className="m-0 mt-4 font-serif text-2xl text-[#e6c583] italic lg:mt-5 lg:text-[clamp(26px,2.6vw,38px)]">
          Advogada
        </p>
        <p className="m-0 mt-3 text-[11px] tracking-[0.22em] text-cream/60 uppercase sm:text-xs sm:tracking-[0.32em] lg:mt-3 lg:text-sm lg:tracking-[0.4em]">
          Civil • Familiar • Consumidor • Mulher
        </p>
      </div>

      {/* figure: a normal, fully unobstructed image on mobile; full-bleed fused figure on desktop */}
      <div className="relative z-5 mt-6 lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:pointer-events-none">
        <Image
          src={heroPhoto}
          alt="Ludmila Amazonas"
          priority
          sizes="(max-width: 1024px) 62vw, 40vw"
          className="animate-hero-fade block h-[44vh] max-h-100 w-auto max-w-none [--fade-top:3%] lg:h-[76vh] lg:max-h-none lg:[--fade-top:9%]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, #000 var(--fade-top), #000 50%, rgba(0,0,0,.55) 74%, rgba(0,0,0,.18) 88%, transparent 97%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, #000 var(--fade-top), #000 50%, rgba(0,0,0,.55) 74%, rgba(0,0,0,.18) 88%, transparent 97%)",
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,.55))",
          }}
        />
      </div>

      {/* blend overlay: melts the figure's lower body into the copy zone — desktop-only effect */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-8 hidden h-[42%] lg:block"
        style={{
          background:
            "linear-gradient(to top, #090d13 0%, rgba(9,13,19,.92) 26%, rgba(9,13,19,.5) 56%, rgba(9,13,19,0) 100%)",
        }}
      />

      {/* CTA: normal flow below the figure on mobile, floated over the fade on desktop */}
      <Reveal
        delayMs={250}
        className="relative z-10 mt-7 flex flex-col items-center text-center lg:absolute lg:right-0 lg:bottom-[clamp(58px,8vh,96px)] lg:left-0 lg:mt-0 lg:px-6"
      >
        <button
          onClick={() => onNavigate("sobre")}
          className="w-56 cursor-pointer rounded-[3px] bg-gold px-6 py-3 text-center text-[13px] font-bold tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-gold-light lg:w-64 lg:px-8 lg:py-4"
        >
          Conheça a Ludmila
        </button>
      </Reveal>

      <button
        onClick={() => onNavigate("sobre")}
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-4 left-1/2 z-12 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-1.5 lg:flex"
      >
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="animate-scroll-hint">
          <path d="M7 1v16M1 12l6 6 6-6" stroke="#c6a15b" strokeWidth="1.4" />
        </svg>
      </button>
    </section>
  );
}
