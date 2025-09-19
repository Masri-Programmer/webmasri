// resources/js/Composables/useCurrency.ts

import { useStorage } from '@vueuse/core';
import axios from 'axios';
import { computed, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

export type Currency = 'eur' | 'usd';

// --- State defined outside the function to create a shared, singleton instance ---
// This ensures all components use the same reactive data.

// 1. Store the selected currency
const selectedCurrency = useStorage<Currency>('user-selected-currency', 'eur');

// 2. Store the fetched conversion rates, with EUR as the base
const rates = useStorage('currency-rates', {
    lastUpdated: 0,
    // Add other currencies as needed
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

// 3. The function to fetch rates from your API
async function fetchRates() {
    // Optional: Only fetch new rates once every 24 hours to avoid spamming your API
    const oneDay = 24 * 60 * 60 * 1000;
    if (Date.now() - rates.value.lastUpdated < oneDay) {
        return; // Rates are fresh enough
    }

    isLoading.value = true;
    try {
        // Replace with your actual Laravel API endpoint
        //  await axios.get('/api/v1/currency-rates');
        const response = ref( { "data": { "USD": 1.15 }})
        // Assuming API returns: { "data": { "USD": 1.07 } }
        rates.value.values.usd = response.value.data.USD;
        rates.value.lastUpdated = Date.now();
    } catch (error) {
        console.error('Failed to fetch currency rates:', error);
    } finally {
        isLoading.value = false;
    }
}

// --- The main composable function ---
// This function gives components access to the shared state and logic.

export function useCurrency() {
    const { n, locale } = useI18n();

    // Automatically update the i18n locale when the currency changes
    watchEffect(() => {
        locale.value = localeMap[selectedCurrency.value];
    });

    // 4. The updated formatting function now performs the calculation
    const formatCurrency = (amountInBaseCurrency: number): string => {
        const targetCurrency = selectedCurrency.value;

        // If the target is the base currency, no conversion needed
        if (targetCurrency === 'eur') {
            return n(amountInBaseCurrency, 'currency');
        }

        // For other currencies, calculate the converted amount
        const rate = rates.value.values[targetCurrency];
        if (rate) {
            const convertedAmount = amountInBaseCurrency * rate;
            return n(convertedAmount, 'currency');
        }

        // Fallback: if rate isn't available, show the base amount with a warning
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
