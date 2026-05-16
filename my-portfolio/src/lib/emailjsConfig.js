/** @typedef {{ serviceId: string, templateId: string, publicKey: string }} EmailJsEnv */

const REQUIRED_KEYS = /** @type {const} */ ([
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
  'VITE_EMAILJS_PUBLIC_KEY',
])

function readEnv(key) {
  const v = import.meta.env[key]
  return typeof v === 'string' ? v.trim() : ''
}

/** @returns {EmailJsEnv} */
export function getEmailJsEnv() {
  return {
    serviceId: readEnv('VITE_EMAILJS_SERVICE_ID'),
    templateId: readEnv('VITE_EMAILJS_TEMPLATE_ID'),
    publicKey: readEnv('VITE_EMAILJS_PUBLIC_KEY'),
  }
}

export function isEmailJsConfigured() {
  const { serviceId, templateId, publicKey } = getEmailJsEnv()
  return Boolean(serviceId && templateId && publicKey)
}

/** Имена реально пустых переменных EmailJS. */
export function getMissingEmailJsEnv() {
  return REQUIRED_KEYS.filter((k) => readEnv(k).length === 0)
}

if (import.meta.env.DEV) {
  const missing = getMissingEmailJsEnv()
  if (missing.length > 0) {
    console.warn(
      '[emailjs] не заданы переменные:',
      missing.join(', '),
      '\nДобавьте их в my-portfolio/.env (или .env.local) и перезапустите dev-сервер.',
    )
  }
}
