export const CONTACT = {
  whatsappNumber: "5592992580401",
  whatsappDisplay: "(92) 99258-0401",
  location: "Manaus · Amazonas — atendimento com hora marcada",
  defaultMessage: "Olá, Ludmila! Gostaria de agendar uma consulta.",
  instagram: "https://www.instagram.com/ludmilaadvocacia",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSccgtstPOQ4EffUbEQ0OiJQmpwzMBHXDUuTi59OLFsJIqYizA/viewform",
};

export function buildWhatsAppLink(message: string = CONTACT.defaultMessage) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type SectionId = "hero" | "sobre" | "areas" | "depoimentos" | "contato";

export const SECTIONS: SectionId[] = ["hero", "sobre", "areas", "depoimentos", "contato"];

export const NAV_META: Record<SectionId, { label: string; short: string }> = {
  hero: { label: "Início", short: "Hero" },
  sobre: { label: "Sobre", short: "Sobre" },
  areas: { label: "Áreas", short: "Áreas" },
  depoimentos: { label: "Depoimentos", short: "Clientes" },
  contato: { label: "Contato", short: "Contato" },
};

export const COUNTER_TARGETS = [
  { target: 5, suffix: "+", label: "Anos de atuação", pad: true },
  { target: 100, suffix: "+", label: "Casos conduzidos", pad: false },
  { target: 3, suffix: "", label: "Áreas de foco", pad: false },
];

export const TESTIMONIALS = [
  {
    quote:
      "Conduziu meu processo de guarda com uma serenidade e firmeza que me deram paz num dos momentos mais difíceis da minha vida.",
    name: "M. Carvalho",
    role: "Direito de Família",
  },
  {
    quote:
      "Profissional impecável. Explicou cada etapa com clareza e defendeu meus direitos como consumidor até o fim. Recomendo sem hesitar.",
    name: "R. Nogueira",
    role: "Direito do Consumidor",
  },
  {
    quote:
      "Técnica, discreta e sempre acessível. Senti que meu caso era realmente prioridade. Me orientou com clareza num momento muito delicado da minha vida.",
    name: "A. Ferreira",
    role: "Consultivo para Mulheres",
  },
];

export const AREAS = [
  {
    numeral: "I",
    title: "Direito de Família",
    desc: "Divórcio, guarda, pensão, reconhecimento de união estável e alimentos conduzidos com sensibilidade e rigor técnico.",
    services: [
      "Divórcio consensual – mesmo advogado",
      "Divórcio consensual – Adv. diferentes",
      "Definição ou alteração de Guarda",
      "Alimentos (arbitramento, exoneração e revisional)",
      "Execução de alimentos – rito prisional",
      "Execução de Alimentos – rito expropriatório",
      "Regulamentação de Visita",
      "Reconhecimento, inclusive pós mortem",
      "Dissolução de União Estável Consensual",
      "Dissolução de União Estável Litigiosa",
    ],
  },
  {
    numeral: "II",
    title: "Direito do Consumidor",
    desc: "Proteção dos seus direitos frente a empresas, cobranças indevidas e relações de consumo abusivas.",
    services: [
      "Empréstimo consignado não reconhecido",
      "RMC/RCC",
      "Negativação indevida",
      "Falha na prestação do serviço",
      "Overbooking",
    ],
  },
  {
    numeral: "III",
    title: "Consultivo para Mulheres",
    desc: "Orientação estratégica e acolhedora para mulheres em momentos de decisão delicados.",
    services: [
      "Consulta pré-divórcio",
      "Orientação antes de sair de casa",
      "Orientação sobre guarda, provas e rotina dos filhos",
    ],
  },
];
