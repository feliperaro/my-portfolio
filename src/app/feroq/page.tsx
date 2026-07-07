"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLanguage } from "../i18n/language-provider";

export default function FeroqPage() {
  const { t } = useLanguage();
  const pageIsReady = false;

  return (
    <>
      <Navbar />
      <main className="section-container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-text">FEROQ</h1>
        {!pageIsReady && (
          <p className="mt-4 text-lg text-text-muted">{t.blog.construction}</p>
        )}
      </main>
      <Footer />
    </>
  );
}
