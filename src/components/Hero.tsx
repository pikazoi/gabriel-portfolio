import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <motion.section
      id="profile"
      className="relative min-h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {/* BG Pattern */}
      <div className="absolute inset-0 bg-ink">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(181,88,41,0.06) 0%, transparent 60%),
                              radial-gradient(circle at 80% 30%, rgba(201,149,58,0.04) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute top-1/3 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
        <div className="absolute top-2/3 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      </div>

      <div className="grain-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── PROFILE IMAGE ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 border border-gold/20 rounded-sm pointer-events-none" />
              {/* Corner ornaments */}
              <div className="absolute -top-3 -left-3 w-5 h-5 corner-tl" />
              <div className="absolute -top-3 -right-3 w-5 h-5 corner-tr" />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 corner-bl" />
              <div className="absolute -bottom-3 -right-3 w-5 h-5 corner-br" />

              {/* Image */}
              <div className="w-72 h-80 md:w-80 md:h-96 border border-gold/30 rounded-sm overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}gprofile.jpg`}
                  alt="Gabriel Alde"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* ── TEXT CONTENT ─────────────────────── */}
          <div className="space-y-8">
            <motion.div {...fadeUp(0.15)} className="flex items-center gap-4">
              <div className="h-px w-10 bg-amber" />
              <span className="font-bodoni text-xs tracking-[0.3em] uppercase text-amber">
                Portfolio
              </span>
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
                Alde
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
              className="font-bodoni text-sm text-parchment/60 leading-relaxed max-w-md"
              style={{ fontStyle: 'italic' }}
            >
              Crafting sound, motion, and digital experience — one frame and one beat at a time.
            </motion.p>

            <motion.div {...fadeUp(0.6)} className="flex items-center gap-4 pt-2 flex-wrap">
              <a
                href="#projects"
                data-hover="true"
                className="group inline-flex items-center gap-3 px-7 py-3 bg-amber/10 border border-amber/50 text-amber hover:bg-amber hover:text-parchment transition-all duration-300 font-bodoni text-xs tracking-[0.25em] uppercase"
              >
                View Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                data-hover="true"
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
    </motion.section>
  )
}
