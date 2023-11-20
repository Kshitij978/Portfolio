import React from 'react'

const Marquee = ({
  marqueeTexts,
  verticle,
}: {
  marqueeTexts: string[]
  verticle?: boolean
}) => {
  const marqueeClass = verticle
    ? 'verticle-marquee'
    : 'horizontal-marquee flex justify-start'
  const marqueeItemsOrientation = verticle
    ? 'rotate-90 transform flex-col mb-2 h-[50px] uppercase'
    : 'ml-4 h-full'
  return (
    <div className="marquee-container">
      <ul className={marqueeClass}>
        {marqueeTexts.map((text: string, i: number) => (
          <li
            key={i}
            className={`flex ${marqueeItemsOrientation} items-center justify-center whitespace-nowrap font-bold `}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Marquee
