<template>
    <div class="fixed top-0 right-0 left-0 z-50">
        <div class="bg-secondary text-secondary-foreground shadow-sm">
            <div
                class="container mx-auto flex h-12 max-w-7xl cursor-pointer items-center justify-center gap-6 px-4 py-0 text-primary transition-all duration-100 ease-in-out hover:font-bold sm:px-6 lg:px-8"
            >
                <div class="flex grow items-center justify-start gap-x-3">
                    <Link href="/" class="text-lg font-semibold">Masri Programmer</Link>
                </div>
                <div>
                    <Sheet v-model:open="isSheetOpen">
                        <SheetTrigger as-child>
                            <Button variant="ghost" size="icon">
                                <Menu class="h-8 w-8" />
                                <span class="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" class="flex flex-col w-[300px] bg-sidebar text-sidebar-foreground sm:w-[400px]">
                            <SheetHeader class="text-left">
                                <SheetTitle>Masri Programmer</SheetTitle>
                            </SheetHeader>

                            <div class="flex flex-col gap-1.5 space-y-3 p-4 text-left grow">
                                <Accordion type="single" collapsible class="w-full">
                                    <AccordionItem v-for="section in menuSections" :key="section.value" :value="section.value">
                                        <AccordionTrigger>{{ t(section.titleKey) }}</AccordionTrigger>
                                        <AccordionContent class="pl-4">
                                            <div class="flex flex-col space-y-2">
                                                <template v-for="item in section.items" :key="item.i18nKey">
                                                    <button
                                                        v-if="item.type === 'scroll'"
                                                        :aria-label="t(item.i18nKey)"
                                                        @click="handleScroll(item.target)"
                                                        class="text-left hover:underline"
                                                    >
                                                        {{ t(item.i18nKey) }}
                                                    </button>
                                                    
                                                    <Link
                                                        v-else-if="item.type === 'link'"
                                                        :href="item.target.url()"
                                                        @click="isSheetOpen = false"
                                                        class="hover:underline"
                                                    >
                                                        {{ t(item.i18nKey) }}
                                                    </Link>

                                                    <a
                                                        v-else-if="item.type === 'external'"
                                                        :href="item.target"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        @click="isSheetOpen = false"
                                                        class="hover:underline"
                                                    >
                                                        {{ t(item.i18nKey) }}
                                                    </a>
                                                </template>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <span class="flex items-center pt-4 text-muted-foreground">
                                    {{ $t('header.donationMessage') }}
                                    <HandHeart class="mr-1.5 h-4 w-4 text-pink-500" />
                                </span>
                                <HeaderBtns />
                            </div>

                            <div class="flex justify-center gap-6 py-4">
                               <AppearanceIcon />
                               <LanguageSwitch />
                               <CurrencySwitch />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navigationLinks } from '@/lib/navigation';
import { contact, faq, imprint, pricing, privacyPolicy, termsConditions } from '@/routes';
import { AppPageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/vue3';
import { HandHeart, Menu } from 'lucide-vue-next';
import { nextTick, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderBtns from './HeaderBtns.vue';
import AppearanceIcon from '@/components/AppearanceIcon.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import CurrencySwitch from '@/components/CurrencySwitch.vue';

const page = usePage();
const customProps = page.props as AppPageProps;
const { t } = useI18n();

const isSheetOpen = ref(false);

const menuSections = [
    {
        value: 'item-1',
        titleKey: 'navigation.home.title',
        items: navigationLinks.map(link => ({ ...link, type: 'scroll', target: link.id }))
    },
    {
        value: 'item-2',
        titleKey: 'navigation.legal.title',
        items: [
            { type: 'link', target: privacyPolicy, i18nKey: 'navigation.legal.privacy' },
            { type: 'link', target: termsConditions, i18nKey: 'navigation.legal.terms' },
            { type: 'link', target: imprint, i18nKey: 'navigation.legal.imprint' },
        ]
    },
    {
        value: 'item-3',
        titleKey: 'navigation.pages',
        items: [
            { type: 'link', target: contact, i18nKey: 'navigation.contact' },
            { type: 'external', target: 'https://masri.blog/Projects/Main', i18nKey: 'navigation.home.projects' },
            { type: 'link', target: pricing, i18nKey: 'navigation.home.pricing' },
            { type: 'link', target: faq, i18nKey: 'navigation.home.faq' },
        ]
    }
];

const handleScroll = (id: string) => {
    isSheetOpen.value = false;

    nextTick(() => {
        if (page.url === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            router.visit(`${customProps.app.url}/#${id}`);
        }
    });
};
</script>