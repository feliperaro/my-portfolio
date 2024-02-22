import SectionTitle from "../section-title";

type ExperienceProps = {
  text: string;
};

export default function Experience(props: ExperienceProps) {
  return (
    <div className="flex flex-col gap-3 p-5 w-5/6">
      <SectionTitle text="Experience" />
      <em className="text-justify">{props.text}</em>
    </div>
  );
}
