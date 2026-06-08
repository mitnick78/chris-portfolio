/**
 * Hero — section d'accroche premium.
 *
 * Effets visuels :
 * - Dégradé animé sur le nom
 * - Fond avec grain subtil + radial gradient
 * - Stats animées (années, projets, technos, devs)
 *
 * A11Y :
 * - h1 unique
 * - aria-hidden sur les décorations
 * - Liens CTA avec texte explicite
 */

import { Section } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <Section
      id="hero"
      fullWidth
      className="hero-bg flex min-h-[50vh] items-center"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Accroche */}
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Bonjour, je suis
          </p>

          {/* Nom avec dégradé animé */}
          <h1 className="text-gradient text-gradient-animated mb-6 font-heading text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Christophe
          </h1>

          {/* Phrase d'impact */}
          <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground-alt sm:text-lg">
            Du frontend au backend, je transforme des idées en produits digitaux
            performants — web, mobile et data.
          </p>

          {/* Boutons CTA */}
          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-press glow-hover inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-surface transition-all hover:bg-accent-hover hover:shadow-md"
            >
              Voir mes projets
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#contact"
              className="btn-press inline-flex items-center gap-2 rounded-md border border-edge px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-sm"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
