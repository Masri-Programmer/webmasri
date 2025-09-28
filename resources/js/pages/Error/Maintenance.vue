<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { WrenchIcon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <Head :title="t('maintenance.title')" />
    <div class="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
        <div class="mx-auto flex max-w-xl flex-col items-center">
            <WrenchIcon class="mb-6 h-16 w-16 text-primary" :stroke-width="1.5" />
            <h1 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {{ t('maintenance.heading') }}
            </h1>
            <p class="mt-4 text-base text-muted-foreground">
                {{ t('maintenance.message') }}
            </p>
            <div class="mt-8 border-t border-border pt-4">
                <p class="text-sm text-muted-foreground">
                    {{ t('maintenance.status_code') }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Scoped styles for the maintenance page can be added here */
</style>
