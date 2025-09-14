<template>
        <Head :title="head">
            <link rel="preconnect" :href="customProps.app.url + link" />
        </Head>
        <Header data-aos="fade-down" data-aos-delay="500" />
        <RightSideNav />
         <main class="grid gap-4 overflow-hidden bg-background text-foreground sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
             <!-- <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"> -->
                 <slot />
             <!-- </div> -->
         </main>
        <Footer />
        <ScrollTop />
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
import { AppPageProps } from '@/types'; 


const page = usePage();
const customProps = page.props as AppPageProps;
import RightSideNav from '@/components/RightSideNav.vue';
import ScrollTop from '@/components/ScrollTop.vue';
import Header from '@/pages/Header.vue';
import { defineAsyncComponent } from 'vue';

const Footer = defineAsyncComponent(() => import('@/pages/Footer.vue'));
defineProps({ head: String, link: String });
</script>