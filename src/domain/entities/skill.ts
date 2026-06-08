export type SkillCategory =
  | "frontend"
  | "mobile"
  | "backend"
  | "tools"
  | "learning";

export type ProficiencyLevel =
  | "expert"
  | "advanced"
  | "intermediate"
  | "beginner";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  icon?: string;
}
