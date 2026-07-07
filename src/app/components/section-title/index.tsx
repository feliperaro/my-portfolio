interface SectionTitleProps {
  text: string;
  /** optional small mono label shown above the title, e.g. "01." */
  eyebrow?: string;
}

export default function SectionTitle({ text, eyebrow }: SectionTitleProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text">{text}</h2>
      <div className="mt-4 h-px w-16 bg-accent" />
    </div>
  );
}
