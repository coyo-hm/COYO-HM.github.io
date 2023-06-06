import { categoryType } from "@type/index";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

export const navLinks: { id: categoryType; link: string; label: string }[] = [
  { id: "blog", link: "/blog", label: "BLOG" },
  { id: "project", link: "/project", label: "PROJECT" },
];
const Nav = () => {
  const { route } = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [route]);

  return (
    <div className={`absolute left-0 flex max-md:flex-col`}>
      <button
        className={`hidden p-2 rounded-full transition-all max-md:block hover:text-blue-700 active:bg-neutral-300 ${
          isMenuOpened ? "bg-neutral-300" : ""
        }`}
        onClick={() => {
          setIsMenuOpened((prev) => !prev);
        }}
      >
        {isMenuOpened ? <RxCross1 size={20} /> : <RxHamburgerMenu size={20} />}
      </button>
      <nav
        className={`flex z-10 gap-3 max-md:gap-2 ${
          isMenuOpened
            ? "block top-11 absolute w-28 flex-col bg-white rounded-md py-2 shadow-2xl opacity-95 bg-blend-overlay"
            : "max-md:hidden"
        }`}
      >
        {navLinks.map((nav) => (
          <Link
            href={nav.link}
            key={nav.id}
            className={`hover:text-blue-700 font-light border-b max-md:pl-4 max-md:border-b-transparent ${
              route.includes(nav.link)
                ? "border-b-blue-700"
                : "border-b-transparent"
            }`}
          >
            {nav.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Nav;
