<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import language from '@/routes/language';
import { router, usePage } from '@inertiajs/vue3';
import { Check, Languages } from 'lucide-vue-next';
import { computed, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
// 1. Get the global i18n instance
const i18n = useI18n();
const { t } = i18n;

const page = usePage();
const locale = computed(() => page.props.locale as string);

const availableLanguages = [
    { code: 'en', nameKey: 'languages.english' },
    { code: 'de', nameKey: 'languages.german' },
    { code: 'fr', nameKey: 'languages.french' },
    { code: 'ar', nameKey: 'languages.arabic' },
];

// 3. This function now makes an Inertia visit to the backend route
const setLocale = (langCode: string) => {
    router.get(
        language.switch.url(langCode),
        {},
        {
            preserveState: true,
        },
    );
};

watchEffect(() => {
    const newLocale = locale.value;

    i18n.locale.value = newLocale;

    if (typeof document !== 'undefined') {
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    }
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
