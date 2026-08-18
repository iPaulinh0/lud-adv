"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { buildWhatsAppLink, type Area } from "@/lib/content";

type AreaModalProps = {
  area: Area | null;
  onClose: () => void;
};

export default function AreaModal({ area, onClose }: AreaModalProps) {
  const open = area !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-80 flex items-center justify-center p-5 transition-opacity duration-300 sm:p-8 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />

      <div
        className={`relative z-10 max-h-[82vh] w-full max-w-[560px] overflow-y-auto rounded-[3px] border border-gold/18 bg-ink-3 p-7 shadow-[0_30px_80px_rgba(0,0,0,.5)] transition-transform duration-300 sm:p-10 ${
          open ? "translate-y-0" : "translate-y-4"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-[3px] border border-cream/20 text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          ✕
        </button>

        {area && (
          <>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Serviços</span>
            <h3 className="mt-3 pr-10 font-serif text-2xl font-semibold text-cream sm:text-3xl">{area.title}</h3>
            <ul className="mt-6 flex flex-col gap-3 border-t border-gold/14 pt-6">
              {area.services?.map((service) => (
                <li key={service.label} className="flex items-start gap-3 text-[15px] leading-[1.6] text-cream/80">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {service.info ? (
                    <button
                      onClick={() =>
                        toast(service.label, {
                          description: service.info,
                          duration: 12000,
                        })
                      }
                      className="cursor-pointer text-left text-gold underline decoration-gold/40 underline-offset-2 transition-colors duration-300 hover:text-gold-light"
                    >
                      {service.label}
                    </button>
                  ) : (
                    <span>{service.label}</span>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={buildWhatsAppLink(`Olá, Ludmila! Gostaria de saber mais sobre ${area.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-[3px] bg-gold px-7 py-3.5 text-[13px] font-bold tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-gold-light"
            >
              Falar no WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  );
}
