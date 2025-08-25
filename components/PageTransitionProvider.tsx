'use client'

import PageTransitionLayout from './PageTransitionLayout'

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransitionLayout>{children}</PageTransitionLayout>
}
