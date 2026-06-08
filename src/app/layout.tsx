import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Christophe — Développeur Senior JavaScript",
  description:
    "Portfolio de Christophe, développeur senior avec 10 ans d'expérience en JavaScript, React, Next.js, mobile et plus.",
  keywords: [
    "développeur",
    "JavaScript",
    "React",
    "Next.js",
    "portfolio",
    "frontend",
    "mobile",
  ],
};

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        {/*
          Google Fonts chargées via <link> plutôt que next/font/google
          pour éviter les erreurs de build dans certains environnements.
          
          4 polices :
          - Sora : titres du thème minimal (géométrique, moderne)
          - Outfit : texte courant des deux thèmes (lisible)
          - Playfair Display : titres du thème cinéma (serif élégant)
          - JetBrains Mono : blocs de code (monospace dev)
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          {/* Header fixe en haut */}
          <Header />
          {/* main avec pt-16 pour compenser la hauteur du header fixe */}
          <main className="pt-16">{children}</main>
          {/* Footer en bas */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
