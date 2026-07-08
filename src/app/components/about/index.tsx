"use client";

import SectionTitle from "../section-title";
import { useLanguage } from "../../i18n/language-provider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container py-14 sm:py-16">
      <SectionTitle text={t.about.title} />

      <div className="max-w-3xl space-y-4 text-base text-text-muted sm:text-lg">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
