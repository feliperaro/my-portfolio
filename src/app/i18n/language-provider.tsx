"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { content, Dictionary, Locale } from "./content";

const LOCALE_KEY = "portfolio-locale";
const THEME_KEY = "portfolio-theme";

export type Theme = "light" | "dark";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

function applyTheme(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocaleState] = useState<Locale | null>(null);
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(LOCALE_KEY);
    const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;

    if (storedLocale === "en" || storedLocale === "pt") {
      setLocaleState(storedLocale);
    }

    const resolvedTheme: Theme = storedTheme === "dark" ? "dark" : "light";
    setThemeState(resolvedTheme);
    applyTheme(resolvedTheme);

    setMounted(true);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_KEY, next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  };

  const setTheme = (next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  };

  if (!mounted) {
    return <div aria-hidden className="min-h-screen bg-bg" />;
  }

  if (!locale) {
    return (
      <LanguageGate
        currentTheme={theme}
        onSelectLocale={setLocale}
        onSelectTheme={setTheme}
      />
    );
  }

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, theme, setTheme, t: content[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

function LanguageGate({
  currentTheme,
  onSelectLocale,
  onSelectTheme,
}: {
  currentTheme: Theme;
  onSelectLocale: (locale: Locale) => void;
  onSelectTheme: (theme: Theme) => void;
}) {
  // Use PT label for theme since we don't know locale yet — show bilingual
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-bg px-6">
      {/* Language selection */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
          Choose your language · Escolha seu idioma
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onSelectLocale("en")}
            className="min-w-48 rounded-xl border border-border bg-surface px-8 py-5 text-lg font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            <span className="mr-2">🇺🇸</span> English
          </button>
          <button
            type="button"
            onClick={() => onSelectLocale("pt")}
            className="min-w-48 rounded-xl border border-border bg-surface px-8 py-5 text-lg font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            <span className="mr-2">🇧🇷</span> Português
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-48 bg-border" />

      {/* Theme selection */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
          Theme · Tema
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onSelectTheme("light")}
            aria-pressed={currentTheme === "light"}
            className={`flex min-w-36 items-center justify-center gap-2 rounded-xl border px-6 py-4 text-base font-medium transition-colors ${
              currentTheme === "light"
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-surface text-text hover:border-accent hover:text-accent"
            }`}
          >
            <SunIcon />
            Light · Claro
          </button>
          <button
            type="button"
            onClick={() => onSelectTheme("dark")}
            aria-pressed={currentTheme === "dark"}
            className={`flex min-w-36 items-center justify-center gap-2 rounded-xl border px-6 py-4 text-base font-medium transition-colors ${
              currentTheme === "dark"
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-surface text-text hover:border-accent hover:text-accent"
            }`}
          >
            <MoonIcon />
            Dark · Escuro
          </button>
        </div>
      </div>
    </div>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
