"use client";

import Link from "next/link";
import { SocialBtns } from "../social-btns";
import { useLanguage } from "../../i18n/language-provider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="section-container flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:py-20">
      <p className="mb-4 font-mono text-sm text-accent">{t.hero.greeting}</p>

      <h1 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
        Felipe Roque
      </h1>

      <h2 className="mt-2 text-balance text-xl font-semibold text-text-muted sm:text-3xl lg:text-4xl">
        {t.hero.title}
      </h2>

      <p className="mt-2 font-mono text-sm text-accent">{t.hero.subtitle}</p>

      <p className="mt-6 max-w-2xl text-base text-text-muted sm:text-lg">{t.hero.pitch}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
        <Link
          href="/#projects"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:px-6 sm:py-3 sm:text-base"
        >
          {t.hero.viewWork}
        </Link>
        <Link
          href="/#contact"
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent sm:px-6 sm:py-3 sm:text-base"
        >
          {t.hero.getInTouch}
        </Link>
        <a
          href="/cv.pdf"
          className="px-2 py-2.5 text-sm font-medium text-text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
        >
          {t.hero.downloadCV}
        </a>
      </div>

      <div className="mt-8 sm:mt-10">
        <SocialBtns />
      </div>
    </section>
  );
}
