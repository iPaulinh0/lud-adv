export const CONTACT = {
  whatsappNumber: "5592992580401",
  whatsappDisplay: "(92) 99258-0401",
  location: "Manaus · Amazonas",
  defaultMessage: "Olá, Ludmila! Gostaria de entrar em contato.",
  instagram: "https://www.instagram.com/ludmilaadvocacia",
  formUrl: "https://triagem.ludmilaadv.com.br/",
};

export function buildWhatsAppLink(message: string = CONTACT.defaultMessage) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type SectionId = "hero" | "sobre" | "areas" | "contato";

export const SECTIONS: SectionId[] = ["hero", "sobre", "areas", "contato"];

export const NAV_META: Record<SectionId, { label: string; short: string }> = {
  hero: { label: "Início", short: "Início" },
  sobre: { label: "Sobre", short: "Sobre" },
  areas: { label: "Áreas", short: "Áreas" },
  contato: { label: "Contato", short: "Contato" },
};

export type AreaService = { label: string; info?: string };

export type Area = {
  numeral: string;
  title: string;
  desc: string;
  services?: AreaService[];
  note?: string;
};

export const AREAS: Area[] = [
  {
    numeral: "I",
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, cobranças e questões patrimoniais tratados com atenção técnica e visão estratégica.",
    note: "Uma área ampla do direito — entre em contato para entender como posso ajudar no seu caso específico.",
  },
  {
    numeral: "II",
    title: "Direito de Família",
    desc: "Divórcio, guarda, pensão, reconhecimento de união estável e alimentos conduzidos com sensibilidade e rigor técnico.",
    services: [
      { label: "Divórcio consensual – mesmo advogado" },
      { label: "Divórcio consensual – Adv. diferentes" },
      { label: "Definição ou alteração de Guarda" },
      { label: "Alimentos (arbitramento, exoneração e revisional)" },
      { label: "Execução de alimentos – rito prisional" },
      { label: "Execução de Alimentos – rito expropriatório" },
      { label: "Regulamentação de Visita" },
      { label: "Reconhecimento, inclusive pós mortem" },
      { label: "Dissolução de União Estável Consensual" },
      { label: "Dissolução de União Estável Litigiosa" },
    ],
  },
  {
    numeral: "III",
    title: "Direito do Consumidor",
    desc: "Proteção dos seus direitos frente a empresas, cobranças indevidas e relações de consumo abusivas.",
    services: [
      { label: "Empréstimo consignado não reconhecido" },
      {
        label: "RMC/RCC",
        info: "RMC (Reserva de Margem Consignável) e RCC (Reserva de Cartão Consignado) são descontos automáticos no benefício do INSS ou salário ligados a cartões de crédito. Muitas vezes, bancos os vendem como empréstimos comuns, gerando dívidas difíceis de quitar porque o desconto cobre apenas o valor mínimo da fatura.",
      },
      { label: "Negativação indevida" },
      { label: "Falha na prestação do serviço" },
      {
        label: "Overbooking",
        info: "O overbooking (ou sobrevenda) ocorre quando uma companhia aérea vende mais passagens do que a aeronave suporta.",
      },
    ],
  },
  {
    numeral: "IV",
    title: "Consultivo para Mulheres",
    desc: "Orientação estratégica e acolhedora para mulheres em momentos de decisão delicados.",
    services: [
      { label: "Consulta pré-divórcio" },
      { label: "Orientação antes de sair de casa" },
      { label: "Orientação sobre guarda, provas e rotina dos filhos" },
    ],
  },
];
