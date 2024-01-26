import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  socialIconContainerVariants,
  socialIconVariants,
} from 'utils/constants/animation'

export default function SocialButtons() {
  const socials = [
    {
      name: 'github',
      link: 'https://github.com/Kshitij978',
      src: '/img/github.svg',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/kshitij-srivastava-1719651aa/',
      src: '/img/linkedin.svg',
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/Kshitij__10',
      src: '/img/twitter.svg',
    },
    {
      name: 'behance',
      link: 'https://www.behance.net/kshitizsrivast',
      src: '/img/behance.svg',
    },
  ]
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={socialIconContainerVariants}
      className="flex items-center justify-evenly gap-10"
    >
      {socials.map(({ name, link, src }, index) => (
        <Link
          key={`${name}-${index}`}
          href={link}
          target="_blank"
          rel="noreferer noopener"
        >
          <motion.li
            variants={socialIconVariants}
            className="rounded-full border-[2px] border-slate-300 p-2"
          >
            <Image src={src} width={20} height={20} alt={name} />
          </motion.li>
        </Link>
      ))}
    </motion.ul>
  )
}
