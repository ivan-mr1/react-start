import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'ru'];

const modules = import.meta.glob('/src/**/locales/*.json', { eager: true });

const resources = SUPPORTED_LANGS.reduce((acc, lang) => {
  acc[lang] = {};
  return acc;
}, {});

Object.entries(modules).forEach(([path, module]) => {
  const match = path.match(/\/src\/(.*?)\/locales\/([a-z-]+)\.json$/i);
  if (!match) return;

  const [, scopePath, lang] = match;

  if (!SUPPORTED_LANGS.includes(lang)) return;

  const parts = scopePath.split('/');
  const layer = parts[0];
  const slice = parts.slice(1).join('/');

  const namespace = `${layer}/${slice}`;

  const content = module.default ?? module;

  if (resources[lang][namespace]) {
    console.warn(`[i18n] duplicate namespace: ${namespace} (${lang})`);
  }

  resources[lang][namespace] = content;
});

i18n.use(initReactI18next).init({
  resources,

  lng: localStorage.getItem('app_lang') || DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  supportedLngs: SUPPORTED_LANGS,

  defaultNS: 'shared/common',
  fallbackNS: 'shared/common',

  interpolation: {
    escapeValue: false,
  },

  debug: import.meta.env.DEV,
});

export const changeLanguage = (lng) => {
  if (!SUPPORTED_LANGS.includes(lng)) return;
  localStorage.setItem('app_lang', lng);
  return i18n.changeLanguage(lng);
};

export const getCurrentLanguage = () => i18n.language;

export default i18n;
