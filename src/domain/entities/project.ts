/**
 * Entité Project.
 *
 * Type pur sans aucune dépendance framework.
 * Décrit la forme d'un projet de portfolio.
 */

export interface Project {
  /** Identifiant unique (vient de la base de données ou des données statiques) */
  id: string;

  /** Identifiant lisible pour l'URL — utilisé dans la route /projects/[slug] */
  slug: string;

  /** Titre affiché */
  title: string;

  /** Description complète (page détail) */
  description: string;

  /** Accroche courte affichée sur la carte (~120 caractères max) */
  tagline: string;

  /** Liste des technologies utilisées */
  stack: string[];

  /** URL vers la démo live (optionnel — tous les projets ne sont pas déployés) */
  demoUrl?: string;

  /** URL vers le code source (optionnel — certains projets sont privés) */
  repoUrl?: string;

  /** Chemin vers l'image de couverture */
  coverImage: string;

  /** Captures d'écran supplémentaires pour la page détail */
  screenshots: string[];

  /** Réalisations clés affichées sur la page détail */
  highlights?: string[];

  /** Mettre en avant ce projet sur la page d'accueil ? */
  featured: boolean;

  /**
   * Catégorie du projet — utile pour le filtrage.
   * V2 : pourra s'étendre à 'blog' | 'cinema' | 'art'
   */
  category: "dev" | "mobile" | "fullstack" | "other";

  /** Date de création au format ISO 8601 (ex: "2025-06-15T00:00:00Z") */
  createdAt: string;

  /** Statut actuel du projet */
  status: "production" | "in-progress" | "completed" | "closed";

  /** Type de projet : professionnel ou personnel */
  type: "professional" | "personal";
}
