import { useEffect, useState } from 'react'

/**
 * Returns a boolean indicating whether the given media query matches the current viewport.
 *
 * @param {string} query - The media query to evaluate.
 * @return {boolean} - True if the media query matches the viewport, false otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', handleChange)
    } else {
      matchMedia.addListener(handleChange)
    }

    return () => {
      if (matchMedia.addEventListener) {
        matchMedia.addEventListener('change', handleChange)
      } else {
        matchMedia.addListener(handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
