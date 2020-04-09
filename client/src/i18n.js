import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationRU from './locales/ruTranslation.json';
import translationEN from './locales/enTranslation.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translations: translationEN,
      },
      ru: {
        translations: translationRU,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
