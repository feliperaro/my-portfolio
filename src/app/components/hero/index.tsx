"use client";

import Link from "next/link";
import { SocialBtns } from "../social-btns";
import { useLanguage } from "../../i18n/language-provider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="section-container flex min-h-[70vh] flex-col justify-center py-20">
      <p className="mb-4 font-mono text-sm text-accent">{t.hero.greeting}</p>

      <h1 className="text-4xl font-bold tracking-tight text-text sm:text-6xl">
        Felipe Ramos Roque
      </h1>

      <h2 className="mt-2 text-2xl font-semibold text-text-muted sm:text-4xl">
        {t.hero.title}
      </h2>

      <p className="mt-2 font-mono text-sm text-accent">{t.hero.subtitle}</p>

      <p className="mt-6 max-w-2xl text-lg text-text-muted">{t.hero.pitch}</p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="/#projects"
          className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
        >
          {t.hero.viewWork}
        </Link>
        <Link
          href="/#contact"
          className="rounded-lg border border-border px-6 py-3 font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          {t.hero.getInTouch}
        </Link>
        {/* TODO: add a real CV file at /public/cv.pdf to enable this */}
        <a
          href="/cv.pdf"
          className="px-2 py-3 font-medium text-text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
        >
          {t.hero.downloadCV}
        </a>
      </div>

      <div className="mt-10">
        <SocialBtns />
      </div>
    </section>
  );
}
