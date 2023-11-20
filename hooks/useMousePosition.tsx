'use client'

import { useState, useEffect } from 'react'

/**
 * Hook that tracks the mouse position.
 *
 * @return {object} The current mouse position as an object with 'x' and 'y' properties.
 */
export default function useMousePosition(): object {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}
