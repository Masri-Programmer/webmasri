<script setup lang="ts">
import { Info } from 'lucide-vue-next';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Data
import { additionalServices, packagesData } from './pricingData';

// Composables
import { useCurrency } from '@/composables/useCurrency';

// Layout & Base Components
import swr from '@/components/layout/SectionWrapper .vue';
import Title from '@/components/Title.vue';
import Layout from '@/layouts/Layout.vue';
import { pricing } from '@/routes';

// New Child Components
import AdditionalServices from './AdditionalServices.vue';
import AddOns from './AddOns.vue';
import PricingCategories from './PricingCategories.vue';
import PricingPackage from './PricingPackage.vue';

const props = defineProps({
    initialCategory: {
        type: String,
        default: 'businessWebsite',
    },
});

const { t } = useI18n();
const { formatCurrency } = useCurrency();

// Use a computed property for cleaner reactivity - no watcher needed
const selectedCategory = computed(() => packagesData[props.initialCategory]);

const formattedPriceRange = computed(() => {
    const category = selectedCategory.value;
    if (!category || typeof category.priceFrom !== 'number') return '';

    const from = formatCurrency(category.priceFrom);
    if (typeof category.priceTo === 'number') {
        const to = formatCurrency(category.priceTo);
        return `${from} - ${to}${category.priceSuffix || ''}`;
    }
    return `${t('pricing.priceFrom')} ${from}${category.priceSuffix || ''}`;
});
</script>

<template>
    <Layout :head="t('pricing.title')" :link="pricing.url()" :description="t('pricing.description')">
        <swr id="pricing-list" class="mt-14">
            <Title title="pricing.title" subtitle-key="pricing.description" tag="h1" />

            <PricingCategories :packages-data="packagesData" :active-category="props.initialCategory" />

            <div v-if="selectedCategory" class="mt-12">
                <div class="mb-8 text-center">
                    <h2 class="text-2xl font-semibold">{{ selectedCategory.title }}</h2>
                    <p class="mt-2 text-lg font-semibold text-primary">{{ formattedPriceRange }}</p>
                    <p class="text-slate-600 dark:text-slate-400">{{ t(selectedCategory.descriptionKey) }}</p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <PricingPackage
                        v-for="(pkg, index) in selectedCategory.packages"
                        :key="`${props.initialCategory}-${pkg.level}`"
                        :pkg="pkg"
                        :category-key="props.initialCategory"
                        :is-featured="index === 1"
                    />
                </div>

                <div
                    class="mx-auto mt-12 flex items-center justify-center gap-2 rounded-md border bg-accent/50 p-4 text-center text-sm text-muted-foreground"
                >
                    <Info class="h-5 w-5 flex-shrink-0" />
                    <p>{{ t('pricingSummary.installmentsInfo') }}</p>
                </div>
                <AddOns v-if="selectedCategory.addOns?.length" :add-ons="selectedCategory.addOns" />
                <AdditionalServices :services="additionalServices" />
            </div>
        </swr>
    </Layout>
</template>
