import { BarChart3, DollarSign, Folder, HelpCircle, Home, Layers, MessageSquareQuote, Sparkles, UserCircle } from 'lucide-vue-next';

export const navigationLinks = [
    {
        id: 'hero',
        href: '/#hero',
        target: 'hero',
        i18nKey: 'navigation.home.hero',
        icon: Home,
    },
    {
        id: 'services',
        href: '/#services',
        target: 'services',
        i18nKey: 'navigation.home.services',
        icon: Layers,
    },
    {
        id: 'features',
        href: '/#features',
        target: 'features',
        i18nKey: 'navigation.home.features',
        icon: Sparkles,
    },
    {
        id: 'about',
        href: '/#about',
        target: 'about',
        i18nKey: 'navigation.home.about',
        icon: UserCircle,
    },
    {
        id: 'projects',
        href: '/#projects',
        target: 'projects',
        i18nKey: 'navigation.home.projects',
        icon: Folder,
    },
    {
        id: 'statistics',
        href: '/#statistics',
        target: 'statistics',
        i18nKey: 'navigation.home.statistics',
        icon: BarChart3,
    },
    {
        id: 'pricing',
        href: '/#pricing',
        target: 'pricing',
        i18nKey: 'navigation.home.pricing',
        icon: DollarSign,
    },
    {
        id: 'testimonials',
        href: '/#testimonials',
        target: 'testimonials',
        i18nKey: 'navigation.home.testimonials',
        icon: MessageSquareQuote,
    },
    {
        id: 'faq',
        href: '/#faq',
        target: 'faq',
        i18nKey: 'navigation.home.faq',
        icon: HelpCircle,
    },
];
