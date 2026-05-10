import { motion } from 'framer-motion'

/** Анимированный mesh-градиент для глубины и «дорогого» фона. */
export function AmbientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-[20%] -top-[30%] h-[70vh] w-[70vw] rounded-full bg-cyan-500/15 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[15%] top-[10%] h-[60vh] w-[55vw] rounded-full bg-fuchsia-500/12 blur-[110px]"
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-25%] left-[20%] h-[55vh] w-[60vw] rounded-full bg-amber-400/10 blur-[130px]"
        animate={{ x: ['-5%', '8%', '-5%'], y: ['0%', '-6%', '0%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#03060d]/20 via-transparent to-[#03060d]" />
    </div>
  )
}
