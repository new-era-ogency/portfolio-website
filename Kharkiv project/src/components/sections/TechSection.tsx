import { motion } from 'framer-motion'
import { AbstractCityMap } from '../map/AbstractCityMap'
import { techStats } from '../../data/content'
import { staggerContainer, staggerItem, staggerItemSoft } from '../../motion/variants'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { SlideFrame } from '../ui/SlideFrame'

export function TechSection() {
  return (
    <section id="tech" className="slide-section min-h-dvh bg-[#040814]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,255,198,0.05),transparent_45%,rgba(167,139,250,0.06))]" />

      <SlideFrame>
        <div className="relative box-border grid h-full min-h-0 min-w-0 w-full max-w-full grid-cols-1 gap-6 p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,44%)] md:gap-8 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            className="grid min-h-0 min-w-0 grid-cols-2 gap-3 md:gap-4"
          >
            <motion.header className="col-span-2 mb-2 shrink-0 md:mb-3" variants={staggerItem}>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-300/85 md:text-sm">
                04 · Tech
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-[0.05em] text-white md:mt-4">
                Schools & numbers
              </h2>
            </motion.header>

            {techStats.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItemSoft}
                className="box-border rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5"
              >
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  className="block font-[family-name:var(--font-display)] text-[clamp(2.75rem,10vw,5rem)] tracking-[0.04em] text-white md:text-6xl lg:text-7xl"
                />
                <p className="mt-3 text-xs uppercase leading-snug tracking-[0.15em] text-white/55 md:text-sm">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex min-h-[11rem] min-w-0 items-center justify-center md:min-h-0"
          >
            <div className="h-full w-full min-w-0 max-w-full">
              <AbstractCityMap />
            </div>
          </motion.div>
        </div>
      </SlideFrame>
    </section>
  )
}
