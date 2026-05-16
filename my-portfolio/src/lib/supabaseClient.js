import { createClient } from '@supabase/supabase-js'

const REQUIRED_KEYS = /** @type {const} */ ([
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY',
])

function readViteEnv(key) {
  const v = import.meta.env[key]
  return typeof v === 'string' ? v.trim() : ''
}

const url = readViteEnv('VITE_SUPABASE_URL')
const anonKey = readViteEnv('VITE_SUPABASE_ANON_KEY')

/** @type {import('@supabase/supabase-js').SupabaseClient | null} */
export const supabase =
  url.length > 0 && anonKey.length > 0 ? createClient(url, anonKey) : null

export function isSupabaseConfigured() {
  return supabase !== null
}

/** Список реально пустых переменных — для понятной диагностики в UI. */
export function getMissingSupabaseEnv() {
  return REQUIRED_KEYS.filter((k) => readViteEnv(k).length === 0)
}

if (import.meta.env.DEV) {
  const missing = getMissingSupabaseEnv()
  if (missing.length > 0) {
    console.warn(
      '[supabase] не заданы переменные:',
      missing.join(', '),
      '\nСоздайте файл my-portfolio/.env (или .env.local) и пропишите ключи. После правки перезапустите `npm run dev`.',
    )
  }
}
