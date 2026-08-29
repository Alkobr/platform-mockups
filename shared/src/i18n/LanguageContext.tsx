import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale } from '../types';
import { formatDate, formatPrice, formatTime, t, type TranslationKey } from './translations';

const STORAGE_KEY = 'miadly_mock_locale';

interface LanguageContextValue {
  locale: Locale;
  direction: 'rtl' | 'ltr';
  isRTL: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
  formatPrice: (amount: number) => string;
  formatTime: (date: Date) => string;
  formatDate: (date: Date) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'ar';
    return (localStorage.getItem(STORAGE_KEY) as Locale) || 'ar';
  });

  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  const isRTL = direction === 'rtl';

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [locale, direction]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === 'ar' ? 'en' : 'ar')),
    [],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      direction,
      isRTL,
      setLocale,
      toggleLocale,
      t: (key) => t(locale, key),
      formatPrice: (amount) => formatPrice(locale, amount),
      formatTime: (date) => formatTime(locale, date),
      formatDate: (date) => formatDate(locale, date),
    }),
    [locale, direction, isRTL, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div dir={direction} lang={locale} className="contents">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
