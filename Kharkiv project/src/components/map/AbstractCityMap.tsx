import { motion } from 'framer-motion'

/** Stylized map — larger stroke and labels for legibility on the Tech slide. */
export function AbstractCityMap() {
  const path =
    'M20 180 L120 40 L260 90 L340 20 L420 100 L520 50 L600 120 L640 200 L560 260 L440 220 L360 300 L240 260 L140 320 L60 240 Z M120 40 L240 260 M260 90 L440 220 M340 20 L360 300'

  return (
    <div className="relative mx-auto aspect-[16/10] w-full min-h-[12rem] min-w-0 max-w-full box-border overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_80px_rgba(0,255,198,0.08)] backdrop-blur-xl md:min-h-[15rem] md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />
      <svg
        viewBox="0 0 660 340"
        className="relative z-[1] h-full min-h-[10rem] w-full md:min-h-[12rem]"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Stylized map of central Kharkiv"
      >
        <defs>
          <linearGradient id="mapStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67f8ff" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d={path}
          fill="none"
          stroke="url(#mapStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {[
          [120, 40],
          [340, 20],
          [520, 50],
          [240, 260],
          [440, 220],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={6}
            fill="#00ffc6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.12, type: 'spring', stiffness: 260, damping: 18 }}
          />
        ))}
      </svg>
      <div className="pointer-events-none absolute bottom-4 left-5 font-mono text-[11px] uppercase tracking-[0.35em] text-white/45 md:bottom-5 md:left-7 md:text-xs">
        Kharkiv · abstract topology
      </div>
    </div>
  )
}
