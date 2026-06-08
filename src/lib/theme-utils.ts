// src/lib/theme-utils.ts

/**
 * Convertit les ThemeTokens en CSS custom properties
 * et les applique au DOM.
 *
 * Flux : ThemeTokens (objet TS) → CSS variables → appliquées sur <html>
 * Résultat : tous les composants qui utilisent var(--color-xxx) se mettent à jour.
 */

import type { ThemeTokens } from "@/themes/tokens/theme-tokens";

/**
 * Transforme un objet ThemeTokens en un dictionnaire plat de CSS variables.
 *
 * Exemple :
 *   { colors: { bgPrimary: '#FAFAFA' } }
 *   → { '--color-bg-primary': '#FAFAFA' }
 */
function tokensToCSSProperties(tokens: ThemeTokens): Record<string, string> {
  const props: Record<string, string> = {};

  // Couleurs
  props["--color-bg-primary"] = tokens.colors.bgPrimary;
  props["--color-bg-secondary"] = tokens.colors.bgSecondary;
  props["--color-bg-tertiary"] = tokens.colors.bgTertiary;
  props["--color-accent"] = tokens.colors.accent;
  props["--color-accent-hover"] = tokens.colors.accentHover;
  props["--color-accent-muted"] = tokens.colors.accentMuted;
  props["--color-text-primary"] = tokens.colors.textPrimary;
  props["--color-text-secondary"] = tokens.colors.textSecondary;
  props["--color-text-muted"] = tokens.colors.textMuted;
  props["--color-border"] = tokens.colors.border;
  props["--color-border-subtle"] = tokens.colors.borderSubtle;

  // Typographie
  props["--font-heading"] = tokens.fonts.heading;
  props["--font-body"] = tokens.fonts.body;
  props["--font-mono"] = tokens.fonts.mono;

  // Arrondis
  props["--radius-sm"] = tokens.radius.sm;
  props["--radius-md"] = tokens.radius.md;
  props["--radius-lg"] = tokens.radius.lg;
  props["--radius-xl"] = tokens.radius.xl;

  // Ombres
  props["--shadow-sm"] = tokens.shadows.sm;
  props["--shadow-md"] = tokens.shadows.md;
  props["--shadow-lg"] = tokens.shadows.lg;

  // Transitions
  props["--transition-duration"] = tokens.transitions.duration;
  props["--transition-easing"] = tokens.transitions.easing;

  return props;
}

/**
 * Applique les tokens d'un thème comme CSS variables sur <html>.
 * Appelé à chaque changement de thème.
 */
export function applyThemeToDOM(tokens: ThemeTokens): void {
  const properties = tokensToCSSProperties(tokens);
  const root = document.documentElement; // = l'élément <html>

  Object.entries(properties).forEach(([key, value]) => {
    root.style.setProperty(key, value);
    // Équivalent de : document.documentElement.style.setProperty('--color-bg-primary', '#FAFAFA')
  });
}
