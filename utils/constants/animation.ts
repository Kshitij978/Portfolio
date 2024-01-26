export const horizontalStaggerContainerVariants = {
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const horizontalStaggerContainerVariantsMobile = {
  hidden: {
    opacity: 0,
    x: '100%',
  },

  show: {
    opacity: [0, 1],
    x: ['100%', '0%'],
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
      ease: [0.27, 0.85, 0.17, 0.97],
    },
  },

  exit: {
    opacity: [1, 0],
    x: ['0%', '100%'],
    transition: {
      delay: 0.3,
      ease: [0.27, 0.85, 0.17, 0.97],
    },
  },
}

export const horizontalStaggerChildVariants = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  show: {
    opacity: [0, 1],
    x: ['100%', '0%'],
    transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
  },

  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
  },
}
