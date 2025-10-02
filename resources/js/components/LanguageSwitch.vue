<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import i18n from '@/i18n';
import language from '@/routes/language';
import { Head, router, usePage } from '@inertiajs/vue3'; // [!code ++]
import { Check, Languages } from 'lucide-vue-next';
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const page = usePage();
const locale = computed(() => page.props.locale as string);
const supportedLocales = computed(() => page.props.supported_locales as string[]);

const direction = computed(() => {
    return locale.value === 'ar' ? 'rtl' : 'ltr';
});

const availableLanguages = computed(() =>
    supportedLocales.value.map((code) => ({
        code: code,
        nameKey: `languages.${{ en: 'english', de: 'german', fr: 'french', ar: 'arabic' }[code] || code}`,
    })),
);

const setLocale = (langCode: string) => {
    router.get(
        language.switch.url(langCode),
        {},
        {
            preserveScroll: true,
        },
    );
};

// This watch effect is fine as it only handles client-side i18n state
watch(
    locale,
    (newLocale) => {
        if (newLocale) {
            i18n.global.locale.value = newLocale as 'en' | 'de' | 'fr' | 'ar';
        }
    },
    { immediate: true },
);
</script>

<template>
    <Head :html-attrs="{ lang: locale, dir: direction }" />

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
