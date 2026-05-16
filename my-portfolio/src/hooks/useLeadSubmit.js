import { useCallback, useState } from 'react'
import emailjs from '@emailjs/browser'

import {
  getEmailJsEnv,
  getMissingEmailJsEnv,
  isEmailJsConfigured,
} from '../lib/emailjsConfig.js'
import {
  getMissingSupabaseEnv,
  isSupabaseConfigured,
  supabase,
} from '../lib/supabaseClient.js'

/**
 * @typedef {'idle' | 'submitting' | 'success' | 'error'} LeadSubmitStatus
 * @typedef {{ name: string, email: string, message: string }} LeadPayload
 * @typedef {(
 *   | { ok: true }
 *   | {
 *       ok: false
 *       stage: 'config' | 'supabase' | 'emailjs'
 *       message?: string
 *       configTarget?: 'supabase' | 'emailjs'
 *       missingEnv?: string[]
 *     }
 * )} LeadSubmitResult
 */

/**
 * CRM: сначала Supabase `leads`, затем EmailJS с templateParams { name, email, message }.
 */
export function useLeadSubmit() {
  const [status, setStatus] = useState(/** @type {LeadSubmitStatus} */ ('idle'))

  const submit = useCallback(
    /** @returns {Promise<LeadSubmitResult>} */
    async (/** @type {LeadPayload} */ payload) => {
      if (!isSupabaseConfigured() || !supabase) {
        return {
          ok: false,
          stage: 'config',
          configTarget: 'supabase',
          missingEnv: getMissingSupabaseEnv(),
        }
      }
      if (!isEmailJsConfigured()) {
        return {
          ok: false,
          stage: 'config',
          configTarget: 'emailjs',
          missingEnv: getMissingEmailJsEnv(),
        }
      }

      setStatus('submitting')
      const row = {
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
      }

      const { error: dbError } = await supabase.from('leads').insert(row)

      if (dbError) {
        setStatus('error')
        return {
          ok: false,
          stage: 'supabase',
          message: dbError.message || undefined,
        }
      }

      const { serviceId, templateId, publicKey } = getEmailJsEnv()
      const templateParams = {
        name: row.name,
        email: row.email,
        message: row.message,
      }

      try {
        await emailjs.send(serviceId, templateId, templateParams, {
          publicKey,
        })
      } catch (err) {
        setStatus('error')
        const detail =
          err &&
          typeof err === 'object' &&
          'text' in err &&
          typeof /** @type {{ text?: string }} */ (err).text === 'string'
            ? /** @type {{ text: string }} */ (err).text
            : err instanceof Error
              ? err.message
              : typeof err === 'string'
                ? err
                : 'EmailJS'
        return {
          ok: false,
          stage: 'emailjs',
          message: detail || undefined,
        }
      }

      setStatus('success')
      return { ok: true }
    },
    [],
  )

  return { status, setStatus, submit }
}
