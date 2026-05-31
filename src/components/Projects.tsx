import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Badge } from './ui/badge'
import { Layers, Mic, Music, Video, X, Play, ExternalLink } from 'lucide-react'

function extractYoutubeId(url: string) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return null
}

function VideoPlayer({ videoUrl, setVideoUrl, color }: { videoUrl: string; setVideoUrl: (v: string) => void; color: string }) {
  const [input, setInput] = useState('')
  const videoId = extractYoutubeId(videoUrl)

  return (
    <div className="mt-4">
      {videoId ? (
        <div className="relative rounded-sm overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
          <button
            onClick={() => setVideoUrl('')}
            className="absolute top-2 right-2 w-7 h-7 bg-ink/80 rounded-full flex items-center justify-center text-parchment-dim hover:text-parchment transition-colors"
            data-hover="true"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="font-bodoni text-xs tracking-wider text-parchment-dim uppercase mb-2">Add Project Video</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Paste YouTube URL..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-sm px-3 py-2 font-bodoni text-xs text-parchment placeholder:text-parchment-dim/40 focus:outline-none focus:border-amber/50 transition-colors"
            />
            <button
              onClick={() => { if (input.trim()) { setVideoUrl(input.trim()); setInput('') } }}
              data-hover="true"
              className="px-4 py-2 font-bodoni text-xs tracking-wider uppercase text-parchment transition-colors rounded-sm"
              style={{ background: `${color}20`, border: `1px solid ${color}50`, color }}
            >
              <Play size={12} className="inline mr-1" />
              Add
            </button>
          </div>
          <p className="font-bodoni text-xs text-parchment-dim/40 italic">
            Paste a YouTube link to embed your project video
          </p>
        </div>
      )}
    </div>
  )
}

const projectDefs = [
  {
    id: 'blender',
    icon: <Layers size={22} strokeWidth={1.5} />,
    title: '3D Animation',
    subtitle: 'Blender Studio',
    desc: 'Creating immersive 3D animated scenes, character rigs, and environmental art. Each project explores movement, lighting, and storytelling through motion.',
    tags: ['Blender', '3D Modeling', 'Animation', 'Rendering', 'Rigging'],
    color: '#b55829',
  },
  {
    id: 'audacity',
    icon: <Mic size={22} strokeWidth={1.5} />,
    title: 'Audio Engineering',
    subtitle: 'Audacity',
    desc: 'Recording and editing audio with precision — noise reduction, EQ shaping, compression, and mixing to produce clean, professional-grade sound.',
    tags: ['Audacity', 'Recording', 'Mixing', 'EQ', 'Mastering'],
    color: '#c9953a',
  },
  {
    id: 'flstudio',
    icon: <Music size={22} strokeWidth={1.5} />,
    title: 'Music Production',
    subtitle: 'FL Studio',
    desc: 'Composing original beats, melodies, and full music tracks. From hip-hop to ambient, each track built from scratch with custom samples and synthesis.',
    tags: ['FL Studio', 'Beat Making', 'Synthesis', 'MIDI', 'Composition'],
    color: '#d4a850',
  },
]

export default function Projects() {
  const [urls, setUrls] = useState<Record<string, string>>({
    blender: '',
    audacity: '',
    flstudio: '',
  })
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 70% 60%, rgba(181,88,41,0.05) 0%, transparent 60%)`,
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
          <p className="font-bodoni text-xs tracking-[0.4em] uppercase text-amber mb-4">Creative Work</p>
          <h2 className="font-bodoni font-black text-4xl md:text-5xl text-parchment section-title-deco">
            Projects
          </h2>
          <div className="mt-6 flex justify-center"><div className="deco-line w-48" /></div>
        </motion.div>

        {/* Video upload notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10 px-5 py-3 border border-gold/20 bg-gold/5 rounded-sm w-fit mx-auto"
        >
          <Video size={14} className="text-gold" />
          <p className="font-bodoni text-xs tracking-wider text-parchment-dim">
            Click any card to expand and add your YouTube video link
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projectDefs.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              layout
            >
              <Card
                className={`h-full cursor-pointer group hover:translate-y-[-4px] transition-all duration-300 ${
                  expanded === proj.id ? 'ring-1 ring-amber/40' : ''
                }`}
                onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}
                data-hover="true"
              >
                <CardHeader>
                  {/* Icon + Expand toggle */}
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center transition-colors duration-300"
                      style={{
                        border: `1px solid ${proj.color}40`,
                        color: proj.color,
                        background: `${proj.color}0a`,
                      }}
                    >
                      {proj.icon}
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === proj.id ? 45 : 0 }}
                      className="text-parchment-dim/40 group-hover:text-parchment-dim/70 transition-colors mt-1"
                    >
                      <ExternalLink size={14} />
                    </motion.div>
                  </div>

                  {/* Number */}
                  <span
                    className="font-bodoni text-xs tracking-[0.3em] uppercase mb-1 block"
                    style={{ color: `${proj.color}80` }}
                  >
                    0{i + 1}
                  </span>

                  <CardTitle className="text-lg mb-1">{proj.title}</CardTitle>
                  <CardDescription className="font-bodoni italic text-xs">
                    via {proj.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="font-bodoni text-parchment-dim text-sm leading-relaxed mb-4">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  {/* Deco line */}
                  <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${proj.color}50, transparent)` }} />

                  {/* Expanded video section */}
                  <AnimatePresence>
                    {expanded === proj.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <VideoPlayer
                          videoUrl={urls[proj.id]}
                          setVideoUrl={(v) => setUrls((prev) => ({ ...prev, [proj.id]: v }))}
                          color={proj.color}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expanded !== proj.id && (
                    <p className="font-bodoni text-xs text-parchment-dim/40 italic">
                      Click to add video →
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
