import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LanguageProvider from "./i18n/language-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feliperamosroque.vercel.app"),
  title: {
    default: "Felipe Ramos Roque — Applied AI Engineer",
    template: "%s — Felipe Ramos Roque",
  },
  description:
    "Applied AI engineer building production AI agents — multi-agent systems with retrieval, guardrails and tracing, serving 22 client brands on Kubernetes. Python, TypeScript, LangGraph.",
  openGraph: {
    title: "Felipe Ramos Roque — Applied AI Engineer",
    description:
      "Applied AI engineer building production AI agents — multi-agent systems with retrieval, guardrails and tracing. Python, TypeScript, LangGraph.",
    type: "website",
    url: "https://feliperamosroque.vercel.app",
    siteName: "Felipe Roque",
    locale: "en_US",
    images: [
      {
        // Square (800x800), so link previews render as a profile-style thumbnail.
        url: "/images/me.jpg",
        width: 800,
        height: 800,
        alt: "Felipe Roque — Applied AI Engineer",
      },
    ],
  },
  twitter: {
    // "summary" suits a square image; summary_large_image would crop it to 2:1.
    card: "summary",
    title: "Felipe Roque — Applied AI Engineer",
    description:
      "Applied AI engineer building production AI agents — multi-agent systems with retrieval, guardrails and tracing. Python, TypeScript, LangGraph.",
    images: ["/images/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
