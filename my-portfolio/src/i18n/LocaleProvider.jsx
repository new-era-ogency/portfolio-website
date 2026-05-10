import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import { LocaleContext } from './locale-context.js'
import { DEFAULT_LOCALE, LANG_OPTIONS, messages } from './index.js'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw && Object.prototype.hasOwnProperty.call(messages, raw))
      return /** @type {keyof typeof messages} */ (raw)
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => readStoredLocale())

  useEffect(() => {
    const htmlLang = locale === 'uk' ? 'uk' : locale
    document.documentElement.lang = htmlLang
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const value = useMemo(() => {
    const t =
      messages[locale] ?? messages[DEFAULT_LOCALE]

    /** @param {keyof typeof messages} next */
    function setLocale(next) {
      if (!Object.prototype.hasOwnProperty.call(messages, next)) return
      setLocaleState(next)
    }

    return { locale, setLocale, t, langOptions: LANG_OPTIONS }
  }, [locale])

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}
