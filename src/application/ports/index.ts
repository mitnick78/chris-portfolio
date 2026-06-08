import type { Project } from "@/domain/entities/project";
import type { Skill } from "@/domain/entities/skill";
import type { Experience } from "@/domain/entities/experience";

export interface ProjectRepository {
  getAll(): Promise<Project[]>;
  getBySlug(slug: string): Promise<Project | null>;
  getFeatured(): Promise<Project[]>;
}

export interface SkillRepository {
  getAll(): Promise<Skill[]>;
  getByCategory(category: string): Promise<Skill[]>;
}

export interface ExperienceRepository {
  getAll(): Promise<Experience[]>;
}

export interface ContactService {
  /** Envoyer un message de contact */
  submit(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<{ success: boolean; message: string }>;
}
