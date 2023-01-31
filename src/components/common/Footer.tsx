import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`flex justify-center`}>
      <a
        href="https://github.com/COYO-HM"
        target={"_blank"}
        rel="noreferrer"
        className={`mr-10`}
      >
        <FaGithub />
      </a>
      <a href="mailto:bsydwp@gmail.com">
        <FaEnvelope />
      </a>
    </footer>
  );
};

export default Footer;
