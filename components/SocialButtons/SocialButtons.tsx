import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SocialButtons() {
  const transition = { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.12,
        staggerDirection: 1,
      },
    },
  }

  // Variants for each letter.
  const iconVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ...transition },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.8, ...transition },
    },
  }
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
      variants={containerVariants}
      className="flex items-center gap-10 justify-evenly"
    >
      {socials.map(({ name, link, src }, index) => (
        <Link
          key={`${name}-${index}`}
          href={link}
          target="_blank"
          rel="noreferer noopener"
        >
          <motion.li
            variants={iconVariants}
            className="rounded-full border-[2px] border-slate-300 p-2"
          >
            <Image src={src} width={20} height={20} alt={name} />
          </motion.li>
        </Link>
      ))}
    </motion.ul>
  )
}
