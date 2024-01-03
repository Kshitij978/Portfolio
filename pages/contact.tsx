import { motion } from 'framer-motion'

import SocialButtons from '../components/SocialButtons/SocialButtons'
import Split from 'components/SplitText'

export default function Contact() {
  const transition = { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }

  // Variants for Container of words.
  const firstWord = {
    visible: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  }
  const secondWord = {
    visible: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  }

  // Variants for each letter.
  const letter = {
    visible: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
    hidden: {
      y: 300,
      transition: { duration: 1, ...transition },
    },
  }

  const line = {
    visible: {
      width: '80%',
      transition: { duration: 1, ease: [1, 0.99, 0, 1] },
    },
    hidden: {
      width: 0,
      transition: { duration: 1, ease: [1, 0.99, 0, 1] },
    },
  }

  return (
    <motion.div
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="relative flex flex-col items-center justify-center pt-12 pb-20 text-neutral-950"
    >
      <motion.div
        className="absolute bottom-0 top-0 mx-auto h-[1px] w-4/5 bg-white"
        variants={line}
      ></motion.div>
      <motion.div className="flex pt-8 overflow-hidden text-6xl italic font-normal text-white whitespace-pre-wrap md:text-8xl lg:text-9xl">
        <motion.span variants={firstWord}>
          <motion.span className="inline-block" variants={letter}>
            L
          </motion.span>
          <motion.span className="inline-block" variants={letter}>
            e
          </motion.span>
          <motion.span className="inline-block" variants={letter}>
            t
          </motion.span>
          <motion.span className="inline-block" variants={letter}>
            &apos;
          </motion.span>
          <motion.span className="inline-block" variants={letter}>
            s&nbsp;
          </motion.span>
        </motion.span>
        <motion.span variants={secondWord}>
          <motion.span className="inline-block" variants={letter}>
            T
          </motion.span>
          <motion.span className="inline-block" variants={letter}>
            a
          </motion.span>
          <motion.span className="inline-block" variants={letter}>
            l
          </motion.span>
          <motion.span className="inline-block" variants={letter}>
            k&nbsp;
          </motion.span>
        </motion.span>
      </motion.div>
      <div className="flex flex-col items-center justify-center p-8">
        <a
          className="text-2xl font-thin italic text-white opacity-[0.8] md:text-4xl lg:text-5xl"
          href="mailto:kshitij.suraj@gmail.com"
        >
          <Split centerAlign>kshitij.suraj@gmail.com</Split>
        </a>

        <h2 className="pt-8 pb-6 text-2xl text-white">
          <Split>Social</Split>
        </h2>
        <SocialButtons />
      </div>
    </motion.div>
  )
}
