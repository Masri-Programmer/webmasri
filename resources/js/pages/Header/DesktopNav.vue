<template>
    <nav class="hidden items-center gap-x-6 lg:flex">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem v-for="section in menuSections" :key="section.value">
                    <NavigationMenuTrigger class="text-sm font-medium bg-transparent">
                        {{ t(section.titleKey) }}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul class="grid w-[300px] gap-3 p-4 md:w-[400px] lg:w-[500px]">
                            <li v-for="item in section.items" :key="item.i18nKey" class="row-span-3">
                                <NavItem
                                    :item="item"
                                    :handle-scroll="handleScroll"
                                    context="desktop"
                                />
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import NavItem from '@/pages/Header/NavItem.vue';

defineProps<{
    menuSections: Array<any>;
    handleScroll: (id: string) => void;
}>();

const { t } = useI18n();
</script>
