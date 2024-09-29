"use client";

import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import Nav from "@components/layout/Nav";

const Header = () => {
  const { route } = useRouter();

  const { theme, setTheme } = useTheme();
  const isHome = useMemo(() => route === "/", [route]);

  return (
    <header
      className={`flex justify-end items-center pb-1 pt-5 relative h-12`}
      id={"main-header"}
    >
      {!isHome && <Nav />}
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
