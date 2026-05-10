import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/** Лёгкий ambient-дрон: включается по клику (автоплей в браузерах). */
export function SoundAmbience() {
  const [on, setOn] = useState(false)
  const ctxRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    return () => {
      ctxRef.current?.close().catch(() => {})
    }
  }, [])

  const ensureGraph = (ctx: AudioContext) => {
    if (startedRef.current) return
    const osc = ctx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = 97
    const osc2 = ctx.createOscillator()
    osc2.type = 'triangle'
    osc2.frequency.value = 194
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 400
    const gain = ctx.createGain()
    gain.gain.value = 0
    osc.connect(filter)
    osc2.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc2.start()
    gainRef.current = gain
    startedRef.current = true
  }

  const toggle = async () => {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = ctxRef.current ?? new AudioCtx()
    ctxRef.current = ctx
    ensureGraph(ctx)
    if (ctx.state === 'suspended') await ctx.resume()

    const gain = gainRef.current
    if (!gain) return

    const next = !on
    setOn(next)
    const t = ctx.currentTime
    if (next) gain.gain.linearRampToValueAtTime(0.016, t + 1.1)
    else gain.gain.linearRampToValueAtTime(0, t + 0.25)
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="fixed left-5 z-[950] max-md:bottom-[calc(1rem+var(--deck-bottom)+env(safe-area-inset-bottom))] max-md:top-auto bottom-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.35em] text-white/70 shadow-[0_0_30px_rgba(0,255,198,0.12)] backdrop-blur-xl transition-colors hover:border-cyan-300/40 hover:text-white md:bottom-6 md:left-6 md:top-auto"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-pressed={on}
    >
      Sound · {on ? 'on' : 'off'}
    </motion.button>
  )
}
