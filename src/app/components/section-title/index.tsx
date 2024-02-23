interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return <h3 className="font-semibold text-center text-lg">{text}</h3>;
}
