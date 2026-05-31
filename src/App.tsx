import Cursor from './components/Cursor'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Grain film overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <Hero />

        {/* Deco divider */}
        <div className="relative flex items-center justify-center py-2">
          <div className="deco-line flex-1 opacity-30" />
          <span className="mx-4 text-amber/30 text-xs">◆</span>
          <div className="deco-line flex-1 opacity-30" />
        </div>

        <Skills />

        <div className="relative flex items-center justify-center py-2">
          <div className="deco-line flex-1 opacity-30" />
          <span className="mx-4 text-amber/30 text-xs">◆</span>
          <div className="deco-line flex-1 opacity-30" />
        </div>

        <Projects />

        <div className="relative flex items-center justify-center py-2">
          <div className="deco-line flex-1 opacity-30" />
          <span className="mx-4 text-amber/30 text-xs">◆</span>
          <div className="deco-line flex-1 opacity-30" />
        </div>

        <Education />

        <div className="relative flex items-center justify-center py-2">
          <div className="deco-line flex-1 opacity-30" />
          <span className="mx-4 text-amber/30 text-xs">◆</span>
          <div className="deco-line flex-1 opacity-30" />
        </div>

        <Contact />
      </main>
    </>
  )
}
