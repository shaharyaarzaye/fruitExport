
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, TranslationKey, LanguageCode } from '../translations';

interface LanguageContextType {
  locale: LanguageCode;
  setLocale: (code: LanguageCode) => void;
  t: (key: TranslationKey) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<LanguageCode>(() => {
    return (localStorage.getItem('ashirwad-locale') as LanguageCode) || 'en';
  });

  const setLocale = (code: LanguageCode) => {
    setLocaleState(code);
    localStorage.setItem('ashirwad-locale', code);
  };

  const t = (key: TranslationKey): string => {
    return translations[locale]?.[key] || translations['en'][key] || key;
  };

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [dir, locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      <div className={dir === 'rtl' ? 'rtl-mode' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
