"use client";

import SectionTitle from "../section-title";
import { useLanguage } from "../../i18n/language-provider";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-container py-16 sm:py-20">
      <SectionTitle text={t.skills.title} eyebrow="02." />

      <div className="grid gap-8 sm:grid-cols-2">
        {t.skills.groups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
