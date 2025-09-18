<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { defineAsyncComponent, onMounted } from 'vue';

import Layout from '@/layouts/Layout.vue';
import Hero from './Hero.vue';

const Features = defineAsyncComponent(() => import('./Features.vue'));
const Projects = defineAsyncComponent(() => import('./Projects.vue'));
const About = defineAsyncComponent(() => import('./About.vue'));
const Services = defineAsyncComponent(() => import('./Services.vue'));
const Statistics = defineAsyncComponent(() => import('./Statistics.vue'));
const Testimonials = defineAsyncComponent(() => import('./Testimonials.vue'));
const PricingSummary = defineAsyncComponent(() => import('./PricingSummary.vue'));
const FaqSummary = defineAsyncComponent(() => import('./FaqSummary.vue'));
const Technologies = defineAsyncComponent(() => import('./Technologies.vue'));

onMounted(() => {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
    });
});

router.on('success', () => {
    AOS.refresh();
});
</script>

<template>
    <Layout head="Welcome" link="/" :description="$t('welcome.description')">
        <Hero />
        <Services  data-aos="fade-up"/>
        <Features />
        <About />
        <Projects />
        <Statistics  data-aos="fade-up" />
        <PricingSummary />
        <Testimonials />
        <FaqSummary />
        <Technologies data-aos="fade-up" data-aos-delay="500" />
    </Layout>
</template>