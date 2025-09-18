<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { defineAsyncComponent, onMounted } from 'vue';

import Layout from '@/layouts/Layout.vue';
import About from './About.vue';
import Features from './Features.vue';
import Hero from './Hero.vue';
import Projects from './Projects.vue';
import Services from './Services.vue';
import Statistics from './Statistics.vue';
import PricingSummary from './PricingSummary.vue';
import FaqSummary from './FaqSummary.vue';

const Testimonials = defineAsyncComponent(() => import('./Testimonials.vue'));
const Faq = defineAsyncComponent(() => import('./Faq.vue'));
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
    <Layout head="Welcome" link="/">
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