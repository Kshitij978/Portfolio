import { SplitText } from '../lib/SplitText/SplitText'
import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import {
  splitTextChildVariants,
  splitTextContainerVariants,
} from 'utils/constants/animation'

const TextSplit = dynamic(() => Promise.resolve({ default: SplitText }), {
  ssr: false,
})

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
          variants={splitTextContainerVariants}
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
          className="translate-y-full transform "
          variants={splitTextChildVariants}
        >
          {children}
        </motion.span>
      )}
    >
      {children}
    </TextSplit>
  )
}
