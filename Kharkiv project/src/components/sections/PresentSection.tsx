import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem } from '../../motion/variants'
import { SlideFrame } from '../ui/SlideFrame'

const beforeImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Freedom_Square_Kharkiv_2021.jpg/1600px-Freedom_Square_Kharkiv_2021.jpg'
const afterImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kharkiv_Derzhprom_from_above.jpg/1600px-Kharkiv_Derzhprom_from_above.jpg'

/** Split-screen “before / after the war” — parallax panels + staggered copy */
export function PresentSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const yBefore = useTransform(scrollYProgress, [0, 1], ['11%', '-9%'])
  const yAfter = useTransform(scrollYProgress, [0, 1], ['-11%', '9%'])

  return (
    <section
      ref={ref}
      id="present"
      className="slide-section relative min-h-dvh bg-black"
    >
      <SlideFrame>
        <div className="relative flex h-full min-h-0 min-w-0 w-full max-w-full flex-col box-border md:flex-row">
          <motion.header
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12%' }}
            className="box-border flex shrink-0 flex-col justify-center border-b border-white/10 px-6 py-6 md:min-w-0 md:basis-[30%] md:flex-shrink-0 md:border-b-0 md:border-r md:py-12 md:pl-11 md:pr-10"
          >
            <motion.p
              variants={staggerItem}
              className="font-mono text-xs uppercase tracking-[0.45em] text-rose-300/90 md:text-sm"
            >
              03 · Memory
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,6rem)] leading-[0.92] tracking-[0.05em] text-white md:mt-5 md:text-[clamp(3.25rem,7vw,7rem)]"
            >
              Before / after the war
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-5 max-w-sm font-mono text-[11px] uppercase leading-relaxed tracking-[0.28em] text-white/45 md:text-xs"
            >
              Same streets · different sky — a split read on continuity.
            </motion.p>
          </motion.header>

          <div className="relative grid min-h-0 min-w-0 flex-1 grid-cols-1 grid-rows-2 box-border md:grid-cols-2 md:grid-rows-1">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-10 left-1/2 z-[3] hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent md:block"
            />

            <motion.div
              className="relative min-h-0 overflow-hidden border-b border-white/10 md:border-b-0 md:border-r md:border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 will-change-transform"
                style={{ y: yBefore }}
              >
                <img
                  src={beforeImg}
                  alt="Freedom Square, Kharkiv — daylight"
                  className="absolute inset-0 h-[118%] w-full max-w-none -translate-y-[8%] object-cover"
                  style={{ filter: 'saturate(0.92) contrast(1.05)' }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-950/55 via-transparent to-cyan-500/25" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82),transparent_48%)]" />
              <div className="relative z-[1] flex h-full min-h-[32dvh] flex-col justify-end p-6 md:min-h-0 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.48em] text-rose-200/85 md:text-xs">
                  Before the war
                </span>
                <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.05] tracking-[0.04em] text-white">
                  Sun on the square · ordinary mornings.
                </p>
                <p className="mt-3 max-w-md font-[family-name:var(--font-serif)] text-base italic leading-snug text-white/75 md:text-lg">
                  Cafés, trams, lectures — the rhythm people remember.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative min-h-0 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.06 }}
            >
              <motion.div
                className="absolute inset-0 will-change-transform"
                style={{ y: yAfter }}
              >
                <img
                  src={afterImg}
                  alt="Kharkiv skyline — evening"
                  className="absolute inset-0 h-[118%] w-full max-w-none -translate-y-[8%] object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-950/45 via-transparent to-emerald-500/28" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_50%)]" />
              <div className="relative z-[1] flex h-full min-h-[32dvh] flex-col justify-end p-6 md:min-h-0 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.48em] text-emerald-200/85 md:text-xs">
                  After · rebuilding
                </span>
                <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.05] tracking-[0.04em] text-white">
                  Lights return · lines redrawn.
                </p>
                <p className="mt-3 max-w-md font-[family-name:var(--font-serif)] text-base italic leading-snug text-white/75 md:text-lg">
                  Damage and repair — still Kharkiv, still moving.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SlideFrame>
    </section>
  )
}
