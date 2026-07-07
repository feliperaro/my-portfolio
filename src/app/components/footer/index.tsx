"use client";

import { useLanguage } from "../../i18n/language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col items-center gap-1 py-8 text-center text-sm text-text-muted">
        <p>{t.footer.built}</p>
        <p>
          &copy; {new Date().getFullYear()} · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
