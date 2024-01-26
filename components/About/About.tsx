import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Split from 'components/SplitText'
import { animateLinkOnScroll } from 'utils/constants/animation'

export default function About() {
  return (
    <motion.div
      id="about"
      className="relative mx-auto mb-24 flex w-4/5 flex-col md:mb-36 md:flex-row"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <p
        // variants={animateParaOnScroll}
        className={`split-lines text-2xl font-thin leading-10 tracking-wider  text-zinc-300 md:text-4xl lg:text-6xl`}
      >
        <br />
        <Split>
          I&apos;m an Indian frontend web developer, passionate about solving
          problems through clear and interactive designs.
        </Split>
        <br />
        <br />
      </p>
      <motion.div
        className="flex w-full items-center justify-end"
        variants={animateLinkOnScroll}
      >
        <Link
          className={`relative flex h-32 w-32 items-center justify-center rounded-[10rem] border border-white md:h-48 md:w-48 `}
          href="/about"
        >
          <Image
            className="-rotate-[120deg] transform p-6 invert"
            alt="about_me"
            src="/img/arrow.svg"
            fill
          />
          <Image
            className="animate-aboutMe opacity-0 invert transition-opacity duration-200 hover:opacity-100"
            alt="about_me"
            src="/img/about.svg"
            fill
          />
        </Link>
      </motion.div>
    </motion.div>
  )
}
