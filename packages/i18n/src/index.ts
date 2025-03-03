import { createContext, useContext, useState } from 'react';

// 기본 언어 설정 (예: 영어)
const defaultLang = 'en';

// 각 언어의 번역 파일
const translations = {
  en: {
    greeting: 'Hello',
    farewell: 'Goodbye',
  },
  es: {
    greeting: 'Hola',
    farewell: 'Adiós',
  },
  fr: {
    greeting: 'Bonjour',
    farewell: 'Au revoir',
  },
};

// 현재 언어와 텍스트를 반환하는 훅
const I18nContext = createContext<{ lang: string; translate: (key: string) => string } | undefined>(undefined);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState(defaultLang);

  const translate = (key: string) => {
    return translations[lang]?.[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, translate }}>
      {children}
    </I18nContext.Provider>
  );
};

// 언어 변경 함수
export const changeLanguage = (newLang: string) => {
  setLang(newLang);
};

// 텍스트 번역을 위한 훅
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};