import Link from "next/link";

const Nav = () => {
  const navlinks: { title: string; link: string }[] = [
    { title: "Blog", link: "/blog" },
    { title: "Project", link: "/project" },
  ];

  return (
    <nav>
      {navlinks.map((nav) => (
        <Link
          href={nav.link}
          key={nav.title}
          className={`hover:text-blue-700 mr-4 last:mr-0`}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
