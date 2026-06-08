import type { ThemeTokens } from "../tokens/theme-tokens";

export const minimalTokens: ThemeTokens = {
  colors: {
    bgPrimary: "#FAFAFA", // blanc cassé (moins agressif que #FFF pur)
    bgSecondary: "#FFFFFF", // blanc pur pour les cartes (contraste subtil)
    bgTertiary: "#F4F4F5", // gris très clair pour les sections alternées
    accent: "#18181B", // noir profond — sobre et pro
    accentHover: "#27272A", // noir légèrement plus clair au survol
    accentMuted: "rgba(24, 24, 27, 0.06)", // noir à 6% d'opacité pour les badges
    textPrimary: "#09090B", // quasi-noir pour le texte principal
    textSecondary: "#52525B", // gris moyen pour les descriptions
    textMuted: "#A1A1AA", // gris clair pour les hints
    border: "#E4E4E7", // bordure visible mais discrète
    borderSubtle: "#F4F4F5", // bordure quasi invisible (séparateurs)
  },
  fonts: {
    heading: '"Sora", sans-serif', // géométrique, moderne
    body: '"Outfit", sans-serif', // lisible, friendly
    mono: '"JetBrains Mono", monospace', // le standard dev
  },
  radius: {
    sm: "4px", // petits éléments (badges)
    md: "8px", // boutons, inputs
    lg: "12px", // cartes
    xl: "16px", // grandes surfaces
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.04)", // ombre à peine visible
    md: "0 4px 12px rgba(0, 0, 0, 0.06)", // cartes au survol
    lg: "0 12px 32px rgba(0, 0, 0, 0.08)", // modales, panels
  },
  transitions: {
    duration: "200ms", // rapide, réactif
    easing: "cubic-bezier(0.4, 0, 0.2, 1)", // ease standard Material
  },
};
