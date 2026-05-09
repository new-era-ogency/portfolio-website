"use client";

import { RevealSection } from "@/components/reveal-section";
import { useI18n } from "@/components/i18n-provider";
import Link from "next/link";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.0!2d27.7518!3d42.7166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQyJzU5LjgiTiAyN8KwNDUnMDYuNSJF!5e0!3m2!1sen!2sbg!4v1";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Dinevi+Marina+Sveti+Vlas+Bulgaria";

export function LocationSection() {
  const { messages: m } = useI18n();
  const L = m.location;

  const placeholders = [
    { key: "p1", variant: "from-espresso/85 to-espresso/40" },
    { key: "p2", variant: "from-amber/40 to-amber-deep/20" },
    { key: "p3", variant: "from-garden/50 to-espresso/30" },
    { key: "p4", variant: "from-fog to-stone/40" },
    { key: "p5", variant: "from-espresso/50 to-amber/25" },
    { key: "p6", variant: "from-alabaster-dark to-fog/80" },
  ];

  return (
    <section
      id="location"
      className="border-y border-fog/50 bg-alabaster py-24 sm:py-28"
    >
      <RevealSection className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-stone">
          {L.kicker}
        </p>
        <h2 className="font-display mt-3 text-3xl tracking-[0.06em] text-espresso sm:text-4xl sm:tracking-[0.08em]">
          {L.title}
        </h2>
        <p className="mt-4 max-w-2xl font-body text-stone">{L.lead}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <article className="rounded-[1.75rem] border border-fog/40 bg-gradient-to-br from-alabaster via-alabaster to-alabaster-dark/60 p-8 shadow-[0_20px_80px_rgba(45,27,20,0.08)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-amber-deep">
                  {L.addressLabel}
                </p>
                <p className="mt-2 max-w-sm font-display text-xl tracking-[0.05em] text-espresso">
                  {L.address}
                </p>
                <p className="mt-6 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-stone">
                  {L.hoursLabel}
                </p>
                <p className="mt-1 font-body text-espresso/90">{L.hours}</p>
                <p className="text-sm text-stone">{L.hoursKitchen}</p>
              </div>
              <Link
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-espresso px-6 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-alabaster transition hover:bg-espresso-light"
              >
                {L.directions}
              </Link>
            </div>
            <div className="mt-8 border-t border-fog/35 pt-6">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-stone">
                {L.phoneLabel} · {L.emailLabel}
              </p>
              <p className="mt-2">
                <a
                  href="tel:+359XXXXXXXXX"
                  className="font-body text-espresso underline decoration-amber/50 underline-offset-4 hover:decoration-espresso"
                >
                  +359 XXX XXX XXX
                </a>
              </p>
              <p>
                <a
                  href="mailto:reservations@mehana-manastira.example"
                  className="font-body text-sm text-stone underline-offset-4 hover:text-espresso hover:underline"
                >
                  reservations@mehana-manastira.example
                </a>
              </p>
            </div>
          </article>

          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-stone">
              {L.instagramKicker}
            </p>
            <p className="font-display mt-2 text-xl tracking-[0.06em] text-espresso">
              {L.instagramTitle}
            </p>
            <p className="mt-1 text-sm text-stone">{L.instagramPlaceholder}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {placeholders.map(({ key, variant }) => (
                <div
                  key={key}
                  className={`flex aspect-square items-end rounded-2xl bg-gradient-to-br p-3 shadow-inner ring-1 ring-espresso/5 ${variant}`}
                >
                  <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-alabaster/90 [text-shadow:0_1px_2px_rgba(45,27,20,0.45)]">
                    {L.instagramTitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-fog/40 shadow-lg">
          <iframe
            title={L.mapTitle}
            src={MAP_EMBED}
            width="100%"
            height="320"
            className="block min-h-[280px]"
            style={{ border: 0, filter: "grayscale(15%) contrast(1.02)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </RevealSection>
    </section>
  );
}
