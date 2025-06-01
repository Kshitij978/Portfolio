'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransitionLayout from './PageTransitionLayout'

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return <PageTransitionLayout>{children}</PageTransitionLayout>
}
