<template>
    <section id="projects" class="container mx-auto max-w-7xl overflow-hidden px-8 sm:px-14 lg:px-20">
        <h2
            class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl leading-none font-semibold whitespace-pre-wrap text-transparent max-lg:-mt-12 sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-slate-900/10"
        >
            {{ t('projects.title') }}
        </h2>
        <Carousel
            class="relative mx-auto w-full"
            :plugins="[
                Autoplay({
                    delay: 6000,
                }),
            ]"
            :opts="{
                align: 'start',
                loop: true,
            }"
            role="region"
            aria-roledescription="carousel"
            tabindex="0"
        >
            <CarouselContent class="mt-12 -ml-2 md:-ml-4">
                <CarouselItem v-for="project in cardData" :key="project.title" class="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/4">
                    <div class="h-full p-1">
                        <Card class="flex h-full flex-col">
                            <CardContent class="flex flex-1 flex-col p-4">
                                <a :href="project.link" target="_blank" rel="noopener noreferrer">
                                    <img
                                        :src="project.image"
                                        :alt="project.title"
                                        class="aspect-video w-full rounded-md bg-secondary object-cover object-top"
                                        loading="lazy"
                                        decoding="async"
                                        width="1920"
                                        height="1080"
                                    />
                                </a>

                                <div class="mt-4 flex-grow">
                                    <h3 class="text-lg font-semibold text-foreground">
                                        {{ project.title }}
                                    </h3>
                                    <p class="mt-1 text-sm text-muted-foreground">
                                        {{ project.description }}
                                    </p>
                                </div>

                                <div class="mt-4 flex flex-wrap gap-2">
                                    <span
                                        v-for="tag in project.tags"
                                        :key="tag"
                                        class="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
                                    >
                                        {{ tag }}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </section>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import agt from '@/images/agt.webp';
import beeflex from '@/images/beeflex.webp';
import carrental from '@/images/carrental.webp';
import eshoppers from '@/images/eshoppers.webp';
import finedining from '@/images/finedining.webp';
import flyerheavenShop from '@/images/flyerheaven.webp';
import hk from '@/images/hk-energieberatung.de.webp';
import masriBlog from '@/images/masriblog.webp';
import medeva from '@/images/medeva.webp';
import meomedia from '@/images/meomedia.webp';
import modernBank from '@/images/modernBank.webp';
import gameacademy from '@/images/new.gameacademy.ngo_home.webp';
import openai from '@/images/openai.webp';
import piepjack from '@/images/piepjack.webp';
import portfolio from '@/images/portfolio.webp';
import propackstore from '@/images/propackstore.org_home.webp';
import schooltube from '@/images/schooltube.webp';
import slim from '@/images/slim.webp';
import tasty from '@/images/tasty.webp';
import tracker from '@/images/tracker.webp';
import ultradyJ1wGAp from '@/images/ultra-dyJ1wGAp.webp';
import flyerheaven from '@/images/www.flyerheaven.de_deine-bueroartikel.html.webp';
import Autoplay from 'embla-carousel-autoplay';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const cardData = [
    {
        title: 'Masri Blog',
        badge: 'Blog',
        image: masriBlog,
        description: 'Level up your tech skills with my professional profile, developer resources, and tutorials.',
        tags: ['Blog', 'Resources', 'Computer Science'],
        date: '2025',
        link: 'https://masri.blog/',
    },
    {
        title: 'Piepjack Clothing',
        badge: 'Onlineshop',
        image: piepjack,
        description: 'German Clothing Brand.',
        tags: ['Online', 'Clothing', 'E-commerce'],
        date: '2025',
        link: 'https://testing.piepjack-clothing.de/',
    },
    {
        title: 'HK Energieberatung',
        badge: 'Consulting',
        image: hk,
        description: 'Professional website for an energy consulting business.',
        tags: ['Energy', 'Consulting', 'Business'],
        date: '2025',
        link: 'https://hk-energieberatung.de/',
    },
    {
        title: 'Tracker',
        badge: 'Time Tracking',
        image: tracker,
        description: ' This site is a tracking tool for work.',
        tags: ['Productivity', 'Work', 'Time Tracking'],
        date: '2025',
        link: 'https://tracker.masri.blog/',
    },
    {
        title: 'Meo Media',
        badge: 'Live',
        image: meomedia,
        description: 'A dynamic platform for providing digital services.',
        tags: ['Digital', 'Media', 'Services'],
        date: '2024',
        link: 'https://meo-media.de/',
    },
    {
        title: 'Amazon Pages',
        badge: 'Advertising',
        image: flyerheaven,
        description: 'Custom landing pages and advertisements for the Amazon platform.',
        tags: ['Amazon', 'Ads', 'E-commerce'],
        date: '2024',
        link: 'https://www.flyerheaven.de/deine-bueroartikel.html',
    },
    {
        title: 'Gameacademy',
        badge: 'NGO',
        image: gameacademy,
        description: 'An NGO platform for training and blogging in the gaming sector.',
        tags: ['Gaming', 'Training', 'Blog'],
        date: '2023',
        link: 'https://gameacademy.ngo/home',
    },
    {
        title: 'Propackstore',
        badge: 'E-commerce',
        image: propackstore,
        description: 'A comprehensive sales platform for packaging solutions.',
        tags: ['Sales', 'Platform', 'Packaging'],
        date: '2023',
        link: 'https://propackstore.org/home',
    },
    {
        title: 'Timesquare',
        badge: 'E-commerce',
        image: ultradyJ1wGAp,
        description: 'A fully-featured e-commerce site for various products.',
        tags: ['Retail', 'Online Store', 'Sales'],
        date: '2023',
        link: 'http://ultrastore.me',
    },
    {
        title: 'Flyerheaven',
        badge: 'Live',
        image: flyerheavenShop,
        description: 'Hub for digital services and professional flyer designs.',
        tags: ['Design', 'Digital', 'Marketing'],
        date: '2024',
        link: 'https://Flyerheaven.de',
    },
    {
        title: 'Medeva',
        badge: 'Medical',
        image: medeva,
        description: 'A professional web presence for a medical entity.',
        tags: ['Healthcare', 'Medical', 'Professional'],
        date: '2022',
        link: 'https://www.med-evasan.com/',
    },
    {
        title: 'Schooltube',
        badge: 'E-Learning',
        image: schooltube,
        description: 'An innovative e-learning platform for modern education.',
        tags: ['Education', 'Video', 'Platform'],
        date: '2023',
        link: 'https://schooltube.online/',
    },
    {
        title: 'Hoo Modern Bank',
        badge: 'FinTech',
        image: modernBank,
        description: 'A stylish landing page for a modern banking solution.',
        tags: ['Banking', 'Finance', 'Landing Page'],
        date: '2021',
        link: 'https://masri-programmer.github.io/modern_bank/',
    },
    {
        title: 'Slim Threads',
        badge: 'E-commerce',
        image: slim,
        description: 'A modern clothes e-commerce website with a sleek design.',
        tags: ['Fashion', 'Retail', 'Online Store'],
        date: '2021',
        link: 'https://masri-programmer.github.io/slim-threads/',
    },
    {
        title: 'OpenAI Landing Page',
        badge: 'Landing Page',
        image: openai,
        description: 'A modern landing page introducing AI concepts, inspired by OpenAI.',
        tags: ['AI', 'Technology', 'Web Design'],
        date: '2021',
        link: 'https://masri-programmer.github.io/openai/',
    },
    {
        title: 'Petite Restaurant',
        badge: 'Restaurant',
        image: finedining,
        description: 'An elegant website for a fine dining restaurant, showcasing its food and menu.',
        tags: ['Food', 'Restaurant', 'Menu'],
        date: '2022',
        link: 'https://masri-programmer.github.io/modern_restaurant/',
    },
    {
        title: 'Tasty Restaurant',
        badge: 'Restaurant',
        image: tasty,
        description: 'A vibrant and appealing website for a modern restaurant.',
        tags: ['Food', 'Menu', 'Hospitality'],
        date: '2022',
        link: 'https://masri-programmer.github.io/Restaurant101/',
    },
    {
        title: 'BeeFlex',
        badge: 'Business',
        image: beeflex,
        description: 'A landing page for business management solutions.',
        tags: ['Management', 'SaaS', 'Solutions'],
        date: '2023',
        link: 'https://masri-programmer.github.io/BeeFlex/',
    },
    {
        title: 'Royal Cars',
        badge: 'Rental',
        image: carrental,
        description: 'A sophisticated website for car rentals and sales.',
        tags: ['Automotive', 'Rentals', 'Luxury'],
        date: '2022',
        link: 'https://masri-programmer.github.io/RoyalCars/',
    },
    {
        title: 'E-Shopper',
        badge: 'E-commerce',
        image: eshoppers,
        description: 'A classic e-commerce template for clothing and apparel.',
        tags: ['E-commerce', 'Fashion', 'Retail'],
        date: '2021',
        link: 'https://masri-programmer.github.io/Ecommerce/',
    },
    {
        title: 'AGT Computers',
        badge: 'E-commerce',
        image: agt,
        description: 'An e-commerce platform specializing in laptops and computer hardware.',
        tags: ['Tech', 'Hardware', 'Retail'],
        date: '2022',
        link: 'https://masri-programmer.github.io/AGT/',
    },
    {
        title: 'Portfolio',
        badge: 'Portfolio',
        image: portfolio,
        description: 'A personal portfolio website to showcase projects and skills.',
        tags: ['Portfolio', 'Web Dev', 'Personal'],
        date: '2024',
        link: 'https://masri-programmer.github.io/mohamad-masri-portfolio/',
    },
];
</script>
