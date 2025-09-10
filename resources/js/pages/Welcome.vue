<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { defineAsyncComponent, onMounted } from 'vue'

import Header from './Header.vue'
import Hero from './Hero.vue'
import Features from './Features.vue'
import About from './About.vue'
import Statistics from './Statistics.vue'
import ScrollTop from '@/components/ScrollTop.vue'
import RightSideNav from '@/components/RightSideNav.vue'

const Testimonials = defineAsyncComponent(() => import('./Testimonials.vue'))
const Faq = defineAsyncComponent(() => import('./Faq.vue'))
const Technologies = defineAsyncComponent(() => import('./Technologies.vue'))
const Footer = defineAsyncComponent(() => import('./Footer.vue'))

onMounted(() => {
    AOS.init({
        duration: 800,
        once: true,
    })
})

router.on('success', () => {
    AOS.refresh()
})
</script>

<template>
    <Head title="Welcome">
        <link rel="preconnect" href="https://masri.blog/" />
    </Head>

    <Header data-aos="fade-down" data-aos-delay="1000" />
 <RightSideNav />
    <main class="grid overflow-hidden bg-background text-foreground gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <Hero data-aos="fade-down" />

        <div class="parallax-section bg-parallax-1">
            <Features data-aos="fade-right" />
        </div>

        <About data-aos="fade-right" />

        <div class="parallax-section bg-parallax-2">
            <Statistics data-aos="fade-left" />
        </div>

        <Testimonials data-aos="fade-left" />
        <Faq data-aos="fade-up" />
        <Technologies data-aos="fade-up" />
      </main>
      <Footer />
      <ScrollTop  />
</template>

<style>
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
    background-image: url('./iphonemockup.webp');
}

.bg-parallax-2 {
    background-image: url('./iphonemockup2.webp');
}
</style>