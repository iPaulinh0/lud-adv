import Image from "next/image";
import aboutPhoto from "@/assets/images/about.jpg";
import Reveal from "./Reveal";

export default function SobreSection() {
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
              alt="Ludmila Amazonas"
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
          Conheça Ludmila
        </Reveal>
        <Reveal
          as="p"
          delayMs={200}
          className="m-0 mt-6 max-w-[520px] text-base leading-[1.8] text-charcoal/72"
        >
          Ludmila Amazonas constrói sua atuação sobre escuta atenta, técnica apurada e defesa incansável dos
          interesses de cada cliente. Com pós-graduação em Direito de Família, dedica-se a transformar questões
          delicadas em soluções sólidas e humanas.
        </Reveal>
      </div>
    </section>
  );
}
