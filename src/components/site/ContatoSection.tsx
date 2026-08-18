import Reveal from "./Reveal";
import { CONTACT, buildWhatsAppLink } from "@/lib/content";

export default function ContatoSection() {
  return (
    <section id="contato" className="flex min-h-dvh flex-col bg-ink lg:snap-start">
      <div className="grid flex-1 grid-cols-1 gap-12 px-6 pt-28 pb-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-0 lg:px-[clamp(48px,7vw,110px)] lg:pt-[clamp(90px,10vh,120px)]">
        <div className="lg:pr-15">
          <Reveal as="span" className="block text-xs tracking-[0.4em] text-gold uppercase">
            Contato
          </Reveal>
          <Reveal
            as="h2"
            delayMs={100}
            className="m-0 mt-4 font-serif text-[clamp(34px,3.8vw,56px)] leading-[1.08] font-medium"
          >
            Entre em contato
          </Reveal>
          <Reveal
            as="p"
            delayMs={200}
            className="m-0 mt-5.5 max-w-[440px] text-base leading-[1.8] font-light text-cream/66"
          >
            Preencha o formulário e entraremos em contato o quanto antes.
          </Reveal>
          <Reveal delayMs={300} className="mt-9 flex flex-col gap-4.5">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 text-cream transition-colors duration-300 hover:text-gold"
            >
              <span className="flex h-9.5 w-9.5 items-center justify-center rounded-[3px] border border-gold/40 text-gold">
                ☎
              </span>
              <span className="text-[15px]">{CONTACT.whatsappDisplay} · WhatsApp</span>
            </a>
            <div className="flex items-center gap-3.5 text-cream/82">
              <span className="flex h-9.5 w-9.5 items-center justify-center rounded-[3px] border border-gold/40 text-gold">
                ⚑
              </span>
              <span className="text-[15px]">{CONTACT.location}</span>
            </div>
          </Reveal>
        </div>

        <Reveal
          delayMs={200}
          className="flex flex-col items-start gap-5 rounded-[3px] border border-gold/18 bg-ink-4 p-7 sm:p-9"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-gold/40 text-xl text-gold">
            ✎
          </span>
          <div>
            <h3 className="m-0 font-serif text-xl text-cream">Formulário de Contato</h3>
            <p className="m-0 mt-2.5 text-[15px] leading-[1.7] font-light text-cream/66">
              Preencha o formulário com alguns detalhes do seu caso e entraremos em contato o quanto antes. Leva
              menos de 2 minutos.
            </p>
          </div>
          <a
            href={CONTACT.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full rounded-[3px] bg-gold py-4 text-center text-[13px] font-bold tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-gold-light"
          >
            Preencher Formulário
          </a>
        </Reveal>
      </div>

      <footer className="flex flex-wrap items-end justify-between gap-8 border-t border-gold/16 px-6 py-9 sm:px-8 lg:px-[clamp(48px,7vw,110px)]">
        <div>
          <div className="font-serif text-xl text-cream">Ludmila Amazonas</div>
          <div className="mt-2 text-xs tracking-[0.14em] text-gold uppercase">
            civil · família · consumidor · mulher
          </div>
          <p className="m-0 mt-4 max-w-[520px] text-xs leading-[1.7] font-light text-cream/45">
            Este site tem caráter meramente informativo, em conformidade com o Código de Ética e Disciplina da OAB
            (Provimento nº 205/2021). Não constitui oferta, captação de clientela ou mercantilização da advocacia.
          </p>
        </div>
        <div className="flex flex-col items-end gap-3.5">
          <div className="flex gap-5">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.1em] text-cream/60 uppercase transition-colors duration-300 hover:text-gold"
            >
              Instagram
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.1em] text-cream/60 uppercase transition-colors duration-300 hover:text-gold"
            >
              WhatsApp
            </a>
          </div>
          <div className="text-[11px] text-cream/35">© 2026 Ludmila Amazonas · Todos os direitos reservados</div>
        </div>
      </footer>
    </section>
  );
}
