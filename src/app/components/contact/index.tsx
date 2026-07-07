"use client";

import { SocialBtns } from "../social-btns";
import { useLanguage } from "../../i18n/language-provider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-container py-16 text-center sm:py-24">
      <p className="mb-3 font-mono text-sm text-accent">{t.contact.eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {t.contact.title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
        {t.contact.text}
      </p>

      <a
        href="mailto:feliperoque.dev@gmail.com"
        className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
      >
        {t.contact.cta}
      </a>

      <div className="mt-10 flex justify-center">
        <SocialBtns />
      </div>
    </section>
  );
}
