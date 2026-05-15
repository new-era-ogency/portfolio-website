import { createClient } from '@supabase/supabase-js'

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
