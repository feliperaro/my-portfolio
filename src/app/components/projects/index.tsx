"use client";

import SectionTitle from "../section-title";
import { GitHubIcon } from "../icons/github-icon";
import { useLanguage } from "../../i18n/language-provider";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-container py-14 sm:py-16">
      <SectionTitle text={t.projects.title} />

      <p className="mb-8 max-w-2xl text-text-muted">{t.projects.note}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <article
            key={i}
            className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-text">
                {project.title}
              </h3>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} — GitHub`}
                  className="text-text-muted hover:text-accent"
                >
                  <GitHubIcon />
                </a>
              )}
            </div>

            <p className="flex-1 text-sm text-text-muted">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {project.stack.map((tech) => (
                <li key={tech} className="font-mono text-xs text-text-muted">
                  {tech}
                </li>
              ))}
            </ul>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm font-medium text-accent hover:text-accent-hover"
              >
                {t.projects.viewLive}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
