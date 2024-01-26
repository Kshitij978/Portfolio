import { backOut } from 'framer-motion'

export const headerAnimationSequence = [
  ['.line-1', { width: '100%' }, { ease: [0.71, 0.5, 0, 1.08] }],
  // This will start 0.5 seconds after the previous animation:
  [
    '.heading-1',
    { x: [-50, 0], opacity: [0, 1] },
    { ease: 'easeInOut' },
    { at: '+0.5' },
  ],
  // This will start 0.5 seconds after the end of the previous animation:
  [
    '.line-2',
    { height: '100%' },
    { ease: [0.71, 0.5, 0, 1.08] },
    { at: '+0.5' },
  ],
  [
    '.figure-1',
    { scale: [0.5, 1], opacity: [0, 1] },
    { ease: 'backOut' },
    { at: '+0.5' },
  ],
  [
    '.line-3',
    { width: '100%' },
    { ease: [0.71, 0.5, 0, 1.08] },
    { at: '+0.5' },
  ],

  [
    '.figure-2',
    { scale: [0.5, 1], opacity: [0, 1] },
    { ease: 'backOut' },
    { at: '+0.5' },
  ],
  [
    '.line-4',
    { height: '100%' },
    { ease: [0.71, 0.5, 0, 1.08] },
    { at: '+0.5' },
  ],
  [
    '.heading-2',
    { x: [50, 0], opacity: [0, 1] },
    { ease: 'easeInOut' },
    { at: '+0.5' },
  ],
  [
    '.line-5',
    { width: '100%' },
    { ease: [0.71, 0.5, 0, 1.08] },
    { at: '+0.5' },
  ],
  [
    '.marquee',
    { opacity: [0, 1] },
    { ease: 'easeIn', duration: 1 },
    { at: '+0.5' },
  ],
  [
    '.button',
    { y: [50, 0], opacity: [0, 1] },
    { ease: 'backOut', duration: 1 },
    { at: '+0.5' },
  ],
]

export const animateProjectIconsVariants = {
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

export const animateLinkOnScroll = {
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

const transition = { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }

export const socialIconContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      staggerDirection: 1,
    },
  },
}

export const socialIconVariants = {
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

export const pageTransitionContainerVariants = {
  exit: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: 1,
    },
  },
}

export const pageTransitionChildVariants = {
  hidden: {
    y: '100%',
    transition: { duration: 1.5, ease: [0.27, 0.85, 0.17, 0.97] },
  },
  show: {
    y: '100%',
    transition: { duration: 1.5, ease: [0.27, 0.85, 0.17, 0.97] },
  },

  exit: {
    y: ['100%', '0%', '-100%'],
    transition: { duration: 1.5, ease: [0.27, 0.85, 0.17, 0.97] },
  },
}

export const splitTextContainerVariants = {
  show: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: 1,
    },
  },
}

export const splitTextChildVariants = {
  hidden: {
    y: '100%',
    transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
  },
  show: {
    y: ['100%', '-5%'],
    transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
  },
}

export const aboutPagecontainerVariants = {
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const aboutPagechildVariants = {
  hidden: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
  },
  show: {
    opacity: 1,
    x: ['100%', '0%'],
    transition: { duration: 0.8, ease: [0.27, 0.85, 0.17, 0.97] },
  },
}

const letterTransition = { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }

// Variants for Container of words.
export const firstWordVariants = {
  visible: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}
export const secondWordVariants = {
  visible: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}

// Variants for each letter.
export const letterVariants = {
  visible: {
    y: 0,
    transition: { duration: 1, ...letterTransition },
  },
  hidden: {
    y: 300,
    transition: { duration: 1, ...letterTransition },
  },
}

export const lineVariants = {
  visible: {
    width: '80%',
    transition: { duration: 1, ease: [1, 0.99, 0, 1] },
  },
  hidden: {
    width: 0,
    transition: { duration: 1, ease: [1, 0.99, 0, 1] },
  },
}
