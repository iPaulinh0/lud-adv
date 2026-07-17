import Image from "next/image";
import heroPhoto from "@/assets/images/hero.png";
import Reveal from "./Reveal";
import { buildWhatsAppLink, type SectionId } from "@/lib/content";

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

      {/* eyebrow */}
      <Reveal className="relative z-12 text-center lg:absolute lg:top-[clamp(96px,13vh,140px)] lg:right-0 lg:left-0">
        <span className="text-xs tracking-[0.42em] text-gold uppercase">LUDMILA AMAZONAS</span>
      </Reveal>

      {/* headline: stacked in normal flow on mobile, fused behind the figure on desktop */}
      <div className="relative z-2 mt-2 text-center lg:pointer-events-none lg:absolute lg:top-[clamp(118px,17vh,180px)] lg:right-0 lg:left-0 lg:mt-0">
        <h1
          className="animate-hero-rise m-0 font-serif text-[clamp(40px,11vw,58px)] leading-[0.86] font-medium tracking-[-0.02em] text-cream lg:text-[clamp(50px,10vw,150px)]"
          style={{ textShadow: "0 6px 50px rgba(9,13,19,.85)" }}
        >
          <span className="block text-cream">Defendendo</span>
          <span className="block">
            <em className="text-[#e6c583] italic">seus direitos</em>
          </span>
        </h1>
      </div>

      {/* figure: a normal, fully unobstructed image on mobile; full-bleed fused figure on desktop */}
      <div className="relative z-5 mt-5 lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:pointer-events-none">
        <Image
          src={heroPhoto}
          alt="Dr. Ludmila Amazonas"
          priority
          sizes="(max-width: 1024px) 62vw, 40vw"
          className="animate-hero-fade block h-[40vh] max-h-90 w-auto max-w-none lg:h-[76vh] lg:max-h-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, #000 9%, #000 50%, rgba(0,0,0,.55) 74%, rgba(0,0,0,.18) 88%, transparent 97%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, #000 9%, #000 50%, rgba(0,0,0,.55) 74%, rgba(0,0,0,.18) 88%, transparent 97%)",
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

      {/* copy: normal flow below the figure on mobile, floated over the fade on desktop */}
      <Reveal
        delayMs={250}
        className="relative z-10 mt-5 flex flex-col items-center text-center lg:absolute lg:right-0 lg:bottom-[clamp(58px,8vh,96px)] lg:left-0 lg:mt-0 lg:px-6"
      >
        <p className="m-0 max-w-[540px] text-[clamp(15px,1.2vw,17px)] leading-[1.7] font-light text-cream/82">
          Atuação dedicada em Direito de Família, Direito Penal e Direito do Consumidor — um atendimento humano,
          estratégico e absolutamente confidencial.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3 lg:mt-7 lg:gap-4">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] bg-gold px-6 py-3 text-[13px] font-bold tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-gold-light lg:px-8 lg:py-4"
          >
            Agendar Consulta
          </a>
          <button
            onClick={() => onNavigate("sobre")}
            className="cursor-pointer rounded-[3px] border border-cream/32 px-6 py-3 text-[13px] font-medium tracking-[0.14em] text-cream uppercase backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:text-gold lg:px-7 lg:py-4"
          >
            Conheça Ludmila
          </button>
        </div>

        {/* compact stats row for small screens */}
        <div className="mt-5 flex gap-10 lg:hidden">
          <div className="text-center">
            <div className="font-serif text-3xl leading-none text-gold">
              05<span className="text-[0.5em]">+</span>
            </div>
            <div className="mt-1.5 text-[10px] tracking-[0.24em] text-cream/62 uppercase">anos de atuação</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl leading-none text-gold">
              100<span className="text-[0.5em]">+</span>
            </div>
            <div className="mt-1.5 text-[10px] tracking-[0.24em] text-cream/62 uppercase">casos conduzidos</div>
          </div>
        </div>
      </Reveal>

      {/* floating stats (desktop) */}
      <div className="pointer-events-none absolute top-1/2 left-[clamp(40px,6vw,96px)] z-11 hidden -translate-y-1/2 text-center lg:block">
        <div className="font-serif text-[clamp(44px,4vw,64px)] leading-none text-gold">
          05<span className="text-[0.5em]">+</span>
        </div>
        <div className="mt-2 text-[10px] tracking-[0.24em] text-cream/62 uppercase">
          anos de
          <br />
          atuação
        </div>
      </div>
      <div className="pointer-events-none absolute top-1/2 right-[clamp(40px,6vw,96px)] z-11 hidden -translate-y-1/2 text-center lg:block">
        <div className="font-serif text-[clamp(44px,4vw,64px)] leading-none text-gold">
          100<span className="text-[0.5em]">+</span>
        </div>
        <div className="mt-2 text-[10px] tracking-[0.24em] text-cream/62 uppercase">
          casos
          <br />
          conduzidos
        </div>
      </div>

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
