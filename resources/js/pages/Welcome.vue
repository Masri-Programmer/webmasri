<script setup lang="ts">
// import { router } from '@inertiajs/vue3';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import { defineAsyncComponent } from 'vue';

import Layout from '@/layouts/Layout.vue';
import Hero from './Hero.vue';
import { useI18n } from 'vue-i18n';

const Features = defineAsyncComponent(() => import('./Features.vue'));
const Projects = defineAsyncComponent(() => import('./Projects.vue'));
const About = defineAsyncComponent(() => import('./About.vue'));
const Services = defineAsyncComponent(() => import('./Services.vue'));
const Statistics = defineAsyncComponent(() => import('./Statistics.vue'));
const Testimonials = defineAsyncComponent(() => import('./Testimonials.vue'));
const PricingSummary = defineAsyncComponent(() => import('./PricingSummary.vue'));
const FaqSummary = defineAsyncComponent(() => import('./FaqSummary.vue'));
const Technologies = defineAsyncComponent(() => import('./Technologies.vue'));

// onMounted(() => {
//     AOS.init({
//         duration: 600,
//         easing: 'ease-in-out',
//         once: true,
//         mirror: false,
//     });
// });

// router.on('success', () => {
//     AOS.refresh();
// });
const { t } = useI18n();
</script>

<template>
    <Layout head="Welcome" link="/" :description="t('welcome.description')">
        <Hero />
        <Services />
        <Features />
        <About />
        <Projects />
        <Statistics  />
        <PricingSummary />
        <Testimonials />
        <FaqSummary />
        <Technologies />
    </Layout>
</template>