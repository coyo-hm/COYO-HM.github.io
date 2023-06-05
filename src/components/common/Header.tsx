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
    <header className={`w-full flex justify-between items-center pb-1 pt-4`}>
      <div
        className={`flex flex-row items-center grow justify-center ml-4 max-md:justify-start max-md:m-0`}
      >
        <Link href="/" className={`text-lg max-md:pl-4`}>
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
