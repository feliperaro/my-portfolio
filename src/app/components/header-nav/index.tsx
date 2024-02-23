export default function HeaderNav(props: { page: string }) {
  const { page } = props;
  return (
    <nav className="mb-5 p-5 w-full">
      <ul className="flex flex-row justify-center gap-10">
        <li>
          <a
            className={`hover:font-bold ${
              page === "home" ? "font-semibold" : null
            }`}
            href="/"
          >
            Home
          </a>
        </li>{" "}
        <li>
          <a
            className={`hover:font-bold ${
              page === "blog" ? "font-semibold" : null
            }`}
            href="/blog"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className={`hover:font-bold ${
              page === "frr-technology" ? "font-semibold" : null
            }`}
            href="/frr-technology"
          >
            FRR Technology
          </a>
        </li>
      </ul>
    </nav>
  );
}
