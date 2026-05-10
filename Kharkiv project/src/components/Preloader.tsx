import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  onDone: () => void
}

/** Полноэкранный preload: прогресс, шум, blur-out. */
export function Preloader({ onDone }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const duration = 2200

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.floor(eased * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
      else {
        setProgress(100)
        setTimeout(onDone, 380)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#02040b]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: 'blur(24px)',
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'160\' height=\'160\' filter=\'url(%23n)\' opacity=\'0.55\'/%3E%3C/svg%3E")',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-[1] flex flex-col items-center gap-8"
      >
        <div className="font-[family-name:var(--font-display)] text-6xl tracking-[0.35em] text-white sm:text-8xl md:text-9xl md:tracking-[0.5em]">
          KHR
          <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
            KIV
          </span>
        </div>
        <div className="w-[min(420px,85vw)]">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-300 to-fuchsia-400"
              style={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 26 }}
            />
          </div>
          <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.35em] text-white/35">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
