// src/stores/theme-store.ts

/**
 * Store Zustand pour la gestion des thèmes.
 *
 * Responsabilités :
 * - Stocker le thème actif (themeId)
 * - Persister le choix dans localStorage
 * - Appliquer les CSS variables au DOM quand le thème change
 * - Gérer l'ouverture/fermeture du panel de sélection
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeId } from "@/types";
import { themeRegistry, DEFAULT_THEME } from "@/themes";
import { applyThemeToDOM } from "@/lib/theme-utils";

// ---- Types du store ----

/** Les données stockées */
interface ThemeState {
  /** ID du thème actuellement actif */
  themeId: ThemeId;
  /** Le panel de sélection de thème est-il ouvert ? */
  isPanelOpen: boolean;
}

/** Les actions disponibles */
interface ThemeActions {
  /** Changer de thème */
  setTheme: (id: ThemeId) => void;
  /** Ouvrir/fermer le panel de sélection */
  togglePanel: () => void;
  /** Fermer le panel */
  closePanel: () => void;
  /** Appliquer le thème actuel au DOM (appelé au montage initial) */
  hydrate: () => void;
}

// ---- Création du store ----

export const useThemeStore = create<ThemeState & ThemeActions>()(
  persist(
    (set, get) => ({
      // ---- State initial ----
      themeId: DEFAULT_THEME,
      isPanelOpen: false,

      // ---- Actions ----

      setTheme: (id) => {
        const entry = themeRegistry[id];
        if (!entry) return; // sécurité : thème inconnu

        // 1. Appliquer les CSS variables au DOM
        applyThemeToDOM(entry.tokens);

        // 2. Mettre à jour la classe sur <html> (pour du CSS conditionnel si besoin)
        const root = document.documentElement;
        Object.values(themeRegistry).forEach((t) => {
          root.classList.remove(t.config.className);
        });
        root.classList.add(entry.config.className);

        // 3. Mettre à jour le state et fermer le panel
        set({ themeId: id, isPanelOpen: false });
      },

      togglePanel: () => set((s) => ({ isPanelOpen: !s.isPanelOpen })),

      closePanel: () => set({ isPanelOpen: false }),

      hydrate: () => {
        // Récupère le themeId (potentiellement restauré depuis localStorage)
        // et applique les tokens au DOM
        const { themeId, setTheme } = get();
        setTheme(themeId);
      },
    }),
    {
      // ---- Configuration de la persistence ----
      name: "portfolio-theme", // clé dans localStorage
      partialize: (state) => ({ themeId: state.themeId }),
    },
  ),
);
