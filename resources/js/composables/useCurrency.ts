// resources/js/Composables/useCurrency.ts

import { useStorage } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export type Currency = 'eur' | 'usd';

const selectedCurrency = useStorage<Currency>('user-selected-currency', 'eur');

const rates = useStorage('currency-rates', {
    lastUpdated: 0,
    values: {
        eur: 1,
        usd: null as number | null,
    },
});

const isLoading = ref(false);
const localeMap: Record<Currency, string> = {
    usd: 'en-US',
    eur: 'de-DE',
};

async function fetchRates() {
    const oneDay = 24 * 60 * 60 * 1000;
    if (Date.now() - rates.value.lastUpdated < oneDay) {
        return;
    }

    isLoading.value = true;
    try {
        //  await axios.get('/api/v1/currency-rates');
        const response = ref({ data: { USD: 1.15 } });
        rates.value.values.usd = response.value.data.USD;
        rates.value.lastUpdated = Date.now();
    } catch (error) {
        console.error('Failed to fetch currency rates:', error);
    } finally {
        isLoading.value = false;
    }
}

export function useCurrency() {
    const { n } = useI18n();

    // watchEffect(() => {
    //     locale.value = localeMap[selectedCurrency.value];
    // });

    // 4. The updated formatting function now performs the calculation
    const formatCurrency = (amountInBaseCurrency: number): string => {
        const targetCurrency = selectedCurrency.value;
        const targetLocale = localeMap[targetCurrency];

        if (targetCurrency === 'eur') {
            return n(amountInBaseCurrency, 'currency', targetLocale);
        }

        const rate = rates.value.values[targetCurrency];
        if (rate) {
            const convertedAmount = amountInBaseCurrency * rate;
            return n(convertedAmount, 'currency', targetLocale);
        }

        console.warn(`Rate for ${targetCurrency.toUpperCase()} not available.`);
        return n(amountInBaseCurrency, 'currency', localeMap['eur']);
    };

    const toggleCurrency = () => {
        selectedCurrency.value = selectedCurrency.value === 'eur' ? 'usd' : 'eur';
    };

    const currencySymbol = computed(() => (selectedCurrency.value === 'eur' ? '€' : '$'));

    return {
        selectedCurrency,
        formatCurrency,
        toggleCurrency,
        currencySymbol,
        isLoading,
        fetchRates,
    };
}
