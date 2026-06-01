import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: 'easeOut', delay },
})

export default function Hero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = (e.clientX - rect.left) / rect.width   // 0→1
    const cy = (e.clientY - rect.top)  / rect.height  // 0→1
    setRotation({
      x: -(cy - 0.5) * 22,  // tilt up/down
      y:  (cx - 0.5) * 22,  // tilt left/right
    })
    setGlare({ x: cx * 100, y: cy * 100, opacity: 0.12 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }, [])

  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-ink">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(181,88,41,0.06) 0%, transparent 60%),
                            radial-gradient(circle at 80% 30%, rgba(201,149,58,0.04) 0%, transparent 50%)`,
        }} />
        <div className="absolute top-1/3 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
        <div className="absolute top-2/3 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      </div>

      <div className="grain-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── 3D PROFILE CARD ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Perspective wrapper — does NOT tilt, just sets perspective */}
            <div style={{ perspective: '900px', perspectiveOrigin: 'center center' }}>

              {/* Tilt container */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX: rotation.x,
                  rotateY: rotation.y,
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.8 }}
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
                className="relative"
              >
                {/* Outer decorative border — lifts slightly in 3d */}
                <div
                  className="absolute -inset-3 border border-gold/25 rounded-sm pointer-events-none"
                  style={{ transform: 'translateZ(4px)' }}
                />
                {/* Corner ornaments */}
                <div className="absolute -top-3 -left-3 w-5 h-5 corner-tl" style={{ transform: 'translateZ(6px)' }} />
                <div className="absolute -top-3 -right-3 w-5 h-5 corner-tr" style={{ transform: 'translateZ(6px)' }} />
                <div className="absolute -bottom-3 -left-3 w-5 h-5 corner-bl" style={{ transform: 'translateZ(6px)' }} />
                <div className="absolute -bottom-3 -right-3 w-5 h-5 corner-br" style={{ transform: 'translateZ(6px)' }} />

                {/* Image card */}
                <div
                  className="w-72 h-80 md:w-80 md:h-96 border border-gold/35 rounded-sm overflow-hidden relative"
                  style={{ transform: 'translateZ(2px)' }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}gprofile.jpg`}
                    alt="Gabriel Garalde"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* Glare overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-sm"
                    style={{
                      background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 65%)`,
                      transition: 'background 0.05s ease',
                    }}
                  />

                  {/* Subtle vignette */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 40px rgba(11,9,6,0.5)' }} />
                </div>

                {/* Bottom shadow that strengthens with tilt */}
                <div
                  className="absolute -inset-1 -z-10 rounded-sm"
                  style={{
                    background: 'rgba(0,0,0,0.4)',
                    filter: 'blur(20px)',
                    transform: `translateZ(-10px) translateY(${Math.abs(rotation.x) * 0.8}px)`,
                    opacity: 0.4 + Math.sqrt(rotation.x ** 2 + rotation.y ** 2) * 0.015,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ── TEXT ─────────────────────────────── */}
          <div className="space-y-8">
            <motion.div {...fadeUp(0.15)} className="flex items-center gap-4">
              <div className="h-px w-10 bg-amber" />
              <span className="font-bodoni text-xs tracking-[0.3em] uppercase text-amber">Portfolio</span>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="space-y-2">
              <h1
                className="font-bodoni font-black text-5xl md:text-6xl lg:text-7xl text-parchment leading-[0.9]"
                style={{ letterSpacing: '-0.01em' }}
              >
                Gabriel
              </h1>
              <h1
                className="font-bodoni font-black text-5xl md:text-6xl lg:text-7xl italic"
                style={{
                  letterSpacing: '-0.01em',
                  WebkitTextStroke: '1px rgba(201,149,58,0.6)',
                  color: 'transparent',
                }}
              >
                Garalde
              </h1>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="flex items-center gap-4">
              <div className="deco-line flex-1" style={{ maxWidth: 160 }} />
              <span className="text-amber text-xs">◆</span>
              <div className="deco-line flex-1" style={{ maxWidth: 40 }} />
            </motion.div>

            <motion.div {...fadeUp(0.4)}>
              <p className="font-bodoni text-base md:text-lg tracking-[0.12em] uppercase text-parchment-dim">
                3D Animator · Audio Engineer
              </p>
              <p className="font-bodoni text-base md:text-lg tracking-[0.12em] uppercase text-parchment-dim">
                & Creative Technologist
              </p>
            </motion.div>

            <motion.p
              {...fadeUp(0.5)}
              className="font-bodoni text-sm text-parchment/60 leading-relaxed max-w-md italic"
            >
              Crafting sound, motion, and digital experience — one frame and one beat at a time.
            </motion.p>

            <motion.div {...fadeUp(0.6)} className="flex items-center gap-4 pt-2 flex-wrap">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-3 bg-amber/10 border border-amber/50 text-amber hover:bg-amber hover:text-parchment transition-all duration-300 font-bodoni text-xs tracking-[0.25em] uppercase"
              >
                View Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3 border border-gold/25 text-parchment-dim hover:text-parchment hover:border-gold/50 transition-all duration-300 font-bodoni text-xs tracking-[0.25em] uppercase"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-bodoni text-xs tracking-[0.3em] uppercase text-parchment-dim/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
