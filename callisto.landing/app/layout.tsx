import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Callisto Pilot — Pilotez chaque immeuble, partout",
  description: "Rejoignez la liste d’attente de Callisto Pilot, la plateforme mondiale de gestion immobilière et locative adaptée à chaque marché.",
  other: { "codex-preview": "development" },
  icons: { icon: "/callisto-mark-light.png", shortcut: "/callisto-mark-light.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${manrope.variable} ${inter.variable}`}>{children}</body></html>;
}
