import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Locale, translate } from '@eva-suite/sovereign-core/i18n';

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  defaultLocale?: Locale;
  children: ReactNode;
}

export function I18nProvider({ 
  defaultLocale = 'en-CA', 
  children 
}: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    // Update document lang attribute
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback((key: string, vars?: Record<string, string | number>) => {
    return translate(locale, key, vars);
  }, [locale]);

  const value: I18nContextValue = {
    locale,
    setLocale,
    t,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}
