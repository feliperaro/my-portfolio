interface HeaderProps {
  name: string;
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
    </>
  );
}
