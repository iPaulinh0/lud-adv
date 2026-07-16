# Dr. Ludmila Amazonas — Landing Page

Landing page one-page (Next.js + Tailwind CSS v4) com scroll-snap entre seções: Hero, Sobre, Áreas de Atuação, Depoimentos e Contato.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Onde editar o conteúdo

- **Textos, contadores, depoimentos, áreas de atuação e dados de contato**: [src/lib/content.ts](src/lib/content.ts). O número de WhatsApp e o telefone exibido hoje são **placeholders** (`(92) 99999-9999`) — troque `CONTACT.whatsappNumber` e `CONTACT.whatsappDisplay` pelos dados reais antes de publicar.
- **Links de Instagram/LinkedIn**: hoje apontam para o WhatsApp como placeholder (`src/components/site/ContatoSection.tsx`) — troque pelos links reais quando existirem.
- **Fotos**: `src/assets/images/hero.png` e `src/assets/images/about.jpg`. São as fotos do bundle de design, já otimizadas para web. Para substituir por fotos reais, coloque os arquivos originais em `assets/` na raiz e rode `node scripts/prep-images.mjs` (usa `sharp` para redimensionar/comprimir automaticamente), ou simplesmente sobrescreva os arquivos em `src/assets/images/` com imagens já otimizadas.

## Estrutura

- `src/app/layout.tsx` — fontes (Cormorant Garamond + Manrope) e metadata.
- `src/app/globals.css` — tokens de tema Tailwind (cores, animações).
- `src/components/site/` — componentes da página (Header, SideNav, seções, etc.).
- `src/lib/content.ts` — todo o conteúdo textual/dados da página.

## Deploy na Vercel

Basta importar o repositório em [vercel.com/new](https://vercel.com/new) — não é necessária nenhuma configuração adicional (sem variáveis de ambiente, sem build steps extras). O comando de build padrão (`next build`) já é usado automaticamente.
