import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ludmila Amazonas | Advocacia — Civil, Família, Consumidor e Consultivo para Mulheres",
  description:
    "Atuação dedicada em Direito Civil, Direito de Família, Direito do Consumidor e Consultivo para Mulheres — um atendimento humano, estratégico e absolutamente confidencial. Manaus, Amazonas.",
  appleWebApp: {
    title: "Ludmila Amazonas",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e131b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster
          theme="dark"
          position="bottom-center"
          closeButton
          toastOptions={{
            duration: 12000,
            classNames: {
              title: "font-sans",
              description: "font-sans",
            },
            style: {
              background: "#161d29",
              border: "1px solid rgba(198,161,91,.25)",
              color: "#f7f4ee",
              borderRadius: "3px",
            },
          }}
          style={
            {
              "--normal-bg": "#161d29",
              "--normal-border": "rgba(198,161,91,.25)",
              "--normal-text": "#f7f4ee",
            } as React.CSSProperties
          }
        />
      </body>
    </html>
  );
}
