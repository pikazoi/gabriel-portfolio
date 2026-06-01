import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Keyboard, Music, Layers, Mic, Sliders } from 'lucide-react'

const skills = [
  {
    icon: <Keyboard size={20} strokeWidth={1.5} />,
    label: 'Typing Speed',
    value: 100,
    unit: 'WPM',
    desc: 'Peak typing speed — trained and maintained through daily practice.',
    tags: ['Touch Typing', 'Peak Performance'],
    color: '#b55829',
  },
  {
    icon: <Layers size={20} strokeWidth={1.5} />,
    label: '3D Animation',
    value: 78,
    unit: 'Skilled',
    desc: 'Creating 3D animated scenes, objects, and characters using Blender.',
    tags: ['Blender', 'Rigging', 'Rendering'],
    color: '#c9953a',
  },
  {
    icon: <Mic size={20} strokeWidth={1.5} />,
    label: 'Audio Editing',
    value: 82,
    unit: 'Skilled',
    desc: 'Recording, mixing, and cleaning audio tracks with professional tools.',
    tags: ['Audacity', 'Mixing', 'Mastering'],
    color: '#d4a850',
  },
  {
    icon: <Music size={20} strokeWidth={1.5} />,
    label: 'Music Production',
    value: 75,
    unit: 'Skilled',
    desc: 'Composing and producing original music tracks from scratch.',
    tags: ['FL Studio', 'Beats', 'Composition'],
    color: '#8a6a2a',
  },
  {
    icon: <Sliders size={20} strokeWidth={1.5} />,
    label: 'Sound Design',
    value: 70,
    unit: 'Skilled',
    desc: 'Crafting unique sound effects and ambient audio for visual media.',
    tags: ['Effects', 'Foley', 'Ambience'],
    color: '#6b5020',
  },
]

function AnimatedBar({ value, color, inView }: { value: number; color: string; inView: boolean }) {
  return (
    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
      />
    </div>
  )
}

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, target])
  return <>{count}</>
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id="skills"
      className="relative py-28 overflow-hidden"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
    >
      {/* BG accent */}
      <div className="absolute right-0 top-0 bottom-0 w-px deco-line-v opacity-20" />
      <div className="absolute left-0 top-0 bottom-0 w-px deco-line-v opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-bodoni text-xs tracking-[0.4em] uppercase text-amber mb-4">Capabilities</p>
          <h2 className="font-bodoni font-black text-4xl md:text-5xl text-parchment section-title-deco">
            Skills
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="deco-line w-48" />
          </div>
        </motion.div>

        {/* Typing WPM Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-12"
        >
          <div
            ref={ref}
            className="relative card-gold rounded-sm p-8 md:p-12 overflow-hidden text-center"
          >
            {/* Decorative background number */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              aria-hidden
            >
              <span
                className="font-bodoni font-black text-[20rem] leading-none"
                style={{ color: 'rgba(181,88,41,0.04)', letterSpacing: '-0.05em' }}
              >
                100
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full border border-amber/40 flex items-center justify-center text-amber">
                  <Keyboard size={24} strokeWidth={1.5} />
                </div>
              </div>

              <p className="font-bodoni text-xs tracking-[0.4em] uppercase text-amber mb-2">Peak Performance</p>

              <div className="flex items-end justify-center gap-3 my-4">
                <span
                  className="font-bodoni font-black leading-none text-parchment"
                  style={{ fontSize: 'clamp(4rem, 12vw, 8rem)' }}
                >
                  <CountUp target={100} inView={inView} />
                </span>
                <span className="font-bodoni font-bold text-gold text-3xl pb-3">WPM</span>
              </div>

              <p className="font-bodoni italic text-parchment-dim text-sm max-w-sm mx-auto leading-relaxed">
                Words per minute — measured and tested consistently. Typing is an art of muscle memory and precision.
              </p>

              <div className="mt-6 flex justify-center gap-2 flex-wrap">
                <Badge>Touch Typing</Badge>
                <Badge>Peak Accuracy</Badge>
                <Badge>Daily Practice</Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.slice(1).map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
            >
              <Card className="h-full hover:translate-y-[-4px] transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{ border: `1px solid ${skill.color}50`, color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <p className="font-bodoni font-bold text-parchment text-sm tracking-wide mb-1">
                      {skill.label}
                    </p>
                    <AnimatedBar value={skill.value} color={skill.color} inView={inView} />
                  </div>
                  <p className="font-bodoni text-parchment-dim text-xs leading-relaxed">
                    {skill.desc}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {skill.tags.map((t) => (
                      <Badge key={t} style={{ borderColor: `${skill.color}40`, color: skill.color }}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
