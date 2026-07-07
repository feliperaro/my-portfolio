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
  const [selectedLocale, setSelectedLocale] = useState<Locale | null>(null);

  const handleLocale = (locale: Locale) => {
    setSelectedLocale(locale);
    onSelectTheme(currentTheme); // re-apply current theme
  };

  const handleConfirm = () => {
    if (selectedLocale) onSelectLocale(selectedLocale);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-bg px-6">
      {/* Language buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => handleLocale("en")}
          aria-pressed={selectedLocale === "en"}
          className={`flex min-w-44 items-center justify-center gap-3 rounded-xl border px-8 py-5 text-lg font-medium transition-colors ${
            selectedLocale === "en"
              ? "border-accent bg-accent-soft text-accent"
              : "border-border bg-surface text-text hover:border-accent hover:text-accent"
          }`}
        >
          <span aria-hidden="true">🇺🇸</span> English
        </button>
        <button
          type="button"
          onClick={() => handleLocale("pt")}
          aria-pressed={selectedLocale === "pt"}
          className={`flex min-w-44 items-center justify-center gap-3 rounded-xl border px-8 py-5 text-lg font-medium transition-colors ${
            selectedLocale === "pt"
              ? "border-accent bg-accent-soft text-accent"
              : "border-border bg-surface text-text hover:border-accent hover:text-accent"
          }`}
        >
          <span aria-hidden="true">🇧🇷</span> Português
        </button>
      </div>

      {/* Divider */}
      <div className="h-px w-40 bg-border" />

      {/* Theme buttons */}
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

      {/* Confirm arrow */}
      <button
        type="button"
        onClick={handleConfirm}
        disabled={!selectedLocale}
        aria-label="Confirm and enter"
        className={`mt-2 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-200 ${
          selectedLocale
            ? "border-accent bg-accent text-white hover:bg-accent-hover hover:scale-105"
            : "cursor-not-allowed border-border bg-surface text-text-muted opacity-40"
        }`}
      >
        <ArrowRightIcon />
      </button>
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

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
