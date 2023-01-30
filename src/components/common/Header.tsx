import metadata from "config";
import Link from "next/link";
// import Image from 'next/image'
import Nav from "./Nav";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className={`w-full max-w-3xl flex justify-between items-center my-1`}
    >
      <button>
        <FaBars />
      </button>
      <div className={`flex flex-row items-center`}>
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
    </header>
  );
};

export default Header;
