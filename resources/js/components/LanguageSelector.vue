<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { router } from '@inertiajs/vue3';
import { Check } from 'lucide-vue-next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { switchMethod } from '@/routes/language';

const { locale } = useI18n();

const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'French' },
];

const setLocale = (langCode: string) => {
    locale.value = langCode;

    router.get(switchMethod.url({ locale: langCode }), {}, {
        preserveState: true,
    });
};
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>Display Language</CardTitle>
            <CardDescription>
                Choose the language you want to see in the interface.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div class="space-y-2">
                <Button
                    v-for="lang in availableLanguages"
                    :key="lang.code"
                    :variant="locale === lang.code ? 'secondary' : 'ghost'"
                    class="w-full justify-between"
                    @click="setLocale(lang.code)"
                >
                    <span>{{ lang.name }}</span>
                    <Check v-if="locale === lang.code" class="h-4 w-4" />
                </Button>
            </div>
        </CardContent>
    </Card>
</template>