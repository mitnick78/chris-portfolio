import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ExperiencesSection,
  ContactSection,
} from "@/components/sections";
import {
  staticProjectRepository,
  staticSkillRepository,
  staticExperienceRepository,
} from "@/infrastructure/adapters/static-adapter";

export default async function HomePage() {
  // Récupérer les données en parallèle (Promise.all)
  // Plus tard, ces appels iront vers Supabase au lieu du static adapter
  const [projects, skills, experiences] = await Promise.all([
    staticProjectRepository.getAll(),
    staticSkillRepository.getAll(),
    staticExperienceRepository.getAll(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ExperiencesSection experiences={experiences} />
      {/* <ContactSection /> */}
    </>
  );
}
