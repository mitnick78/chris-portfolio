export type ThemeId = "minimal" | "cinema";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  /** Classe CSS appliquée sur <html> pour activer le thème */
  className: string;
  /** Image de prévisualisation pour le sélecteur de thème */
  previewImage?: string;
}

export type SectionId =
  | "hero"
  | "about"
  | "projects"
  | "skills"
  | "experiences"
  | "contact";

export interface SectionMeta {
  id: SectionId;
  label: string;
  href: string;
}
