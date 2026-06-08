/**
 * Adapter statique — vraies données de Christophe.
 */

import type {
  ProjectRepository,
  SkillRepository,
  ExperienceRepository,
} from "@/application/ports";
import type { Project } from "@/domain/entities/project";
import type { Skill } from "@/domain/entities/skill";
import type { Experience } from "@/domain/entities/experience";

// ============================================================
// Projets
// ============================================================

const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "bazarchic",
    title: "Bazarchic",
    description:
      "Refonte complète du site e-commerce Bazarchic en modernisant la stack technique et en améliorant l'expérience utilisateur. Pilotage de la migration stratégique du front-end de React vers Next.js, mise en place du SSR/SSG, et sécurisation des livraisons. Gestion par tickets en mode Agile, phasage par rétroplanning, développement, tests et mise en production.",
    tagline: "Refonte e-commerce · Migration Next.js · +7 ans",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "React Query",
      "Styled Components",
      "Jest",
      "Cypress",
      "Python",
      "Twig",
      "AngularJS",
    ],
    coverImage: "/images/projects/bazarchic.png",
    screenshots: [],
    highlights: [
      "Pilotage de la migration React vers Next.js avec SSR/SSG",
      "Conception et déploiement d'un Design System transverse",
      "Implémentation de l'authentification Social Connect (Apple, Google, Facebook)",
      "Intégration et sécurisation des solutions de paiement Payline et Adyen",
      "Fiabilisation du tunnel de vente et optimisation UX/UI",
      "Migration de l'application mobile d'Objective-C vers Swift et SwiftUI",
      "Réalisation d'un POC cross-platform de l'app Bazarchic",
      "Optimisation du tracking et scripts Python pour l'analyse comportementale",
      "Mise en place de React Query et GraphQL pour la gestion des données",
      "Management et montée en compétences de 2 développeurs",
      "Revue de code, structuration des bonnes pratiques, réduction des régressions",
      "Tests et automatisation avec Jest et Cypress",
    ],
    featured: true,
    category: "dev",
    createdAt: "2018-04-01T00:00:00Z",
    status: "production",
    type: "professional",
  },
  {
    id: "2",
    slug: "memoires",
    title: "Mémoires",
    description:
      "Conception et développement d'une application web de partage de souvenirs familiaux avec espaces privés et albums photos. Architecture backend scalable avec Python/Django et PostgreSQL, stockage d'objets via MinIO (S3-compatible), et interfaces dynamiques avec HTMX. Déclinaison en application mobile cross-platform en cours avec React Native.",
    tagline: "Souvenirs familiaux · Django · HTMX · React Native",
    stack: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTMX",
      "MinIO",
      "Docker",
      "React Native",
    ],
    coverImage: "/images/projects/memoires.png",
    screenshots: [],
    highlights: [
      "Architecture backend scalable avec Python/Django",
      "Système de stockage d'objets via MinIO (S3-compatible)",
      "Interfaces dynamiques avec HTMX (performances sans SPA complexe)",
      "Espaces privés et albums photos sécurisés",
      "Containerisation complète avec Docker",
      "Déclinaison mobile cross-platform en React Native en cours",
      "Réutilisation et adaptation de composants web vers React Native",
    ],
    featured: true,
    category: "fullstack",
    createdAt: "2025-06-01T00:00:00Z",
    status: "in-progress",
    type: "personal",
  },
  {
    id: "3",
    slug: "pipeline-etl-python",
    title: "Pipeline ETL — Open Data",
    description:
      "Pipeline ETL Python automatisant la collecte et l'analyse de l'Open Data national pour cartographier les zones de tension scolaire et orienter les décisions d'infrastructures des municipales 2026.",
    tagline: "Data Engineering · Python · Open Data · ETL",
    stack: ["Python", "Pandas", "ETL", "Open Data"],
    coverImage: "/images/projects/tension_scolaire.png",
    screenshots: [],
    highlights: [
      "Automatisation de la collecte de données Open Data",
      "Analyse et cartographie des zones de tension scolaire",
      "Pipeline ETL complet (Extract, Transform, Load)",
      "Aide à la décision pour les infrastructures municipales",
    ],
    featured: true,
    category: "other",
    createdAt: "2026-01-01T00:00:00Z",
    status: "completed",
    type: "personal",
    repoUrl: "https://github.com/mitnick78/elections_scolaires_2026_pipeline",
  },
  {
    id: "4",
    slug: "onvabosser",
    title: "Onvabosser.fr",
    description:
      "Développement de la partie client de la plateforme de mise en relation Onvabosser.fr pour Wedigital Garden. Communication en temps réel via Pusher (WebSockets), paiement intégré via Stripe, et signature électronique via Yousign.",
    tagline: "Plateforme de mise en relation · Angular · WebSockets",
    stack: ["Angular", "JavaScript", "Pusher", "Stripe", "Yousign"],
    coverImage: "",
    screenshots: [],
    highlights: [
      "Communication temps réel avec Pusher (WebSockets)",
      "Intégration du paiement sécurisé Stripe",
      "Signature en ligne via Yousign",
      "Développement en Angular 1.5+",
    ],
    featured: false,
    category: "dev",
    createdAt: "2017-01-01T00:00:00Z",
    status: "closed",
    type: "professional",
  },

  {
    id: "5",
    slug: "captain-contrat",
    title: "Captain Contrat",
    description:
      "Développement de nouvelles fonctionnalités pour la plateforme juridique Captain Contrat : système de prise de rendez-vous entre clients et avocats, upload de documents avec versioning, et maintenance des fonctionnalités existantes.",
    tagline: "Plateforme juridique · Ruby on Rails · Full Stack",
    stack: ["Ruby on Rails", "JavaScript", "PostgreSQL", "HTML/CSS"],
    coverImage: "/images/projects/captainContrat.png",
    screenshots: [],
    highlights: [
      "Système de prise de rendez-vous client/avocat",
      "Upload multi-documents avec versioning",
      "Maintenance des fonctionnalités existantes",
    ],
    featured: false,
    category: "fullstack",
    createdAt: "2015-10-01T00:00:00Z",
    status: "production",
    type: "professional",
  },
];

// ============================================================
// Compétences
// ============================================================

const SKILLS: Skill[] = [
  // Frontend
  {
    id: "1",
    name: "JavaScript",
    category: "frontend",
    proficiency: "expert",
  },
  {
    id: "2",
    name: "TypeScript",
    category: "frontend",
    proficiency: "advanced",
  },
  {
    id: "3",
    name: "React",
    category: "frontend",
    proficiency: "expert",
  },
  {
    id: "4",
    name: "Next.js",
    category: "frontend",
    proficiency: "advanced",
  },
  {
    id: "5",
    name: "Angular",
    category: "frontend",
    proficiency: "advanced",
  },
  {
    id: "6",
    name: "Vue.js",
    category: "frontend",
    proficiency: "intermediate",
  },
  {
    id: "7",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "advanced",
  },
  {
    id: "8",
    name: "GraphQL",
    category: "frontend",
    proficiency: "advanced",
  },
  {
    id: "9",
    name: "HTMX",
    category: "frontend",
    proficiency: "intermediate",
  },

  // Mobile
  {
    id: "10",
    name: "React Native",
    category: "mobile",
    proficiency: "advanced",
  },
  {
    id: "11",
    name: "Swift / SwiftUI",
    category: "mobile",
    proficiency: "intermediate",
  },
  {
    id: "12",
    name: "Flutter",
    category: "mobile",
    proficiency: "intermediate",
  },

  // Backend
  {
    id: "13",
    name: "Node.js",
    category: "backend",
    proficiency: "advanced",
  },
  {
    id: "14",
    name: "Ruby on Rails",
    category: "backend",
    proficiency: "advanced",
  },
  {
    id: "15",
    name: "Python / Django",
    category: "backend",
    proficiency: "intermediate",
  },

  // Outils
  {
    id: "16",
    name: "Git",
    category: "tools",
    proficiency: "expert",
  },
  {
    id: "17",
    name: "Docker",
    category: "tools",
    proficiency: "intermediate",
  },
  {
    id: "18",
    name: "Cypress / Jest",
    category: "tools",
    proficiency: "advanced",
  },
  {
    id: "19",
    name: "CI/CD",
    category: "tools",
    proficiency: "intermediate",
  },

  // En apprentissage
  {
    id: "20",
    name: "Data Analysis",
    category: "learning",
    proficiency: "beginner",
  },
  {
    id: "21",
    name: "ETL / Pandas",
    category: "learning",
    proficiency: "beginner",
  },
];

// ============================================================
// Expériences (6 principales)
// ============================================================

const EXPERIENCES: Experience[] = [
  {
    id: "1",
    company: "Bazarchic",
    role: "Développeur Frontend",
    description:
      "Refonte complète du site e-commerce en modernisant la stack technique. Pilotage de la migration React vers Next.js, intégration de solutions de paiement, et management d'une équipe de 2 développeurs.",
    highlights: [
      "Migration stratégique React → Next.js avec SSR/SSG",
      "Conception d'un Design System transverse",
      "Social Connect : Apple, Google, Facebook",
      "Paiement sécurisé : Payline, Adyen",
      "Migration mobile Objective-C → Swift/SwiftUI",
      "Management de 2 développeurs, revue de code",
      "Tests automatisés Jest + Cypress",
      "Scripts Python pour l'analyse comportementale",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "React Query",
      "Cypress",
      "Python",
    ],
    startDate: "2018-04-01",
    endDate: "2025-10-01",
    companyUrl: "https://www.bazarchic.com",
  },
  {
    id: "2",
    company: "Total for Wedigital Garden",
    role: "Développeur Fulstack",
    description:
      "Développement de solutions métier internes pour Total, afin de répondre aux besoins opérationnels des différentes équipes.",
    highlights: [],
    stack: ["Angular2x", "Laravel", "Docker", "Azure"],
    startDate: "2017-09-01",
    endDate: "2018-02-01",
  },
  {
    id: "3",
    company: "Onvabosser for Wedigital Garden",
    role: "Développeur Fullstack",
    description:
      "Conception et développement d'une plateforme de recherche d'emploi permettant aux utilisateurs de rechercher, filtrer et consulter des offres adaptées à leur profil.",
    highlights: [
      "Angular (1.5+)",
      "Broadcast / Sockets (Pusher)",
      "Paiement (Stripe)",
      "Signature en ligne (Yousign)",
    ],
    stack: ["AngularJS", "Angular", "JavaScript", "Laravel"],
    startDate: "2017-01-01",
    endDate: "2017-09-30",
  },
  {
    id: "6",
    company: "Captain Contrat",
    role: "Développeur FullStack Ruby on Rails",
    description:
      "Création de nouvelles fonctionnalités pour la plateforme juridique : prise de rendez-vous, upload de documents avec versioning, et maintenance.",
    highlights: [
      "Système de prise de rendez-vous client/avocat",
      "Upload multi-documents avec versioning",
      "Maintenance des fonctionnalités existantes",
    ],
    stack: ["Ruby on Rails", "JavaScript", "PostgreSQL"],
    startDate: "2015-10-01",
    endDate: "2016-04-01",
    companyUrl: "https://www.captaincontrat.com",
  },
  {
    id: "7",
    company: "SparkUp.fr",
    role: "Développeur Full Stack",
    description:
      "Sparkup est une plateforme de crowdfunding professionnelle offrant des fonctionnalités avancées telles que l’import de contacts depuis LinkedIn et Facebook, ainsi que l’automatisation des campagnes marketing via Zapier et Mailchimp.",
    highlights: [
      "Développement full stack Ruby on Rails",
      "Intégration des APIs Mailchimp et Zapier",
    ],
    stack: ["Ruby on Rails", "JavaScript", "Mailchimp API", "Zapier"],
    startDate: "2014-09-01",
    endDate: "2015-07-01",
  },
];

// ============================================================
// Implémentation des ports
// ============================================================

export const staticProjectRepository: ProjectRepository = {
  async getAll() {
    return PROJECTS;
  },
  async getBySlug(slug) {
    return PROJECTS.find((p) => p.slug === slug) ?? null;
  },
  async getFeatured() {
    return PROJECTS.filter((p) => p.featured);
  },
};

export const staticSkillRepository: SkillRepository = {
  async getAll() {
    return SKILLS;
  },
  async getByCategory(category) {
    return SKILLS.filter((s) => s.category === category);
  },
};

export const staticExperienceRepository: ExperienceRepository = {
  async getAll() {
    return EXPERIENCES;
  },
};
