import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {
  horizontalStaggerChildVariants,
  horizontalStaggerContainerVariantsMobile,
} from 'utils/anime'

export default function NavbarMobile({ navLinks }: { navLinks: string[][] }) {
  const [isActive, setActive] = useState(false)

  const handleNavToggle = () => {
    setActive(!isActive)
  }

  return (
    <nav className="fixed top-0 z-30 w-full before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:backdrop-blur-md before:content-['']">
      <div
        className={`${
          isActive ? 'h-full' : 'h-auto'
        } relative mx-auto flex w-full justify-between p-6 md:static md:h-auto md:w-4/5 md:py-8`}
      >
        <div className="flex justify-between w-full">
          <Link
            href="/"
            className="z-50 text-lg font-bold tracking-widest md:text-xl"
          >
            <span>KS &copy; 2023</span>
          </Link>
          <div
            className="z-50 flex flex-col items-end gap-2 cursor-pointer group h-fit justify-self-end"
            onClick={handleNavToggle}
          >
            <div
              className={`mr-4 h-[1px] w-8 bg-white transition-transform ${
                isActive ? 'translate-y-1 rotate-45 transition-transform' : ''
              }`}
            ></div>
            <div
              className={`${
                isActive ? 'hidden' : ''
              } mr-4 h-[1px] w-8 translate-x-1 transform bg-white group-hover:translate-x-0`}
            ></div>
            <div
              className={`mr-4 h-[1px] w-8 bg-white transition-transform ${
                isActive ? '-translate-y-1 -rotate-45 transition-transform' : ''
              }`}
            ></div>
          </div>
        </div>
        <motion.ul
          variants={horizontalStaggerContainerVariantsMobile}
          className="absolute right-0 top-0 flex h-screen w-full flex-col items-end justify-center gap-10 pr-6 text-3xl font-bold  before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:backdrop-blur-md before:content-['']"
          initial="hidden"
          animate={isActive ? 'show' : 'exit'}
        >
          {navLinks.map(([title, url]) => (
            <motion.li
              variants={horizontalStaggerChildVariants}
              className="px-4 pointer-events-auto last-of-type:pr-4"
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
