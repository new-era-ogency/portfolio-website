import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/** Диагональные световые полосы — ambient motion. */
export function LightStreaks() {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[140%] w-[2px] rounded-full bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent blur-[1px]"
          style={{
            left: `${12 + i * 15}%`,
            top: '-20%',
            rotate: 18,
            filter: 'drop-shadow(0 0 12px rgba(0,255,198,0.35))',
          }}
          initial={{ opacity: 0.15, y: '-10%' }}
          animate={{
            opacity: [0.12, 0.45, 0.12],
            y: ['-10%', '30%', '-10%'],
          }}
          transition={{
            duration: 10 + i * 1.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7,
          }}
        />
      ))}
      <motion.div
        className="absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent blur-3xl"
        animate={{ x: ['0%', '25%', '0%'], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-full w-1/2 bg-gradient-to-l from-fuchsia-500/10 via-transparent to-transparent blur-3xl"
        animate={{ x: ['0%', '-20%', '0%'], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
