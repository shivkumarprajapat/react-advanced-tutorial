import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import i18next from 'i18next';
import MAIN_RESOURCES from './lang/main.json'

import LANGUAGES_RESOURCES from './lang/languages.json'
export const LANGUAGES = Object.keys(LANGUAGES_RESOURCES);
export const DEFAULT_LANGUAGE = LANGUAGES[0];

i18n.
use(initReactI18next)
.init({
  defaultNS: 'main',
  fallbackLng: DEFAULT_LANGUAGE,
})
i18next.addResourceBundle(
  DEFAULT_LANGUAGE,
  'main',
  MAIN_RESOURCES);

export default i18n