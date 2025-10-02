<template>
    <div class="fixed top-0 right-0 left-0 z-50">
        <div class="bg-secondary text-secondary-foreground shadow-sm">
            <div class="container-custom flex h-14 items-center">
                <!-- Left Section: Brand -->
                <div class="flex flex-1 items-center justify-start">
                    <Brand />
                </div>

                <!-- Center Section: Desktop Navigation -->
                <div class="hidden lg:block">
                    <DesktopNav :menu-sections="menuSections" />
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
                        <MobileNav v-model:is-sheet-open="isSheetOpen" :menu-sections="menuSections" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppearanceIcon from '@/components/AppearanceIcon.vue';
import CurrencySwitch from '@/components/CurrencySwitch.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import Brand from '@/pages/Header/Brand.vue';
import DesktopNav from '@/pages/Header/DesktopNav.vue';
import HeaderBtns from '@/pages/Header/HeaderBtns.vue';
import MobileNav from '@/pages/Header/MobileNav.vue';
import { ref } from 'vue';

const isSheetOpen = ref(false);

defineProps<{
    menuSections: Array<any>;
}>();
</script>
