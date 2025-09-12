import { BarChart3, HelpCircle, Home, MessageSquareQuote, Sparkles, UserCircle } from 'lucide-vue-next';

export const navigationLinks = [
    {
        id: 'hero',
        href: '/#hero',
        i18nKey: 'navigation.home.hero',
        icon: Home,
    },
    {
        id: 'features',
        href: '/#features',
        i18nKey: 'navigation.home.features',
        icon: Sparkles,
    },
    {
        id: 'about',
        href: '/#about',
        i18nKey: 'navigation.home.about',
        icon: UserCircle,
    },
    {
        id: 'statistics',
        href: '/#statistics',
        i18nKey: 'navigation.home.statistics',
        icon: BarChart3,
    },
    {
        id: 'testimonials',
        href: '/#testimonials',
        i18nKey: 'navigation.home.testimonials',
        icon: MessageSquareQuote,
    },
    {
        id: 'faq',
        href: '/#faq',
        i18nKey: 'navigation.home.faq',
        icon: HelpCircle,
    },
];
