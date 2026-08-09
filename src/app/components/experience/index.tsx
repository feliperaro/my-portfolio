"use client";

import SectionTitle from "../section-title";
import { useLanguage } from "../../i18n/language-provider";
import { TimelineItem } from "../../i18n/content";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-border">
      {items.map((item, i) => (
        <li key={i} className="mb-8 ml-6 last:mb-0">
          <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
          <p className="font-mono text-sm text-text-muted">{item.period}</p>
          <h4 className="mt-1 font-semibold text-text">{item.role}</h4>
          <p className="text-text-muted">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-text transition-colors hover:text-accent"
              >
                {item.org}
              </a>
            ) : (
              <span className="font-medium text-text">{item.org}</span>
            )}
            {" · "}
            {item.mapsUrl ? (
              <a
                href={item.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                {item.location}
              </a>
            ) : (
              item.location
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-container py-14 sm:py-16">
      <SectionTitle text={t.experience.title} />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-text-muted">
            {t.experience.workLabel}
          </h3>
          <Timeline items={t.experience.work} />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-text-muted">
            {t.experience.educationLabel}
          </h3>
          <Timeline items={t.experience.education} />
        </div>
      </div>
    </section>
  );
}
