<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCurrency } from '@/composables/useCurrency';
import Layout from '@/layouts/Layout.vue';
import { contact, pricing } from '@/routes';
import { Link } from '@inertiajs/vue3';
import { CheckCircle2, ChevronDown, Info, XCircle } from 'lucide-vue-next';
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    initialCategory: {
        type: String,
        default: 'businessWebsite',
    },
});

const { t } = useI18n();
const { formatCurrency } = useCurrency();

// --- State for packages with their own expansion state ---
const reactivePackages = ref<any[]>([]);

const coreWebsiteFeatures = {
    responsiveDesign: true,
    legalPages: true,
    googleMaps: true,
    faqSection: true,
    whatsappContact: true,
};
const proPackageFeatures = {
    seoOptimized: true,
    analyticsIntegration: true,
    emailContact: true,
    socialMediaIntegration: true,
    themes: true,
};
const starterPackageFeatures = Object.fromEntries(Object.keys(proPackageFeatures).map((key) => [key, false]));
const pricingData: Record<string, any> = {
    landingPage: {
        title: 'Landing Page',
        priceFrom: 200,
        priceTo: 2800,
        priceSuffix: '+',
        descriptionKey: 'pricing.landingPageExamples',
        packages: [
            {
                level: 'starter',
                structure: 'pricing.packages.featureValues.templateBased',
                customization: 'pricing.packages.featureValues.brandingAndContent',
                ...coreWebsiteFeatures,
                ...starterPackageFeatures,
                testimonialsSection: false,
                animations: false,
                newsletterSignup: false,
                leadMagnet: false,
                abTestingSetup: false,
                heatmapIntegration: false,
            },
            {
                level: 'business',
                structure: 'pricing.packages.featureValues.customDesign',
                customization: 'pricing.packages.featureValues.fullyCustomizable',
                ...coreWebsiteFeatures,
                ...proPackageFeatures,
                testimonialsSection: true,
                animations: true,
                newsletterSignup: false,
                leadMagnet: true,
                abTestingSetup: false,
                heatmapIntegration: false,
            },
            {
                level: 'pro',
                structure: 'pricing.packages.featureValues.strategyAndCustom',
                customization: 'pricing.packages.featureValues.fullyCustomizable',
                ...coreWebsiteFeatures,
                ...proPackageFeatures,
                testimonialsSection: true,
                animations: true,
                newsletterSignup: true,
                leadMagnet: true,
                abTestingSetup: true,
                heatmapIntegration: true,
            },
        ],
        addOns: [
            { id: 'multilang', nameKey: 'pricing.addOns.multilingualSupport', price: { value: 0 } },
            { id: 'liveChat', nameKey: 'pricing.addOns.liveChat', price: { value: 0 } },
            { id: 'aiIntegration', nameKey: 'pricing.addOns.aiIntegration', price: { value: 0 } },
        ],
    },
    businessWebsite: {
        title: 'Business Website',
        priceFrom: 600,
        priceTo: 5000,
        priceSuffix: '+',
        descriptionKey: 'pricing.websiteExamples',
        packages: [
            {
                level: 'starter',
                structure: 'pricing.packages.featureValues.upTo5Pages',
                ...coreWebsiteFeatures,
                ...starterPackageFeatures,
                contentManagementSystem: false,
                blogSection: false,
                portfolioGallery: true,
                userAccounts: true,
                bookingSystem: false,
                animations: false,
                newsletterSignup: false,
                leadMagnet: false,
                accessibilityCompliance: false,
                googleReviewsStars: false,
                pricingPage: false,
                videoGallery: false,
            },
            {
                level: 'growth',
                structure: 'pricing.packages.featureValues.upTo15Pages',
                ...coreWebsiteFeatures,
                ...proPackageFeatures,
                contentManagementSystem: false,
                blogSection: false,
                portfolioGallery: true,
                userAccounts: true,
                bookingSystem: false,
                animations: true,
                newsletterSignup: true,
                leadMagnet: true,
                accessibilityCompliance: true,
                googleReviewsStars: true,
                pricingPage: true,
                videoGallery: true,
            },
            {
                level: 'enterprise',
                structure: 'pricing.packages.featureValues.unlimitedPages',
                ...coreWebsiteFeatures,
                ...proPackageFeatures,
                contentManagementSystem: true,
                blogSection: true,
                portfolioGallery: true,
                userAccounts: true,
                bookingSystem: true,
                animations: true,
                newsletterSignup: true,
                leadMagnet: true,
                accessibilityCompliance: true,
                googleReviewsStars: true,
                pricingPage: true,
                videoGallery: true,
            },
        ],
        addOns: [
            { id: 'multilang', nameKey: 'pricing.addOns.multilingualSupport', price: { value: 0 } },
            { id: 'bookingSystem', nameKey: 'pricing.addOns.advancedBooking', price: { value: 0 } },
            { id: 'clientPortal', nameKey: 'pricing.addOns.secureClientPortal', price: { value: 0 } },
            { id: 'careersPage', nameKey: 'pricing.addOns.careersPage', price: { value: 0 } },
            { id: 'eventCalendar', nameKey: 'pricing.addOns.eventCalendar', price: { value: 0 } },
            { id: 'serviceArea', nameKey: 'pricing.addOns.serviceArea', price: { value: 0 } },
            { id: 'teamPage', nameKey: 'pricing.addOns.teamPage', price: { value: 0 } },
            { id: 'aiIntegration', nameKey: 'pricing.addOns.aiIntegration', price: { value: 0 } },
        ],
    },
    onlineShop: {
        title: 'Onlineshop',
        priceFrom: 2200,
        priceTo: 10000,
        priceSuffix: '+',
        descriptionKey: 'pricing.onlineShopExamples',
        packages: [
            {
                level: 'starter',
                productCapacity: 'pricing.packages.featureValues.upTo50Products',
                paymentGateways: 'pricing.packages.featureValues.standardPayments',
                ...coreWebsiteFeatures,
                ...starterPackageFeatures,
                inventoryManagement: true,
                discountCodes: true,
                userAccounts: true,
                productReviews: false,
                advancedFiltering: false,
                abandonedCartRecovery: false,
                orderManagement: true,
                productVariations: true,
                shippingOptions: true,
                taxCalculation: true,
                advancedSearch: false,
                customerOrderHistory: false,
                guestCheckout: false,
                productImageGalleryVideo: false,
                promotionalBannersAndPopups: false,
                relatedProducts: false,
                salesAnalytics: false,
                savedAddressesAndPayments: false,
                wishlists: false,
            },
            {
                level: 'pro',
                productCapacity: 'pricing.packages.featureValues.upTo500Products',
                paymentGateways: 'pricing.packages.featureValues.standardPaymentsKlarna',
                ...coreWebsiteFeatures,
                ...proPackageFeatures,
                inventoryManagement: true,
                discountCodes: true,
                userAccounts: true,
                productReviews: true,
                advancedFiltering: true,
                abandonedCartRecovery: true,
                orderManagement: true,
                productVariations: true,
                shippingOptions: true,
                taxCalculation: true,
                advancedSearch: true,
                customerOrderHistory: true,
                guestCheckout: true,
                productImageGalleryVideo: true,
                promotionalBannersAndPopups: true,
                relatedProducts: true,
                salesAnalytics: true,
                savedAddressesAndPayments: true,
                wishlists: true,
            },
            {
                level: 'enterprise',
                productCapacity: 'pricing.packages.featureValues.unlimitedProducts',
                paymentGateways: 'pricing.packages.featureValues.customIntegrations',
                ...coreWebsiteFeatures,
                ...proPackageFeatures,
                inventoryManagement: true,
                discountCodes: true,
                userAccounts: true,
                productReviews: true,
                advancedFiltering: true,
                abandonedCartRecovery: true,
                subscriptionModel: true,
                loyaltyProgram: true,
                orderManagement: true,
                productVariations: true,
                shippingOptions: true,
                taxCalculation: true,
                advancedSearch: true,
                customerOrderHistory: true,
                guestCheckout: true,
                productImageGalleryVideo: true,
                promotionalBannersAndPopups: true,
                relatedProducts: true,
                salesAnalytics: true,
                savedAddressesAndPayments: true,
                wishlists: true,
            },
        ],
        addOns: [
            { id: 'multilang', nameKey: 'pricing.addOns.multilingualSupport', price: { value: 0 } },
            { id: 'multicurrency', nameKey: 'pricing.addOns.multiCurrency', price: { value: 0 } },
            { id: 'crm', nameKey: 'pricing.addOns.crmIntegration', price: { value: 0 } },
            { id: 'giftCardSales', nameKey: 'pricing.addOns.giftCardSales', price: { value: 0 } },
            { id: 'onlineOrderingPickupDelivery', nameKey: 'pricing.addOns.onlineOrderingPickupDelivery', price: { value: 0 } },
            { id: 'returnsAndExchangesPortal', nameKey: 'pricing.addOns.returnsAndExchangesPortal', price: { value: 0 } },
            { id: 'aiIntegration', nameKey: 'pricing.addOns.aiIntegration', price: { value: 0 } },
        ],
    },
};
const additionalServices = {
    hosting: {
        title: 'pricing.hosting.title',
        price: {
            type: 'subscription',
            monthly: 7.95,
            annually: 84,
            parentheses: true,
            savings: '12%',
        },
    },
    emailAndDomain: {
        title: 'pricing.emailAndDomain.title',
        description: 'pricing.emailAndDomain.description',
        price: {
            type: 'subscription',
            monthly: 3,
            annually: 30,
            savings: '17%',
        },
    },
    maintenance: [
        {
            key: 'landingPage',
            title: 'pricing.maintenance.landingPage.title',
            description: 'pricing.maintenance.landingPage.description',
            price: {
                type: 'subscription',
                monthly: 25,
                annually: 273,
                savings: '9%',
            },
        },
        {
            key: 'website',
            title: 'pricing.maintenance.website.title',
            description: 'pricing.maintenance.website.description',
            price: {
                type: 'subscription',
                monthly: 35,
                annually: 357,
                savings: '15%',
            },
        },
        {
            key: 'onlineShop',
            title: 'pricing.maintenance.onlineShop.title',
            description: 'pricing.maintenance.onlineShop.description',
            price: {
                type: 'subscription',
                monthly: 60,
                annually: 576,
                savings: '20%',
            },
        },

        {
            key: 'seoKickstart',
            title: 'pricing.maintenance.seoKickstart.title',
            description: 'pricing.maintenance.seoKickstart.description',
            price: {
                type: 'one-time',
                prefixKey: 'pricing.startingFrom',
                value: 350,
                suffixKey: 'pricing.oneTimeFee',
            },
        },
        {
            key: 'performanceOptimization',
            title: 'pricing.maintenance.performanceOptimization.title',
            description: 'pricing.maintenance.performanceOptimization.description',
            price: {
                type: 'one-time',
                prefixKey: 'pricing.startingFrom',
                value: 299,
                suffixKey: 'pricing.oneTimeFee',
            },
        },

        {
            key: 'copywriting',
            title: 'pricing.maintenance.copywriting.title',
            description: 'pricing.maintenance.copywriting.description',
            price: {
                type: 'per-unit',
                prefixKey: 'pricing.startingFrom',
                value: 80,
                unitKey: 'pricing.perPage',
            },
        },
        {
            key: 'supportRetainer',
            title: 'pricing.maintenance.supportRetainer.title',
            description: 'pricing.maintenance.supportRetainer.description',
            price: {
                type: 'subscription',
                monthly: 140,
                annually: 1344,
                savings: '8%',
            },
        },
    ],
};

const isFeature = (key: string) => !['level', 'isExpanded', 'featureCount'].includes(key);
watch(
    () => props.initialCategory,
    (newCategory) => {
        const packages = pricingData[newCategory]?.packages;
        if (packages) {
            reactivePackages.value = packages.map((pkg: any) => {
                const featureCount = Object.keys(pkg).filter((key) => isFeature(key)).length;
                return { ...pkg, isExpanded: false, featureCount };
            });
        }
    },
    { immediate: true },
);
const toggleCard = (pkg: any) => {
    pkg.isExpanded = !pkg.isExpanded;
};
const urlSlugMap: Record<string, string> = {
    landingPage: 'landingPage',
    businessWebsite: 'website',
    onlineShop: 'onlineshop',
};

const formattedPriceRange = computed(() => {
    const category = pricingData[props.initialCategory];
    if (!category || typeof category.priceFrom !== 'number') return '';

    const from = formatCurrency(category.priceFrom);
    if (typeof category.priceTo === 'number') {
        const to = formatCurrency(category.priceTo);
        return `${from} - ${to}${category.priceSuffix || ''}`;
    }
    return `${t('pricing.priceFrom')} ${from}${category.priceSuffix || ''}`;
});

const isFeaturedCategory = (categoryKey: string) => categoryKey === 'businessWebsite';
const categoryKeyMap: Record<string, string> = {
    landingPage: 'landingPage',
    businessWebsite: 'website',
    onlineShop: 'onlineShop',
};
</script>

<template>
    <Layout :head="t('pricing.title')" :link="pricing.url()" :description="t('pricing.description')">
        <section class="container mx-auto mt-8 max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {{ t('pricing.title') }}
                </h1>
                <p class="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {{ t('pricing.description') }}
                </p>
            </div>
            <div class="mt-12 flex flex-wrap justify-center gap-3">
                <Link v-for="(category, key) in pricingData" :key="key" :href="`/pricing/${urlSlugMap[key]}`" preserve-state preserve-scroll>
                    <Button :variant="props.initialCategory === key ? 'default' : 'outline'" class="relative" as="div">
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
                        v-for="(pkg, index) in reactivePackages"
                        :key="`${props.initialCategory}-${pkg.level}`"
                        class="flex transform flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
                            <div
                                class="space-y-3 overflow-hidden transition-all duration-500 ease-in-out"
                                :style="{ maxHeight: pkg.featureCount > 18 ? (pkg.isExpanded ? '1000px' : '550px') : '1000px' }"
                            >
                                <div v-for="(value, feature) in pkg" :key="feature" class="flex items-center justify-between text-sm">
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
                            <Button v-if="pkg.featureCount > 18" @click="toggleCard(pkg)" variant="link">
                                <span>{{ pkg.isExpanded ? t('pricing.readLess') : t('pricing.readMore') }}</span>
                                <ChevronDown class="h-4 w-4 transition-transform" :class="{ 'rotate-180': pkg.isExpanded }" />
                            </Button>
                        </CardContent>
                        <CardFooter class="flex-col items-stretch pt-0">
                            <Link :href="contact.url()" class="mt-4 w-full">
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
                                <div class="text-lg font-bold text-primary" v-if="addOn.price.value">+ {{ formatCurrency(addOn.price.value) }}</div>
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
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        <Card class="text-center">
                            <CardHeader>
                                <CardTitle class="text-lg">{{ t(additionalServices.hosting.title) }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="text-sm text-muted-foreground">
                                    <span v-if="additionalServices.hosting.price.parentheses">(</span>
                                    <span>{{ formatCurrency(additionalServices.hosting.price.monthly) }} {{ t('pricing.perMonth') }}</span>
                                    <span class="mx-1">{{ t('pricing.or') }}</span>
                                    <span>{{ formatCurrency(additionalServices.hosting.price.annually) }} {{ t('pricing.perYear') }}</span>
                                    <span v-if="additionalServices.hosting.price.parentheses">)</span>
                                    <Badge variant="secondary" class="ml-2 text-xs">
                                        {{ t('pricing.save') }} {{ additionalServices.hosting.price.savings }}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card class="text-center">
                            <CardHeader>
                                <CardTitle class="text-lg">{{ t(additionalServices.emailAndDomain.title) }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="mb-2 text-xs text-muted-foreground">{{ t(additionalServices.emailAndDomain.description) }}</p>
                                <div class="text-sm font-semibold">
                                    <span>{{ formatCurrency(additionalServices.emailAndDomain.price.monthly) }} {{ t('pricing.perMonth') }}</span>
                                    <span class="mx-1 text-muted-foreground">{{ t('pricing.or') }}</span>
                                    <span>{{ formatCurrency(additionalServices.emailAndDomain.price.annually) }} {{ t('pricing.perYear') }}</span>
                                    <Badge variant="secondary" class="ml-2 text-xs">
                                        {{ t('pricing.save') }} {{ additionalServices.emailAndDomain.price.savings }}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                        <Card v-for="service in additionalServices.maintenance" :key="service.key" class="text-center">
                            <CardHeader>
                                <CardTitle class="text-lg">{{ t(service.title) }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="mb-2 text-xs text-muted-foreground">{{ t(service.description) }}</p>
                                <div class="text-sm font-semibold">
                                    <div v-if="service.price.type === 'subscription'">
                                        <span>{{ formatCurrency(service.price.monthly as number) }} {{ t('pricing.perMonth') }}</span>
                                        <span class="mx-1 text-muted-foreground">{{ t('pricing.or') }}</span>
                                        <span>{{ formatCurrency(service.price.annually as number) }} {{ t('pricing.perYear') }}</span>
                                        <Badge variant="secondary" class="ml-2 text-xs"> {{ t('pricing.save') }} {{ service.price.savings }} </Badge>
                                    </div>

                                    <div v-else-if="service.price.type === 'one-time'">
                                        <span>{{ t(service.price.prefixKey) }} {{ formatCurrency(service.price.value as number) }}</span>
                                        <span class="ml-1 text-muted-foreground">({{ t(service.price.suffixKey) }})</span>
                                    </div>

                                    <div v-else-if="service.price.type === 'per-unit'">
                                        <span>{{ t(service.price.prefixKey) }} {{ formatCurrency(service.price.value as number) }}</span>
                                        <span class="ml-1">/ {{ t(service.price.unitKey) }}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div class="mt-12  max-w-5xl mx-auto flex items-center justify-center gap-2 rounded-lg border bg-accent/50 p-4 text-center text-sm text-muted-foreground">
                      <Info class="h-5 w-5 flex-shrink-0" />
                      <p>{{ t('pricingSummary.installmentsInfo') }}</p>
                  </div>
                </div>
            </div>
        </section>
    </Layout>
</template>
