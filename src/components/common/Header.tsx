import Link from "next/link";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import metadata from "@config/index";
import Nav from "./Nav";
import useTheme from "@hooks/useTheme";

const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useTheme();

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
    <header
      className={`w-full flex justify-center items-center pb-1 pt-4 relative`}
    >
      <Nav />
      <Link href="/" className={`text-lg`}>
        {metadata.title}
      </Link>
      <div className={`absolute right-0 grid gap-2 place-items-center`}>
        <button
          id={"btn-theme"}
          className={`rounded-full bg-neutral-100 dark:bg-neutral-900 text-yellow-500 dark:text-blue-100`}
          onClick={toggleTheme}
          aria-label={"theme"}
          type={"button"}
        >
          {isDarkTheme ? (
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
