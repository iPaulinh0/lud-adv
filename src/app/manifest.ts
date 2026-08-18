import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ludmila Amazonas | Advocacia",
    short_name: "Ludmila Amazonas",
    description:
      "Atuação dedicada em Direito Civil, Direito de Família, Direito do Consumidor e Consultivo para Mulheres em Manaus, Amazonas.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e131b",
    theme_color: "#0e131b",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
