"use client";

import { bg as localeBg } from "date-fns/locale/bg";
import { enUS as localeEn } from "date-fns/locale/en-US";
import { format, parseISO, startOfDay } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import type { Locale as AppLocale } from "@/lib/i18n";
import "react-day-picker/style.css";

type PremiumDatePickerProps = {
  value: string;
  onChange: (isoDate: string) => void;
  locale: AppLocale;
  placeholder: string;
  label: string;
  error?: string;
  name: string;
};

export function PremiumDatePicker({
  value,
  onChange,
  locale,
  placeholder,
  label,
  error,
  name,
}: PremiumDatePickerProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dfLocale = locale === "en" ? localeEn : localeBg;

  const selected =
    value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? parseISO(`${value}T12:00:00`) : undefined;
  const display =
    selected && !Number.isNaN(selected.getTime())
      ? format(selected, "d MMMM yyyy", { locale: dfLocale })
      : null;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const today = startOfDay(new Date());

  return (
    <div ref={wrapRef} className="relative">
      <input type="hidden" name={name} value={value} readOnly />
      <button
        id={`${name}-btn`}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((o) => !o)}
        className={`mt-2 flex w-full items-center justify-between rounded-xl border bg-alabaster px-4 py-3 text-left font-body text-espresso outline-none transition focus-visible:ring-2 focus-visible:ring-espresso/30 ${
          error ? "border-red-700/50" : "border-fog hover:border-espresso/35"
        }`}
      >
        <span className={display ? "text-espresso" : "text-stone"}>
          {display ?? placeholder}
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-amber-deep">
          {open ? "▲" : "▼"}
        </span>
      </button>
      {error ? (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      ) : null}
      {open ? (
        <div
          role="dialog"
          aria-label={label}
          className="mehana-daypicker absolute left-0 right-0 z-50 mt-2 rounded-2xl border border-fog/50 bg-alabaster/98 p-4 shadow-[0_24px_80px_rgba(45,27,20,0.12)] backdrop-blur-xl sm:right-auto sm:min-w-[320px]"
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(d) => {
              if (!d) return;
              onChange(format(d, "yyyy-MM-dd"));
              setOpen(false);
            }}
            disabled={{ before: today }}
            locale={dfLocale}
            showOutsideDays
            fixedWeeks
          />
        </div>
      ) : null}
    </div>
  );
}
