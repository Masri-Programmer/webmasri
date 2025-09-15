import { createI18n } from 'vue-i18n';

import de from './locales/de.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
        en,
        de,
        fr,
        ar
    },
});

export default i18n;
