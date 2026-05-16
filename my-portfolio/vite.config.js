import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Каталог этого файла = корень Vite-проекта (не process.cwd()).
// Иначе при запуске из родительской папки не подхватятся index.html и .env в my-portfolio.
const appRoot = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, appRoot, '')

  const requiredKeys = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY',
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY',
  ]
  const missing = requiredKeys.filter(
    (k) => !(typeof env[k] === 'string' && env[k].trim().length > 0),
  )
  const hasEnvFile =
    existsSync(path.join(appRoot, '.env')) ||
    existsSync(path.join(appRoot, '.env.local'))

  if (!hasEnvFile) {
    console.warn(
      '\n[my-portfolio] не найден .env / .env.local в',
      appRoot,
      '\nСкопируйте .env.example → .env и заполните ключи Supabase и EmailJS.\n',
    )
  } else if (missing.length > 0) {
    console.warn(
      '\n[my-portfolio] .env найден, но пусты переменные:',
      missing.join(', '),
      '\nЗаполните их и перезапустите dev-сервер.\n',
    )
  }

  return {
    root: appRoot,
    envDir: appRoot,
    base: '/',
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return
            if (id.includes('lucide-react')) return 'icons'
            if (id.includes('@supabase')) return 'supabase'
            if (id.includes('@emailjs')) return 'emailjs'
            if (id.includes('node_modules/react-dom')) return 'react-vendor'
            if (id.includes('node_modules/react/')) return 'react-vendor'
          },
        },
      },
    },
  }
})
