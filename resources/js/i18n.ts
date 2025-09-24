// resources/js/i18n.ts
import { createI18n } from 'vue-i18n';
import ar from './locales/ar.json';
import de from './locales/de.json';
import en from './locales/en.json';
import fr from './locales/fr.json';

const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
        en,
        de,
        ar,
        fr,
    },
    numberFormats: {
        'en-US': {
            currency: {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            },
        },
        'de-DE': {
            currency: {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            },
        },
    },
});

export default i18n;
