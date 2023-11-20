import Link from 'next/link'
import { animate } from 'framer-motion'
import React, { useEffect, useMemo } from 'react'
import VerticalMarquee from '../Marquee'
import Lottie from 'lottie-react'
import scrollAnimation from 'lottie/scroll-down.json'
import developerAnimation from 'lottie/developer.json'

export default function AlternateHeader() {
  const rightMarqueeTexts = [
    'React',
    '-',
    'Next',
    '-',
    'Tailwind',
    '-',
    'Three',
    '-',
    'Git',
    '-',
    'React',
    '-',
    'Next',
    '-',
    'Tailwind',
    '-',
    'Three',
    '-',
    'Git',
    '-',
  ]
  const leftMarqueeTexts = [
    'Figma',
    '-',
    'Blender',
    '-',
    'Figma',
    '-',
    'Blender',
    '-',
    'Figma',
    '-',
    'Blender',
    '-',
    'Figma',
    '-',
    'Blender',
    '-',
  ]

  const animationSequence = useMemo(() => {
    return [
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
  }, [])

  useEffect(() => {
    animate(animationSequence as any, { duration: 4 })
  }, [animationSequence])

  return (
    <header className="relative mb-20 mt-32 flex flex-col items-center justify-center overflow-hidden md:mb-32 md:mt-24">
      <div className="relative">
        <div className="relative grid grid-cols-3 gap-y-10 md:grid-cols-[3.5fr_1fr]">
          <div className="relative col-span-2 md:col-span-1">
            <h1 className="heading-1 flex h-full items-center p-6 font-Satoshi text-5xl font-bold opacity-0 md:text-8xl md:font-bold">
              Creative
            </h1>
            <div className="line-2 absolute bottom-0 left-auto right-0 top-0 h-0 w-[1px] bg-white"></div>
          </div>
          <div className="figure-1 cursor-pointer p-6">
            <a href="#about">
              <Lottie
                className="scroll-down-animation h-16 w-16 md:h-28 md:w-28"
                animationData={scrollAnimation}
                loop={true}
              />
            </a>
          </div>
          <div className="line-1 absolute left-0 top-0 h-[1px] w-0 bg-white"></div>
        </div>

        <div className="relative grid grid-cols-4 gap-y-10 overflow-hidden md:grid-cols-[2fr_3.5fr]">
          <div className="line-3 absolute left-0 top-0 h-[1px] w-0 bg-white"></div>

          <div className="figure-2 p-6 opacity-0">
            <Lottie
              className="developer-animation h-14 w-14 md:h-28 md:w-28"
              animationData={developerAnimation}
              loop={true}
              renderer="svg"
              rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            />
          </div>

          <div className="relative col-span-3 justify-self-end md:col-span-1">
            <div className="line-4 absolute left-0 right-0 top-0 h-0 w-[1px] bg-white"></div>
            <h1 className="heading-2 flex h-full items-center p-6 font-Satoshi text-5xl font-bold opacity-0 md:text-8xl">
              developer
            </h1>
          </div>
          <div className="line-5 absolute bottom-0 left-0 h-[1px] w-0 bg-white "></div>
        </div>

        <div className="marquee absolute top-0 -z-10 hidden h-full w-full opacity-0 md:flex">
          <div className="absolute -left-[20%] bottom-0 top-0 h-[inherit] w-10 rotate-180 transform rounded-3xl border border-white border-opacity-20">
            <VerticalMarquee verticle marqueeTexts={leftMarqueeTexts} />
          </div>

          <div className="absolute -right-[20%] bottom-0 top-0 h-[inherit] w-10 rotate-180 transform overflow-hidden  rounded-3xl border border-white border-opacity-20">
            <VerticalMarquee verticle marqueeTexts={rightMarqueeTexts} />
          </div>
        </div>
      </div>

      <div className="button mt-14 flex opacity-0">
        <Link
          href="/about"
          className="mr-6 rounded-sm border border-white px-8 py-2 text-lg font-bold md:px-16 md:py-4"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-sm border bg-white px-8 py-2 text-lg font-bold text-black hover:bg-transparent hover:text-white md:px-16 md:py-4"
        >
          Resume
        </Link>
      </div>
    </header>
  )
}
