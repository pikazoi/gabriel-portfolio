import { motion } from 'framer-motion'
import { Mail, Phone, Copy, Check, Send } from 'lucide-react'
import { useState } from 'react'

function CopyableItem({
  icon,
  label,
  value,
  href,
  color,
  delay = 0,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  color: string
  delay?: number
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <a
        href={href}
        data-hover="true"
        className="group card-gold rounded-sm p-6 md:p-8 flex items-center gap-6 hover:translate-y-[-4px] transition-all duration-300 block"
      >
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-sm flex items-center justify-center shrink-0 transition-colors duration-300"
          style={{
            border: `1px solid ${color}40`,
            color,
            background: `${color}0a`,
          }}
        >
          {icon}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-bodoni text-xs tracking-[0.3em] uppercase text-parchment-dim mb-1">{label}</p>
          <p className="font-bodoni font-bold text-parchment text-base md:text-lg truncate">{value}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleCopy}
            data-hover="true"
            className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-200"
            style={{ border: `1px solid ${color}30`, color: copied ? color : 'rgba(184,160,122,0.4)' }}
            title="Copy to clipboard"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
          <div
            className="w-9 h-9 rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ border: `1px solid ${color}50`, color }}
          >
            <Send size={14} />
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-28 overflow-hidden"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at 50% 80%, rgba(181,88,41,0.07) 0%, transparent 60%)`,
      }} />

      {/* Top deco border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-bodoni text-xs tracking-[0.4em] uppercase text-amber mb-4">Reach Out</p>
          <h2 className="font-bodoni font-black text-4xl md:text-5xl text-parchment section-title-deco">
            Contact
          </h2>
          <div className="mt-6 flex justify-center"><div className="deco-line w-48" /></div>
          <p className="font-bodoni italic text-parchment-dim text-sm mt-6 max-w-sm mx-auto leading-relaxed">
            Open to collaborations, project inquiries, and creative conversations.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="max-w-2xl mx-auto space-y-4">
          <CopyableItem
            icon={<Mail size={22} strokeWidth={1.5} />}
            label="Electronic Mail"
            value="garaldegabriel720@gmail.com"
            href="mailto:garaldegabriel720@gmail.com"
            color="#b55829"
            delay={0.1}
          />
          <CopyableItem
            icon={<Phone size={22} strokeWidth={1.5} />}
            label="Mobile Number"
            value="09602624182"
            href="tel:09602624182"
            color="#c9953a"
            delay={0.2}
          />
        </div>

        {/* Footer deco */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 text-center space-y-6"
        >
          <div className="flex justify-center items-center gap-6">
            <div className="deco-line w-24" />
            <span className="font-bodoni text-xs text-amber">◆ ◆ ◆</span>
            <div className="deco-line w-24" />
          </div>
          <p className="font-bodoni text-xs tracking-[0.3em] uppercase text-parchment-dim/50">
            Gabriel Alde · Portfolio {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
