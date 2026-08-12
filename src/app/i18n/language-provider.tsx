"use client";

import {
  createContext,
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
  // English is the default rather than a first-visit choice. A visitor arriving
  // from a CV or a job application gets the page itself, not an interstitial --
  // and because there is no gate, the server ships real content rather than an
  // empty shell. Returning visitors are switched to their stored locale after
  // mount, and everyone can switch from the navbar toggle.
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(LOCALE_KEY);
    const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;

    if (storedLocale === "en" || storedLocale === "pt") {
      setLocaleState(storedLocale);
      document.documentElement.lang = storedLocale === "pt" ? "pt-BR" : "en";
    }

    // The inline script in layout.tsx has already painted the right theme; this
    // only syncs React's copy of it.
    const resolvedTheme: Theme = storedTheme === "dark" ? "dark" : "light";
    setThemeState(resolvedTheme);
    applyTheme(resolvedTheme);
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

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, theme, setTheme, t: content[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
