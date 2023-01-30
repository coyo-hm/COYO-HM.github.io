import { FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={`grid gap-10`}>
      <a href="https://github.com/COYO-HM" target={'_blank'} rel="noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:bsydwp@gmail.com">
        <FaEnvelope />
      </a>
    </footer>
  )
}

export default Footer
