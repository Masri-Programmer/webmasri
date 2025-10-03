<script setup lang="ts">
import Title from '@/components/Title.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCurrency } from '@/composables/useCurrency';
import { Link } from '@inertiajs/vue3';
import { Check, Info } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
// Assuming you have a route helper. If not, you can replace this with a static path.
import { pricing } from '@/routes';

const { t } = useI18n();
const { formatCurrency } = useCurrency();

const pricingPlans = [
    {
        key: 'landingPage',
        titleKey: 'pricingSummary.landingPage.title',
        descriptionKey: 'pricingSummary.landingPage.description',
        price: 200,
        features: [
            'pricingSummary.features.singlePage',
            'pricingSummary.features.contactForm',
            'pricingSummary.features.seoOptimized',
            'pricingSummary.features.fastLoading',
        ],
        isFeatured: false,
    },
    {
        key: 'businessWebsite',
        titleKey: 'pricingSummary.businessWebsite.title',
        descriptionKey: 'pricingSummary.businessWebsite.description',
        price: 600,
        features: [
            'pricingSummary.features.multiPage',
            'pricingSummary.features.cms',
            'pricingSummary.features.blogSetup',
            'pricingSummary.features.customDesign',
        ],
        isFeatured: true,
    },
    {
        key: 'onlineShop',
        titleKey: 'pricingSummary.onlineShop.title',
        descriptionKey: 'pricingSummary.onlineShop.description',
        price: 2200,
        features: [
            'pricingSummary.features.productManagement',
            'pricingSummary.features.securePayments',
            'pricingSummary.features.inventorySystem',
            'pricingSummary.features.customerAccounts',
        ],
        isFeatured: false,
    },
];
</script>

<template>
    <Title :title="'pricingSummary.title'" :subtitleKey="'pricingSummary.description'" tagline="pricingSummary.tagline" />
    <div class="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
        <Card
            v-for="(plan, index) in pricingPlans"
            :key="plan.key"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            class="relative flex h-full flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            :class="{ 'border-2 border-primary shadow-lg': plan.isFeatured }"
        >
            <div v-if="plan.isFeatured" class="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                <Badge class="bg-primary px-4 py-1 text-primary-foreground">
                    {{ t('pricingSummary.mostPopular') }}
                </Badge>
            </div>

            <CardHeader class="items-center pb-4">
                <CardTitle class="text-xl">{{ t(plan.titleKey) }}</CardTitle>
                <CardDescription class="min-h-[60px] text-center">
                    {{ t(plan.descriptionKey) }}
                </CardDescription>
                <div class="flex items-baseline gap-1">
                    <span class="text-sm text-muted-foreground">{{ t('pricingSummary.from') }}</span>
                    <span class="text-4xl font-semibold"> {{ formatCurrency(plan.price) }}</span>
                </div>
            </CardHeader>
            <CardContent class="flex-grow">
                <ul class="space-y-3">
                    <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2">
                        <Check class="h-5 w-5 text-primary" />
                        <span class="text-muted-foreground">{{ t(feature) }}</span>
                    </li>
                </ul>
            </CardContent>
            <Link :href="pricing.url([plan.key])">
                <CardFooter>
                    <Button class="w-full" :variant="plan.isFeatured ? 'default' : 'outline'" size="lg">
                        {{ t('pricingSummary.ctaButton') }}
                    </Button>
                </CardFooter>
            </Link>
        </Card>
    </div>

    <div
        class="mx-auto mt-6 flex max-w-5xl items-center justify-center gap-2 rounded-md border bg-accent/50 p-4 text-center text-sm text-muted-foreground"
    >
        <Info class="h-5 w-5 flex-shrink-0" />
        <p>{{ t('pricingSummary.installmentsInfo') }}</p>
    </div>
</template>
