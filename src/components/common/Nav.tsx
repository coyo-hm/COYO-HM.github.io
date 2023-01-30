import Link from "next/link";

const Nav = () => {
  const navlinks: { title: string; link: string }[] = [
    { title: "Blog", link: "/blog" },
    { title: "Project", link: "/project" },
  ];

  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
