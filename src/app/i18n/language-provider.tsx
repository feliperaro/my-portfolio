"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { content, Dictionary, Locale } from "./content";

const STORAGE_KEY = "portfolio-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
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

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocaleState] = useState<Locale | null>(null);

  // Read any previously chosen language on the client after mount.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt") {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  };

  // Avoid SSR/client mismatch: render nothing until we know the stored value.
  if (!mounted) {
    return <div aria-hidden className="min-h-screen bg-bg" />;
  }

  // First visit (no language chosen yet) → show the selection gate.
  if (!locale) {
    return <LanguageGate onSelect={setLocale} />;
  }

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: content[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

function LanguageGate({ onSelect }: { onSelect: (locale: Locale) => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={() => onSelect("en")}
          className="min-w-48 rounded-xl border border-border bg-surface px-8 py-5 text-lg font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          <span className="mr-2">🇺🇸</span> English
        </button>
        <button
          type="button"
          onClick={() => onSelect("pt")}
          className="min-w-48 rounded-xl border border-border bg-surface px-8 py-5 text-lg font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          <span className="mr-2">🇧🇷</span> Português
        </button>
      </div>
    </div>
  );
}
