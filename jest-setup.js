import '@testing-library/jest-dom';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import translationEN from './src/locales/en/translation.json';
import translationPL from './src/locales/pl/translation.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: translationEN,
    },
    pl: {
      translation: translationPL,
    },
  },
});
