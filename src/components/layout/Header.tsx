"use client";

/**
 * Header — navigation fixe avec scroll-spy.
 *
 * Gestion intelligente de la navigation :
 * - Sur la page d'accueil → smooth scroll vers la section
 * - Sur une autre page → navigation vers /#section
 */

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SECTIONS, useNavigationStore } from "@/stores/navigation-store";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import type { SectionId } from "@/types";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const {
    activeSection,
    setActiveSection,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavigationStore();

  // Scroll-spy (actif uniquement sur la page d'accueil)
  useEffect(() => {
    if (!isHomePage) return;

    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id as SectionId);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSection, isHomePage]);

  // Navigation intelligente
  const handleNavClick = (href: string) => {
    closeMobileMenu();

    if (isHomePage) {
      // Sur l'accueil → smooth scroll
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Sur une autre page → retour accueil + ancre
      router.push("/" + href);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-edge-subtle bg-surface/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo — retour accueil */}
        <Link
          href="/"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-heading text-lg font-semibold text-foreground transition-colors hover:text-accent"
        >
          Christophe
        </Link>

        {/* Nav desktop */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navigation principale"
        >
          {SECTIONS.filter((s) => s.id !== "hero").map((section) => (
            <a
              key={section.id}
              href={`/${section.href}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section.href);
              }}
              aria-current={
                isHomePage && activeSection === section.id ? "true" : undefined
              }
              className={`nav-link rounded-md px-3 py-2 text-sm transition-colors ${
                isHomePage && activeSection === section.id
                  ? "text-accent"
                  : "text-foreground-alt hover:text-foreground"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Droite : thème + hamburger */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          <button
            onClick={toggleMobileMenu}
            className="btn-press flex h-10 w-10 items-center justify-center rounded-md text-foreground-alt hover:bg-surface-muted hover:text-foreground md:hidden"
            aria-label="Menu de navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <nav
          className="border-t border-edge-subtle bg-surface px-4 pb-4 md:hidden"
          aria-label="Navigation mobile"
        >
          {SECTIONS.filter((s) => s.id !== "hero").map((section) => (
            <a
              key={section.id}
              href={`/${section.href}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section.href);
              }}
              aria-current={
                isHomePage && activeSection === section.id ? "true" : undefined
              }
              className={`block rounded-md px-3 py-3 text-sm transition-colors ${
                isHomePage && activeSection === section.id
                  ? "text-accent"
                  : "text-foreground-alt hover:text-foreground"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
