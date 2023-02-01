import metadata from "config";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`w-full flex flex-col items-center text-neutral-700 pb-3`}
    >
      <div className={"flex justify-center mb-2"}>
        <a
          href="https://github.com/COYO-HM"
          target={"_blank"}
          rel="noreferrer"
          className={`mr-4 hover:text-blue-700`}
        >
          <FaGithub size={24} />
        </a>
        <a href="mailto:bsydwp@gmail.com" className={`hover:text-blue-700`}>
          <FaEnvelope size={24} />
        </a>
      </div>
      <div className={`col-span-2 font-extralight`}>{metadata.copyright}</div>
    </footer>
  );
};

export default Footer;