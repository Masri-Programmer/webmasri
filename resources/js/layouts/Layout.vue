<template>
    <Head :title="head">
        <title>{{ head }}</title>
        <link rel="preconnect" :href="customProps.app.url + link" />
        <link rel="canonical" :href="customProps.app.url + link" />
        <meta name="description" :content="description" head-key="description" />

        <component :is="'script'" type="application/ld+json" v-html="jsonLdSchema" />
    </Head>
    <Header />
    <RightSideNav />
    <main class="grid gap-4 overflow-hidden bg-background text-foreground sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <slot />
    </main>
    <Footer />
    <ScrollTop />
    <CookieConsentBanner />
    <div class="elfsight-app-c9302cfb-520b-47be-bc6d-de82f36fc60d" data-elfsight-app-lazy></div>
</template>

<script setup lang="ts">
import CookieConsentBanner from '@/components/CookieConsentBanner.vue';
import RightSideNav from '@/components/RightSideNav.vue';
import ScrollTop from '@/components/ScrollTop.vue';
import { useCurrency } from '@/composables/useCurrency';
import logo from '@/images/MasriProgrammer/logoBlack.svg';
import Header from '@/pages/Header/Header.vue';
import { AppPageProps } from '@/types';
import { Head, usePage } from '@inertiajs/vue3';
import { defineAsyncComponent, onMounted, computed,  } from 'vue'; // watchEffect can be removed

const { fetchRates } = useCurrency();

onMounted(() => {
    fetchRates();
});
const page = usePage();
const customProps = page.props as AppPageProps;
const Footer = defineAsyncComponent(() => import('@/pages/Footer.vue'));
const props = defineProps<{
    head?: string;
    description?: string;
    link: string;
}>();

const jsonLdSchema = computed(() => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': props.head,
        'description': props.description,
        'url': customProps.app.url + props.link,
        'author': {
            '@type': 'Person',
            'name': 'Mohamad Masri',
            'url': customProps.app.url
        },
        'publisher': {
             '@type': 'Organization',
             'name': 'Masri Programmer',
             'logo': {
                '@type': 'ImageObject',
                'url': customProps.app.url + logo
             }
        },
    };
    return JSON.stringify(schema, null, 2);
});
</script>