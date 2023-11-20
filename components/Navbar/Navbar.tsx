import dynamic from 'next/dynamic'
import { useMediaQuery } from 'hooks/useMediaQuery'
const NavbarMobile = dynamic(() => import('./NavbarMobile'), { ssr: false })
const NavbarDesktop = dynamic(() => import('./NavbarDesktop'), { ssr: false })

export default function Navbar() {
  const navLinks = [
    ['About', '/about'],
    ['Blogs', '/blogs'],
    ['Experiments', '/experiments'],
    ['Contact Me', '/contact'],
  ]

  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {isMobile ? (
        <NavbarMobile navLinks={navLinks} />
      ) : (
        <NavbarDesktop navLinks={navLinks} />
      )}
    </>
  )
}
