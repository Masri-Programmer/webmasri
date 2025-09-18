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
        ar,
    },
    numberFormats: {
        'en-US': {
            eur: {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            },
            usd: {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            },
        },
        'de-DE': {
            eur: {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            },
            usd: {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            },
        },
    },
});

export default i18n;
