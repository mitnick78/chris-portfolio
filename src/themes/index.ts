// src/themes/index.ts

/**
 * Registre des thèmes - centralise la définition de tous les thèmes disponibles dans l'application.
 *
 * Pour ajouter un thème en V2 :
 * 1. Créer src/themes/artistic/tokens.ts
 * 2. Ajouter 'artistic' dans ThemeId (types/index.ts)
 * 3. Ajouter une entrée ici
 * C'est tout. Le switcher, le store, et le CSS s'adaptent automatiquement.
 */

import type { ThemeConfig, ThemeId } from "@/types";
import type { ThemeTokens } from "./tokens/theme-tokens";
import { minimalTokens } from "./minimal/tokens";
import { cinemaTokens } from "./cinema/tokens";

/** Un thème = sa config (nom, description) + ses tokens (couleurs, fonts...) */
export interface ThemeEntry {
  config: ThemeConfig;
  tokens: ThemeTokens;
}

/** Tous les thèmes enregistrés, indexés par leur ID */
export const themeRegistry: Record<ThemeId, ThemeEntry> = {
  minimal: {
    config: {
      id: "minimal",
      name: "Minimal",
      description: "Sobre, moderne et élégant",
      className: "theme-minimal",
    },
    tokens: minimalTokens,
  },
  cinema: {
    config: {
      id: "cinema",
      name: "Cinéma",
      description: "Immersif, Hollywood premium",
      className: "theme-cinema",
    },
    tokens: cinemaTokens,
  },
};

/** Liste ordonnée des thèmes (pour le switcher UI) */
export const themeList: ThemeEntry[] = Object.values(themeRegistry);

/** Thème par défaut à la première visite */
export const DEFAULT_THEME: ThemeId = "minimal";
