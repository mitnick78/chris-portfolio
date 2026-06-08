// src/stores/navigation-store.ts

/**
 * Store de navigation.
 *
 * Gère :
 * - La section actuellement visible (scroll-spy)
 * - L'état du menu mobile (ouvert/fermé)
 *
 * SECTIONS est aussi défini ici : c'est la liste ordonnée
 * des sections qui pilote à la fois la navigation et le scroll-spy.
 * Un seul endroit à modifier pour ajouter/supprimer une section.
 */

import { create } from "zustand";
import type { SectionId, SectionMeta } from "@/types";

/** Liste ordonnée des sections — pilote le header et le scroll-spy */
export const SECTIONS: SectionMeta[] = [
  { id: "hero", label: "Accueil", href: "#hero" },
  { id: "about", label: "À propos", href: "#about" },
  { id: "projects", label: "Projets", href: "#projects" },
  { id: "skills", label: "Compétences", href: "#skills" },
  { id: "experiences", label: "Expériences", href: "#experiences" },
  { id: "contact", label: "Contact", href: "#contact" },
];

interface NavigationState {
  /** Section actuellement visible (détectée par IntersectionObserver) */
  activeSection: SectionId;
  /** Le menu mobile est-il ouvert ? */
  isMobileMenuOpen: boolean;
}

interface NavigationActions {
  setActiveSection: (id: SectionId) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useNavigationStore = create<NavigationState & NavigationActions>()(
  (set) => ({
    activeSection: "hero",
    isMobileMenuOpen: false,

    setActiveSection: (id) => set({ activeSection: id }),
    toggleMobileMenu: () =>
      set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  }),
);
