import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect, MutableRefObject } from 'react'

type Props = {
  children: React.ReactNode
  dirRef: MutableRefObject<'up' | 'down'>
}

export function SectionWrapper({ children, dirRef }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: false, amount: 0.08 })
  const prevInView = useRef(false)

  useEffect(() => {
    const entering = inView && !prevInView.current

    if (entering) {
      // Snap to start position based on scroll direction, then animate in
      const startY = dirRef.current === 'down' ? 68 : -68
      controls.set({ opacity: 0, y: startY })
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.82,
          ease: [0.22, 1, 0.36, 1],
        },
      })
    }

    prevInView.current = inView
  }, [inView, controls, dirRef])

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 68 }}>
      {children}
    </motion.div>
  )
}
