import Link from "next/link";
// import Image from 'next/image'
import { FaBars } from "react-icons/fa";

import metadata from "@config/index";
import useSidebar from "@hooks/useSidebar";
import Nav from "./Nav";

const Header = () => {
  const { openSidebar } = useSidebar();
  return (
    <header className={`w-full flex justify-between items-center pb-1 pt-4`}>
      <button className={`hover:text-blue-700`} onClick={openSidebar}>
        <FaBars size={24} />
      </button>
      <div
        className={`flex flex-row items-center max-md:grow max-md:justify-center`}
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
      {/*TODO:검색 추가*/}
      {/*TODO: THEME SWITCH*/}
    </header>
  );
};

export default Header;
