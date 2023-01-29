import metadata from 'config'
import Image from 'next/image'
import Nav from './Nav'

const Header = () => {
  return (
    <header
      className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
    >
      <div className={`flex flex-row items-center`}>
        <Image
          src={`/images/logo.png`}
          alt="logo"
          width={40}
          height={40}
          className={`rounded-full`}
        />
        <span className={`mx-2 font-extralight text-lg`}>{metadata.title}</span>
      </div>
      <Nav />
    </header>
  )
}

export default Header
