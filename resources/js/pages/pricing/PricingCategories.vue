<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';

defineProps<{
    packagesData: Record<string, any>;
    activeCategory: string;
}>();

const { t } = useI18n();

const urlSlugMap: Record<string, string> = {
    landingPage: 'landingPage',
    businessWebsite: 'website',
    onlineShop: 'onlineshop',
};

const isFeaturedCategory = (categoryKey: string) => categoryKey === 'businessWebsite';
</script>

<template>
    <div class="mt-12 flex flex-wrap justify-center gap-3">
        <Link v-for="(category, key) in packagesData" :key="key" :href="`/pricing/${urlSlugMap[key]}`" preserve-state preserve-scroll>
            <Button :variant="activeCategory === key ? 'default' : 'outline'" class="relative" as="div">
                {{ t(`pricing.categories.${key}`) }}
                <Badge v-if="isFeaturedCategory(String(key))" variant="secondary" class="ml-2 text-xs">
                    {{ t('pricing.featured') }}
                </Badge>
            </Button>
        </Link>
    </div>
</template>
