<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon">
                <Languages class="h-5 w-5" />
                <span class="sr-only">{{ t('changeLanguage') }}</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent >
            <DropdownMenuItem v-for="lang in availableLanguages" :key="lang.code" class="w-full justify-between" @click="setLocale(lang.code)">
                {{ t(lang.nameKey) }} <Check v-if="locale === lang.code" class="h-4 w-4" />
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

const { t, locale } = useI18n();
const storedLocale = useStorage('locale', 'de');

const availableLanguages = [
    { code: 'en', nameKey: 'languages.english' },
    { code: 'de', nameKey: 'languages.german' },
    { code: 'fr', nameKey: 'languages.french' },
    { code: 'ar', nameKey: 'languages.arabic' },
];

const setLocale = (langCode: string) => {
    storedLocale.value = langCode;
};

watchEffect(() => {
    const newLocale = storedLocale.value;
    locale.value = newLocale;

    if (newLocale === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
});
</script>