"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

import metadata from "@config/index";
import { CATEGORY_INFO, CATEGORY_KEYS } from "@constants/category";

const Header = () => {
  const { route } = useRouter();

  const { theme, setTheme } = useTheme();
  const isHome = useMemo(() => route === "/", [route]);

  return (
    <header
      className={`flex justify-end items-center pb-1 pt-5 relative h-12`}
      id={"main-header"}
    >
      {!isHome && (
        <>
          <Link href="/" className={`text-lg italic font-extrabold mr-5 mt-1`}>
            {metadata.title}
          </Link>
          <nav className={`flex grow gap-3 max-md:gap-2`}>
            {CATEGORY_KEYS.map((key) => (
              <Link
                href={CATEGORY_INFO[key].link}
                key={CATEGORY_INFO[key].id}
                className={`hover:text-blue-700 font-light border-b italic ${
                  route.includes(CATEGORY_INFO[key].id)
                    ? "border-b-blue-700"
                    : "border-b-transparent"
                }`}
              >
                {CATEGORY_INFO[key].label}
              </Link>
            ))}
          </nav>
        </>
      )}
      <div className={`grid gap-2 place-items-center`}>
        <button
          id={"btn-theme"}
          className={`rounded-full bg-transparent text-yellow-500 dark:text-blue-100 transition-none`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={"theme"}
          type={"button"}
        >
          {theme === "dark" ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsSunFill size={20} />
          )}
        </button>
        {/*TODO: Search*/}
      </div>
    </header>
  );
};

export default Header;
