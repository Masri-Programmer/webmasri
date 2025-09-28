<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue';
import { useIntersectionObserver } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const sectionRef = ref(null);
const startTicking = ref(false);

useIntersectionObserver(
    sectionRef,
    ([{ isIntersecting }]) => {
        if (isIntersecting) {
            startTicking.value = true;
        }
    },
    { threshold: 0.1 },
);

const statDefinitions = [
    { value: 5, key: 'statistics.experience' },
    { value: 40, key: 'statistics.projects' },
    { value: 25, key: 'statistics.clients' },
    { value: 10, key: 'statistics.technologies' },
];

const stats = computed(() =>
    statDefinitions.map((stat) => ({
        value: stat.value,
        label: t(stat.key),
    })),
);
</script>

<template>
    <section id="statistics" ref="sectionRef" class="parallax-section bg-parallax-2">
        <div class="w-full px-4 py-16">
            <div class="container mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
                <Card v-for="stat in stats" :key="stat.label" class="text-center">
                    <CardContent class="flex flex-col items-center justify-center p-6">
                        <div class="text-4xl font-semibold text-primary md:text-5xl"><NumberTicker :value="startTicking ? stat.value : 0" />+</div>
                        <p class="mt-2 text-sm text-muted-foreground">
                            {{ stat.label }}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>
