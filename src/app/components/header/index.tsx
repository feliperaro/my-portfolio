type HeaderProps = {
  name: string;
  title: string;
};

import "./styles.css";

export default function Header(props: HeaderProps) {
  const { name, title } = props;

  return (
    <header>
      <h1 className="textHeader">{name}</h1>
      <h2 className="textHeader">{title}</h2>
    </header>
  );
}
