"use client";

import SectionTitle from "../section-title";
import { useLanguage } from "../../i18n/language-provider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container py-16 sm:py-20">
      <SectionTitle text={t.about.title} eyebrow="01." />

      <div className="max-w-3xl space-y-4 text-base text-text-muted sm:text-lg">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
