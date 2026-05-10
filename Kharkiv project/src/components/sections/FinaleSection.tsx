import { motion } from 'framer-motion'
import { finalePhotoUrl } from '../../data/content'
import { SlideFrame } from '../ui/SlideFrame'

export function FinaleSection() {
  return (
    <section id="finale" className="slide-section relative min-h-dvh overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[12vh] bg-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.95)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[12vh] bg-black/90 shadow-[0_-30px_80px_rgba(0,0,0,0.95)]" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.1),transparent_55%)]"
      />

      <SlideFrame bare className="border-0 shadow-none">
        <div className="relative z-[1] box-border flex h-full min-h-0 min-w-0 w-full max-w-full flex-col items-center justify-center px-4 py-8 text-center sm:px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.7em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.45em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase text-white/45 md:text-sm"
          >
            fin · thank you
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="mt-8 max-w-4xl px-1 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,4vw,2.5rem)] italic leading-snug text-white md:mt-10"
          >
            Kharkiv keeps its light on — together.
          </motion.blockquote>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mx-auto mt-10 h-px w-[min(28rem,88%)] origin-center bg-gradient-to-r from-transparent via-white/55 to-transparent md:mt-12"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 1 }}
            className="mt-10 grid w-full max-w-5xl grid-cols-1 items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-12 md:text-left"
          >
            <figure className="order-2 mx-auto w-full max-w-xl md:order-1 md:mx-0">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.55)] ring-1 ring-amber-400/20">
                <img
                  src={finalePhotoUrl}
                  alt="Freedom Square, Kharkiv"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35 md:text-[11px]">
                Freedom Square · photo slot (swap URL in content)
              </figcaption>
            </figure>

            <div className="order-1 flex min-w-0 flex-col items-center md:order-2 md:items-start">
              <p
                className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,min(12vw,7rem),7.5rem)] leading-[1.05] tracking-[0.05em] text-white"
                style={{ overflow: 'visible', wordBreak: 'normal' }}
              >
                Харьков
              </p>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.35em] text-white/45 md:text-base">
                KHARKIV
              </p>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.45em] text-white/38 md:text-sm">
                end · for now
              </p>
            </div>
          </motion.div>
        </div>
      </SlideFrame>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.18 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.8 }}
        className="pointer-events-none absolute inset-0 bg-black"
      />
    </section>
  )
}
