import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uz from "./lan/uz.json";
import en from "./lan/en.json";
import ru from "./lan/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: "en", // default til
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
