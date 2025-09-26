<script setup lang="ts">
import Title from '@/components/Title.vue';
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d';
import { pricing } from '@/routes';
import { Link } from '@inertiajs/vue3';
import { BarChart, Briefcase, Layers, PenSquare, ShoppingCart, Wrench } from 'lucide-vue-next';
import { shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const coreServices = shallowRef([
    {
        icon: Layers,
        key: 'landingPage',
        titleKey: 'services.landingPage.title',
        descriptionKey: 'services.landingPage.description',
    },
    {
        icon: Briefcase,
        key: 'businessWebsite',
        titleKey: 'services.businessWebsite.title',
        descriptionKey: 'services.businessWebsite.description',
    },
    {
        icon: ShoppingCart,
        key: 'onlineShop',
        titleKey: 'services.onlineShop.title',
        descriptionKey: 'services.onlineShop.description',
    },
]);

const additionalServices = shallowRef([
    {
        icon: Wrench,
        titleKey: 'services.maintenance.title',
        descriptionKey: 'services.maintenance.description',
    },
    {
        icon: BarChart,
        titleKey: 'services.seo.title',
        descriptionKey: 'services.seo.description',
    },
    {
        icon: PenSquare,
        titleKey: 'services.copywriting.title',
        descriptionKey: 'services.copywriting.description',
    },
]);
</script>

<template>
    <section id="services" class="bg-muted/40 dark:bg-background">
        <div class="container mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <Title :title="'services.mainTitle'" :subtitleKey="'services.mainSubtitle'" />
            <div class="mt-12 grid md:grid-cols-2 md:gap-4 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <CardContainer v-for="service in coreServices" :key="service.titleKey" class="group h-full w-full">
                    <CardBody
                        class="group/card relative flex h-full w-full flex-col rounded-xl border border-black/[0.1] bg-card p-6 dark:border-white/[0.2] dark:bg-background dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
                    >
                        <Link :href="pricing.url([service.key])">
                            <CardItem :translate-z="60">
                                <div class="flex items-center gap-4">
                                    <component :is="service.icon" class="h-8 w-8 text-primary" />
                                    <h3 class="text-xl font-semibold text-card-foreground">
                                        {{ t(service.titleKey) }}
                                    </h3>
                                </div>
                            </CardItem>
                            <CardItem as="p" :translate-z="40" class="mt-4 flex-1 text-base text-muted-foreground">
                                {{ t(service.descriptionKey) }}
                            </CardItem>
                        </Link>
                    </CardBody>
                </CardContainer>
            </div>

            <div class="mt-20 text-center">
                <h3 class="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {{ t('services.additionalTitle') }}
                </h3>
                <p class="text-md mx-auto mt-3 max-w-2xl text-muted-foreground">
                    {{ t('services.additionalSubtitle') }}
                </p>
            </div>

            <div class="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Link
                    :href="pricing.url()"
                    v-for="service in additionalServices"
                    :key="service.titleKey"
                    class="flex items-start space-x-4 rounded-lg p-4 transition-colors hover:bg-accent"
                >
                    <div class="flex-shrink-0 rounded-md bg-primary/10 p-3">
                        <component :is="service.icon" class="h-6 w-6 text-primary" />
                    </div>
                    <div class="text-left">
                        <h4 class="text-lg font-semibold text-foreground">{{ t(service.titleKey) }}</h4>
                        <p class="mt-1 text-sm text-muted-foreground">{{ t(service.descriptionKey) }}</p>
                    </div>
                </Link>
            </div>
        </div>
    </section>
</template>
