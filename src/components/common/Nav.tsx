import { categoryType } from "@type/index";
import Link from "next/link";
import { useRouter } from "next/router";
export const navLinks: { title: categoryType; link: string }[] = [
  { title: "blog", link: "/blog" },
  { title: "project", link: "/project" },
];
const Nav = () => {
  const { route } = useRouter();
  return (
    <nav className={"max-md:hidden"}>
      {navLinks.map((nav) => (
        <Link
          href={nav.link}
          key={nav.title}
          className={`hover:text-blue-700 mr-4 last:mr-0 py-2 ${
            route.includes(nav.link) ? "border-b border-b-blue-700" : ""
          }`}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
