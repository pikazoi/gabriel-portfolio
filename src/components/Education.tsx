import { motion } from 'framer-motion'
import { GraduationCap, MapPin, CalendarDays, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      {/* BG accent */}
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

        {/* Timeline layout */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 deco-line-v hidden md:block" />

            {/* Card */}
            <div className="md:ml-24 card-gold rounded-sm p-8 relative">
              {/* Timeline dot */}
              <div
                className="hidden md:flex absolute left-[-2.5rem] top-8 w-4 h-4 rounded-full items-center justify-center"
                style={{ background: '#0b0906', border: '2px solid #b55829', boxShadow: '0 0 10px rgba(181,88,41,0.4)' }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-sm bg-amber/10 border border-amber/30 flex items-center justify-center text-amber">
                    <GraduationCap size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bodoni font-bold text-parchment text-xl tracking-wide">
                      STI College Tanay
                    </h3>
                    <p className="font-bodoni italic text-parchment-dim text-sm mt-0.5">
                      Systems Technology Institute
                    </p>
                  </div>
                </div>
                {/* Status badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm" style={{ border: '1px solid rgba(181,88,41,0.3)', background: 'rgba(181,88,41,0.08)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                  <span className="font-bodoni text-xs tracking-widest uppercase text-amber">Enrolled</span>
                </div>
              </div>

              {/* Deco divider */}
              <div className="deco-line mb-6" />

              {/* Info grid */}
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={14} strokeWidth={1.5} className="text-amber mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bodoni text-xs tracking-widest uppercase text-parchment-dim mb-0.5">Location</p>
                    <p className="font-bodoni text-sm text-parchment">Tanay, Rizal</p>
                    <p className="font-bodoni text-xs text-parchment-dim">Philippines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays size={14} strokeWidth={1.5} className="text-amber mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bodoni text-xs tracking-widest uppercase text-parchment-dim mb-0.5">Period</p>
                    <p className="font-bodoni text-sm text-parchment">Present</p>
                    <p className="font-bodoni text-xs text-parchment-dim">Ongoing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen size={14} strokeWidth={1.5} className="text-amber mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bodoni text-xs tracking-widest uppercase text-parchment-dim mb-0.5">Track</p>
                    <p className="font-bodoni text-sm text-parchment">Technology</p>
                    <p className="font-bodoni text-xs text-parchment-dim">Senior High School</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-bodoni text-parchment-dim text-sm leading-relaxed italic">
                STI College Tanay is one of the Philippines' leading technology-oriented educational institutions,
                focused on developing career-ready individuals in ICT, engineering, and creative disciplines.
              </p>

              {/* Corner ornaments */}
              <div className="absolute top-3 left-3 w-4 h-4 corner-tl opacity-40" />
              <div className="absolute top-3 right-3 w-4 h-4 corner-tr opacity-40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 corner-bl opacity-40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 corner-br opacity-40" />
            </div>
          </motion.div>

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
    </section>
  )
}
