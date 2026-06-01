import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Badge } from './ui/badge'
import { Layers, Mic } from 'lucide-react'

const projects = [
  {
    id: 'blender',
    icon: <Layers size={22} strokeWidth={1.5} />,
    title: '3D Animation',
    subtitle: 'Blender Studio',
    desc: 'Creating immersive 3D animated scenes, character rigs, and environmental art. Each project explores movement, lighting, and storytelling through motion.',
    tags: ['Blender', '3D Modeling', 'Animation', 'Rendering', 'Rigging'],
    color: '#b55829',
    media: (
      <video
        controls
        className="w-full rounded-sm mt-4"
        style={{ border: '1px solid rgba(181,88,41,0.2)' }}
        src={`${import.meta.env.BASE_URL}lakadani.mp4`}
      >
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    id: 'audacity',
    icon: <Mic size={22} strokeWidth={1.5} />,
    title: 'Audio Engineering',
    subtitle: 'Audacity',
    desc: 'Recording and editing audio with precision — noise reduction, EQ shaping, compression, and mixing to produce clean, professional-grade sound.',
    tags: ['Audacity', 'Recording', 'Mixing', 'EQ', 'Mastering'],
    color: '#c9953a',
    media: (
      <div
        className="w-full rounded-sm mt-4 overflow-hidden"
        style={{ position: 'relative', paddingBottom: '56.25%', height: 0, border: '1px solid rgba(201,149,58,0.2)' }}
      >
        <iframe
          src="https://www.youtube.com/embed/BRfioQkgePY"
          title="Audio Engineering Project"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        />
      </div>
    ),
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
    >
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

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                      style={{
                        border: `1px solid ${proj.color}40`,
                        color: proj.color,
                        background: `${proj.color}0a`,
                      }}
                    >
                      {proj.icon}
                    </div>
                    <div>
                      <span
                        className="font-bodoni text-xs tracking-[0.3em] uppercase block mb-0.5"
                        style={{ color: `${proj.color}80` }}
                      >
                        0{i + 1}
                      </span>
                      <CardTitle className="text-lg">{proj.title}</CardTitle>
                      <CardDescription className="font-bodoni italic text-xs mt-0.5">
                        via {proj.subtitle}
                      </CardDescription>
                    </div>
                  </div>
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

                  <div
                    className="h-px mb-4"
                    style={{ background: `linear-gradient(90deg, ${proj.color}50, transparent)` }}
                  />

                  {proj.media}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
