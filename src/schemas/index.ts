/**
 * Zod schemas — validation runtime des données.
 *
 * Ces schemas sont les "miroirs runtime" des interfaces TypeScript
 * dans domain/entities/. TypeScript vérifie à la compilation,
 * Zod vérifie à l'exécution.
 *
 * Utilisés pour :
 * - Valider les réponses API (Supabase)
 * - Valider les formulaires (Contact)
 * - Garantir la shape des données au runtime
 */

import { z } from "zod";

// ---- Project ----

export const projectSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
  tagline: z.string().max(120),
  stack: z.array(z.string()),
  demoUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  coverImage: z.string(),
  screenshots: z.array(z.string()),
  highlights: z.array(z.string()).optional(),
  featured: z.boolean(),
  category: z.enum(["dev", "mobile", "fullstack", "other"]),
  createdAt: z.string().datetime(),
  status: z.enum(["production", "in-progress", "completed", "closed"]),
  type: z.enum(["professional", "personal"]),
});

/** Type inféré depuis le schema — utile pour les formulaires de création */
export type ProjectInput = z.input<typeof projectSchema>;

// ---- Skill ----

export const skillSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: z.enum(["frontend", "mobile", "backend", "tools", "learning"]),
  proficiency: z.enum(["expert", "advanced", "intermediate", "beginner"]),
  icon: z.string().optional(),
  yearsOfExperience: z.number().min(0).optional(),
});

export type SkillInput = z.input<typeof skillSchema>;

// ---- Experience ----

export const experienceSchema = z.object({
  id: z.string().min(1),
  company: z.string().min(1),
  role: z.string().min(1),
  description: z.string(),
  highlights: z.array(z.string()),
  stack: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string().optional(),
  logo: z.string().optional(),
  companyUrl: z.string().url().optional(),
});

export type ExperienceInput = z.input<typeof experienceSchema>;

// ---- Formulaire de contact ----

export const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
