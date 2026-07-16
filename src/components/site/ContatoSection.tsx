"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { CONTACT, buildWhatsAppLink } from "@/lib/content";

export default function ContatoSection() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const caseRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nome = nameRef.current?.value ?? "";
    const tel = phoneRef.current?.value ?? "";
    const caso = caseRef.current?.value ?? "";
    const msg =
      `Olá, Dra. Ludmila! Meu nome é ${nome || "[nome]"}.` +
      (tel ? ` Telefone: ${tel}.` : "") +
      (caso ? ` Sobre o caso: ${caso}` : " Gostaria de agendar uma consulta.");
    window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  };

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
            Vamos conversar
            <br />
            sobre o seu caso
          </Reveal>
          <Reveal
            as="p"
            delayMs={200}
            className="m-0 mt-5.5 max-w-[440px] text-base leading-[1.8] font-light text-cream/66"
          >
            Preencha o formulário e receba um retorno pelo WhatsApp. Todo atendimento é sigiloso.
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
          as="form"
          delayMs={200}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4.5 rounded-[3px] border border-gold/18 bg-ink-4 p-7 sm:p-9"
        >
          <div>
            <label className="text-[11px] tracking-[0.16em] text-cream/50 uppercase">Nome</label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Seu nome completo"
              className="mt-2 w-full border-0 border-b border-cream/20 bg-transparent py-2.5 text-[15px] text-cream outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.16em] text-cream/50 uppercase">Telefone</label>
            <input
              ref={phoneRef}
              type="tel"
              placeholder="(92) 90000-0000"
              className="mt-2 w-full border-0 border-b border-cream/20 bg-transparent py-2.5 text-[15px] text-cream outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.16em] text-cream/50 uppercase">Descrição do caso</label>
            <textarea
              ref={caseRef}
              rows={3}
              placeholder="Conte brevemente como posso ajudar"
              className="mt-2 w-full resize-none border-0 border-b border-cream/20 bg-transparent py-2.5 text-[15px] text-cream outline-none focus:border-gold"
            />
          </div>
          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-[3px] border-0 bg-gold py-4 text-[13px] font-bold tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-gold-light"
          >
            Enviar pelo WhatsApp
          </button>
        </Reveal>
      </div>

      <footer className="flex flex-wrap items-end justify-between gap-8 border-t border-gold/16 px-6 py-9 sm:px-8 lg:px-[clamp(48px,7vw,110px)]">
        <div>
          <div className="font-serif text-xl text-cream">Dr. Ludmila Amazonas</div>
          <div className="mt-2 text-xs tracking-[0.14em] text-gold uppercase">
            família · penal · consumidor
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
          <div className="text-[11px] text-cream/35">© 2026 Dr. Ludmila Amazonas · Todos os direitos reservados</div>
        </div>
      </footer>
    </section>
  );
}
