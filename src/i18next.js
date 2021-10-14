import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ['en', 'es'];

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  whitelist: Languages,
  load: 'currentOnly',
  fallbackLng: 'es',
});

i18n.changeLanguage();

export default i18n;
