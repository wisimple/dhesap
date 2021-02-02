import i18n from 'i18next';

import enTranslation from './en/translation.json';
import trTranslation from './tr/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: enTranslation,
  },
  tr: {
    translation: trTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'tr',
  resources,
});

export default i18n;
