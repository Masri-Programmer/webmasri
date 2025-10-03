<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { contact } from '@/routes';
import { Link } from '@inertiajs/vue3';
import { CheckCircle2, ChevronDown, XCircle } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
// The type import might need to be adjusted based on your file structure
import type { Package } from '@/services/pricingData';

const props = defineProps<{
    pkg: Package;
    categoryKey: string;
    isFeatured: boolean;
}>();

const { t } = useI18n();

const isExpanded = ref(false);
const toggleCard = () => (isExpanded.value = !isExpanded.value);

const isFeature = (key: string) => !['level', 'isExpanded'].includes(key);

const features = computed(() => {
    return Object.entries(props.pkg).filter(([key]) => isFeature(key));
});

const featureCount = computed(() => features.value.length);
const shouldBeCollapsible = computed(() => featureCount.value > 18);
</script>

<template>
    <Card
        class="flex transform flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        :class="{ 'scale-105 border-2 border-primary shadow-lg': isFeatured }"
    >
        <div v-if="isFeatured" class="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
            <Badge class="bg-primary px-4 py-1 text-primary-foreground">{{ t('pricing.featured') }}</Badge>
        </div>
        <CardHeader class="pb-4 text-center">
            <CardTitle class="text-xl">{{ t(`pricing.packages.${categoryKey}.${pkg.level}.name`) }}</CardTitle>
            <CardDescription class="mt-2 min-h-[40px] text-sm">
                {{ t(`pricing.packages.${categoryKey}.${pkg.level}.description`) }}
            </CardDescription>
        </CardHeader>
        <CardContent class="flex-grow space-y-4">
            <hr />
            <div
                class="space-y-3 overflow-hidden transition-all duration-500 ease-in-out"
                :style="{ maxHeight: shouldBeCollapsible ? (isExpanded ? '1000px' : '550px') : '1000px' }"
            >
                <div v-for="([feature, value], index) in features" :key="index" class="flex items-center justify-between text-sm">
                    <span :class="{ 'text-muted-foreground line-through': value === false }">
                        {{ t(`pricing.packages.${feature}`) }}
                    </span>
                    <div class="flex-shrink-0">
                        <CheckCircle2 v-if="value === true" class="h-4 w-4 text-green-500" />
                        <XCircle v-else-if="value === false" class="h-4 w-4 text-muted-foreground opacity-50" />
                        <Badge v-else variant="secondary" class="text-right text-xs">{{ t(String(value)) }}</Badge>
                    </div>
                </div>
            </div>
            <Button v-if="shouldBeCollapsible" @click="toggleCard" variant="link">
                <span>{{ isExpanded ? t('pricing.readLess') : t('pricing.readMore') }}</span>
                <ChevronDown class="h-4 w-4 transition-transform" :class="{ 'rotate-180': isExpanded }" />
            </Button>
        </CardContent>
        <CardFooter class="flex-col items-stretch pt-0">
            <Link :href="contact.url()" class="mt-4 w-full">
                <Button class="w-full" :variant="isFeatured ? 'default' : 'outline'" size="lg">
                    {{ t('pricing.contactUs') }}
                </Button>
            </Link>
        </CardFooter>
    </Card>
</template>
