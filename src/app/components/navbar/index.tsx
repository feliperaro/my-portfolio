"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../i18n/language-provider";

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.skills, href: "/#skills" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.experience, href: "/#experience" },
  ];

  const toggleLocale = () => setLocale(locale === "en" ? "pt" : "en");

  return (
    <header className="nav-surface sticky top-0 z-50 border-b border-border backdrop-blur">
      <nav className="section-container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-text hover:text-accent"
          onClick={() => setOpen(false)}
        >
          Felipe Roque
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggleLocale}
              aria-label="Switch language"
              className="rounded-md border border-border px-2 py-1 font-mono text-xs uppercase text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {locale === "en" ? "PT" : "EN"}
            </button>
          </li>
          <li>
            <Link
              href="/#contact"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {t.nav.contact}
            </Link>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="rounded-md border border-border px-2 py-1 font-mono text-xs uppercase text-text-muted"
          >
            {locale === "en" ? "PT" : "EN"}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span
              className={`h-0.5 w-6 bg-text transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {[...links, { label: t.nav.contact, href: "/#contact" }].map(
            (link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-text-muted hover:text-text"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </header>
  );
}
