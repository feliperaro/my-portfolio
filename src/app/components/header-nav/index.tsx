export default function HeaderNav() {
  return (
    <nav className="mb-5 p-5 w-full">
      <ul className="flex flex-row justify-center gap-10">
        <li>
          <a className="hover:font-bold" href="/">
            Home
          </a>
        </li>{" "}
        <li>
          <a className="hover:font-bold" href="/blog">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
