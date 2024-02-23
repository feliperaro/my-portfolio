import HeaderNav from "../header-nav";

type HeaderProps = {
  name: string;
  title: string;
};

export default function Header(props: HeaderProps) {
  const { name, title } = props;
  return (
    <header className="flex flex-col w-full">
      <HeaderNav page="home" />
      <div className="text-center">
        <h1 className="font-semibold text-2xl p-1">{name}</h1>
        <h2 className="font-normal p-1 text-xl">{title}</h2>
      </div>
    </header>
  );
}
