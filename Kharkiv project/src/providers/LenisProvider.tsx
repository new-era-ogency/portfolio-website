import Lenis from 'lenis'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import type { SectionId } from '../data/content'
import { LenisNavContext } from './lenis-context'

/** Lenis + programmatic scroll: fast but smooth jumps between slides. */
export function LenisProvider({
  children,
  enabled,
}: {
  children: React.ReactNode
  enabled: boolean
}) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add('lenis')

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.15,
      syncTouch: true,
    })
    lenisRef.current = lenis

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      document.documentElement.classList.remove('lenis')
    }
  }, [enabled])

  const scrollToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id)
    const lenis = lenisRef.current
    if (!el) return

    if (lenis) {
      lenis.scrollTo(el, {
        duration: 0.38,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        lock: true,
      })
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const value = useMemo(() => ({ scrollToSection }), [scrollToSection])

  return (
    <LenisNavContext.Provider value={value}>{children}</LenisNavContext.Provider>
  )
}
