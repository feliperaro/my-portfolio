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
  metadataBase: new URL("https://feliperoque.dev"),
  title: {
    default: "Felipe Ramos Roque — AI & Automation Engineer",
    template: "%s — Felipe Ramos Roque",
  },
  description:
    "Founder & CTO @ FEROQ. Full-stack software engineer specialized in intelligent automation — RPA, AI agents and full-stack web applications.",
  openGraph: {
    title: "Felipe Ramos Roque — AI & Automation Engineer",
    description:
      "Founder & CTO @ FEROQ. Full-stack engineer specialized in intelligent automation, RPA and AI agents.",
    type: "website",
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
