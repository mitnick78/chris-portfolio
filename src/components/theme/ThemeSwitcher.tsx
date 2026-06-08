// src/components/theme/ThemeSwitcher.tsx

"use client";

import { useRef, useEffect } from "react";
import { useThemeStore } from "@/stores/theme-store";
import { themeList } from "@/themes";

export function ThemeSwitcher() {
  const { themeId, isPanelOpen, togglePanel, closePanel, setTheme } =
    useThemeStore();

  // Ref sur le panel pour détecter les clics extérieurs
  const panelRef = useRef<HTMLDivElement>(null);

  // ---- Fermer le panel quand on clique en dehors ----
  useEffect(() => {
    if (!isPanelOpen) return;
    // ↑ Si le panel est fermé, on n'écoute rien (optimisation)

    function handleClickOutside(e: MouseEvent) {
      // Si le clic est en dehors du panel → on ferme
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        closePanel();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    // ↑ On écoute sur le document entier

    return () => document.removeEventListener("mousedown", handleClickOutside);
    // ↑ Cleanup : quand le composant est démonté ou que isPanelOpen change,
    // on retire l'écouteur. Sans ça, les écouteurs s'accumulent en mémoire.
  }, [isPanelOpen, closePanel]);

  // ---- Fermer le panel avec Escape ----
  useEffect(() => {
    if (!isPanelOpen) return;

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") closePanel();
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isPanelOpen, closePanel]);

  return (
    <div ref={panelRef} className="relative">
      <button
        onClick={togglePanel}
        aria-label="Changer de thème"
        aria-expanded={isPanelOpen}
        className="flex items-center gap-2 rounded-md border border-edge
               px-3 py-2 text-sm text-foreground-alt transition-colors
               hover:border-accent hover:text-foreground"
      >
        <ThemeIcon />
        <span className="hidden sm:inline">Thème</span>
      </button>

      {isPanelOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-64
                 overflow-hidden rounded-lg border border-edge
                 bg-surface-alt shadow-lg"
          role="listbox"
          aria-label="Sélection du thème"
        >
          <div className="p-2">
            {themeList.map((entry) => {
              const isActive = entry.config.id === themeId;
              return (
                <button
                  key={entry.config.id}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => setTheme(entry.config.id)}
                  className={`flex w-full items-center gap-3 rounded-md
                px-3 py-3 text-left transition-colors ${
                  isActive
                    ? "bg-accent-muted text-foreground"
                    : "text-foreground-alt hover:bg-surface-muted"
                }`}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center
                           rounded-sm border"
                    style={{
                      backgroundColor: entry.tokens.colors.bgPrimary,
                      borderColor: entry.tokens.colors.accent,
                    }}
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ color: entry.tokens.colors.accent }}
                    >
                      {entry.config.id === "minimal" ? "M" : "C"}
                    </span>
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-medium">{entry.config.name}</p>
                    <p className="text-xs text-foreground-muted">
                      {entry.config.description}
                    </p>
                  </div>

                  {isActive && (
                    <span className="ml-auto text-accent" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/** Icône SVG pour le bouton — accessible et décorative */
function ThemeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
