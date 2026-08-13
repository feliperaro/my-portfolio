import type { Metadata } from "next";

// A separate layout purely so /feroq gets its own metadata: page.tsx is a client
// component (it reads the language provider) and client components cannot export
// metadata themselves.
export const metadata: Metadata = {
  title: "FEROQ — AI & Automation Consultancy",
  description:
    "FEROQ is Felipe Ramos Roque's independent consultancy: AI agents that run in production, intelligent process automation, and the software around them. One engineer, accountable end to end.",
  alternates: { canonical: "/feroq" },
  openGraph: {
    title: "FEROQ — AI & Automation Consultancy",
    description:
      "AI agents that run in production, intelligent process automation, and the software around them. One engineer, accountable end to end.",
    url: "https://feliperamosroque.vercel.app/feroq",
    type: "website",
  },
};

export default function FeroqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
