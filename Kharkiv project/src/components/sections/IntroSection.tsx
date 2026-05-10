import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem } from '../../motion/variants'
import { AmbientMesh } from '../effects/AmbientMesh'
import { CinematicVideoBackdrop } from '../effects/CinematicVideoBackdrop'
import { LightStreaks } from '../effects/LightStreaks'
import { ParticleCanvas } from '../effects/ParticleCanvas'
import { SlideFrame } from '../ui/SlideFrame'

const letters = 'KHARKIV'.split('')

export function IntroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 38 })
  const videoScale = useTransform(smooth, [0, 1], [1, 1.14])
  const meshShift = useTransform(smooth, [0, 1], ['0%', '-4%'])
  const titleBlur = useTransform(smooth, [0, 0.92], [0, 12])
  const blurFilter = useTransform(titleBlur, (b) => `blur(${b}px)`)
  const vignette = useTransform(smooth, [0, 1], [0.22, 0.82])
  const titleScale = useTransform(smooth, [0, 1], [1, 1.06])

  return (
    <section
      ref={ref}
      id="intro"
      className="slide-section relative min-h-dvh min-w-0 max-w-full overflow-hidden box-border"
    >
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
          <CinematicVideoBackdrop />
        </motion.div>
        <motion.div className="absolute inset-0 will-change-transform" style={{ y: meshShift }}>
          <AmbientMesh />
        </motion.div>
        <ParticleCanvas density="dense" />
        <LightStreaks />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent_0%,#03060d_72%)]"
          style={{ opacity: vignette }}
        />
      </div>

      <div className="relative z-[2]">
        <SlideFrame bare className="border-0 shadow-none">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative box-border flex h-full min-h-0 min-w-0 w-full max-w-full flex-col justify-end px-6 pb-8 pt-10 md:px-12 md:pb-14 md:pt-12"
          >
            <motion.p
              variants={staggerItem}
              className="mb-4 font-mono text-[11px] uppercase tracking-[0.5em] text-cyan-200/85 md:mb-5 md:text-xs"
            >
              Kharkiv · cinematic deck
            </motion.p>

            <div className="overflow-visible">
              <motion.div variants={staggerItem} className="overflow-visible">
                <motion.h1
                  style={{ scale: titleScale, filter: blurFilter }}
                  className="origin-bottom-left font-[family-name:var(--font-display)] text-[clamp(3.75rem,min(22vw,14rem),15rem)] leading-[0.82] tracking-[0.03em] text-white drop-shadow-[0_0_60px_rgba(0,255,198,0.28)]"
                >
                  <span className="sr-only">KHARKIV</span>
                  <span aria-hidden className="flex flex-wrap gap-x-[0.06em]">
                    {letters.map((ch, i) => (
                      <motion.span
                        key={`${ch}-${i}`}
                        initial={{ y: '115%', opacity: 0, rotateX: -24 }}
                        animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.18 + i * 0.055,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="inline-block bg-gradient-to-b from-white via-cyan-50 to-cyan-400/75 bg-clip-text text-transparent [perspective:1200px]"
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </span>
                </motion.h1>
              </motion.div>
            </div>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-3xl font-[family-name:var(--font-serif)] text-[clamp(1.35rem,3.8vw,2.35rem)] italic leading-snug text-white/92 md:mt-9 md:text-[clamp(1.5rem,3vw,2.75rem)]"
            >
              East Ukraine · resilience · tech pulse · night lights.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.42em] text-white/50 md:mt-11 md:text-xs"
            >
              <span className="h-px min-w-[3rem] flex-1 bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent md:min-w-[4.5rem]" />
              <span className="whitespace-nowrap">Lenis scroll · deck or wheel</span>
            </motion.div>
          </motion.div>
        </SlideFrame>
      </div>
    </section>
  )
}
