"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n/messages/bg";
import { bg } from "@/lib/i18n/messages/bg";
import { en } from "@/lib/i18n/messages/en";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("bg");

  const messages = useMemo(() => (locale === "en" ? en : bg), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "bg";
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, messages }),
    [locale, messages],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
