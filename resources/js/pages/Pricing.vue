<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import { contact, pricing } from '@/routes';
import { useI18n } from 'vue-i18n';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-vue-next';
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    initialCategory: {
        type: String,
        default: 'businessWebsite',
    },
});

const { t } = useI18n();

// --- DATA ---
const coreWebsiteFeatures = {
    responsiveDesign: true,
    seoOptimized: true,
    legalPages: true,
    analyticsIntegration: true,
    emailContact: true,
    socialMediaIntegration: true,
};

const pricingData: Record<string, any> = {
    landingPage: {
        title: 'Landing Page',
        priceFrom: 200,
        priceTo: 2800,
        priceSuffix: '+',
        descriptionKey: 'pricing.landingPageExamples',
        packages: [
            { level: 'starter', ...coreWebsiteFeatures, structure: 'pricing.packages.featureValues.templateBased', customization: 'pricing.packages.featureValues.brandingAndContent', googleMaps: true, whatsappContact: true, testimonialsSection: false, faqSection: false, abTestingSetup: false, heatmapIntegration: false },
            { level: 'business', ...coreWebsiteFeatures, structure: 'pricing.packages.featureValues.customDesign', customization: 'pricing.packages.featureValues.fullyCustomizable', googleMaps: true, whatsappContact: true, testimonialsSection: true, faqSection: true, abTestingSetup: false, heatmapIntegration: false },
            { level: 'pro', ...coreWebsiteFeatures, structure: 'pricing.packages.featureValues.strategyAndCustom', customization: 'pricing.packages.featureValues.fullyCustomizable', googleMaps: true, whatsappContact: true, testimonialsSection: true, faqSection: true, abTestingSetup: true, heatmapIntegration: true },
        ],
        addOns: [ { id: 'multilang', nameKey: 'pricing.addOns.multilingualSupport', price: { value: 300 } }, { id: 'liveChat', nameKey: 'pricing.addOns.liveChat', price: { value: 150 } } ],
    },
    businessWebsite: {
        title: 'Business Website',
        priceFrom: 600,
        priceTo: 5000,
        priceSuffix: '+',
        descriptionKey: 'pricing.websiteExamples',
        packages: [
            { level: 'starter', ...coreWebsiteFeatures, structure: 'pricing.packages.featureValues.upTo5Pages', contentManagementSystem: true, blogSection: false, portfolioGallery: true, userAccounts: false, bookingSystem: false },
            { level: 'growth', ...coreWebsiteFeatures, structure: 'pricing.packages.featureValues.upTo15Pages', contentManagementSystem: true, blogSection: true, portfolioGallery: true, userAccounts: true, bookingSystem: false },
            { level: 'enterprise', ...coreWebsiteFeatures, structure: 'pricing.packages.featureValues.unlimitedPages', contentManagementSystem: true, blogSection: true, portfolioGallery: true, userAccounts: true, bookingSystem: true },
        ],
        addOns: [ { id: 'bookingSystem', nameKey: 'pricing.addOns.advancedBooking', price: { value: 500 } }, { id: 'clientPortal', nameKey: 'pricing.addOns.secureClientPortal', price: { value: 750 } } ],
    },
    onlineShop: {
        title: 'Onlineshop',
        priceFrom: 2200,
        priceTo: 10000,
        priceSuffix: '+',
        descriptionKey: 'pricing.onlineShopExamples',
        packages: [
            { level: 'starter', ...coreWebsiteFeatures, productCapacity: 'pricing.packages.featureValues.upTo50Products', paymentGateways: 'pricing.packages.featureValues.standardPayments', inventoryManagement: true, discountCodes: true, userAccounts: true, productReviews: false, advancedFiltering: false, abandonedCartRecovery: false },
            { level: 'pro', ...coreWebsiteFeatures, productCapacity: 'pricing.packages.featureValues.upTo500Products', paymentGateways: 'pricing.packages.featureValues.standardPaymentsKlarna', inventoryManagement: true, discountCodes: true, userAccounts: true, productReviews: true, advancedFiltering: true, abandonedCartRecovery: true },
            { level: 'enterprise', ...coreWebsiteFeatures, productCapacity: 'pricing.packages.featureValues.unlimitedProducts', paymentGateways: 'pricing.packages.featureValues.customIntegrations', inventoryManagement: true, discountCodes: true, userAccounts: true, productReviews: true, advancedFiltering: true, abandonedCartRecovery: true, subscriptionModel: true, loyaltyProgram: true },
        ],
        addOns: [ { id: 'multicurrency', nameKey: 'pricing.addOns.multiCurrency', price: { value: 600 } }, { id: 'crm', nameKey: 'pricing.addOns.crmIntegration', price: { value: 900 } } ],
    },
};

const additionalServices = {
    hosting: {
        title: 'pricing.hosting.title',
        price: { value: 'pricing.hosting.price' },
    },
    maintenance: [
        { key: 'landingPage', title: 'pricing.maintenance.landingPage.title', description: 'pricing.maintenance.landingPage.description', price: { value: 'pricing.maintenance.landingPage.price' } },
        { key: 'website', title: 'pricing.maintenance.website.title', description: 'pricing.maintenance.website.description', price: { value: 'pricing.maintenance.website.price' } },
        { key: 'onlineShop', title: 'pricing.maintenance.onlineShop.title', description: 'pricing.maintenance.onlineShop.description', price: { value: 'pricing.maintenance.onlineShop.price' } },
        { key: 'seoKickstart', title: 'pricing.maintenance.seoKickstart.title', description: 'pricing.maintenance.seoKickstart.description', price: { value: 'pricing.maintenance.seoKickstart.price' } },
        { key: 'copywriting', title: 'pricing.maintenance.copywriting.title', description: 'pricing.maintenance.copywriting.description', price: { value: 'pricing.maintenance.copywriting.price' } },
    ],
    emailAndDomain: {
        title: 'pricing.emailAndDomain.title',
        description: 'pricing.emailAndDomain.description',
        price: { value: 'pricing.emailAndDomain.price' },
    },
};

// --- COMPONENT LOGIC ---

// Map internal keys to URL slugs for link generation
const urlSlugMap: Record<string, string> = {
    landingPage: 'landingPage',
    businessWebsite: 'website',
    onlineShop: 'onlineshop',
};

// This computed property will now react to prop changes automatically
const formattedPriceRange = computed(() => {
    const category = pricingData[props.initialCategory];
    if (!category || typeof category.priceFrom !== 'number') return '';
    const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    const from = formatter.format(category.priceFrom);
    if (typeof category.priceTo === 'number') {
        const to = formatter.format(category.priceTo);
        return `${from} - ${to}${category.priceSuffix || ''}`;
    }
    return `${t('pricing.priceFrom')} ${from}${category.priceSuffix || ''}`;
});

const isFeature = (key: string) => {
    return !['level'].includes(key);
};

const isFeaturedCategory = (categoryKey: string) => categoryKey === 'businessWebsite';

const categoryKeyMap: Record<string, string> = {
    landingPage: 'landingPage',
    businessWebsite: 'website',
    onlineShop: 'onlineShop',
};
</script>

<template>
    <Layout :head="t('pricing.title')" :link="pricing.url()" :description="t('pricing.description')">
        <section class="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {{ t('pricing.title') }}
                </h1>
                <p class="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {{ t('pricing.description') }}
                </p>
            </div>

            <div class="mt-12 flex flex-wrap justify-center gap-3">
                <Link
                    v-for="(category, key) in pricingData"
                    :key="key"
                    :href="`/pricing/${urlSlugMap[key]}`"
                    preserve-state
                    preserve-scroll
                >
                    <Button
                        :variant="props.initialCategory === key ? 'default' : 'outline'"
                        class="relative"
                        as="div"
                    >
                        {{ t(`pricing.${categoryKeyMap[key]}`) }}
                        <Badge v-if="isFeaturedCategory(String(key))" variant="secondary" class="ml-2 text-xs">
                            {{ t('pricing.featured') }}
                        </Badge>
                    </Button>
                </Link>
            </div>

            <div class="mt-12">
                <div class="mb-8 text-center">
                    <h2 class="text-2xl font-bold text-foreground">
                        {{ pricingData[props.initialCategory].title }}
                    </h2>
                    <p class="mt-2 text-lg font-semibold text-primary">
                        {{ formattedPriceRange }}
                    </p>
                    <p class="text-slate-600 dark:text-slate-400">
                        {{ t(pricingData[props.initialCategory].descriptionKey) }}
                    </p>
                </div>

                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card
                        v-for="(pkg, index) in pricingData[props.initialCategory].packages"
                        :key="`${props.initialCategory}-${pkg.level}`"
                        class="flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        :class="{
                            'scale-105 border-2 border-primary shadow-lg': index === 1,
                            'border-border': index !== 1,
                        }"
                    >
                        <div v-if="index === 1" class="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                            <Badge class="bg-primary px-4 py-1 text-primary-foreground">
                                {{ t('pricing.featured') }}
                            </Badge>
                        </div>

                        <CardHeader class="pb-4 text-center">
                            <CardTitle class="text-xl">{{ t(`pricing.packages.${props.initialCategory}.${pkg.level}.name`) }}</CardTitle>
                            <CardDescription class="mt-2 min-h-[40px] text-sm">
                                {{ t(`pricing.packages.${props.initialCategory}.${pkg.level}.description`) }}
                            </CardDescription>
                        </CardHeader>

                        <CardContent class="flex-grow space-y-4">
                            <hr class="border-border" />
                            <div class="space-y-3">
                                <div
                                    v-for="(value, feature) in pkg"
                                    :key="feature"
                                    class="flex items-center justify-between text-sm"
                                >
                                    <span
                                        v-if="isFeature(feature)"
                                        :class="{
                                            'text-foreground': value !== false,
                                            'text-muted-foreground line-through': value === false,
                                        }"
                                    >
                                        {{ t(`pricing.packages.${feature}`) }}
                                    </span>
                                    <div v-if="isFeature(feature)" class="flex-shrink-0">
                                        <CheckCircle2 v-if="value === true" class="h-4 w-4 text-green-500" />
                                        <XCircle v-else-if="value === false" class="h-4 w-4 text-muted-foreground opacity-50" />
                                        <Badge v-else variant="secondary" class="text-right text-xs">
                                            {{ t(String(value)) }}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Link :href="contact.url()" class="w-full">
                                <Button class="w-full" :variant="index === 1 ? 'default' : 'outline'" size="lg">
                                    {{ t('pricing.contactUs') }}
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>

                 <div v-if="pricingData[props.initialCategory].addOns?.length" class="mt-20">
                    <div class="mb-10 text-center">
                        <h3 class="text-3xl font-bold text-foreground">
                            {{ t('pricing.availableAddOns') }}
                        </h3>
                        <p class="mt-3 text-muted-foreground">
                            {{ t('pricing.customizeYourPackage') }}
                        </p>
                    </div>
                    <div class="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Card v-for="addOn in pricingData[props.initialCategory].addOns" :key="addOn.id" class="text-center">
                            <CardHeader>
                                <CardTitle class="text-base font-medium">
                                    {{ t(addOn.nameKey) }}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="text-lg font-bold text-primary">
                                    + {{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(addOn.price.value) }}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div class="mt-20">
                    <div class="mb-12 text-center">
                        <h2 class="text-3xl font-bold text-foreground">
                            {{ t('pricing.additionalServices') }}
                        </h2>
                        <p class="mt-4 text-muted-foreground">Essential services to complete your web presence</p>
                    </div>

                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        <Card class="text-center">
                            <CardHeader>
                                <CardTitle class="text-lg">{{ t(additionalServices.hosting.title) }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="text-sm text-muted-foreground">{{ t(additionalServices.hosting.price.value) }}</p>
                            </CardContent>
                        </Card>

                        <Card class="text-center">
                            <CardHeader>
                                <CardTitle class="text-lg">{{ t(additionalServices.emailAndDomain.title) }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="mb-2 text-xs text-muted-foreground">{{ t(additionalServices.emailAndDomain.description) }}</p>
                                <p class="text-sm font-semibold">{{ t(additionalServices.emailAndDomain.price.value) }}</p>
                            </CardContent>
                        </Card>

                        <Card v-for="service in additionalServices.maintenance" :key="service.key" class="text-center">
                            <CardHeader>
                                <CardTitle class="text-lg">{{ t(service.title) }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="mb-2 text-xs text-muted-foreground">{{ t(service.description) }}</p>
                                <p class="text-sm font-semibold">{{ t(service.price.value) }}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>