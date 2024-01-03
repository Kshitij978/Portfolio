import { SplitText } from '../lib/SplitText/SplitText'
import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const TextSplit = dynamic(() => Promise.resolve({ default: SplitText }), {
  ssr: false,
})

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: 1,
    },
  },
}

const childVariants = {
  hidden: {
    y: '100%',
    transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
  },
  show: {
    y: ['100%', '-5%'],
    transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
  },
}

export default function Split({
  children,
  centerAlign,
}: {
  children: ReactNode
  centerAlign?: boolean
}) {
  const css = centerAlign ? 'flex justify-center' : 'inline-flex'
  return (
    <TextSplit
      LineWrapper={({
        lineIndex,
        children,
      }: {
        lineIndex: number
        children: ReactNode
      }) => (
        <motion.span
          className={`${css} gap-2 overflow-y-hidden`}
          key={lineIndex}
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
          initial="hidden"
        >
          {children}
        </motion.span>
      )}
      WordWrapper={({
        wordIndex,
        countIndex,
        children,
      }: {
        wordIndex: number
        countIndex: number
        children: ReactNode
      }) => (
        <motion.span
          className="transform translate-y-full "
          variants={childVariants}
        >
          {children}
        </motion.span>
      )}
    >
      {children}
    </TextSplit>
  )
}
