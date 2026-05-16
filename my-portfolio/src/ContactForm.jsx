import { useCallback, useMemo, useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'

import { useLeadSubmit } from './hooks/useLeadSubmit.js'
import { useLocale } from './i18n/useLocale.js'

const MESSAGE_MAX = 4000

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** @param {Record<string, string>} copy */
function validateFields({ name, email, message }, copy) {
  /** @type {Record<'name' | 'email' | 'message', string | undefined>} */
  const next = {}
  const n = name.trim()
  const e = email.trim()
  const m = message.trim()

  if (!n) next.name = copy.valNameRequired
  else if (n.length < 2) next.name = copy.valNameMin

  if (!e) next.email = copy.valEmailRequired
  else if (!isValidEmail(e)) next.email = copy.valEmailInvalid

  if (!m) next.message = copy.valMessageRequired
  else if (m.length < 10) next.message = copy.valMessageMin
  else if (m.length > MESSAGE_MAX) next.message = copy.valMessageMax

  return next
}

export default function ContactForm() {
  const { t } = useLocale()
  const copy = t.contactForm
  const { status, setStatus, submit: submitLead } = useLeadSubmit()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState(
    /** @type {Partial<Record<'name' | 'email' | 'message', boolean>>} */ ({}),
  )
  const [fieldErrors, setFieldErrors] = useState(
    /** @type {Partial<Record<'name' | 'email' | 'message', string>>} */ ({}),
  )
  const [submitError, setSubmitError] = useState(/** @type {string | null} */ (null))

  const clearSubmitFeedback = useCallback(() => {
    setSubmitError(null)
    setStatus((s) => (s === 'error' ? 'idle' : s))
  }, [setStatus])

  const runValidation = useCallback(
    (nextName, nextEmail, nextMessage) => {
      const errs = validateFields(
        { name: nextName, email: nextEmail, message: nextMessage },
        copy,
      )
      setFieldErrors(errs)
      return Object.keys(errs).length === 0
    },
    [copy],
  )

  const showErrors = useMemo(() => {
    return {
      name: touched.name ? fieldErrors.name : undefined,
      email: touched.email ? fieldErrors.email : undefined,
      message: touched.message ? fieldErrors.message : undefined,
    }
  }, [fieldErrors, touched])

  const handleBlur = useCallback(
    (field) => {
      setTouched((prev) => ({ ...prev, [field]: true }))
      runValidation(name, email, message)
    },
    [email, message, name, runValidation],
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      clearSubmitFeedback()
      setTouched({ name: true, email: true, message: true })

      const ok = runValidation(name, email, message)
      if (!ok) {
        setStatus('idle')
        return
      }

      const result = await submitLead({
        name,
        email,
        message,
      })

      if (!result.ok) {
        if (result.stage === 'config') {
          setStatus('error')
          const baseText =
            result.configTarget === 'emailjs'
              ? copy.errorConfigEmailJs
              : copy.errorConfigSupabase
          const missing = result.missingEnv?.length
            ? `\n\n${copy.errorConfigMissing}: ${result.missingEnv.join(', ')}`
            : ''
          setSubmitError(`${baseText}${missing}`)
          return
        }
        let text =
          result.stage === 'supabase' ? copy.errorSupabase : copy.errorEmailJs
        const suffix = result.message?.trim() || copy.errorGeneric
        setSubmitError(`${text}\n\n${suffix}`)
        return
      }

      setName('')
      setEmail('')
      setMessage('')
      setTouched({})
      setFieldErrors({})
    },
    [
      clearSubmitFeedback,
      copy.errorConfigEmailJs,
      copy.errorConfigMissing,
      copy.errorConfigSupabase,
      copy.errorEmailJs,
      copy.errorGeneric,
      copy.errorSupabase,
      email,
      message,
      name,
      runValidation,
      setStatus,
      submitLead,
    ],
  )

  const inputClass =
    'w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition duration-200 outline-none focus:border-[var(--color-accent)]/35 focus:ring-2 focus:ring-[var(--color-accent)]/15 disabled:cursor-not-allowed disabled:opacity-60'

  const labelClass =
    'mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500'

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(196,165,116,0.06),inset_0_1px_0_0_rgba(255,255,255,0.05)] sm:p-7">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 100% 0%, rgba(196,165,116,0.12), transparent 55%)',
        }}
      />

      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          <span
            className="h-1 w-1 rounded-full bg-[var(--color-accent)]"
            aria-hidden
          />
          {copy.badge}
        </p>
        <h3 className="font-display mt-4 text-xl font-medium tracking-tight text-zinc-50 sm:text-2xl">
          {copy.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
          {copy.hint}
        </p>

        {status === 'success' ? (
          <div
            className="animate-portfolio-fade-up mt-8 rounded-xl border border-emerald-500/20 bg-emerald-950/30 px-4 py-6 text-center shadow-[inset_0_1px_0_0_rgba(16,185,129,0.12)] transition duration-300"
            role="status"
            aria-live="polite"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
              <CheckCircle2 className="h-7 w-7" strokeWidth={1.25} aria-hidden />
            </div>
            <p className="mt-4 font-display text-lg font-medium text-emerald-100">
              {copy.successTitle}
            </p>
            <p className="mt-2 text-sm text-emerald-200/75">{copy.successBody}</p>
          </div>
        ) : (
          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="lead-name" className={labelClass}>
                {copy.name}
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(ev) => {
                  clearSubmitFeedback()
                  setName(ev.target.value)
                  if (touched.name) runValidation(ev.target.value, email, message)
                }}
                onBlur={() => handleBlur('name')}
                className={`${inputClass} ${showErrors.name ? 'border-rose-500/35 focus:border-rose-400/45 focus:ring-rose-500/15' : ''}`}
                placeholder={copy.namePlaceholder}
                disabled={status === 'submitting'}
                aria-invalid={Boolean(showErrors.name)}
                aria-describedby={showErrors.name ? 'lead-name-error' : undefined}
              />
              {showErrors.name ? (
                <p id="lead-name-error" className="mt-1.5 text-xs text-rose-300/90">
                  {showErrors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="lead-email" className={labelClass}>
                {copy.email}
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(ev) => {
                  clearSubmitFeedback()
                  setEmail(ev.target.value)
                  if (touched.email) runValidation(name, ev.target.value, message)
                }}
                onBlur={() => handleBlur('email')}
                className={`${inputClass} ${showErrors.email ? 'border-rose-500/35 focus:border-rose-400/45 focus:ring-rose-500/15' : ''}`}
                placeholder={copy.emailPlaceholder}
                disabled={status === 'submitting'}
                aria-invalid={Boolean(showErrors.email)}
                aria-describedby={showErrors.email ? 'lead-email-error' : undefined}
              />
              {showErrors.email ? (
                <p id="lead-email-error" className="mt-1.5 text-xs text-rose-300/90">
                  {showErrors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="lead-message" className={labelClass}>
                {copy.message}
              </label>
              <textarea
                id="lead-message"
                name="message"
                rows={4}
                value={message}
                onChange={(ev) => {
                  clearSubmitFeedback()
                  setMessage(ev.target.value)
                  if (touched.message) runValidation(name, email, ev.target.value)
                }}
                onBlur={() => handleBlur('message')}
                className={`${inputClass} min-h-[7.5rem] resize-y ${showErrors.message ? 'border-rose-500/35 focus:border-rose-400/45 focus:ring-rose-500/15' : ''}`}
                placeholder={copy.messagePlaceholder}
                disabled={status === 'submitting'}
                maxLength={MESSAGE_MAX}
                aria-invalid={Boolean(showErrors.message)}
                aria-describedby={showErrors.message ? 'lead-message-error' : undefined}
              />
              <div className="mt-1 flex items-center justify-between gap-3 text-[11px] text-zinc-600">
                <span>
                  {message.length}/{MESSAGE_MAX}
                </span>
                {showErrors.message ? (
                  <span id="lead-message-error" className="text-rose-300/90">
                    {showErrors.message}
                  </span>
                ) : (
                  <span aria-hidden className="opacity-0">
                    —
                  </span>
                )}
              </div>
            </div>

            {status === 'error' && submitError ? (
              <div
                role="alert"
                className="rounded-xl border border-rose-500/25 bg-rose-950/35 px-4 py-3 text-sm text-rose-100 transition duration-200"
              >
                <p className="font-medium text-rose-50">{copy.errorTitle}</p>
                <p className="mt-1 whitespace-pre-wrap text-xs leading-relaxed text-rose-200/85">
                  {submitError}
                </p>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/90 px-5 py-3.5 text-sm font-semibold text-zinc-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)] transition duration-200 hover:bg-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]/55 disabled:pointer-events-none disabled:opacity-60"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2
                    className="h-4 w-4 shrink-0 animate-spin"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {copy.sending}
                </>
              ) : (
                <>
                  <Send
                    className="h-4 w-4 shrink-0 opacity-85 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {copy.submit}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
