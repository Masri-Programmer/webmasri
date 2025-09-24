<template>
    <div class="fixed top-0 right-0 left-0 z-50">
        <div class="bg-secondary text-secondary-foreground shadow-sm">
            <div class="container mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <!-- Left Section: Brand -->
                <div class="flex flex-1 justify-start">
                    <Brand />
                </div>

                <!-- Center Section: Desktop Navigation -->
                <div class="hidden lg:block">
                    <DesktopNav :menu-sections="menuSections" :handle-scroll="handleScroll" />
                </div>

                <!-- Right Section: Actions & Mobile Menu -->
                <div class="flex flex-1 justify-end">
                    <div class="flex items-center gap-x-2">
                        <div class="hidden items-center gap-x-4 lg:flex">
                            <HeaderBtns />
                            <AppearanceIcon />
                            <LanguageSwitch />
                            <CurrencySwitch />
                        </div>

                        <!-- Mobile-only menu trigger -->
                        <MobileNav v-model:is-sheet-open="isSheetOpen" :menu-sections="menuSections" :handle-scroll="handleScroll" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navigationLinks } from '@/lib/navigation';
import { contact, faq, imprint, pricing, privacyPolicy, termsConditions } from '@/routes';
import type { AppPageProps } from '@/types';
import { router, usePage } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

import AppearanceIcon from '@/components/AppearanceIcon.vue';
import CurrencySwitch from '@/components/CurrencySwitch.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import Brand from '@/pages/Header/Brand.vue';
import DesktopNav from '@/pages/Header/DesktopNav.vue';
import HeaderBtns from '@/pages/Header/HeaderBtns.vue';
import MobileNav from '@/pages/Header/MobileNav.vue';

const page = usePage();
const customProps = page.props as AppPageProps;

const isSheetOpen = ref(false);

const menuSections = [
    {
        value: 'item-1',
        titleKey: 'navigation.home.title',
        items: navigationLinks.map((link) => ({ ...link, type: 'scroll', target: link.id })),
    },
    {
        value: 'item-2',
        titleKey: 'navigation.legal.title',
        items: [
            { type: 'link', target: privacyPolicy, i18nKey: 'navigation.legal.privacy' },
            { type: 'link', target: termsConditions, i18nKey: 'navigation.legal.terms' },
            { type: 'link', target: imprint, i18nKey: 'navigation.legal.imprint' },
        ],
    },
    {
        value: 'item-3',
        titleKey: 'navigation.pages',
        items: [
            { type: 'link', target: contact, i18nKey: 'navigation.contact' },
            { type: 'external', target: 'https://masri.blog/Projects/Main', i18nKey: 'navigation.home.projects' },
            { type: 'link', target: pricing, i18nKey: 'navigation.home.pricing' },
            { type: 'link', target: faq, i18nKey: 'navigation.home.faq' },
        ],
    },
];

const handleScroll = (id: string) => {
    if (typeof window === 'undefined') {
        return;
    }

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
