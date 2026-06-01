import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Profile',   href: '#profile'   },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('profile')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: scrolled ? 'rgba(11, 9, 6, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottomColor: scrolled ? 'rgba(201, 149, 58, 0.2)' : 'transparent',
        transition: 'background-color 0.5s ease, border-bottom-color 0.5s ease, backdrop-filter 0.5s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#profile" className="group flex items-center gap-3">
          <span className="text-amber text-lg" style={{ lineHeight: 1 }}>◆</span>
          <span className="font-bodoni font-bold text-parchment tracking-[0.15em] text-sm uppercase group-hover:text-gold transition-colors duration-300">
            Gabriel
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-bodoni text-xs tracking-[0.2em] uppercase transition-all duration-300 relative pb-1 ${
                active === l.href.slice(1)
                  ? 'text-gold'
                  : 'text-parchment-dim hover:text-parchment'
              }`}
            >
              {l.label}
              {active === l.href.slice(1) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-amber"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile nav dots */}
        <div className="flex md:hidden items-center gap-1.5">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              <div className={`nav-dot ${active === l.href.slice(1) ? 'active' : ''}`} />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
