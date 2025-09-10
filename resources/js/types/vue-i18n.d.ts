// resources/js/types/vue-i18n.d.ts
import 'vue-i18n';

// Import the base translation file's type
import en from '../locales/en.json';

// Extend vue-i18n's `DefineLocaleMessage` interface with our JSON structure
declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends typeof en {}
}