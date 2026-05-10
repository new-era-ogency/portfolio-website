import { motion } from 'framer-motion'
import { cultureGallery } from '../../data/content'
import { staggerContainer, staggerItem } from '../../motion/variants'
import { SlideFrame } from '../ui/SlideFrame'

export function CultureSection() {
  return (
    <section id="culture" className="slide-section min-h-dvh bg-[#050312]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(244,114,182,0.12),transparent_45%)]" />

      <SlideFrame>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="relative box-border grid h-full min-h-0 min-w-0 w-full max-w-full grid-cols-2 grid-rows-[auto_minmax(0,1fr)_minmax(0,1fr)] gap-3 p-5 md:gap-4 md:p-8"
        >
          <motion.header className="col-span-2 shrink-0" variants={staggerItem}>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-fuchsia-300/85 md:text-sm">
              05 · Culture
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-[0.05em] text-white md:mt-4">
              People & rhythm
            </h2>
          </motion.header>

          {cultureGallery.map((item) => (
            <motion.figure
              key={item.title}
              variants={staggerItem}
              className="relative box-border min-h-0 min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-black/30"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050312] via-transparent to-transparent opacity-95" />
              <figcaption className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/55 md:text-xs">
                  {item.subtitle}
                </p>
                <p className="mt-1.5 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] tracking-[0.05em] text-white md:mt-2">
                  {item.title}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </SlideFrame>
    </section>
  )
}
