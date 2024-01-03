import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  horizontalStaggerChildVariants,
  horizontalStaggerContainerVariants,
} from 'utils/anime'

export default function NavbarDesktop({ navLinks }) {
  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur-md backdrop-saturate-100">
      <div className="flex items-center justify-between w-4/5 p-6 py-8 mx-auto">
        <Link href="/" className="text-base font-semibold tracking-widest">
          <span>KS &copy; 2023</span>
        </Link>
        <motion.ul
          variants={horizontalStaggerContainerVariants}
          className="flex flex-row items-center justify-between w-auto h-auto gap-8 pr-0 text-base bg-none"
          initial="hidden"
          animate="show"
        >
          {navLinks.map(([title, url]) => (
            <motion.li
              variants={horizontalStaggerChildVariants}
              className="px-4 pointer-events-auto last-of-type:pr-4 md:px-8"
              key={title}
            >
              {url.split('').at(0) === '#' ? (
                <a href={url}>{title}</a>
              ) : (
                <Link href={url}>{title}</Link>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  )
}
