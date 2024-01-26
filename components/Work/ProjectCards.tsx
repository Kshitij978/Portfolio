import Image from 'next/image'
import Split from 'components/SplitText'
import { motion } from 'framer-motion'
import { animateProjectIconsVariants } from 'utils/constants/animation'
export default function ProjectCard({
  number,
  title,
  description,
  imageUrl,
  github,
  live,
}) {
  return (
    <div className="flex gap-12">
      <span className="hidden pt-3 font-Outrun text-6xl font-bold italic opacity-90 md:inline-block">
        {number}
      </span>
      <div className="flex w-full flex-col-reverse justify-between gap-4 md:flex-row">
        <div className="flex w-full flex-col">
          <h2 className="w-full whitespace-normal py-4 text-2xl text-white">
            <Split>{title}</Split>
          </h2>
          <p className="w-11/12 font-thin leading-loose tracking-wider text-zinc-300 md:w-4/5">
            <Split>{description}</Split>
          </p>
          <motion.ul
            className="item-center flex gap-8 pt-4 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.li variants={animateProjectIconsVariants}>
              <a
                href={live}
                className="rounded-full border-[2px] border-white p-2"
                target="_blank"
              >
                <i className="ri-external-link-line text-lg"></i>
              </a>
            </motion.li>

            <motion.li variants={animateProjectIconsVariants}>
              <a
                href={github}
                className="rounded-full border-[2px] border-white p-2"
                target="_blank"
              >
                <i className="ri-github-fill text-lg"></i>
              </a>
            </motion.li>
          </motion.ul>
        </div>

        <div className="relative cursor-pointer overflow-hidden grayscale-[30%] filter transition-all hover:grayscale-0">
          <Image
            alt="github-readme-activity-graph"
            // className="hover:ease-[cubic-bezier(0.43, 0.13, 0.23, 0.96)] cursor-pointer object-cover hover:scale-125 hover:transition hover:duration-1000"
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
