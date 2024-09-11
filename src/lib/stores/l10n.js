import {derived, writable} from 'svelte/store';
import {browser} from '$app/environment';
import translations from '$data/translations';

const initialState = 'en';
// TODO populate with browser default locale
// const browserDefaultLocale =

// TODO add hebrew, chinese
export const locales = [
 ['en', 'English', '🇺🇸'],
 ['fr', 'Français', '🇫🇷'],
 ['ua', 'Українська', '🇺🇦']
];

function translate(locale, key, vars) {
 // Throw errors if keys/locales and text below don't exist
 if (!key) throw new Error('no key provided to $t()');
 if (!locale) throw new Error(`no translation for key "${key}"`);

 // Grab the translation from the translations object.
 let text = translations[locale][key];

 if (!text) throw new Error(`no translation found for ${locale}.${key}`);

 // Replace any passed in variables in the translation string.
 Object.keys(vars).map(k => {
  const regex = new RegExp(`{{${k}}}`, 'g');
  text = text.replace(regex, vars[k]);
 });

 return text;
}

function createLocalization(key) {
 const initialValue =
  browser && localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialState;

 const {set, subscribe} = writable(initialValue);

 return {
  subscribe,
  set,
  useLocalStorage: () => {
   subscribe(current => {
    if (browser) {
     localStorage.setItem(key, JSON.stringify(current));
    }
   });
  }
 };
}

export const locale = createLocalization('app-localization');

export const t = derived(
 locale,
 $locale =>
  (key, vars = {}) =>
   translate($locale, key, vars)
);
