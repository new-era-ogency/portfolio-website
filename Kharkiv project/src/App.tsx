import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { FilmGrain } from './components/effects/FilmGrain'
import { MouseFollowGlow } from './components/effects/MouseFollowGlow'
import { SoundAmbience } from './components/effects/SoundAmbience'
import { Preloader } from './components/Preloader'
import { ArchitectureSection } from './components/sections/ArchitectureSection'
import { CultureSection } from './components/sections/CultureSection'
import { FinaleSection } from './components/sections/FinaleSection'
import { HistorySection } from './components/sections/HistorySection'
import { IntroSection } from './components/sections/IntroSection'
import { PresentSection } from './components/sections/PresentSection'
import { TechSection } from './components/sections/TechSection'
import { SectionNav } from './components/ui/SectionNav'
import { SECTION_IDS } from './data/content'
import { useActiveSection } from './hooks/useActiveSection'
import { LenisProvider } from './providers/LenisProvider'

function AppContent() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <div className="flex min-h-dvh w-full min-w-0 max-w-full flex-col box-border">
      <FilmGrain />
      <MouseFollowGlow />
      <SoundAmbience />
      <SectionNav active={active} />
      <main className="presentation-root relative min-w-0 flex-1 bg-[#03060d] md:pr-[var(--nav-w)]">
        <IntroSection />
        <HistorySection />
        <ArchitectureSection />
        <PresentSection />
        <TechSection />
        <CultureSection />
        <FinaleSection />
      </main>
      <footer className="shrink-0 border-t border-white/10 bg-black px-6 py-8 pb-[calc(var(--deck-bottom)+1rem)] text-center font-mono text-[10px] uppercase tracking-[0.45em] text-white/35 md:pb-10 md:pr-[var(--nav-w)]">
        Kharkiv · draft deck · photos Wikimedia Commons
      </footer>
    </div>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)
  const handleLoaded = useCallback(() => setLoaded(true), [])

  return (
    <LenisProvider enabled={loaded}>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader key="preloader" onDone={handleLoaded} />}
      </AnimatePresence>

      {loaded && <AppContent />}
    </LenisProvider>
  )
}

export default App
