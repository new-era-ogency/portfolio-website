import { useContext } from 'react'
import { LenisNavContext } from '../providers/lenis-context'

export function useLenisNav() {
  const ctx = useContext(LenisNavContext)
  if (!ctx) {
    throw new Error('useLenisNav must be used inside LenisProvider')
  }
  return ctx
}
