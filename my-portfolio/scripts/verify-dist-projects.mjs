import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const { projectDefs } = await import(
  pathToFileURL(join(root, 'src/i18n/projectDefs.js')).href,
)

const assetsDir = join(root, 'dist', 'assets')
const chunks = readdirSync(assetsDir).filter((f) => f.endsWith('.js'))
const bundle = chunks
  .map((f) => readFileSync(join(assetsDir, f), 'utf8'))
  .join('\n')

const missing = projectDefs.filter((def) => !bundle.includes(def.id))
if (missing.length) {
  console.error(
    'verify-dist-projects: missing ids in dist:',
    missing.map((d) => d.id).join(', '),
  )
  process.exit(1)
}
console.log('verify-dist-projects: ok,', projectDefs.length, 'projects')
