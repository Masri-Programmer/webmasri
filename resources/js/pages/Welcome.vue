<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { defineAsyncComponent, onMounted } from 'vue';

import About from './About.vue';
import Features from './Features.vue';
import Hero from './Hero.vue';
import Projects from './Projects.vue';
import Statistics from './Statistics.vue';
import Layout from '@/layouts/Layout.vue';

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
    <Layout head="Welcome" link="/" >
        <Hero data-aos="fade-down" />
        <div class="parallax-section bg-parallax-1">
            <Features  />
        </div>
        <About data-aos="fade-right" />
        <Projects />
        <div class="parallax-section bg-parallax-2">
            <Statistics />
        </div>
        <Testimonials data-aos="fade-left" />
        <Faq data-aos="fade-up" />
        <Technologies data-aos="fade-up" data-aos-delay="500" />
</Layout>
</template>

<style lang="css">
.parallax-section {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 6rem 1rem;
    position: relative;
}

.parallax-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.parallax-section > * {
    position: relative;
    z-index: 2;
}

.bg-parallax-1 {
    background-image: url('../images/iphonemockup.webp');
}

.bg-parallax-2 {
    background-image: url('../images/iphonemockup2.webp');
}

@media (max-width: 639px) {
  .parallax-section {
    background-attachment: scroll;
  }
  .bg-parallax-1{
    background-image:url('');
  }
}
</style>
