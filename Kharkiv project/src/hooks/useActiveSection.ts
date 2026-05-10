import { useEffect, useState } from 'react'
import type { SectionId } from '../data/content'

/** Определяет активную секцию по пересечению с viewport (для nav dots). */
export function useActiveSection(ids: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0]?.target.id as SectionId | undefined
        if (id) setActive(id)
      },
      { threshold: [0.2, 0.35, 0.55], rootMargin: '-45% 0px -45% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
