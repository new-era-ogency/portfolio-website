import { createContext } from 'react'
import type { SectionId } from '../data/content'

export type LenisNavValue = {
  scrollToSection: (id: SectionId) => void
}

export const LenisNavContext = createContext<LenisNavValue | null>(null)
