import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  bare?: boolean
}

/**
 * 16:9 slide — width comes only from `.presentation-slide-shell` (no Tailwind `w-full` on shell:
 * it would override `width: min(...)` in CSS).
 */
export function SlideFrame({ children, className = '', bare = false }: Props) {
  return (
    <div className="slide-frame box-border flex min-h-dvh w-full min-w-0 max-w-full items-center justify-center px-4 pb-[calc(var(--deck-bottom)+0.75rem)] pt-[max(0.5rem,env(safe-area-inset-top))] md:px-8 md:pb-11 md:pt-11">
      <div
        className={[
          'presentation-slide-shell relative overflow-hidden',
          bare ? '' : 'rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_80px_rgba(0,0,0,0.45)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="slide-inner h-full">{children}</div>
      </div>
    </div>
  )
}
