interface AboutMeProps {
  description: string;
  subDescription: string;
}

export default function AboutMe(props: AboutMeProps) {
  return (
    <div className="flex flex-col gap-5 items-center w-5/6">
      <h3 className="font-semibold text-xl">{"About me"}</h3>
      <div className="flex flex-col gap-5 pl-5 pr-5">
        <p className="text-start">{props.description}</p>
        <em className="text-justify">{props.subDescription}</em>
      </div>
    </div>
  );
}
