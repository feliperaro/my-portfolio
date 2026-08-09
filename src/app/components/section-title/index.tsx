interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight text-text">{text}</h2>
      <div className="mt-3 h-px w-16 bg-accent" />
    </div>
  );
}
