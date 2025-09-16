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
    structure: string;
    flexibility: string;
    languages: string;
    googleMaps: boolean;
    emailContact: boolean;
    whatsappContact: boolean;
    googleReviewsStars: boolean;
    googleReviewsIndividual: boolean;
    liveOpeningHours: boolean;
    onlineStore: boolean;
}

export interface ServiceCategory {
    title: string;
    priceRange: string;
    packages: ServicePackage[];
}
  

export type BreadcrumbItemType = BreadcrumbItem;
