import { useEffect, useRef } from 'react'

export function useScrollDirection() {
  const dirRef = useRef<'up' | 'down'>('down')

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (Math.abs(y - lastY) > 2) {
        dirRef.current = y > lastY ? 'down' : 'up'
        lastY = y
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Return the ref itself so consumers always read the latest value
  // without causing re-renders on every scroll event
  return dirRef
}
