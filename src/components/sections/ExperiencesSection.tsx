import { Section } from "@/components/ui/Section";
import type { Experience } from "@/domain/entities/experience";

interface ExperiencesSectionProps {
  experiences: Experience[];
}

export function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
  return (
    <Section id="experiences" fullWidth className="bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Parcours
        </h2>
        <h3 className="mb-12 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Mes expériences
        </h3>

        <div className="relative space-y-8">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-edge md:left-1/2" />
          {/*
            left-4 sur mobile (16px du bord gauche)
            md:left-1/2 sur desktop (centrée)
            w-px = 1px de large
          */}

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  // Alterner gauche/droite sur desktop
  const isLeft = index % 2 === 0;
  const dateRange = experience.endDate
    ? `${formatDate(experience.startDate)} — ${formatDate(experience.endDate)}`
    : `${formatDate(experience.startDate)} — Présent`;

  return (
    <div
      className={`relative flex items-start gap-8 ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Point sur la timeline */}
      <div className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-surface md:left-1/2" />

      {/* Carte */}
      <div className="ml-10 w-full rounded-lg border border-edge bg-surface-alt p-6 md:ml-0 md:w-[calc(50%-2rem)]">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">
          {dateRange}
        </p>
        <h4 className="mb-1 text-lg font-semibold text-foreground">
          {experience.role}
        </h4>
        <p className="mb-3 text-sm text-foreground-muted">
          {experience.company}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-foreground-alt">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm bg-accent-muted px-2 py-1 text-xs text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Formate "2023-01-01" en "janv. 2023" */
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", { month: "short", year: "numeric" });
}
