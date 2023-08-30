import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation'];
const supportedLngs = ['us', 'es', 'fr', 'de'];

export const setupI18n = () => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: {
        order: ['path', 'navigator', 'querystring', 'cookie'],
      },
      backend: {
        loadPath: '/translations/{{lng}}/{{ns}}.json',
      },
      react: {
        useSuspense: false,
      },
      debug: false,
      saveMissing: true,
      // lng: 'us',
      fallbackLng: 'us',
      interpolation: {
        escapeValue: false,
      },
      defaultNS: 'translation',
      ns,
      supportedLngs,
    });

  i18n.on('initialized', () => {
    const { language } = window.navigator;
    const parameters = new URLSearchParams(window.location.search);

    if (parameters.get('lng')) {
      i18n.changeLanguage(parameters.get('lng') as string);
      return;
    }

    if (language && (i18n.options.supportedLngs as string[]).includes(language)) {
      if (language === 'en-US') {
        i18n.changeLanguage('us');
        return;
      }
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage('us');
    }
  });

  i18n.on('languageChanged', (lng: string) => {
    window.sessionStorage.setItem('language', lng);
  });

  i18n.changeLanguage(window.sessionStorage.getItem('language') || 'us');

  return i18n;
};
