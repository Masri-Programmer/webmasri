<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
});
</script>

<template>
    <TooltipProvider>
        <Tooltip :delay-duration="0">
            <DropdownMenu>
                <TooltipTrigger as-child>
                    <DropdownMenuTrigger as-child>
                        <Button variant="ghost" size="icon" :aria-label="t('languages.changeLanguage')">
                            <Languages class="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                </TooltipTrigger>

                <TooltipContent>
                    <p>{{ t('languages.changeLanguage') }}</p>
                </TooltipContent>

                <DropdownMenuContent>
                    <DropdownMenuItem
                        v-for="lang in availableLanguages"
                        :key="lang.code"
                        class="w-full justify-between"
                        @click="setLocale(lang.code)"
                    >
                        {{ t(lang.nameKey) }}
                        <Check v-if="locale === lang.code" class="h-4 w-4" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Tooltip>
    </TooltipProvider>
</template>
