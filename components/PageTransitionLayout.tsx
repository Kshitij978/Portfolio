import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Navbar from './Navbar/Navbar'
import Contact from 'pages/contact'
import Lenis from '@studio-freight/lenis'

function PageTransitionLayout({ children }) {
  const containerVariants = {
    exit: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: 1,
      },
    },
  }

  const childVariants = {
    hidden: {
      y: '100%',
      transition: { duration: 1.5, ease: [0.27, 0.85, 0.17, 0.97] },
    },
    show: {
      y: '100%',
      transition: { duration: 1.5, ease: [0.27, 0.85, 0.17, 0.97] },
    },

    exit: {
      y: ['100%', '0%', '-100%'],
      transition: { duration: 1.5, ease: [0.27, 0.85, 0.17, 0.97] },
    },
  }
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 left-0 right-0 z-40 flex w-full h-full overflow-hidden pointer-events-none transition-wrapper"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={containerVariants}
      >
        <motion.div
          variants={childVariants}
          className="h-full bg-gray-200 border-r-2 border-black basis-1/3"
        ></motion.div>
        <motion.div
          variants={childVariants}
          className="h-full bg-gray-200 border-r-2 border-black basis-1/3"
        ></motion.div>
        <motion.div
          variants={childVariants}
          className="h-full bg-gray-200 border-r-2 border-black-0 basis-1/3"
        ></motion.div>
      </motion.div>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="overflow-x-hidden"
      >
        {children}
      </motion.main>
      <Contact />
    </>
  )
}

export default PageTransitionLayout
