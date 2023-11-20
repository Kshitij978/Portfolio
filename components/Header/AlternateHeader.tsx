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
    animate(animationSequence, { duration: 4 })
  }, [animationSequence])

  return (
    <header className="relative flex flex-col items-center justify-center mt-32 mb-20 overflow-hidden md:mb-32 md:mt-24">
      <div className="relative">
        <div className="relative grid grid-cols-3 gap-y-10 md:grid-cols-[3.5fr_1fr]">
          <div className="relative col-span-2 md:col-span-1">
            <h1 className="flex items-center h-full p-6 text-5xl font-bold opacity-0 heading-1 font-Satoshi md:text-8xl md:font-bold">
              Creative
            </h1>
            <div className="line-2 absolute bottom-0 left-auto right-0 top-0 h-0 w-[1px] bg-white"></div>
          </div>
          <div className="p-6 cursor-pointer figure-1">
            <a href="#about">
              <Lottie
                className="w-16 h-16 scroll-down-animation md:h-28 md:w-28"
                animationData={scrollAnimation}
                loop={true}
              />
            </a>
          </div>
          <div className="line-1 absolute left-0 top-0 h-[1px] w-0 bg-white"></div>
        </div>

        <div className="relative grid grid-cols-4 gap-y-10 overflow-hidden md:grid-cols-[2fr_3.5fr]">
          <div className="line-3 absolute left-0 top-0 h-[1px] w-0 bg-white"></div>

          <div className="p-6 opacity-0 figure-2">
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
            <h1 className="flex items-center h-full p-6 text-5xl font-bold opacity-0 heading-2 font-Satoshi md:text-8xl">
              developer
            </h1>
          </div>
          <div className="line-5 absolute bottom-0 left-0 h-[1px] w-0 bg-white "></div>
        </div>

        <div className="absolute top-0 hidden w-full h-full opacity-0 marquee -z-10 md:flex">
          <div className="absolute -left-[20%] bottom-0 top-0 h-[inherit] w-10 rotate-180 transform rounded-3xl border border-white border-opacity-20">
            <VerticalMarquee verticle marqueeTexts={leftMarqueeTexts} />
          </div>

          <div className="absolute -right-[20%] bottom-0 top-0 h-[inherit] w-10 rotate-180 transform overflow-hidden  rounded-3xl border border-white border-opacity-20">
            <VerticalMarquee verticle marqueeTexts={rightMarqueeTexts} />
          </div>
        </div>
      </div>

      <div className="flex opacity-0 button mt-14">
        <Link
          href="/about"
          className="px-8 py-2 mr-6 text-lg font-bold border border-white rounded-sm md:px-16 md:py-4"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="px-8 py-2 text-lg font-bold text-black bg-white border rounded-sm hover:bg-transparent hover:text-white md:px-16 md:py-4"
        >
          Resume
        </Link>
      </div>
    </header>
  )
}
