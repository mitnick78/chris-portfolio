import { Section } from "@/components/ui/Section";
import type { Skill, SkillCategory } from "@/domain/entities/skill";

interface SkillsSectionProps {
  skills: Skill[];
}

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: "Frontend",
  mobile: "Mobile",
  backend: "Backend",
  tools: "Outils",
  learning: "En apprentissage",
};

const CATEGORY_ORDER: SkillCategory[] = [
  "frontend",
  "mobile",
  "backend",
  "tools",
  "learning",
];

export function SkillsSection({ skills }: SkillsSectionProps) {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    items: skills.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <Section id="skills">
      <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
        Compétences
      </h2>
      <h3 className="mb-12 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Mon stack technique
      </h3>

      <div className="grid gap-10 md:grid-cols-2">
        {grouped.map((group) => (
          <div key={group.category}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-muted">
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="badge-pop glow-hover flex cursor-default items-center gap-2 rounded-md border border-edge bg-surface-alt px-3 py-2 text-sm hover:border-accent hover:bg-accent-muted">
      <span className="font-medium text-foreground">{skill.name}</span>
      {/* {skill.yearsOfExperience && (
        <span className="text-xs text-foreground-muted">
          {skill.yearsOfExperience} an{skill.yearsOfExperience > 1 ? "s" : ""}
        </span>
      )} */}
    </div>
  );
}
