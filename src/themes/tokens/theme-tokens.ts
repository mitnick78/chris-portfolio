export interface ThemeTokens {
  // ---- Couleurs ----
  colors: {
    /** Fond principal (page entière) */
    bgPrimary: string;
    /** Fond secondaire (cartes, sections alternées) */
    bgSecondary: string;
    /** Fond tertiaire (surfaces subtiles) */
    bgTertiary: string;
    /** Couleur d'accent principale */
    accent: string;
    /** Accent au survol */
    accentHover: string;
    /** Accent avec opacité basse (fonds de badges, boutons ghost) */
    accentMuted: string;
    /** Texte principal */
    textPrimary: string;
    /** Texte secondaire (descriptions, meta) */
    textSecondary: string;
    /** Texte atténué (placeholders, hints) */
    textMuted: string;
    /** Bordure principale */
    border: string;
    /** Bordure subtile (séparateurs) */
    borderSubtle: string;
  };

  // ---- Typographie ----
  fonts: {
    /** Police des titres */
    heading: string;
    /** Police du texte courant */
    body: string;
    /** Police monospace (code) */
    mono: string;
  };

  // ---- Arrondis ----
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  // ---- Ombres ----
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };

  // ---- Transitions ----
  transitions: {
    /** Durée par défaut des animations */
    duration: string;
    /** Courbe d'accélération par défaut */
    easing: string;
  };
}
