import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { IdiomaProvider } from "@/components/idioma";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guirab.com.br"),
  title: "Guilherme Rabelo — Desenvolvedor",
  description:
    "Interfaces e aplicações web construídas com Next.js, TypeScript e atenção a detalhe.",
  openGraph: {
    title: "Guilherme Rabelo — Desenvolvedor",
    description:
      "Interfaces e aplicações web construídas com Next.js, TypeScript e atenção a detalhe.",
    url: "https://guirab.com.br",
    siteName: "guirab.com.br",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09070f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body className="grain">
        <IdiomaProvider>{children}</IdiomaProvider>
      </body>
    </html>
  );
}
