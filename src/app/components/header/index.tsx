type HeaderProps = {
  name: string;
  title: string;
};

export default function Header(props: HeaderProps) {
  const { name, title } = props;
  return (
    <header className="m-12 text-center w-10/12">
      <h1 className="font-semibold text-2xl p-1">{name}</h1>
      <h2 className="font-normal p-1 text-xl">{title}</h2>
    </header>
  );
}
