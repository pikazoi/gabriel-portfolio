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
    subtitle: 'Senior High School',
    location: 'Rizal, Philippines',
    period: 'Grade 11 – 12',
    periodSub: 'Completed',
    track: 'Senior High School',
    trackSub: 'Secondary Education',
    status: 'Completed',
    statusActive: false,
    desc: 'Renaissance School of Science and Technology provided a rigorous and science-focused senior high school curriculum, building a strong foundation in technology, research, and analytical thinking.',
    color: '#8a6a2a',
  },
]

export default function Education() {
  return (
    <motion.section
      id="education"
      className="relative py-28 overflow-hidden"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
    >
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

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Vertical timeline line — behind cards */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 deco-line-v hidden md:block opacity-50" />

            <div className="space-y-8">
              {entries.map((entry, i) => (
                <motion.div
                  key={entry.school}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden md:flex absolute left-[1.1rem] top-8 w-4 h-4 rounded-full items-center justify-center z-10"
                    style={{
                      background: '#0b0906',
                      border: `2px solid ${entry.color}`,
                      boxShadow: `0 0 10px ${entry.color}60`,
                    }}
                  />

                  {/* Card */}
                  <div className="md:ml-24 card-gold rounded-sm p-8 relative">
                    {/* Top row */}
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-sm flex items-center justify-center"
                          style={{
                            background: `${entry.color}15`,
                            border: `1px solid ${entry.color}40`,
                            color: entry.color,
                          }}
                        >
                          <GraduationCap size={26} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-bodoni font-bold text-parchment text-lg md:text-xl tracking-wide leading-tight">
                            {entry.school}
                          </h3>
                          <p className="font-bodoni italic text-parchment-dim text-sm mt-0.5">
                            {entry.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Status badge */}
                      <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-sm shrink-0"
                        style={{
                          border: `1px solid ${entry.color}40`,
                          background: `${entry.color}10`,
                        }}
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
                      className="h-px mb-6"
                      style={{ background: `linear-gradient(90deg, ${entry.color}50, transparent)` }}
                    />

                    {/* Info grid */}
                    <div className="grid sm:grid-cols-3 gap-6 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: entry.color }} />
                        <div>
                          <p className="font-bodoni text-xs tracking-widest uppercase text-parchment-dim mb-0.5">Location</p>
                          <p className="font-bodoni text-sm text-parchment">{entry.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CalendarDays size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: entry.color }} />
                        <div>
                          <p className="font-bodoni text-xs tracking-widest uppercase text-parchment-dim mb-0.5">Period</p>
                          <p className="font-bodoni text-sm text-parchment">{entry.period}</p>
                          <p className="font-bodoni text-xs text-parchment-dim">{entry.periodSub}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: entry.color }} />
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
                    <div className="absolute top-3 left-3 w-4 h-4 corner-tl opacity-30" />
                    <div className="absolute top-3 right-3 w-4 h-4 corner-tr opacity-30" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 corner-bl opacity-30" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 corner-br opacity-30" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Motivational quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center space-y-3"
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
    </motion.section>
  )
}
