import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

/** Кастомный курсор: кольцо + ядро (только desktop / fine pointer). */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [down, setDown] = useState(false)

  const sx = useSpring(0, { stiffness: 280, damping: 28, mass: 0.35 })
  const sy = useSpring(0, { stiffness: 280, damping: 28, mass: 0.35 })
  const lx = useSpring(0, { stiffness: 420, damping: 35, mass: 0.2 })
  const ly = useSpring(0, { stiffness: 420, damping: 35, mass: 0.2 })

  useEffect(() => {
    const mqFine = window.matchMedia('(pointer: fine)')
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setEnabled(mqFine.matches && !mqReduce.matches)
    sync()
    mqFine.addEventListener('change', sync)
    mqReduce.addEventListener('change', sync)
    return () => {
      mqFine.removeEventListener('change', sync)
      mqReduce.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const move = (e: MouseEvent) => {
      sx.set(e.clientX)
      sy.set(e.clientY)
      lx.set(e.clientX)
      ly.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    const up = () => setDown(false)
    const dn = () => setDown(true)
    window.addEventListener('mouseup', up)
    window.addEventListener('mousedown', dn)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mousedown', dn)
    }
  }, [enabled, lx, ly, sx, sy])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="size-10 rounded-full border border-cyan-300/50 shadow-[0_0_24px_rgba(0,255,198,0.35)] backdrop-blur-[2px]"
          animate={{ scale: down ? 0.78 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: lx, y: ly, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(0,255,198,0.9)]" />
      </motion.div>
    </>
  )
}
