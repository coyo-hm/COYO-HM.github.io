import Link from "next/link";
// import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import metadata from "@config/index";
import useSidebar from "@hooks/useSidebar";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const Header = () => {
  const { openSidebar } = useSidebar();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkTheme(false);
      document.documentElement.classList.remove("dark");
    }
    return () => localStorage.removeItem("theme");
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevState) => {
      if (prevState) {
        localStorage.theme = "default";
        document.documentElement.classList.remove("dark");
        return false;
      } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        return true;
      }
    });
  };

  return (
    <header className={`w-full flex justify-between items-center pb-1 pt-4`}>
      <button className={`hover:text-blue-700`} onClick={openSidebar}>
        <FaBars size={24} />
      </button>
      <div
        className={`flex flex-row items-center grow justify-center ml-4 max-md:justify-start max-md:m-0`}
      >
        {/* <Image
          src={`/images/logo.png`}
          alt="logo"
          width={40}
          height={40}
          className={`rounded-full`}
        /> */}

        <Link href="/" className={`font-extralight text-lg`}>
          {metadata.title}
        </Link>
      </div>
      <Nav />
      <button
        id={"btn-theme"}
        className={`rounded-full bg-neutral-100 p-2 ml-4 dark:bg-neutral-900 text-yellow-500 dark:text-blue-100`}
        onClick={toggleTheme}
      >
        {isDarkTheme ? (
          <BsFillMoonStarsFill size={20} />
        ) : (
          <BsSunFill size={20} />
        )}
      </button>
      {/*TODO: Search*/}
    </header>
  );
};

export default Header;
