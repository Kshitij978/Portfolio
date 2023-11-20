import Image from 'next/image'
import React from 'react'

export default function Skills({ alt, url, invertColor }) {
  const inverted = invertColor ? 'grayscale invert mix-blend-color-dodge' : ''
  return (
    <li>
      <Image
        className={`${inverted} rounded-full !ring-2 !ring-offset-2 !ring-offset-background dark:!ring-offset-background-dark !ring-default absolute cursor-pointer bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200 backdrop-blur-lg backdrop-saturate-200`}
        alt={alt}
        width={100}
        height={100}
        src={url}
      />
    </li>
  )
}
