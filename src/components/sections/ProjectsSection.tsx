/**
 * Projects — deux sous-sections (Pro + Perso) avec badges de statut.
 */

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import type { Project } from "@/domain/entities/project";

interface ProjectsSectionProps {
  projects: Project[];
}

/** Labels et couleurs des badges de statut */
const STATUS_CONFIG: Record<
  string,
  { label: string; dot: string; bg: string; text: string }
> = {
  production: {
    label: "En production",
    dot: "bg-emerald-500",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600",
  },
  "in-progress": {
    label: "En cours",
    dot: "bg-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-600",
  },
  completed: {
    label: "Terminé",
    dot: "bg-gray-400",
    bg: "bg-gray-400/10",
    text: "text-gray-500",
  },
  closed: {
    label: "Fermé",
    dot: "bg-red-400",
    bg: "bg-red-400/10",
    text: "text-red-500",
  },
};

/** Couleurs de placeholder par catégorie */
const PLACEHOLDER_COLORS: Record<string, { bg: string; text: string }> = {
  dev: { bg: "from-blue-500/20 to-indigo-500/20", text: "text-blue-400" },
  mobile: { bg: "from-purple-500/20 to-pink-500/20", text: "text-purple-400" },
  fullstack: {
    bg: "from-emerald-500/20 to-teal-500/20",
    text: "text-emerald-400",
  },
  other: { bg: "from-amber-500/20 to-orange-500/20", text: "text-amber-400" },
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const proProjects = projects.filter((p) => p.type === "professional");
  const persoProjects = projects.filter((p) => p.type === "personal");

  return (
    <Section id="projects" fullWidth className="bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </h2>
        <h3 className="mb-16 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Mes projets
        </h3>

        {/* Projets professionnels */}
        {proProjects.length > 0 && (
          <div className="mb-16">
            <h4 className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              <span aria-hidden="true">🏢</span>
              Projets professionnels
            </h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {proProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Projets personnels */}
        {persoProjects.length > 0 && (
          <div>
            <h4 className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              <span aria-hidden="true">💡</span>
              Projets personnels
            </h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {persoProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const colors = PLACEHOLDER_COLORS[project.category] || PLACEHOLDER_COLORS.dev;
  const status = STATUS_CONFIG[project.status] || STATUS_CONFIG.completed;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-lift glow-hover group overflow-hidden rounded-lg border border-edge bg-surface-alt hover:border-accent hover:shadow-lg"
    >
      {/* Image ou placeholder */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface-muted">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`Capture du projet ${project.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${colors.bg}`}
          >
            <span
              className={`font-heading text-4xl font-bold ${colors.text} opacity-60`}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Badge de statut — positionné en haut à droite de l'image */}
        <span
          className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full ${status.bg} px-2.5 py-1 text-xs font-medium ${status.text} backdrop-blur-sm`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
            aria-hidden="true"
          />
          {status.label}
        </span>
      </div>

      <div className="p-5">
        <h4 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h4>
        <p className="mb-3 text-sm text-foreground-alt">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="badge-pop rounded-sm bg-accent-muted px-2 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
