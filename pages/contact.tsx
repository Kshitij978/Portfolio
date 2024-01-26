import { motion } from 'framer-motion'

import SocialButtons from '../components/SocialButtons/SocialButtons'
import Split from 'components/SplitText'
import {
  firstWordVariants,
  letterVariants,
  lineVariants,
  secondWordVariants,
} from 'utils/constants/animation'

export default function Contact() {
  return (
    <motion.div
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="relative flex flex-col items-center justify-center pb-20 pt-12 text-neutral-950"
    >
      <motion.div
        className="absolute bottom-0 top-0 mx-auto h-[1px] w-4/5 bg-white"
        variants={lineVariants}
      ></motion.div>
      <motion.div className="flex overflow-hidden whitespace-pre-wrap pt-8 text-6xl font-normal italic text-white md:text-8xl lg:text-9xl">
        <motion.span variants={firstWordVariants}>
          <motion.span className="inline-block" variants={letterVariants}>
            L
          </motion.span>
          <motion.span className="inline-block" variants={letterVariants}>
            e
          </motion.span>
          <motion.span className="inline-block" variants={letterVariants}>
            t
          </motion.span>
          <motion.span className="inline-block" variants={letterVariants}>
            &apos;
          </motion.span>
          <motion.span className="inline-block" variants={letterVariants}>
            s&nbsp;
          </motion.span>
        </motion.span>
        <motion.span variants={secondWordVariants}>
          <motion.span className="inline-block" variants={letterVariants}>
            T
          </motion.span>
          <motion.span className="inline-block" variants={letterVariants}>
            a
          </motion.span>
          <motion.span className="inline-block" variants={letterVariants}>
            l
          </motion.span>
          <motion.span className="inline-block" variants={letterVariants}>
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

        <h2 className="pb-6 pt-8 text-2xl text-white">
          <Split>Social</Split>
        </h2>
        <SocialButtons />
      </div>
    </motion.div>
  )
}
