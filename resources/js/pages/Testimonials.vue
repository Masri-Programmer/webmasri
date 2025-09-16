<script setup lang="ts">
import { Button } from '@/components/ui/button'; // Assumes shadcn-vue path
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assumes shadcn-vue path
import googleIcon from '@/images/googleIcon.svg';
import { Star } from 'lucide-vue-next';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Link to leave a Google Review
const googleReviewLink = 'https://g.page/r/CQl3_s6R1DkiEAE/review';

// Base definitions for testimonials
const testimonialDefinitions = [
    {
        name: 'Marvin Piepjack',
        handle: 'piepjack-clothing.de',
        key: 'testimonials.list.marvinPiepjack.text',
        rating: 5,
    },
    {
        name: 'Hussein Khashab',
        handle: 'hk-energieberatung.de',
        key: 'testimonials.list.husseinKhashab.text',
        rating: 5,
    },
];

const testimonials = computed(() =>
    testimonialDefinitions.map((testimonial) => ({
        ...testimonial,
        text: t(testimonial.key),
    })),
);
</script>

<template>
    <section id="testimonials" class="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div class="mb-12 text-center">
            <h2 class="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                <span class="relative">{{ $t('testimonials.title') }}</span>
                <img
                    :src="googleIcon"
                    alt="Google"
                    class="pointer-events-none absolute right-0 left-0 -z-10 m-auto h-20 w-20 opacity-20 mix-blend-multiply dark:mix-blend-screen"
                    loading="lazy"
                    decoding="async"
                />
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {{ $t('testimonials.subtitle') }}
            </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card
                v-for="(testimonial, index) in testimonials"
                :key="index"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
                class="flex flex-col"
            >
                <CardHeader>
                    <div class="flex items-center justify-between">
                        <CardTitle class="text-lg">
                            {{ testimonial.name }}
                        </CardTitle>
                        <div class="flex items-center gap-0.5">
                            <Star v-for="i in testimonial.rating" :key="i" class="size-5 fill-yellow-400 text-yellow-400" />
                        </div>
                    </div>
                    <p class="text-xs text-muted-foreground">
                        {{ testimonial.handle }}
                    </p>
                </CardHeader>
                <CardContent class="flex-grow">
                    <blockquote class="border-l-2 pl-4 text-foreground italic">
                        {{ testimonial.text }}
                    </blockquote>
                </CardContent>
            </Card>

            <a
                :href="googleReviewLink"
                target="_blank"
                rel="noopener noreferrer"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { delay: testimonials.length * 100, duration: 500 } }"
                class="group flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-transparent p-8 text-center transition-colors hover:border-primary hover:bg-accent"
            >
                <h3 class="text-lg font-semibold text-foreground">
                    {{ $t('testimonials.leaveReview.title') }}
                </h3>
                <p class="mt-2 text-sm text-muted-foreground">
                    {{ $t('testimonials.leaveReview.description') }}
                </p>
                <Button variant="outline" class="mt-4">
                    {{ $t('testimonials.leaveReview.button') }}
                </Button>
            </a>
        </div>
    </section>
</template>
