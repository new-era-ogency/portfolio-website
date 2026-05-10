import { ru } from './messages/ru.js'
import { en } from './messages/en.js'
import { bg } from './messages/bg.js'
import { uk } from './messages/uk.js'

export const messages = { ru, en, bg, uk }

/** @typedef {keyof typeof messages} Locale */

export const DEFAULT_LOCALE = /** @type {Locale} */ ('ru')

/** @type {Readonly<{ id: Locale, label: string }[]>} */
export const LANG_OPTIONS = [
  { id: 'en', label: 'EN' },
  { id: 'ru', label: 'RU' },
  { id: 'bg', label: 'BG' },
  { id: 'uk', label: 'UA' },
]
