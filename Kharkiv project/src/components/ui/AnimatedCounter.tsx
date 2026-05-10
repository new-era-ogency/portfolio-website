import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

/** Счётчик с плавным набором числа при появлении в viewport. */
export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-12%' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startAt: number | null = null
    const duration = 2100

    const tick = (now: number) => {
      if (startAt === null) startAt = now
      const p = Math.min(1, (now - startAt) / duration)
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplay(value * eased)
      if (p < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [isInView, value])

  const text =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString()

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 12 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {prefix}
      {text}
      {suffix}
    </motion.span>
  )
}
