import { motion } from 'framer-motion'
import { timeline } from '../../data/content'
import { staggerContainer, staggerItemSoft } from '../../motion/variants'
import { SlideFrame } from '../ui/SlideFrame'

export function HistorySection() {
  return (
    <section
      id="history"
      className="slide-section min-h-dvh bg-[#050816]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.1),transparent_45%)]" />

      <SlideFrame>
        <div className="relative box-border flex h-full min-h-0 min-w-0 w-full max-w-full flex-col p-5 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-8%' }}
            className="grid min-h-0 min-w-0 flex-1 grid-cols-2 gap-3 content-stretch sm:grid-cols-3 md:grid-cols-5 md:gap-3"
          >
            <motion.header
              className="col-span-2 mb-3 shrink-0 sm:col-span-3 md:col-span-5 md:mb-4"
              variants={staggerItemSoft}
            >
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-300/80 md:text-sm">
                01 · History
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-[0.05em] text-white md:mt-4">
                Layers of time
              </h2>
            </motion.header>

            {timeline.map((ev) => (
              <motion.article
                key={ev.year}
                variants={staggerItemSoft}
                className="box-border flex min-h-0 min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-inner shadow-black/40 md:p-4"
              >
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-200/85 md:text-xs">
                  {ev.year}
                </span>
                <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-tight text-white md:text-lg">
                  {ev.title}
                </h3>
                <p className="mt-2 line-clamp-5 text-[11px] leading-relaxed text-white/55 md:mt-3 md:line-clamp-4 md:text-sm">
                  {ev.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </SlideFrame>
    </section>
  )
}
