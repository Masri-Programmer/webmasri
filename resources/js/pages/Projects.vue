<template>
    <section id="projects" class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12 overflow-hidden">
        <h2
            class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent whitespace-pre-wrap max-lg:-mt-12 dark:from-white dark:to-slate-900/10"
        >
            {{ $t('projects.title') }}
        </h2>
        <Carousel
            class="relative mx-auto w-full"
            :opts="{
                align: 'start',
                loop: true,
            }"
        >
            <CarouselContent class="-ml-2 md:-ml-4 ">
                <CarouselItem v-for="project in cardData" :key="project.title" class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-2 md:pl-4">
                    <div class="p-1">
                        <Card class="h-full">
                            <CardContent class="flex flex-col p-4">
                                <a :href="project.link" target="_blank" rel="noopener noreferrer">
                                    <img 
                                        :src="project.image" 
                                        :alt="project.title" 
                                           class="aspect-video w-full rounded-md object-cover object-top"
                                    >
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
import hk from '@/images/hk-energieberatung.de.png'
import flyerheaven from '@/images/www.flyerheaven.de_deine-bueroartikel.html.png'

const cardData = [
  {
        title: 'HK Energieberatung',
        badge: 'Consulting',
        image: hk,
        description: 'Professional website for an energy consulting business.',
        tags: ['Energy', 'Consulting', 'Business'],
        date: '2025',
        link: 'Projects/Hk-Energieberatung',
    },
    {
        title: 'Meo Media',
        badge: 'Live',
        image: 'https://masri.blog/Assets/Img/meo-media.de_digital-tools_.png',
        description: 'A dynamic platform for providing digital services.',
        tags: ['Digital', 'Media', 'Services'],
        date: '2024',
        link: 'Meo.md',
    },
    {
        title: 'Flyerheaven',
        badge: 'Live',
        image: 'https://masri.blog/Assets/Img/www.flyerheaven.de_.png',
        description: 'Hub for digital services and professional flyer designs.',
        tags: ['Design', 'Digital', 'Marketing'],
        date: '2024',
        link: 'Projects/Flyerheaven',
    },
    {
        title: 'Amazon Pages',
        badge: 'Advertising',
        image: flyerheaven,
        description: 'Custom landing pages and advertisements for the Amazon platform.',
        tags: ['Amazon', 'Ads', 'E-commerce'],
        date: '2024',
        link: 'Projects/Amazon',
    },
    {
        title: 'Gameacademy',
        badge: 'NGO',
        image: 'https://masri.blog/Assets/Img/new.gameacademy.ngo_home.png',
        description: 'An NGO platform for training and blogging in the gaming sector.',
        tags: ['Gaming', 'Training', 'Blog'],
        date: '2023',
        link: 'Projects/Gameacademy',
    },
    {
        title: 'Propackstore',
        badge: 'E-commerce',
        image: 'https://masri.blog/Assets/Img/propackstore.org_home.png',
        description: 'A comprehensive sales platform for packaging solutions.',
        tags: ['Sales', 'Platform', 'Packaging'],
        date: '2023',
        link: 'Projects/Propackstore',
    },
    {
        title: 'Timesquare',
        badge: 'E-commerce',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/ultra-dyJ1wGAp.jpg',
        description: 'A fully-featured e-commerce site for various products.',
        tags: ['Retail', 'Online Store', 'Sales'],
        date: '2023',
        link: 'Projects/Timesquare',
    },
    {
        title: 'Medeva',
        badge: 'Medical',
        image: 'https://masri.blog/Assets/Img/www.med-evasan.com_.png',
        description: 'A professional web presence for a medical entity.',
        tags: ['Healthcare', 'Medical', 'Professional'],
        date: '2022',
        link: 'Projects/Medeva',
    },
    {
        title: 'Schooltube',
        badge: 'E-Learning',
        image: 'https://masri.blog/Assets/Img/schooltube.online_.png',
        description: 'An innovative e-learning platform for modern education.',
        tags: ['Education', 'Video', 'Platform'],
        date: '2023',
        link: 'Projects/Schooltube',
    },
    {
        title: 'Hoo Modern Bank',
        badge: 'FinTech',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/modernBank-ZmqxJD8f.png',
        description: 'A stylish landing page for a modern banking solution.',
        tags: ['Banking', 'Finance', 'Landing Page'],
        date: '2021',
        link: 'https://masri-programmer.github.io/modern_bank/',
    },
    {
        title: 'Slim Threads',
        badge: 'E-commerce',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/slim-lZT3nVKt.png',
        description: 'A modern clothes e-commerce website with a sleek design.',
        tags: ['Fashion', 'Retail', 'Online Store'],
        date: '2021',
        link: 'https://masri-programmer.github.io/slim-threads/',
    },
    {
        title: 'OpenAI Introduction',
        badge: 'Landing Page',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/openai-BUc72Muk.png',
        description: 'A modern landing page introducing AI concepts, inspired by OpenAI.',
        tags: ['AI', 'Technology', 'Web Design'],
        date: '2021',
        link: 'https://masri-programmer.github.io/openai/',
    },
    {
        title: 'Petite Restaurant',
        badge: 'Restaurant',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/petite-0b_hAr_V.png',
        description: 'An elegant website for a fine dining restaurant, showcasing its food and menu.',
        tags: ['Food', 'Restaurant', 'Menu'],
        date: '2022',
        link: 'https://masri-programmer.github.io/modern_restaurant/',
    },
    {
        title: 'Tasty Restaurant',
        badge: 'Restaurant',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/tasty-3Y3DRI7O.png',
        description: 'A vibrant and appealing website for a modern restaurant.',
        tags: ['Food', 'Menu', 'Hospitality'],
        date: '2022',
        link: 'https://masri-programmer.github.io/Restaurant101/',
    },
    {
        title: 'BeeFlex',
        badge: 'Business',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/beeflex-407xXi5b.png',
        description: 'A landing page for business management solutions.',
        tags: ['Management', 'SaaS', 'Solutions'],
        date: '2023',
        link: 'https://masri-programmer.github.io/BeeFlex/',
    },
    {
        title: 'Royal Cars',
        badge: 'Rental',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/cars-_gCVSZ1n.png',
        description: 'A sophisticated website for car rentals and sales.',
        tags: ['Automotive', 'Rentals', 'Luxury'],
        date: '2022',
        link: 'https://masri-programmer.github.io/RoyalCars/',
    },
    {
        title: 'E-Shopper',
        badge: 'E-commerce',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/shoppers-QlLEvVlC.png',
        description: 'A classic e-commerce template for clothing and apparel.',
        tags: ['E-commerce', 'Fashion', 'Retail'],
        date: '2021',
        link: 'https://masri-programmer.github.io/Ecommerce/',
    },
    {
        title: 'AGT Computers',
        badge: 'E-commerce',
        image: 'https://masri-programmer.github.io/mohamad-masri/assets/agt-uyfv8BOX.png',
        description: 'An e-commerce platform specializing in laptops and computer hardware.',
        tags: ['Tech', 'Hardware', 'Retail'],
        date: '2022',
        link: 'https://masri-programmer.github.io/AGT/',
    },
    {
        title: 'Personal Portfolio',
        badge: 'Portfolio',
        image: 'https://masri.blog/Assets/Img/masri-programmer.github.io_mohamad-masri_-(1).png',
        description: 'A personal portfolio website to showcase projects and skills.',
        tags: ['Portfolio', 'Web Dev', 'Personal'],
        date: '2024',
        link: 'https://masri-programmer.github.io/mohamad-masri/assets/portfolio-2-vj6l1UxO.png',
    },
];
</script>