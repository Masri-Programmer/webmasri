<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon">
                <Languages class="h-5 w-5" />
                <span class="sr-only">Change language</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem v-for="lang in availableLanguages" :key="lang.code" class="w-full justify-between" @click="setLocale(lang.code)">
                {{ lang.name }} <Check v-if="locale === lang.code" class="h-4 w-4" />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useStorage } from '@vueuse/core';
import { Check, Languages } from 'lucide-vue-next';
import { watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const storedLocale = useStorage('locale', 'en');

const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'French' },
];

const setLocale = (langCode: string) => {
    storedLocale.value = langCode;
};

watchEffect(() => {
    locale.value = storedLocale.value;
});
</script>