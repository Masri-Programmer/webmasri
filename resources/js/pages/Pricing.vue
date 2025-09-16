<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import { pricing } from '@/routes';
import { useI18n } from 'vue-i18n';
// Shadcn-vue & Lucide Icons
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceCategory } from '@/types';
import { CheckCircle2, Clock, Globe, Mail, MapPin, MessageCircle, ShoppingCart, Star, XCircle } from 'lucide-vue-next';
import { ref } from 'vue';

const { t } = useI18n();

// --- DATA STRUCTURE ---
const pricingData: Record<string, ServiceCategory> = {
    landingPage: {
        title: 'Landing Page',
        priceRange: '200 Euro - 2,800 Euro',
        packages: [
            {
                structure: 'onePage',
                flexibility: 'infoAndBranding',
                languages: '1',
                responsiveDesign: true,
                seoOptimized: true,
                googleMaps: true,
                emailContact: true,
                whatsappContact: false,
                googleReviewsStars: true,
                googleReviewsIndividual: false,
                testimonialsSection: false,
                analyticsIntegration: false,
                liveChat: false,
            },
            {
                structure: 'onePage',
                flexibility: 'fullyCustomizable',
                languages: '1+',
                responsiveDesign: true,
                seoOptimized: true,
                googleMaps: true,
                emailContact: true,
                whatsappContact: true,
                googleReviewsStars: true,
                googleReviewsIndividual: true,
                testimonialsSection: true,
                analyticsIntegration: true,
                liveChat: true,
            },
            {
                structure: 'fullyCustomizable',
                flexibility: 'fullyCustomizable',
                languages: '1+',
                responsiveDesign: true,
                seoOptimized: true,
                googleMaps: true,
                emailContact: true,
                whatsappContact: true,
                googleReviewsStars: true,
                googleReviewsIndividual: true,
                testimonialsSection: true,
                analyticsIntegration: true,
                liveChat: true,
            },
        ],
    },
    website: {
        title: 'Website',
        priceRange: '600 Euro to 5,000 Euro',
        packages: [
            {
                structure: 'multiplePages',
                flexibility: 'infoAndBranding',
                languages: '1',
                responsiveDesign: true,
                seoOptimized: true,
                contentManagementSystem: true,
                blogSection: false,
                googleMaps: true,
                emailContact: true,
                whatsappContact: false,
                userAccounts: false,
                bookingSystem: false,
            },
            {
                structure: 'multiplePages',
                flexibility: 'fullyCustomizable',
                languages: '1+',
                responsiveDesign: true,
                seoOptimized: true,
                contentManagementSystem: true,
                blogSection: true,
                googleMaps: true,
                emailContact: true,
                whatsappContact: true,
                userAccounts: true,
                bookingSystem: false,
            },
            {
                structure: 'fullyCustomizable',
                flexibility: 'fullyCustomizable',
                languages: '1+',
                responsiveDesign: true,
                seoOptimized: true,
                contentManagementSystem: true,
                blogSection: true,
                googleMaps: true,
                emailContact: true,
                whatsappContact: true,
                userAccounts: true,
                bookingSystem: true,
            },
        ],
    },
    onlineShop: {
        title: 'Onlineshop',
        priceRange: '2,200 Euro to 10,000 Euro+', // Adjusted range for new features
        packages: [
            {
                onlineStore: true,
                structure: 'multiplePages',
                flexibility: 'infoAndBranding',
                languages: '1',
                responsiveDesign: true,
                seoOptimized: true,
                productReviews: false,
                advancedFiltering: false,
                discountCodes: false,
                wishlists: false,
                abandonedCartRecovery: false,
                subscriptionModel: false,
            },
            {
                onlineStore: true,
                structure: 'multiplePages',
                flexibility: 'fullyCustomizable',
                languages: '1+',
                responsiveDesign: true,
                seoOptimized: true,
                productReviews: true,
                advancedFiltering: true,
                discountCodes: true,
                wishlists: true,
                abandonedCartRecovery: true,
                subscriptionModel: false,
            },
            {
                onlineStore: true,
                structure: 'fullyCustomizable',
                flexibility: 'fullyCustomizable',
                languages: '1+',
                responsiveDesign: true,
                seoOptimized: true,
                productReviews: true,
                advancedFiltering: true,
                discountCodes: true,
                wishlists: true,
                abandonedCartRecovery: true,
                subscriptionModel: true,
            },
        ],
    },
    onlineShopCMS: {
        title: 'Onlineshop CMS',
        priceRange: '2,200 Euro to 4,000 Euro (incl. website and blog)',
        packages: [
            {
                structure: 'onePage',
                flexibility: 'infoAndBranding',
                languages: '1',
                googleMaps: true,
                emailContact: true,
                whatsappContact: true,
                googleReviewsStars: true,
                googleReviewsIndividual: false,
                liveOpeningHours: false,
                onlineStore: true,
                responsiveDesign: false,
            },
            {
                structure: 'multiplePages',
                flexibility: 'fullyCustomizable',
                languages: '1+',
                googleMaps: true,
                emailContact: true,
                whatsappContact: true,
                googleReviewsStars: true,
                googleReviewsIndividual: true,
                liveOpeningHours: true,
                onlineStore: true,
                responsiveDesign: false,
            },
            {
                structure: 'fullyCustomizable',
                flexibility: 'fullyCustomizable',
                languages: '1+',
                googleMaps: true,
                emailContact: true,
                whatsappContact: true,
                googleReviewsStars: true,
                googleReviewsIndividual: true,
                liveOpeningHours: true,
                onlineStore: true,
                responsiveDesign: false,
            },
        ],
    },
};

const additionalServices = {
    hosting: {
        title: 'hosting.title',
        price: 'hosting.price',
    },
    maintenance: [
        {
            title: 'maintenance.selfService.title',
            description: 'maintenance.selfService.description',
            price: 'maintenance.selfService.price',
        },
        {
            title: 'maintenance.fullService.title',
            description: 'maintenance.fullService.description',
            price: 'maintenance.fullService.price',
        },
    ],
    emailAndDomain: {
        title: 'emailAndDomain.title',
        description: 'emailAndDomain.description',
        price: 'emailAndDomain.price',
    },
};

// --- COMPONENT LOGIC ---
const selectedCategory = ref('website');

// Get feature icon
const getFeatureIcon = (featureName: string) => {
    const icons = {
        googleMaps: MapPin,
        emailContact: Mail,
        whatsappContact: MessageCircle,
        googleReviewsStars: Star,
        googleReviewsIndividual: Star,
        liveOpeningHours: Clock,
        onlineStore: ShoppingCart,
        languages: Globe,
    };
    return icons[featureName as keyof typeof icons] || CheckCircle2;
};

// Get package level name (Basic, Pro, Premium)
const getPackageLevel = (index: number) => {
    const levels = ['Basic', 'Pro', 'Premium'];
    return levels[index] || `Package ${index + 1}`;
};

// Check if category is featured (website is most popular)
const isFeaturedCategory = (categoryKey: string) => {
    return categoryKey === 'website';
};
</script>

<template>
    <Layout :head="t('pricing.title')" :link="pricing.url()">
        <section class="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {{ t('pricing.title') }}
                </h1>
                <p class="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {{ t('pricing.description') }}
                </p>
            </div>

            <!-- Service Category Selector -->
            <div class="mt-12 flex flex-wrap justify-center gap-3">
                <Button
                    v-for="(category, key) in pricingData"
                    :key="key"
                    :variant="selectedCategory === key ? 'default' : 'outline'"
                    @click="selectedCategory = key"
                    class="relative"
                >
                    {{ t(`pricing.${key}`) }}
                    <Badge v-if="isFeaturedCategory(key)" variant="secondary" class="ml-2 text-xs">
                        {{ t('pricing.featured') }}
                    </Badge>
                </Button>
            </div>

            <!-- Selected Category Display -->
            <div class="mt-12">
                <div class="mb-8 text-center">
                    <h2 class="text-2xl font-bold text-foreground">
                        {{ t(pricingData[selectedCategory].title) }}
                    </h2>
                    <p class="mt-2 text-lg font-semibold text-primary">
                        {{ pricingData[selectedCategory].priceRange }}
                    </p>
                    <p class="text-slate-600 dark:text-slate-400">
                        {{ t(`pricing.${selectedCategory}Examples`) }}
                    </p>
                </div>

                <!-- Package Cards -->
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card
                        v-for="(pkg, index) in pricingData[selectedCategory].packages"
                        :key="index"
                        class="relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        :class="{
                            'scale-105 border-2 border-primary shadow-lg': index === 1,
                            'border-border': index !== 1,
                        }"
                    >
                        <!-- Popular Badge for middle package -->
                        <div v-if="index === 1" class="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                            <Badge class="bg-primary px-4 py-1 text-primary-foreground">
                                {{ t('pricing.featured') }}
                            </Badge>
                        </div>

                        <CardHeader class="pb-4 text-center">
                            <CardTitle class="text-xl">{{ getPackageLevel(index) }}</CardTitle>
                            <div class="mt-2">
                                <Badge variant="outline" class="text-sm">
                                    {{ t(`pricing.packages.${pkg.structure}`) }}
                                </Badge>
                            </div>
                        </CardHeader>

                        <CardContent class="space-y-6">
                            <!-- Structure & Flexibility -->
                            <div class="space-y-3">
                                <div class="flex items-center justify-between text-sm">
                                    <span class="font-medium">{{ t('pricing.packages.structure') }}:</span>
                                    <span class="text-muted-foreground">{{ t(`pricing.packages.${pkg.structure}`) }}</span>
                                </div>
                                <div class="flex items-center justify-between text-sm">
                                    <span class="font-medium">{{ t('pricing.packages.flexibility') }}:</span>
                                    <span class="text-muted-foreground">{{ t(`pricing.packages.${pkg.flexibility}`) }}</span>
                                </div>
                                <div class="flex items-center justify-between text-sm">
                                    <span class="font-medium">{{ t('pricing.packages.languages') }}:</span>
                                    <span class="text-muted-foreground">{{ pkg.languages }}</span>
                                </div>
                            </div>

                            <hr class="border-border" />

                            <!-- Features List -->
                            <div class="space-y-3">
                                <h4 class="mb-3 text-sm font-semibold text-foreground">Included Features:</h4>

                                <div
                                    v-for="(value, feature) in pkg"
                                    :key="feature"
                                    class="flex items-center space-x-3 text-sm"
                                    v-show="!['structure', 'flexibility', 'languages'].includes(feature)"
                                >
                                    <component
                                        :is="getFeatureIcon(feature)"
                                        class="h-4 w-4 flex-shrink-0"
                                        :class="{
                                            'text-green-500': value === true,
                                            'text-muted-foreground opacity-50': value === false,
                                            'text-blue-500': typeof value === 'string',
                                        }"
                                    />

                                    <span
                                        class="flex-1"
                                        :class="{
                                            'text-foreground': value === true || typeof value === 'string',
                                            'text-muted-foreground line-through': value === false,
                                        }"
                                    >
                                        {{ t(`pricing.packages.${feature}`) }}
                                    </span>

                                    <div class="flex-shrink-0">
                                        <CheckCircle2 v-if="value === true" class="h-4 w-4 text-green-500" />
                                        <XCircle v-else-if="value === false" class="h-4 w-4 text-muted-foreground opacity-50" />
                                        <Badge v-else-if="typeof value === 'string'" variant="secondary" class="text-xs">
                                            {{ value }}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button class="w-full" :variant="index === 1 ? 'default' : 'outline'" size="lg">
                                {{ t('pricing.contactUs') }}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <!-- Additional Services -->
            <div class="mt-20">
                <div class="mb-12 text-center">
                    <h2 class="text-3xl font-bold text-foreground">
                        {{ t('pricing.additionalServices') }}
                    </h2>
                    <p class="mt-4 text-muted-foreground">Essential services to complete your web presence</p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <!-- Hosting -->
                    <Card class="text-center">
                        <CardHeader>
                            <CardTitle class="text-lg">{{ t('pricing.hosting.title') }}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p class="text-sm text-muted-foreground">{{ t('pricing.hosting.price') }}</p>
                        </CardContent>
                    </Card>

                    <!-- Email & Domain -->
                    <Card class="text-center">
                        <CardHeader>
                            <CardTitle class="text-lg">{{ t('pricing.emailAndDomain.title') }}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p class="mb-2 text-xs text-muted-foreground">{{ t('pricing.emailAndDomain.description') }}</p>
                            <p class="text-sm font-semibold">{{ t('pricing.emailAndDomain.price') }}</p>
                        </CardContent>
                    </Card>

                    <!-- Maintenance Options -->
                    <Card v-for="(maintenance, index) in additionalServices.maintenance" :key="index" class="text-center">
                        <CardHeader>
                            <CardTitle class="text-lg">{{ t(`pricing.${maintenance.title}`) }}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p class="mb-2 text-xs text-muted-foreground">{{ t(`pricing.${maintenance.description}`) }}</p>
                            <p class="text-sm font-semibold">{{ t(`pricing.${maintenance.price}`) }}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    </Layout>
</template>
