import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  horizontalStaggerChildVariants,
  horizontalStaggerContainerVariants,
} from 'utils/constants/animation'

export default function NavbarDesktop({ navLinks }) {
  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur-md backdrop-saturate-100">
      <div className="mx-auto flex w-4/5 items-center justify-between p-6 py-8">
        <Link href="/" className="text-base font-semibold tracking-widest">
          <span>KS &copy; 2023</span>
        </Link>
        <motion.ul
          variants={horizontalStaggerContainerVariants}
          className="flex h-auto w-auto flex-row items-center justify-between gap-8 bg-none pr-0 text-base"
          initial="hidden"
          animate="show"
        >
          {navLinks.map(([title, url]) => (
            <motion.li
              variants={horizontalStaggerChildVariants}
              className="pointer-events-auto px-4 last-of-type:pr-4 md:px-8"
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
