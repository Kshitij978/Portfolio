'use client'
import { motion, AnimatePresence } from 'framer-motion'
// import { useEffect, useRef } from 'react'
import Navbar from './Navbar/Navbar'
import Contact from 'components/Contact/Contact'
import {
  pageTransitionChildVariants,
  pageTransitionContainerVariants,
} from 'utils/constants/animation'
import { usePathname } from 'next/navigation'
// import Lenis from '@studio-freight/lenis'

function PageTransitionLayout({ children }) {
  const pathname = usePathname()
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + 'transition-wrapper'}
          className="transition-wrapper pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-40 flex h-full w-full overflow-hidden"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={pageTransitionContainerVariants}
        >
          <motion.div
            variants={pageTransitionChildVariants}
            className="h-full basis-1/3 border-r-2 border-black bg-gray-200"
          ></motion.div>
          <motion.div
            variants={pageTransitionChildVariants}
            className="h-full basis-1/3 border-r-2 border-black bg-gray-200"
          ></motion.div>
          <motion.div
            variants={pageTransitionChildVariants}
            className="border-black-0 h-full basis-1/3 border-r-2 bg-gray-200"
          ></motion.div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + 'main'}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Contact />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default PageTransitionLayout
