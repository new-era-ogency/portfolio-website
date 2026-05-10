import { motion } from 'framer-motion'
import {
  SECTION_IDS,
  sectionAccentRgb,
  sectionDeckActiveSurface,
  sectionDeckBadgeActive,
  sectionDeckHintActive,
  sectionLabels,
  type SectionId,
} from '../../data/content'
import { useLenisNav } from '../../hooks/useLenisNav'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/** Reference-style neon: crisp ring + stacked outer bloom + soft inner wash */
function glowKeyframesFromRgb([r, g, b]: [number, number, number]) {
  const a =
    `0 0 0 1px rgba(${r},${g},${b},0.55), 0 0 14px rgba(${r},${g},${b},0.55), 0 0 32px rgba(${r},${g},${b},0.38), 0 0 56px rgba(${r},${g},${b},0.22), 0 0 96px rgba(${r},${g},${b},0.1), inset 0 0 48px rgba(${r},${g},${b},0.14), inset 0 1px 0 rgba(255,255,255,0.1)`
  const bPeak =
    `0 0 0 1px rgba(${r},${g},${b},0.95), 0 0 22px rgba(${r},${g},${b},0.72), 0 0 44px rgba(${r},${g},${b},0.52), 0 0 76px rgba(${r},${g},${b},0.32), 0 0 120px rgba(${r},${g},${b},0.14), inset 0 0 72px rgba(${r},${g},${b},0.22), inset 0 0 28px rgba(${r},${g},${b},0.12)`
  return [a, bPeak, a]
}

function staticGlowFromRgb([r, g, b]: [number, number, number]) {
  return `0 0 0 1px rgba(${r},${g},${b},0.85), 0 0 18px rgba(${r},${g},${b},0.62), 0 0 40px rgba(${r},${g},${b},0.42), 0 0 72px rgba(${r},${g},${b},0.24), inset 0 0 64px rgba(${r},${g},${b},0.18)`
}

/** Desktop sidebar + mobile strip; only one row uses the neon active treatment at a time. */
export function SectionNav({ active }: { active: SectionId }) {
  const { scrollToSection } = useLenisNav()
  const reducedMotion = useReducedMotion()

  const Item = ({
    id,
    index,
    compact,
  }: {
    id: SectionId
    index: number
    compact?: boolean
  }) => {
    const on = active === id
    const { title, hint } = sectionLabels[id]
    const rgb = sectionAccentRgb[id]

    return (
      <motion.button
        type="button"
        onClick={() => scrollToSection(id)}
        aria-current={on ? 'true' : undefined}
        aria-label={`Go to slide ${index + 1}: ${title}`}
        className={[
          'group relative z-0 flex w-full items-center gap-3 rounded-2xl border text-left transition-[border-color,background-color] duration-300',
          compact
            ? 'shrink-0 snap-start px-3 py-2.5 md:hidden'
            : 'hidden min-h-[3.75rem] px-4 py-4 md:flex',
          on
            ? sectionDeckActiveSurface[id]
            : 'border-white/10 bg-white/[0.03] hover:border-white/22 hover:bg-white/[0.06]',
        ].join(' ')}
        animate={
          on
            ? reducedMotion
              ? { boxShadow: staticGlowFromRgb(rgb) }
              : { boxShadow: glowKeyframesFromRgb(rgb) }
            : { boxShadow: '0 0 0 0 rgba(0,0,0,0)' }
        }
        transition={
          on && !reducedMotion
            ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.35 }
        }
        whileHover={{ x: compact ? 0 : -3 }}
        whileTap={{ scale: 0.98 }}
      >
        {on && (
          <>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(120% 90% at 12% 50%, rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.42), rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.12) 42%, transparent 68%)`,
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-[3px] rounded-[1.125rem] opacity-[0.85] blur-2xl"
              style={{
                background: `linear-gradient(105deg, rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.55), rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.2) 55%, rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.35))`,
              }}
            />
          </>
        )}

        <span
          className={[
            'relative z-[1] flex size-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-semibold transition-shadow duration-300',
            on
              ? sectionDeckBadgeActive[id]
              : 'bg-white/10 text-white/70 shadow-none group-hover:text-white',
          ].join(' ')}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="relative z-[1] min-w-0 flex-1">
          <span
            className={[
              'block truncate text-sm font-medium tracking-tight',
              on ? 'text-white' : 'text-white/90',
            ].join(' ')}
          >
            {title}
          </span>
          <span
            className={[
              'block truncate font-mono text-[10px] uppercase tracking-[0.28em]',
              on ? sectionDeckHintActive[id] : 'text-white/40',
            ].join(' ')}
          >
            {hint}
          </span>
        </span>
        {on && (
          <span
            className="relative z-[1] hidden size-2.5 shrink-0 rounded-full md:block"
            style={{
              backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
              boxShadow: `0 0 12px 4px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.95), 0 0 28px 6px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.55)`,
            }}
          />
        )}
      </motion.button>
    )
  }

  return (
    <>
      <nav
        className="pointer-events-auto fixed right-0 top-0 z-[900] hidden h-dvh w-[var(--nav-w)] flex-col border-l border-white/10 bg-[#030712]/82 px-5 py-10 backdrop-blur-2xl md:flex"
        aria-label="Slides"
      >
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.45em] text-white/40">
          Slides
        </p>
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto overflow-x-visible px-2 py-2 pr-3">
          {SECTION_IDS.map((id, i) => (
            <Item key={id} id={id} index={i} />
          ))}
        </div>
        <p className="mt-6 border-t border-white/10 pt-6 font-mono text-[9px] uppercase leading-relaxed tracking-[0.3em] text-white/25">
          Click a slide to jump
        </p>
      </nav>

      <nav
        className="fixed bottom-0 left-0 right-0 z-[900] flex gap-2 overflow-x-auto border-t border-white/10 bg-[#030712]/90 px-3 py-3 backdrop-blur-xl md:hidden"
        aria-label="Slides"
        style={{
          paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
        }}
      >
        {SECTION_IDS.map((id, i) => (
          <Item key={id} id={id} index={i} compact />
        ))}
      </nav>
    </>
  )
}
