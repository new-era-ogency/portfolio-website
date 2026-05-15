/** @typedef {{ serviceId: string, templateId: string, publicKey: string }} EmailJsEnv */

/** @returns {EmailJsEnv} */
export function getEmailJsEnv() {
  const serviceId =
    typeof import.meta.env.VITE_EMAILJS_SERVICE_ID === 'string'
      ? import.meta.env.VITE_EMAILJS_SERVICE_ID.trim()
      : ''
  const templateId =
    typeof import.meta.env.VITE_EMAILJS_TEMPLATE_ID === 'string'
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID.trim()
      : ''
  const publicKey =
    typeof import.meta.env.VITE_EMAILJS_PUBLIC_KEY === 'string'
      ? import.meta.env.VITE_EMAILJS_PUBLIC_KEY.trim()
      : ''
  return { serviceId, templateId, publicKey }
}

export function isEmailJsConfigured() {
  const { serviceId, templateId, publicKey } = getEmailJsEnv()
  return Boolean(serviceId && templateId && publicKey)
}
