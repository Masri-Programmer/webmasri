<template>
    <Head :title="head">
        <title>{{ head }}</title>
        <link rel="preconnect" :href="customProps.app.url + link" />
        <link rel="canonical" :href="customProps.app.url + link" />
        <meta name="description" :content="description" head-key="description" />

        <meta property="og:type" content="article" />
        <meta property="og:title" :content="head" />
        <meta property="og:description" :content="description" />
        <meta property="og:image" :content="logo" />

        <meta property="twitter:card" content="Masri Programmer, Web Services, web design and applications. Rich in features, not in pricing." />
        <meta property="twitter:title" :content="head" />
        <meta property="twitter:description" :content="description" />
        <meta property="twitter:image" :content="logo" />
    </Head>
    <!-- <SleekLineCursor /> -->
    <Header />
    <RightSideNav />
    <main class="grid gap-4 overflow-hidden bg-background text-foreground sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <slot />
    </main>
    <Footer />
    <ScrollTop />
    <CookieConsentBanner />
</template>

<script setup lang="ts">
import CookieConsentBanner from '@/components/CookieConsentBanner.vue';
import RightSideNav from '@/components/RightSideNav.vue';
import ScrollTop from '@/components/ScrollTop.vue';
import { useCurrency } from '@/composables/useCurrency';
// import SleekLineCursor from '@/components/ui/sleek-line-cursor/SleekLineCursor.vue';
import Header from '@/pages/Header/Header.vue';
import { AppPageProps } from '@/types';
import { Head, usePage } from '@inertiajs/vue3';
import { defineAsyncComponent, onMounted } from 'vue';
import logo from '@/images/MasriProgrammer/logoBlack.svg';

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

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": props.head,
  "author": {
    "@type": "Person",
    "name": "Mohamad Masri"
  },
//   "datePublished": props.article.published_at
};
</script>
