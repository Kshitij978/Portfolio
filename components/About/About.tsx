import Image from 'next/image'
import Link from 'next/link'
import { backOut, easeOut, motion } from 'framer-motion'
import Split from 'components/SplitText'

export default function About() {
  const animateParaOnScroll = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: easeOut },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: { duration: 1, ease: easeOut },
    },
  }
  const animateLinkOnScroll = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: backOut },
    },
    hidden: {
      x: -500,
      opacity: 0,
      transition: { duration: 1, ease: backOut },
    },
  }

  return (
    <motion.div
      id="about"
      className="relative flex flex-col w-4/5 mx-auto mb-24 md:mb-36 md:flex-row"
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
          I&apos;m an Indian creative frontend web developer with a passion for
          solving problems through simple & interactive designs
        </Split>
        <br />
        <br />
      </p>
      <motion.div
        className="flex items-center justify-end w-full"
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
            className="transition-opacity duration-200 opacity-0 animate-aboutMe invert hover:opacity-100"
            alt="about_me"
            src="/img/about.svg"
            fill
          />
        </Link>
      </motion.div>
    </motion.div>
  )
}
