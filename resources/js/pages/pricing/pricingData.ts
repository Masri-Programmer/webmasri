export interface Price {
    type: 'subscription' | 'one-time' | 'per-unit';
    monthly?: number;
    annually?: number;
    savings?: string;
    parentheses?: boolean;
    prefixKey?: string;
    value?: number;
    suffixKey?: string;
    unitKey?: string;
}

export interface AddOn {
    id: string;
    nameKey: string;
    price: { value: number };
}

export interface Package {
    level: string;
    structure?: string;
    [key: string]: any;
}

export interface Category {
    title: string;
    priceFrom: number;
    priceTo?: number;
    priceSuffix?: string;
    descriptionKey: string;
    packages: Package[];
    addOns: AddOn[];
}

export interface AdditionalService {
    key: string;
    title: string;
    description: string;
    price: Price;
}

export const coreWebsiteFeatures = {
    responsiveDesign: true,
    legalPages: true,
    googleMaps: true,
    faqSection: true,
    whatsappContact: true,
};
export const proPackageFeatures = {
    seoOptimized: true,
    analyticsIntegration: true,
    emailContact: true,
    socialMediaIntegration: true,
    themes: true,
};
export const starterPackageFeatures = Object.fromEntries(Object.keys(proPackageFeatures).map((key) => [key, false]));

// Main Data Export
export const packagesData: Record<string, Category> = {
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

export const additionalServices = {
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
