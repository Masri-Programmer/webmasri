<script setup lang="ts">
import swr from '@/components/layout/SectionWrapper .vue';
import Layout from '@/layouts/Layout.vue';
import 'aos/dist/aos.css';
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';

const Hero = defineAsyncComponent(() => import('./Hero.vue'));
const Features = defineAsyncComponent(() => import('./Features.vue'));
const Projects = defineAsyncComponent(() => import('./Projects.vue'));
const About = defineAsyncComponent(() => import('./About.vue'));
const Services = defineAsyncComponent(() => import('./Services.vue'));
const Statistics = defineAsyncComponent(() => import('./Statistics.vue'));
const Testimonials = defineAsyncComponent(() => import('./Testimonials.vue'));
const PricingSummary = defineAsyncComponent(() => import('./PricingSummary.vue'));
const FaqSummary = defineAsyncComponent(() => import('./FaqSummary.vue'));
const Technologies = defineAsyncComponent(() => import('./Technologies.vue'));

const { t } = useI18n();
</script>

<template>
    <Layout head="Welcome" link="/" :description="t('welcome.description')">
        <Hero />
        <swr id="services" background="muted">
            <Services />
        </swr>

        <swr id="features" class="parallax-section bg-parallax-1">
            <Features />
        </swr>

        <swr id="about">
            <About />
        </swr>

        <Projects />

        <swr id="statistics" fullWidth class="parallax-section bg-parallax-2">
            <Statistics />
        </swr>

        <swr id="pricing">
            <PricingSummary />
        </swr>
        <swr id="testimonials">
            <Testimonials />
        </swr>
        <swr id="faq">
            <FaqSummary />
        </swr>
        <Technologies />
    </Layout>
</template>
