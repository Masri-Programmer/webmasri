<template>
        {{ page.props.app.url+link }}
        <Head :title="head">
            <link rel="preconnect" :href="page.props.app.url+link" />
        </Head>
        <Header data-aos="fade-down" data-aos-delay="500" />
        <RightSideNav />
        <slot />
        <Footer />
        <ScrollTop />
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
const page = usePage();
import RightSideNav from '@/components/RightSideNav.vue';
import ScrollTop from '@/components/ScrollTop.vue';
import Header from '@/pages/Header.vue';
import { defineAsyncComponent } from 'vue';

const Footer = defineAsyncComponent(() => import('@/pages/Footer.vue'));
defineProps({ head: String, link: String });
</script>