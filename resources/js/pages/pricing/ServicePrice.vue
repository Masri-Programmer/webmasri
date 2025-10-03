<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { useCurrency } from '@/composables/useCurrency';
import { useI18n } from 'vue-i18n';
import type { Price } from './pricingData';

defineProps<{
    price: Price;
}>();

const { t } = useI18n();
const { formatCurrency } = useCurrency();
</script>

<template>
    <div class="text-sm font-semibold">
        <div v-if="price.type === 'subscription'">
            <span>{{ formatCurrency(price.monthly as number) }} {{ t('pricing.perMonth') }}</span>
            <span class="mx-1 text-muted-foreground">{{ t('pricing.or') }}</span>
            <span>{{ formatCurrency(price.annually as number) }} {{ t('pricing.perYear') }}</span>
            <Badge variant="secondary" class="mt-1 ml-2 text-xs"> {{ t('pricing.save') }} {{ price.savings }} </Badge>
        </div>

        <div v-else-if="price.type === 'one-time'">
            <span>{{ t(price.prefixKey as string) }} {{ formatCurrency(price.value as number) }}</span>
            <span class="ml-1 text-muted-foreground">({{ t(price.suffixKey as string) }})</span>
        </div>

        <div v-else-if="price.type === 'per-unit'">
            <span>{{ t(price.prefixKey as string) }} {{ formatCurrency(price.value as number) }}</span>
            <span class="ml-1">/ {{ t(price.unitKey as string) }}</span>
        </div>
    </div>
</template>
