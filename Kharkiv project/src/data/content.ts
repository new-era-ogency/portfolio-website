/** Presentation copy — short English cues (details come from your speaker notes). */

export const SECTION_IDS = [
  'intro',
  'history',
  'architecture',
  'present',
  'tech',
  'culture',
  'finale',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

/** Side deck labels (short). */
export const sectionLabels: Record<
  SectionId,
  { title: string; hint: string }
> = {
  intro: { title: 'Open', hint: 'Title' },
  history: { title: 'History', hint: 'Timeline' },
  architecture: { title: 'City', hint: 'Places' },
  present: { title: 'Then / Now', hint: 'Split' },
  tech: { title: 'Tech', hint: 'Numbers' },
  culture: { title: 'Culture', hint: 'Gallery' },
  finale: { title: 'Close', hint: 'Outro' },
}

/** Accent RGB per slide — matches chapter colours for deck glow */
export const sectionAccentRgb: Record<SectionId, [number, number, number]> = {
  intro: [0, 255, 198],
  history: [56, 189, 248],
  architecture: [217, 70, 239],
  present: [251, 113, 133],
  tech: [52, 211, 153],
  culture: [244, 114, 182],
  finale: [251, 191, 36],
}

/** Active deck row: stronger border + tint so the neon read matches the reference still */
export const sectionDeckActiveSurface: Record<SectionId, string> = {
  intro: 'border-cyan-300/75 bg-cyan-400/[0.2]',
  history: 'border-sky-300/75 bg-sky-400/[0.2]',
  architecture: 'border-fuchsia-300/75 bg-fuchsia-400/[0.2]',
  present: 'border-rose-300/75 bg-rose-400/[0.2]',
  tech: 'border-emerald-300/75 bg-emerald-400/[0.2]',
  culture: 'border-pink-300/75 bg-pink-400/[0.2]',
  finale: 'border-amber-300/75 bg-amber-400/[0.2]',
}

/** Closing slide photo — replace URL if needed */
export const finalePhotoUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Freedom_Square_Kharkiv_2021.jpg/1600px-Freedom_Square_Kharkiv_2021.jpg'

/** Deck number badge when slide is active (matches category colour) */
export const sectionDeckBadgeActive: Record<SectionId, string> = {
  intro:
    'bg-cyan-300 text-black shadow-[0_0_22px_rgba(0,255,198,0.55),0_0_44px_rgba(0,255,198,0.25)]',
  history:
    'bg-sky-300 text-black shadow-[0_0_22px_rgba(56,189,248,0.55),0_0_44px_rgba(56,189,248,0.25)]',
  architecture:
    'bg-fuchsia-300 text-black shadow-[0_0_22px_rgba(217,70,239,0.5),0_0_44px_rgba(217,70,239,0.22)]',
  present:
    'bg-rose-300 text-black shadow-[0_0_22px_rgba(251,113,133,0.55),0_0_44px_rgba(251,113,133,0.25)]',
  tech:
    'bg-emerald-300 text-black shadow-[0_0_22px_rgba(52,211,153,0.55),0_0_44px_rgba(52,211,153,0.25)]',
  culture:
    'bg-pink-300 text-black shadow-[0_0_22px_rgba(244,114,182,0.55),0_0_44px_rgba(244,114,182,0.25)]',
  finale:
    'bg-amber-300 text-black shadow-[0_0_22px_rgba(251,191,36,0.55),0_0_44px_rgba(251,191,36,0.25)]',
}

export const sectionDeckHintActive: Record<SectionId, string> = {
  intro: 'text-cyan-200/85',
  history: 'text-sky-200/85',
  architecture: 'text-fuchsia-200/85',
  present: 'text-rose-200/85',
  tech: 'text-emerald-200/85',
  culture: 'text-pink-200/85',
  finale: 'text-amber-200/85',
}

/** Wikimedia Commons — Kharkiv */
export const galleryImages = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kharkiv_Derzhprom_from_above.jpg/1600px-Kharkiv_Derzhprom_from_above.jpg',
    alt: 'Derzhprom and Freedom Square from above',
    caption: 'Derzhprom · city lines',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Freedom_Square_Kharkiv_2021.jpg/1600px-Freedom_Square_Kharkiv_2021.jpg',
    alt: 'Freedom Square',
    caption: 'Freedom Square · center',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Kharkiv_Metro_station_Universitet.jpg/1600px-Kharkiv_Metro_station_Universitet.jpg',
    alt: 'Universitet metro station',
    caption: 'Metro · fast underground',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gorky_Park_in_Kharkiv%2C_May_2019.jpg/1600px-Gorky_Park_in_Kharkiv%2C_May_2019.jpg',
    alt: 'Gorky Park, Kharkiv',
    caption: 'Gorky Park · green pulse',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kharkiv_Opera_House_2015.jpg/1600px-Kharkiv_Opera_House_2015.jpg',
    alt: 'Kharkiv Opera House',
    caption: 'Opera · evening gold',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Kharkiv_Karazin_University_Main_Building.jpg/1600px-Kharkiv_Karazin_University_Main_Building.jpg',
    alt: 'Karazin University main building',
    caption: 'Karazin · knowledge',
  },
] as const

export const timeline = [
  { year: '1654', title: 'Fort town', desc: 'Founded as a frontier fort.' },
  { year: '1805', title: 'University', desc: 'First university opens.' },
  { year: '1928–32', title: 'Derzhprom', desc: 'Iconic constructivist complex.' },
  { year: '1991', title: 'New era', desc: 'Science & industry hub.' },
  { year: 'Today', title: 'Resilience', desc: 'A city that keeps moving.' },
] as const

export const techStats = [
  { label: 'universities & academies', value: 40, suffix: '+' },
  { label: 'students each year', value: 150, suffix: 'k' },
  { label: 'IT people (region)', value: 45, suffix: 'k+' },
  { label: 'strong research schools', value: 12, suffix: '+' },
] as const

export const cultureGallery = [
  {
    src: galleryImages[4].src,
    alt: galleryImages[4].alt,
    title: 'Stage',
    subtitle: 'Opera · ballet',
  },
  {
    src: galleryImages[1].src,
    alt: galleryImages[1].alt,
    title: 'Square',
    subtitle: 'Heart of the city',
  },
  {
    src: galleryImages[2].src,
    alt: galleryImages[2].alt,
    title: 'Metro',
    subtitle: 'Art underground',
  },
  {
    src: galleryImages[0].src,
    alt: galleryImages[0].alt,
    title: 'Skyline',
    subtitle: 'Derzhprom lines',
  },
] as const
