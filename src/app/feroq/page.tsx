"use client";

import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLanguage } from "../i18n/language-provider";

const EMAIL = "feliperoque.dev@gmail.com";

export default function FeroqPage() {
  const { t } = useLanguage();
  const f = t.feroq;

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="section-container py-20 sm:py-28">
          <p className="font-mono text-sm text-accent">{f.eyebrow}</p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-text sm:text-7xl">
            FEROQ
          </h1>

          <p className="mt-3 text-balance text-xl font-semibold text-text-muted sm:text-2xl">
            {f.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-base text-text-muted sm:text-lg">
            {f.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:text-base"
            >
              {f.ctaPrimary}
            </a>
            <Link
              href="/"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent sm:text-base"
            >
              {f.ctaSecondary}
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-border">
          <div className="section-container py-16 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {f.servicesTitle}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
              {f.services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-xl border border-border bg-surface p-6"
                >
                  <h3 className="text-lg font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-border">
          <div className="section-container py-16 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {f.approachTitle}
            </h2>

            <ol className="mt-10 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3">
              {f.approach.map((step, i) => (
                <li key={step.title}>
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who's behind it */}
        <section className="border-t border-border">
          <div className="section-container py-16 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {f.aboutTitle}
            </h2>

            <div className="mt-8 max-w-2xl space-y-4">
              {f.aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <Link
              href="/"
              className="mt-8 inline-block text-sm font-medium text-accent hover:text-accent-hover"
            >
              {f.backLink} →
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border">
          <div className="section-container py-16 text-center sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {f.contactTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
              {f.contactText}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {f.contactCta}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
