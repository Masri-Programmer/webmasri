<script setup lang="ts">
import CookieConsentBanner from '@/components/CookieConsentBanner.vue';
import RightSideNav from '@/components/RightSideNav.vue';
import ScrollTop from '@/components/ScrollTop.vue';
import { useCurrency } from '@/composables/useCurrency';
import { initializeScrollSpy, useScrollSpy } from '@/composables/useScrollSpy';
import logo from '@/images/newLogo/192x192/192x192_logo_dark_no_bg.svg';
import { navigationLinks } from '@/lib/navigation';
import Header from '@/pages/Header/Header.vue';
import { contact, faq, imprint, pricing, privacyPolicy, termsConditions } from '@/routes';
import { AppPageProps } from '@/types';
import { Head, usePage } from '@inertiajs/vue3';
import { useTimeoutFn } from '@vueuse/core';
import { computed, defineAsyncComponent, onMounted } from 'vue';

const { handleScroll } = useScrollSpy();
const { fetchRates } = useCurrency();
const page = usePage();

const sectionIds = navigationLinks.map((link) => link.id);
initializeScrollSpy(sectionIds);

onMounted(() => {
    fetchRates();
    useTimeoutFn(() => {
        const hash = page.url.split('#')[1];
        if (hash) {
            handleScroll(hash);
        }
    }, 500);
});

const customProps = page.props as AppPageProps;
const Footer = defineAsyncComponent(() => import('@/pages/Footer.vue'));
const props = defineProps<{
    head?: string;
    description?: string;
    link: string;
    image?: string;
}>();
const fullUrl = computed(() => customProps.app.url + props.link);
const imageUrl = computed(() => (props.image ? customProps.app.url + props.image : null));
const jsonLdSchema = computed(() => {
    const graph = [
        {
            '@type': 'imprint',
            '@id': `${customProps.app.url}/#imprint`,
            name: 'Masri Programmer',
            url: customProps.app.url,
            logo: {
                '@type': 'ImageObject',
                url: `${customProps.app.url}${logo}`,
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${customProps.app.url}/#website`,
            url: customProps.app.url,
            name: 'Masri Programmer',
            publisher: {
                '@id': `${customProps.app.url}/#imprint`,
            },
        },
        {
            '@type': 'WebPage',
            '@id': fullUrl.value,
            url: fullUrl.value,
            name: props.head,
            description: props.description,
            isPartOf: {
                '@id': `${customProps.app.url}/#website`,
            },
            ...(imageUrl.value && {
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: imageUrl.value,
                },
            }),
        },
    ];

    return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph,
    });
});

const menuSections = [
    {
        value: 'item-1',
        titleKey: 'navigation.home.title',
        items: navigationLinks.map((link) => ({ ...link, type: 'scroll', target: link.id })),
    },
    {
        value: 'item-2',
        titleKey: 'navigation.legal.title',
        items: [
            { type: 'link', target: privacyPolicy, i18nKey: 'navigation.legal.privacy' },
            { type: 'link', target: termsConditions, i18nKey: 'navigation.legal.terms' },
            { type: 'link', target: imprint, i18nKey: 'navigation.legal.imprint' },
        ],
    },
    {
        value: 'item-3',
        titleKey: 'navigation.pages',
        items: [
            { type: 'link', target: contact, i18nKey: 'navigation.contact' },
            { type: 'external', target: 'https://masri.blog/Projects/Main', i18nKey: 'navigation.home.projects' },
            { type: 'link', target: pricing, i18nKey: 'navigation.home.pricing' },
            { type: 'link', target: faq, i18nKey: 'navigation.home.faq' },
        ],
    },
];
</script>

<template>
    <Head :title="head">
        <title>{{ head }}</title>
        <link rel="preconnect" :href="customProps.app.url + link" />
        <link rel="canonical" :href="customProps.app.url + link" />
        <meta name="description" :content="description" head-key="description" />
        <component :is="'script'" type="application/ld+json" v-html="jsonLdSchema" />
    </Head>
    <Header :menuSections="menuSections" />
    <RightSideNav />
    <main class="grid gap-4 overflow-hidden bg-background text-foreground sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <slot />
    </main>
    <Footer :menuSections="menuSections" />
    <ScrollTop />
    <CookieConsentBanner />
</template>
