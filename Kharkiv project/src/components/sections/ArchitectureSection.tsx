import { motion } from 'framer-motion'
import { galleryImages } from '../../data/content'
import { staggerContainer, staggerItem } from '../../motion/variants'
import { SlideFrame } from '../ui/SlideFrame'

export function ArchitectureSection() {
  const slice = galleryImages.slice(0, 4)

  return (
    <section
      id="architecture"
      className="slide-section min-h-dvh bg-[#030712]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_55%)]" />

      <SlideFrame>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="relative box-border grid h-full min-h-0 min-w-0 w-full max-w-full grid-cols-2 grid-rows-[auto_minmax(0,1fr)_minmax(0,1fr)] gap-3 p-5 md:gap-6 md:p-8"
        >
          <motion.header className="col-span-2 shrink-0" variants={staggerItem}>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-fuchsia-300/80 md:text-sm">
              02 · City
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] tracking-[0.05em] text-white md:mt-4">
              Places & lines
            </h2>
          </motion.header>

          {slice.map((img) => (
            <motion.div
              key={img.src}
              variants={staggerItem}
              className="group relative box-border min-h-0 min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-black/40"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-95" />
              <p className="absolute bottom-3 left-3 right-3 font-mono text-[11px] uppercase leading-tight tracking-[0.2em] text-white/75 md:bottom-4 md:left-4 md:right-4 md:text-xs">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SlideFrame>
    </section>
  )
}
