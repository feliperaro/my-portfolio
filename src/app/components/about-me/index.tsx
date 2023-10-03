import "./styles.css";

interface AboutMeProps {
  description: string;
  subDescription: string;
}

export default function AboutMe(props: AboutMeProps) {
  return (
    <div className="about-me">
      <h3>{"About me"}</h3>
      <p className="description">{props.description}</p>
      <p>
        <em>{props.subDescription}</em>
      </p>
    </div>
  );
}
