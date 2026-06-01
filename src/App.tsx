import Cursor from './components/Cursor'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { SectionWrapper } from './components/SectionWrapper'
import { useScrollDirection } from './hooks/useScrollDirection'

function Divider() {
  return (
    <div className="relative flex items-center justify-center py-2">
      <div className="deco-line flex-1 opacity-30" />
      <span className="mx-4 text-amber/30 text-xs">◆</span>
      <div className="deco-line flex-1 opacity-30" />
    </div>
  )
}

export default function App() {
  const dirRef = useScrollDirection()

  return (
    <>
      <Cursor />
      <div className="grain-overlay" />
      <Navigation />

      <main>
        {/* Hero is always visible on load — no slide wrapper */}
        <Hero />

        <Divider />

        <SectionWrapper dirRef={dirRef}>
          <Skills />
        </SectionWrapper>

        <Divider />

        <SectionWrapper dirRef={dirRef}>
          <Projects />
        </SectionWrapper>

        <Divider />

        <SectionWrapper dirRef={dirRef}>
          <Education />
        </SectionWrapper>

        <Divider />

        <SectionWrapper dirRef={dirRef}>
          <Contact />
        </SectionWrapper>
      </main>
    </>
  )
}
