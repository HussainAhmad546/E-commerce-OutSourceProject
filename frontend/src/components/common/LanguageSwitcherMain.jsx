import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enFooter from '../../localization/English/englishLan.json';
import esFooter from  '../../localization/Spanish/spanishLan.json';

i18n.use(initReactI18next).init({
  resources: {
    English: { translation: enFooter },
    Spanish: { translation: esFooter }
  },
  lng: 'en',
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
