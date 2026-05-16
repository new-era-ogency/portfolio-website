import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Ролик лежит в `public/videos/`. Имя файла — только буквы/цифры (без пробелов, `_`, и т.д.).
 * Список ниже перебирается по порядку, пока один из файлов не откроется.
 *
 * Свой вариант: в `.env` задайте только имя файла, например
 *   VITE_HERO_VIDEO=myportfoliopublicvideosimgheropage.mp4
 */
function getHeroMp4Sources() {
  const custom = readViteEnv('VITE_HERO_VIDEO')
  if (custom) {
    const name = custom.replace(/^\/+/, '').replace(/^videos\//, '')
    return [`/videos/${name}`]
  }
  return [
    '/videos/my-portfoliopublicvideosIMG_HeroPage.mp4',
    '/videos/imgheropage.mp4',
    '/videos/IMGHeroPage.mp4',
    '/videos/myportfoliopublicvideosimgheropage.mp4',
    '/videos/IMG_HeroPage.mp4',
  ]
}

function readViteEnv(key) {
  const v = import.meta.env[key]
  return typeof v === 'string' ? v.trim() : ''
}

/**
 * Полноэкранное фоновое видео за hero: preload=none, монтирование после idle.
 * Родитель: `relative` + `min-height` (например `min-h-svh`). Слой `absolute inset-0`.
 */
export default function HeroVideoBackground() {
  const videoRef = useRef(/** @type {HTMLVideoElement | null} */ (null))
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [deferMount, setDeferMount] = useState(false)
  const [ready, setReady] = useState(false)
  const [broken, setBroken] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    let idleId = /** @type {number | undefined} */ (undefined)
    let timeoutId = /** @type {ReturnType<typeof setTimeout> | undefined} */ (
      undefined
    )
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(
        () => {
          setDeferMount(true)
        },
        { timeout: 2000 },
      )
    } else {
      timeoutId = window.setTimeout(() => {
        setDeferMount(true)
      }, 350)
    }
    return () => {
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [reducedMotion])

  const tryPlay = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    const p = el.play()
    if (p !== undefined && typeof p.then === 'function') {
      p.catch(() => {})
    }
  }, [])

  if (reducedMotion || broken) {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0a0a0b]"
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
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0a0a0b]"
      aria-hidden
    >
      {!deferMount ? (
        <div
          className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 to-black"
          aria-hidden
        />
      ) : (
        <video
          ref={videoRef}
          className={`hero-video-bg absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => {
            setReady(true)
            tryPlay()
          }}
          onCanPlay={() => tryPlay()}
          onError={() => setBroken(true)}
        >
          {getHeroMp4Sources().map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
      )}
    </div>
  )
}
