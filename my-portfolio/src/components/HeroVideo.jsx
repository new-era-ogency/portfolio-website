import { useEffect, useState } from 'react'

/** Основной ролик hero (путь от корня `public`). */
const HERO_VIDEO_SRC = '/videos/IMG_HeroPage.mp4.MP4'

function readViteEnv(key) {
  const v = import.meta.env[key]
  return typeof v === 'string' ? v.trim() : ''
}

/**
 * Фоновое видео для hero-секции: слой под контентом (`-z-10`), autoplay через muted + playsInline.
 */
export default function HeroVideo() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [broken, setBroken] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const custom = readViteEnv('VITE_HERO_VIDEO')
  const primarySrc = custom
    ? `/videos/${custom.replace(/^\/+/, '').replace(/^videos\//, '')}`
    : HERO_VIDEO_SRC

  if (reducedMotion || broken) {
    return (
      <div
        className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-[#0a0a0b]"
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-95"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(196,165,116,0.12), transparent 50%), linear-gradient(165deg, rgba(12,12,14,0.98), rgba(6,6,8,1))',
          }}
        />
      </div>
    )
  }

  return (
    <div
      className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
      aria-hidden
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full absolute inset-0"
        preload="auto"
        onError={() => setBroken(true)}
      >
        <source src={primarySrc} type="video/mp4" />
      </video>
    </div>
  )
}
