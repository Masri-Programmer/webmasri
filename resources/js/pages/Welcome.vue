<script setup lang="ts">
import swr from '@/components/layout/SectionWrapper .vue';
import iphoneMockup from '@/images/iphonemockup.webp';
import iphoneMockup2 from '@/images/iphonemockup2.webp';
import Layout from '@/layouts/Layout.vue';
import { defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import Hero from './Hero.vue';

const Features = defineAsyncComponent(() => import('./Features.vue'));
const Projects = defineAsyncComponent(() => import('./Projects.vue'));
const About = defineAsyncComponent(() => import('./About.vue'));
const Services = defineAsyncComponent(() => import('./Services.vue'));
const Statistics = defineAsyncComponent(() => import('./Statistics.vue'));
const Testimonials = defineAsyncComponent(() => import('./Testimonials.vue'));
const PricingSummary = defineAsyncComponent(() => import('./pricing/PricingSummary.vue'));
const FaqSummary = defineAsyncComponent(() => import('./FaqSummary.vue'));
const Technologies = defineAsyncComponent(() => import('./Technologies.vue'));

const { t } = useI18n();
</script>

<template>
    <Layout :head="t('welcome.title')" link="/" :description="t('welcome.description')">
        <Hero />
        <swr id="services" background="muted">
            <Services />
        </swr>

        <swr id="features" :parallax-image="iphoneMockup">
            <Features />
        </swr>

        <swr id="about">
            <About />
        </swr>

        <Projects />

        <swr id="statistics" :parallax-image="iphoneMockup2">
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
