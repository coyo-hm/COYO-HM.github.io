import Link from 'next/link'

const Nav = () => {
  const navlinks: { title: string; link: string }[] = [
    { title: 'Home', link: '/' },
    { title: 'Blog', link: '/blog' },
  ]

  return (
    <nav>
      {navlinks.map(nav => (
        <Link href={nav.link} key={nav.title}>
          {nav.title}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
