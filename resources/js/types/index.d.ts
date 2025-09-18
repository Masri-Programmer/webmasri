import { InertiaLinkProps } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon;
    isActive?: boolean;
}

export type AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    name: string;
    quote: {
        message: string;
        author: string;
    };
    locale: string;
    auth: any;
    sidebarOpen: boolean;
    app: {
        url: string;
    };
};
export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}
export interface ServicePackage {
    // --- Core Properties ---
    structure: string;
    flexibility: string;
    languages: string;
    responsiveDesign: boolean;

    // --- Optional Feature Properties ---

    // Technical & Foundational
    seoOptimized?: boolean;
    contentManagementSystem?: boolean;
    analyticsIntegration?: boolean;
    accessibilityCompliance?: boolean;
    salesAnalytics?: boolean;
    crmIntegration?: boolean; // New

    // Business & Informational Pages
    legalPages?: boolean;
    teamPage?: boolean;
    careersPage?: boolean;
    pricingPage?: boolean;
    serviceArea?: boolean;

    // Contact & Location
    googleMaps?: boolean;
    emailContact?: boolean;
    whatsappContact?: boolean;
    liveOpeningHours?: boolean;

    // Content & Engagement
    blogSection?: boolean;
    testimonialsSection?: boolean;
    portfolioGallery?: boolean;
    videoGallery?: boolean;
    faqSection?: boolean;
    eventCalendar?: boolean;

    // Marketing & Lead Generation
    newsletterSignup?: boolean;
    socialMediaIntegration?: boolean;
    leadMagnet?: boolean;
    liveChat?: boolean;
    promotionalBannersAndPopups?: boolean; // New

    // User & Client Features
    userAccounts?: boolean;
    secureClientPortal?: boolean;
    bookingSystem?: boolean;
    orderManagement?: boolean;
    customerOrderHistory?: boolean;
    savedAddressesAndPayments?: boolean; // New
    returnsAndExchangesPortal?: boolean; // New

    // E-commerce
    onlineStore?: boolean;
    onlineOrderingPickupDelivery?: boolean;
    guestCheckout?: boolean; // New
    inventoryManagement?: boolean;
    productVariations?: boolean;
    productReviews?: boolean;
    productImageGalleryVideo?: boolean; // New
    advancedFiltering?: boolean;
    advancedSearch?: boolean;

    // E-commerce: Payments & Shipping
    paymentGateways?: boolean;
    shippingOptions?: boolean;
    taxCalculation?: boolean;
    multicurrencySupport?: boolean;

    // E-commerce: Marketing & Sales
    discountCodes?: boolean;
    abandonedCartRecovery?: boolean;
    wishlists?: boolean;
    relatedProducts?: boolean;
    subscriptionModel?: boolean;
    giftCardSales?: boolean;
    loyaltyProgram?: boolean;

    // Review Integration
    googleReviewsStars?: boolean;
    googleReviewsIndividual?: boolean;
}
export interface ServiceCategory {
    title: string;
    priceRange: string;
    packages: ServicePackage[];
}


export type BreadcrumbItemType = BreadcrumbItem;
