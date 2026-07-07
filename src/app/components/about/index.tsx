"use client";

import SectionTitle from "../section-title";
import { useLanguage } from "../../i18n/language-provider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container py-20">
      <SectionTitle text={t.about.title} eyebrow="01." />

      <div className="max-w-3xl space-y-4 text-lg text-text-muted">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
