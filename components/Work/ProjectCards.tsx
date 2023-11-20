import Link from 'next/link'
import Image from 'next/image'
import Split from 'components/SplitText'
import { motion, backOut } from 'framer-motion'
export default function ProjectCard({ number, title, description, imageUrl }) {
  const animateLinkOnScroll = {
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.8, ease: backOut, delay: 0.5 },
    },
    hidden: {
      y: '100%',
      opacity: 0,
      transition: { duration: 0.8, ease: backOut, delay: 0.5 },
    },
  }
  return (
    <div className="flex gap-12">
      <span className="hidden pt-3 text-6xl italic font-bold font-Outrun opacity-90 md:inline-block">
        {number}
      </span>
      <div className="flex flex-col-reverse justify-between w-full gap-4 md:flex-row">
        <div className="flex flex-col w-full">
          <h2 className="w-full py-4 text-2xl text-white whitespace-normal">
            <Split>{title}</Split>
          </h2>
          <p className="w-11/12 font-thin leading-loose tracking-wider text-zinc-300 md:w-4/5">
            <Split>{description}</Split>
          </p>
          <motion.ul
            className="flex gap-8 pt-4 text-white item-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.li variants={animateLinkOnScroll}>
              <Link
                href=""
                className="rounded-full border-[2px] border-white p-2"
              >
                <i className="text-lg ri-external-link-line"></i>
              </Link>
            </motion.li>

            <motion.li variants={animateLinkOnScroll}>
              <Link
                href=""
                className="rounded-full border-[2px] border-white p-2"
              >
                <i className="text-lg ri-github-fill"></i>
              </Link>
            </motion.li>
          </motion.ul>
        </div>

        <div className="relative overflow-hidden">
          <Image
            alt="github-readme-activity-graph"
            className="hover:ease-[cubic-bezier(0.43, 0.13, 0.23, 0.96)] cursor-pointer object-cover hover:scale-125 hover:transition hover:duration-1000"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={imageUrl}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
