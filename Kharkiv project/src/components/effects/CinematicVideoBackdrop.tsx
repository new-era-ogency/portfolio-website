import { motion } from 'framer-motion'
import { useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const DEFAULT_MP4 =
  'https://videos.pexels.com/video-files/2495382/2495382-uhd_2560_1440_24fps.mp4'

type Props = {
  className?: string
  posterUrl?: string
}

/** Looping muted backdrop — set `VITE_HERO_VIDEO_URL` to override the stock night-city clip */
export function CinematicVideoBackdrop({
  className = '',
  posterUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Freedom_Square_Kharkiv_2021.jpg/1600px-Freedom_Square_Kharkiv_2021.jpg',
}: Props) {
  const reduced = useReducedMotion()
  const src = import.meta.env.VITE_HERO_VIDEO_URL?.trim() || DEFAULT_MP4
  const [videoFailed, setVideoFailed] = useState(false)

  if (reduced || videoFailed) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 ${className}`}
        style={{
          backgroundImage: `linear-gradient(145deg, rgba(3,6,13,0.92), rgba(8,18,40,0.55)), url(${posterUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    )
  }

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <video
        className="absolute inset-0 h-full w-full scale-[1.08] object-cover"
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        poster={posterUrl}
        onError={() => setVideoFailed(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <motion.div
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2 }}
        className="absolute inset-0 bg-gradient-to-b from-[#03060d]/88 via-[#03060d]/55 to-[#03060d]/92"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent_0%,rgba(3,6,13,0.55)_62%,rgba(3,6,13,0.96)_100%)]" />
    </div>
  )
}
