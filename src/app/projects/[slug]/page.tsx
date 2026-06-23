/**
 * Page détail d'un projet — /projects/[slug]
 * Structure : Badge statut + Image + Contexte + Réalisations + Technos
 */

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { staticProjectRepository } from "@/infrastructure/adapters/static-adapter";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

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

const PLACEHOLDER_COLORS: Record<string, { bg: string; text: string }> = {
  dev: { bg: "from-blue-500/20 to-indigo-500/20", text: "text-blue-400" },
  mobile: { bg: "from-purple-500/20 to-pink-500/20", text: "text-purple-400" },
  fullstack: {
    bg: "from-emerald-500/20 to-teal-500/20",
    text: "text-emerald-400",
  },
  other: { bg: "from-amber-500/20 to-orange-500/20", text: "text-amber-400" },
};

const TYPE_LABELS: Record<string, string> = {
  professional: "Projet professionnel",
  personal: "Projet personnel",
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await staticProjectRepository.getBySlug(slug);

  if (!project) {
    notFound();
  }

  const status = STATUS_CONFIG[project.status] || STATUS_CONFIG.completed;
  const colors = PLACEHOLDER_COLORS[project.category] || PLACEHOLDER_COLORS.dev;

  return (
    <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      {/* Lien retour */}
      <Link
        href="/#projects"
        className="nav-link mb-8 inline-flex items-center gap-2 pb-0.5 text-sm text-foreground-alt transition-colors hover:text-accent"
      >
        <span aria-hidden="true">←</span>
        Retour aux projets
      </Link>

      {/* Image ou placeholder */}
      <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-lg border border-edge">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`Capture du projet ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${colors.bg}`}
          >
            <span
              className={`font-heading text-6xl font-bold ${colors.text} opacity-40`}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* En-tête avec badges */}
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-sm text-foreground-muted">
            {TYPE_LABELS[project.type]}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full ${status.bg} px-2.5 py-1 text-xs font-medium ${status.text}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
              aria-hidden="true"
            />
            {status.label}
          </span>
        </div>

        <h1 className="mb-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed text-foreground-alt">
          {project.tagline}
        </p>
      </header>

      {/* Contexte */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Contexte
        </h2>
        <p className="leading-relaxed text-foreground-alt">
          {project.description}
        </p>
      </section>

      {/* Réalisations clés */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Réalisations clés
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-foreground-alt"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Environnement technique */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Environnement technique
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="badge-pop rounded-md bg-accent-muted px-3 py-1.5 text-sm font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Liens d'action */}
      {(project.demoUrl || project.repoUrl) && (
        <div className="flex flex-wrap gap-4 border-t border-edge pt-8">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press glow-hover inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-surface transition-all hover:bg-accent-hover hover:shadow-md"
            >
              Voir le site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 rounded-md border border-edge px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
            >
              Code source
            </a>
          )}
        </div>
      )}
    </article>
  );
}
