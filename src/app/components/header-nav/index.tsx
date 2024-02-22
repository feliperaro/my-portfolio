export default function HeaderNav() {
  return (
    <nav className="mb-5 p-5 w-full">
      <ul className="flex flex-row justify-center gap-10">
        <li>
          <a href="/">Home</a>
        </li>{" "}
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
