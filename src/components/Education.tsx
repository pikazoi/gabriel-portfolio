import { motion } from 'framer-motion'
import { GraduationCap, MapPin, CalendarDays, BookOpen } from 'lucide-react'

const entries = [
  {
    school: 'STI College Tanay',
    subtitle: 'Systems Technology Institute',
    location: 'Tanay, Rizal',
    period: 'Present',
    periodSub: 'Ongoing',
    track: 'College',
    trackSub: 'Tertiary Education',
    status: 'Enrolled',
    statusActive: true,
    desc: "STI College Tanay is one of the Philippines' leading technology-oriented educational institutions, focused on developing career-ready individuals in ICT, engineering, and creative disciplines.",
    color: '#b55829',
  },
  {
    school: 'Renaissance School of Science and Technology',
    subtitle: 'Senior High School — Grade 11 to 12',
    location: 'Rizal, Philippines',
    period: 'Grade 11 – 12',
    periodSub: 'Completed',
    track: 'Senior High School',
    trackSub: 'Secondary Education',
    status: 'Completed',
    statusActive: false,
    desc: 'Renaissance School of Science and Technology offered a rigorous science-focused senior high school curriculum, building a strong foundation in technology, research, and analytical thinking.',
    color: '#8a6a2a',
  },
]

// Width of the left column that holds the line and dot
const LEFT_COL = 'md:w-16'        // 4rem = 64px
const CARD_ML  = 'md:ml-20'       // 5rem = 80px — starts right after left col + gap

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(201,149,58,0.04) 0%, transparent 60%)`,
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-bodoni text-xs tracking-[0.4em] uppercase text-amber mb-4">Academic</p>
          <h2 className="font-bodoni font-black text-4xl md:text-5xl text-parchment section-title-deco">
            Education
          </h2>
          <div className="mt-6 flex justify-center"><div className="deco-line w-48" /></div>
        </motion.div>

        {/* Timeline — flex row: [line col] [cards col] */}
        <div className="max-w-3xl mx-auto">
          <div className="md:flex md:gap-0">

            {/* ── LEFT: vertical line + dots ─────────── */}
            <div className={`hidden md:flex flex-col items-center ${LEFT_COL} shrink-0`}>
              {entries.map((entry, i) => (
                <div key={entry.school} className="flex flex-col items-center flex-1 w-full">
                  {/* Dot — centered on the line */}
                  <div
                    className="w-4 h-4 rounded-full shrink-0 mt-8 z-10"
                    style={{
                      background: '#0b0906',
                      border: `2px solid ${entry.color}`,
                      boxShadow: `0 0 12px ${entry.color}70`,
                    }}
                  />
                  {/* Segment of vertical line below the dot */}
                  {i < entries.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{
                        background: `linear-gradient(180deg, ${entry.color}60 0%, ${entries[i + 1].color}40 100%)`,
                        minHeight: '2rem',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* ── RIGHT: cards ───────────────────────── */}
            <div className={`flex-1 ${CARD_ML} space-y-8`}>
              {entries.map((entry, i) => (
                <motion.div
                  key={entry.school}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: i * 0.15, ease: 'easeOut' }}
                >
                  <div className="card-gold rounded-sm p-7 relative">
                    {/* Top row */}
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-13 h-13 rounded-sm flex items-center justify-center shrink-0"
                          style={{
                            width: '3.25rem',
                            height: '3.25rem',
                            background: `${entry.color}15`,
                            border: `1px solid ${entry.color}40`,
                            color: entry.color,
                          }}
                        >
                          <GraduationCap size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-bodoni font-bold text-parchment text-base md:text-lg tracking-wide leading-snug">
                            {entry.school}
                          </h3>
                          <p className="font-bodoni italic text-parchment-dim text-sm mt-0.5">
                            {entry.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Status pill */}
                      <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-sm shrink-0"
                        style={{ border: `1px solid ${entry.color}40`, background: `${entry.color}10` }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${entry.statusActive ? 'animate-pulse' : ''}`}
                          style={{ background: entry.color }}
                        />
                        <span
                          className="font-bodoni text-xs tracking-widest uppercase"
                          style={{ color: entry.color }}
                        >
                          {entry.status}
                        </span>
                      </div>
                    </div>

                    {/* Deco divider */}
                    <div
                      className="h-px mb-5"
                      style={{ background: `linear-gradient(90deg, ${entry.color}50, transparent)` }}
                    />

                    {/* Info grid */}
                    <div className="grid sm:grid-cols-3 gap-5 mb-5">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: entry.color }} />
                        <div>
                          <p className="font-bodoni text-xs tracking-widest uppercase text-parchment-dim mb-0.5">Location</p>
                          <p className="font-bodoni text-sm text-parchment">{entry.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CalendarDays size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: entry.color }} />
                        <div>
                          <p className="font-bodoni text-xs tracking-widest uppercase text-parchment-dim mb-0.5">Period</p>
                          <p className="font-bodoni text-sm text-parchment">{entry.period}</p>
                          <p className="font-bodoni text-xs text-parchment-dim">{entry.periodSub}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <BookOpen size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: entry.color }} />
                        <div>
                          <p className="font-bodoni text-xs tracking-widest uppercase text-parchment-dim mb-0.5">Level</p>
                          <p className="font-bodoni text-sm text-parchment">{entry.track}</p>
                          <p className="font-bodoni text-xs text-parchment-dim">{entry.trackSub}</p>
                        </div>
                      </div>
                    </div>

                    <p className="font-bodoni text-parchment-dim text-sm leading-relaxed italic">
                      {entry.desc}
                    </p>

                    {/* Corner ornaments */}
                    <div className="absolute top-3 left-3 w-3.5 h-3.5 corner-tl opacity-30" />
                    <div className="absolute top-3 right-3 w-3.5 h-3.5 corner-tr opacity-30" />
                    <div className="absolute bottom-3 left-3 w-3.5 h-3.5 corner-bl opacity-30" />
                    <div className="absolute bottom-3 right-3 w-3.5 h-3.5 corner-br opacity-30" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 text-center space-y-3"
          >
            <div className="flex justify-center items-center gap-4">
              <div className="deco-line w-16" />
              <span className="text-amber text-xs">◆</span>
              <div className="deco-line w-16" />
            </div>
            <p className="font-bodoni italic text-parchment-dim text-base max-w-sm mx-auto leading-relaxed">
              "The pursuit of knowledge shapes not just the mind, but the art that flows from it."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
