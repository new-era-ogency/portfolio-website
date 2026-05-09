"use client";

import { useI18n } from "@/components/i18n-provider";
import type { Locale } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const toggle = (next: Locale) => {
    setLocale(next);
  };

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-espresso/15 bg-alabaster/60 p-0.5 font-mono text-[0.58rem] uppercase tracking-[0.18em] backdrop-blur-sm"
      role="group"
      aria-label="Език / Language"
    >
      <button
        type="button"
        onClick={() => toggle("bg")}
        aria-pressed={locale === "bg"}
        className={`rounded-full px-2.5 py-1.5 transition ${
          locale === "bg"
            ? "bg-espresso text-alabaster"
            : "text-stone hover:text-espresso"
        }`}
      >
        БГ
      </button>
      <button
        type="button"
        onClick={() => toggle("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1.5 transition ${
          locale === "en"
            ? "bg-espresso text-alabaster"
            : "text-stone hover:text-espresso"
        }`}
      >
        EN
      </button>
    </div>
  );
}
