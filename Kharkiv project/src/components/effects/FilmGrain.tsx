import { useReducedMotion } from '../../hooks/useReducedMotion'

/** Fixed noise / grain — cinematic texture without blocking interaction */
export function FilmGrain() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[850] mix-blend-overlay opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,
        }}
      />
    )
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[850] overflow-hidden mix-blend-overlay"
    >
      <div className="film-grain-layer absolute inset-[-120%] opacity-[0.07]" />
    </div>
  )
}
