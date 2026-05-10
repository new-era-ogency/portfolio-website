import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { useEffect } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/** Soft cyan spotlight that follows the cursor (fine pointer only). */
export function MouseFollowGlow() {
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 36, mass: 0.45 })
  const sy = useSpring(y, { stiffness: 260, damping: 36, mass: 0.45 })

  useEffect(() => {
    if (reduced) return

    const mqFine = window.matchMedia('(pointer: fine)')
    let active = mqFine.matches

    const syncMq = () => {
      active = mqFine.matches
    }
    mqFine.addEventListener('change', syncMq)

    const move = (e: MouseEvent) => {
      if (!active) return
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      mqFine.removeEventListener('change', syncMq)
    }
  }, [reduced, x, y])

  const backgroundImage = useMotionTemplate`radial-gradient(580px circle at ${sx}px ${sy}px, rgba(0,255,198,0.13), transparent 65%)`

  if (reduced) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[840] mix-blend-screen max-md:hidden"
      style={{ backgroundImage }}
    />
  )
}
