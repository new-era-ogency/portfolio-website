import { useMemo } from 'react'
import {
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
  Smartphone,
} from 'lucide-react'

import { projectDefs } from './i18n/projectDefs.js'
import { useLocale } from './i18n/useLocale.js'
import { GITHUB_ORG } from './brand.js'

function TelegramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.559z" />
    </svg>
  )
}

export default function App() {
  const { locale, setLocale, t, langOptions } = useLocale()

  const projects = useMemo(() => {
    return projectDefs.map((def) => {
      const copy = t.projects[def.id] ?? {}
      return {
        ...def,
        ...copy,
        title: copy.title ?? def.id,
        href: copy.href ?? def.href ?? '#',
      }
    })
  }, [t])

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      {/* Atmosphere */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-[#0a0a0b]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,rgba(196,165,116,0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(99,102,241,0.06),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35] [background-image:repeating-linear-gradient(-12deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_12px)]"
        aria-hidden
      />

      <div className="relative z-10">
      <header className="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-8 sm:gap-6 sm:px-8">
        <a
          href="#"
          className="group flex shrink-0 items-center gap-3 text-left"
        >
          <img
            src={GITHUB_ORG.avatarUrl}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-white/15 object-cover ring-1 ring-white/10 transition group-hover:border-[var(--color-accent)]/40"
          />
          <span className="font-display text-base font-medium leading-tight tracking-tight text-zinc-100 sm:text-lg">
            {t.nav.brand}
            <span className="text-[var(--color-accent)]">.</span>
          </span>
        </a>
        <nav className="flex min-w-0 flex-1 flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-zinc-400 sm:gap-x-7">
          <a
            href="#why-me"
            className="transition-colors hover:text-zinc-100"
          >
            {t.nav.about}
          </a>
          <a
            href="#work"
            className="transition-colors hover:text-zinc-100"
          >
            {t.nav.projects}
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-zinc-100"
          >
            {t.nav.contact}
          </a>
          <a
            href={GITHUB_ORG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-zinc-100"
          >
            {t.nav.github}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
          </a>
        </nav>
        <div className="ml-auto flex shrink-0 flex-wrap items-center justify-end gap-2 sm:ml-0">
          <span className="sr-only">{t.nav.language}</span>
          <div
            className="flex rounded-full border border-white/12 bg-black/40 p-0.5 backdrop-blur-sm"
            role="group"
            aria-label={t.nav.language}
          >
            {langOptions.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLocale(id)}
                aria-pressed={locale === id}
                className={
                  locale === id
                    ? 'rounded-full bg-[var(--color-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-950'
                    : 'rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 transition hover:text-zinc-300'
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-4 sm:px-8 sm:pb-32 sm:pt-8 md:pt-12">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
              aria-hidden
            />
            {t.hero.badge}
          </p>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-zinc-50">
            {t.hero.title1}
            <br />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          <p className="mt-3">
            <a
              href={GITHUB_ORG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 transition hover:text-[var(--color-accent)]"
            >
              {t.hero.orgHandle}
            </a>
          </p>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-500">
            {t.hero.lead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-white"
            >
              {t.hero.ctaWork}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.05]"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href={GITHUB_ORG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <Github className="h-4 w-4 text-[var(--color-accent)]" />
              {t.hero.ctaGithub}
            </a>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-white/[0.06] pt-12 sm:grid-cols-3">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                {t.hero.focusLabel}
              </dt>
              <dd className="mt-2 text-sm text-zinc-400">
                {t.hero.focusValue}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                {t.hero.stackLabel}
              </dt>
              <dd className="mt-2 text-sm text-zinc-400">
                {t.hero.stackValue}
              </dd>
            </div>
            <div className="flex items-start gap-2 sm:justify-end">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]"
                strokeWidth={1.5}
              />
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                  {t.hero.locationLabel}
                </dt>
                <dd className="mt-2 text-sm text-zinc-400">
                  {t.hero.locationValue}
                </dd>
              </div>
            </div>
          </dl>
        </section>

        <section
          id="why-me"
          className="border-t border-white/[0.06] bg-white/[0.015] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2 className="font-display text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
              {t.why.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {t.why.body}
            </p>
          </div>
        </section>

        <section
          id="work"
          className="border-t border-white/[0.06] bg-black/20 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="mb-14 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
                  {t.work.title}
                </h2>
                <p className="mt-3 max-w-md text-sm text-zinc-500">
                  {t.work.lead}
                </p>
              </div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                {t.work.period}
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
              {projects.map(
                ({
                  id,
                  title,
                  tagline,
                  accent,
                  task,
                  solution,
                  stack,
                  icon: Icon,
                  href,
                  linkLabel,
                  coverImage,
                  tags: hashTags,
                }) => {
                  const linkHref = href ?? '#'
                  return (
                  <li key={id}>
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--color-mist)]/80 transition duration-300 hover:border-[var(--color-accent)]/25 hover:bg-[var(--color-mist)] hover:shadow-[0_0_0_1px_rgba(196,165,116,0.08)]">
                      {coverImage ? (
                        <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-white/[0.06]">
                          <img
                            src={coverImage}
                            alt={`${title}: ${t.work.screenshotAltSuffix}`}
                            className="h-full w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.02]"
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition group-hover:border-[var(--color-accent)]/20"
                            aria-hidden
                          >
                            <Icon className="h-5 w-5" strokeWidth={1.5} />
                          </div>
                          <span
                            className={
                              accent === 'boutique'
                                ? 'rounded-full border border-rose-400/25 bg-rose-500/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-rose-200/90'
                                : 'rounded-full border border-amber-400/25 bg-amber-500/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-200/90'
                            }
                          >
                            {accent === 'boutique'
                              ? t.work.boutique
                              : t.work.horeca}
                          </span>
                        </div>
                        <h3 className="mt-6 font-display text-xl font-medium text-zinc-100">
                          {title}
                        </h3>
                        {tagline ? (
                          <p className="mt-2 text-sm leading-snug text-zinc-500">
                            {tagline}
                          </p>
                        ) : null}
                        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-200/90 ring-1 ring-inset ring-emerald-500/10">
                          <Smartphone
                            className="h-3 w-3 shrink-0 text-emerald-400/90"
                            strokeWidth={2}
                            aria-hidden
                          />
                          {t.work.mobileBadge}
                        </p>
                        {hashTags?.length ? (
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {hashTags.map((tag) => (
                              <li
                                key={tag}
                                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium lowercase tracking-wide text-zinc-500"
                              >
                                #{tag}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        <dl className="mt-5 flex flex-1 flex-col gap-4 text-sm">
                          <div>
                            <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                              {t.work.task}
                            </dt>
                            <dd className="mt-1.5 leading-relaxed text-zinc-400">
                              {task}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                              {t.work.solution}
                            </dt>
                            <dd className="mt-1.5 leading-relaxed text-zinc-400">
                              {solution}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                              {t.work.stack}
                            </dt>
                            <dd className="mt-1.5 leading-relaxed text-zinc-500">
                              {stack ?? '—'}
                            </dd>
                          </div>
                        </dl>
                        <div className="mt-8 border-t border-white/[0.06] pt-5">
                          <a
                            href={linkHref}
                            target={
                              linkHref.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              linkHref.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className={`group/link inline-flex w-full items-center justify-between gap-3 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm font-medium transition ${
                              linkHref === '#'
                                ? 'cursor-not-allowed opacity-55'
                                : 'text-zinc-200 hover:border-[var(--color-accent)]/30 hover:bg-white/[0.05] hover:text-zinc-50'
                            }`}
                          >
                            <span>{linkLabel}</span>
                            <ArrowUpRight
                              className="h-4 w-4 shrink-0 text-[var(--color-accent)] transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                              strokeWidth={1.75}
                            />
                          </a>
                        </div>
                      </div>
                    </article>
                  </li>
                  )
                },
              )}
            </ul>
          </div>
        </section>

        <footer
          id="contact"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24"
        >
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12">
            <h2 className="font-display text-2xl font-medium text-zinc-50 sm:text-3xl">
              {t.footer.title}
            </h2>
            <p className="mt-3 max-w-lg text-sm text-zinc-500">
              {t.footer.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hirneyrodion@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                hirneyrodion@gmail.com
              </a>
              <a
                href={GITHUB_ORG.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-zinc-400 transition hover:border-white/20 hover:text-zinc-100"
                aria-label={`GitHub — ${GITHUB_ORG.handle}`}
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://t.me/rodionkhrn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-zinc-400 transition hover:border-white/20 hover:text-zinc-100"
                aria-label="Telegram @rodionkhrn"
                title="@rodionkhrn"
              >
                <TelegramIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
          <p className="mt-12 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-700">
            {t.footer.note({ year: new Date().getFullYear() })}
          </p>
        </footer>
      </main>
      </div>
    </div>
  )
}
