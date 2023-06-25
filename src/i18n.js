import i18n from "i18next";
import enTranslation from "./en.json";
import faTranslation from "./fa.json";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fa: {
      translation: faTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
});
export default i18n;
