import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Каталог этого файла = корень Vite-проекта (не process.cwd()).
// Иначе при запуске из родительской папки не подхватятся index.html и .env в my-portfolio.
const appRoot = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  root: appRoot,
  envDir: appRoot,
  base: '/',
  plugins: [react()],
})
