import type { ThemeTokens } from "../tokens/theme-tokens";

export const cinemaTokens: ThemeTokens = {
  colors: {
    bgPrimary: "#0A0A0F", // noir profond bleuté (pas un noir pur)
    bgSecondary: "#12121A", // noir légèrement plus clair (cartes)
    bgTertiary: "#1A1A25", // fond des sections alternées
    accent: "#D4A843", // or chaud — signature cinéma/Hollywood
    accentHover: "#E4BC5A", // or plus lumineux au survol
    accentMuted: "rgba(212, 168, 67, 0.10)", // or à 10% pour les badges
    textPrimary: "#F0EDE6", // blanc chaud (pas un blanc pur froid)
    textSecondary: "#9B978E", // gris chaud pour les descriptions
    textMuted: "#5E5B55", // gris sombre pour les hints
    border: "#2A2A35", // bordure sombre visible
    borderSubtle: "#1E1E28", // bordure quasi invisible
  },
  fonts: {
    heading: '"Playfair Display", serif', // serif élégant, cinématique
    body: '"Outfit", sans-serif', // même corps que minimal (cohérence)
    mono: '"JetBrains Mono", monospace', // même mono
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px", // plus arrondi que minimal → plus "premium"
  },
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.3)", // ombres plus marquées (fond sombre)
    md: "0 4px 16px rgba(0, 0, 0, 0.4)",
    lg: "0 12px 40px rgba(0, 0, 0, 0.5)",
  },
  transitions: {
    duration: "300ms", // plus lent → plus cinématique
    easing: "cubic-bezier(0.22, 1, 0.36, 1)", // ease-out plus prononcé
  },
};
