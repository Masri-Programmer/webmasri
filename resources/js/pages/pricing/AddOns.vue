<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCurrency } from '@/composables/useCurrency';
import { useI18n } from 'vue-i18n';
import type { AddOn } from './pricingData';

defineProps<{
    addOns: AddOn[];
}>();

const { t } = useI18n();
const { formatCurrency } = useCurrency();
</script>

<template>
    <div class="mt-20">
        <div class="mb-10 text-center">
            <h3 class="text-3xl font-semibold text-foreground">
                {{ t('pricing.availableAddOns') }}
            </h3>
            <p class="mt-3 text-muted-foreground">
                {{ t('pricing.customizeYourPackage') }}
            </p>
        </div>
        <div class="mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card v-for="addOn in addOns" :key="addOn.id" class="text-center">
                <CardHeader>
                    <CardTitle class="text-base font-medium">
                        {{ t(addOn.nameKey) }}
                    </CardTitle>
                </CardHeader>
                <CardContent v-if="addOn.price.value > 0">
                    <div class="text-lg font-semibold text-primary">+ {{ formatCurrency(addOn.price.value) }}</div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>
