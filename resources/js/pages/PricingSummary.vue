<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-vue-next'
import { Link } from '@inertiajs/vue3'
import { pricing } from '@/routes'
import Title from '@/components/Title.vue'
import { useCurrency } from '@/composables/useCurrency'
const { t, n } = useI18n()

const { currency, formatCurrency } = useCurrency();
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
]

</script>

<template>
    <section id="pricing" class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="container mx-auto max-w-7xl px-4 md:px-6">
            <Title :title="'pricingSummary.title'" :subtitleKey="'pricingSummary.description'" tagline="pricingSummary.tagline" />
            <div class="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <Card
                    v-for="plan in pricingPlans"
                    :key="plan.key"
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
                            <span class="text-4xl font-bold">  {{formatCurrency(plan.price)}}</span>
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
                    <Link :href="pricing.url([plan.key])" >
                    <CardFooter>
                        <Button class="w-full" :variant="plan.isFeatured ? 'default' : 'outline'" size="lg">
                           {{ t('pricingSummary.ctaButton') }}
                        </Button>
                    </CardFooter>
                </Link>
                </Card>
            </div>
        </div>
    </section>
</template>