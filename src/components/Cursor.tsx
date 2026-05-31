import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
      // detect hover on interactive elements
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const isInteractive = el?.closest('a, button, [role="button"], input, label, [data-hover]')
      setHovering(!!isInteractive)
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className={`cursor-div cursor-ring ${hovering ? 'hover' : ''} ${clicking ? 'clicking' : ''}`}
      />
      <div
        ref={dotRef}
        className={`cursor-div cursor-dot ${hovering ? 'hover' : ''}`}
      />
    </>
  )
}
