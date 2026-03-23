'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Language, LocalizedText } from '@/types';
import { defaultLanguage, languageMeta, languageStorageKey, translateText, uiCopy } from '@/lib/i18n-config';

interface I18nContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: LocalizedText | string) => string;
  copy: (typeof uiCopy)[Language];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(languageStorageKey) as Language | null;

    if (storedLanguage && storedLanguage in uiCopy) {
      setLanguage(storedLanguage);
      return;
    }

    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('es')) {
      setLanguage('es');
      return;
    }
    if (browserLanguage.startsWith('it')) {
      setLanguage('it');
      return;
    }
    if (browserLanguage.startsWith('ar')) {
      setLanguage('ar');
      return;
    }
    if (browserLanguage.startsWith('en')) {
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = languageMeta[language].htmlLang;
    document.documentElement.dir = languageMeta[language].dir;
  }, [language]);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t: (input) => translateText(input, language),
      copy: uiCopy[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within I18nProvider.');
  }

  return context;
}
