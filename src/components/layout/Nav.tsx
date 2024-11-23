import Link from "next/link";
import { useRouter } from "next/router";
import metadata from "@config/index";
import CATEGORY, { CATEGORY_KEYS } from "@constants/category";

const Nav = () => {
  const { route } = useRouter();

  return (
    <>
      <Link href="/" className={`text-lg italic font-extrabold mr-5 mt-1`}>
        {metadata.title}
      </Link>
      <nav className={`flex grow gap-3 max-md:gap-2`}>
        {CATEGORY_KEYS.map((key) => (
          <Link
            href={CATEGORY[key].link}
            key={CATEGORY[key].id}
            className={`hover:text-blue-700 font-light border-b italic ${
              route.includes(CATEGORY[key].id)
                ? "border-b-blue-700"
                : "border-b-transparent"
            }`}
          >
            {CATEGORY[key].label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Nav;
