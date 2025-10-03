<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from 'vue-i18n';
import type { additionalServices as additionalServicesDataType } from './pricingData';
import ServicePrice from './ServicePrice.vue';

defineProps<{
    services: typeof additionalServicesDataType;
}>();

const { t } = useI18n();
</script>

<template>
    <div class="mt-20">
        <div class="mb-12 text-center">
            <h2 class="text-3xl font-semibold text-foreground">
                {{ t('pricing.additionalServices') }}
            </h2>
            <p class="mt-4 text-muted-foreground">
                {{ t('pricing.additionalServicesDescription') }}
            </p>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card class="text-center">
                <CardHeader>
                    <CardTitle class="text-lg">{{ t(services.hosting.title) }}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ServicePrice :price="services.hosting.price" />
                </CardContent>
            </Card>

            <Card class="text-center">
                <CardHeader>
                    <CardTitle class="text-lg">{{ t(services.emailAndDomain.title) }}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p class="mb-2 text-xs text-muted-foreground">{{ t(services.emailAndDomain.description as string) }}</p>
                    <ServicePrice :price="services.emailAndDomain.price" />
                </CardContent>
            </Card>

            <Card v-for="service in services.maintenance" :key="service.key" class="text-center">
                <CardHeader>
                    <CardTitle class="text-lg">{{ t(service.title) }}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p class="mb-2 text-xs text-muted-foreground">{{ t(service.description) }}</p>
                    <ServicePrice :price="service.price" />
                </CardContent>
            </Card>
        </div>
    </div>
</template>
