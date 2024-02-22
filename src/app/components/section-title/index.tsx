interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return <h3 className="font-medium text-center text-lg">{text}</h3>;
}
