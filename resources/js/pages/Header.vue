<template>
    <div class="fixed top-0 right-0 left-0 z-50">
        <div class="bg-secondary text-xs text-secondary-foreground shadow-sm">
            <div
                class="container mx-auto flex h-8 max-w-7xl cursor-pointer items-center justify-center gap-6 px-4 py-2 text-primary transition-all duration-100 ease-in-out hover:font-bold sm:px-6 lg:px-8"
            >
                <div class="flex grow items-center justify-center" @click="redirect">
                    <HandHeart class="mr-2 h-4 w-4 text-pink-500" />
                    <i18n-t keypath="header.donationMessage" tag="span">
                        <template #link>
                            <a href="https://github.com/sponsors/Masri-Programmer?o=esb" class="underline" target="_blank" rel="noopener noreferrer">
                                {{ $t('header.donationLink') }}
                            </a>
                        </template>
                    </i18n-t>
                </div>
                <div class="">
                    <Sheet v-model:open="isSheetOpen">
                        <SheetTrigger as-child>
                            <Button variant="ghost" size="icon">
                                <Menu class="h-6 w-6" />
                                <span class="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" class="w-[300px] bg-sidebar text-sidebar-foreground sm:w-[400px]">
                            <SheetHeader class="text-left">
                                <SheetTitle>Masri Programmer</SheetTitle>
                            </SheetHeader>
                            <div class="flex flex-col gap-1.5 space-y-3 p-4 text-left">
                                <Accordion type="single" collapsible class="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>{{ t('navigation.home.title') }}</AccordionTrigger>
                                        <AccordionContent class="pl-4">
                                            <div class="flex flex-col space-y-2">
                                                <template v-for="item in navigationLinks" :key="item.key">
                                                    <button
                                                        :aria-label="t(item.i18nKey)"
                                                        @click.prevent="handleScroll(item.id)"
                                                        class="text-left hover:underline"
                                                    >
                                                        {{ t(item.i18nKey) }}
                                                    </button>
                                                </template>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>{{ t('navigation.legal.title') }}</AccordionTrigger>
                                        <AccordionContent class="pl-4">
                                            <div class="flex flex-col space-y-2">
                                                <Link :href="customProps.app.url + privacyPolicy.url()" @click="isSheetOpen = false" class="hover:underline">{{
                                                    t('navigation.legal.privacy')
                                                }}</Link>
                                                <Link :href="customProps.app.url + termsConditions.url()" @click="isSheetOpen = false" class="hover:underline">{{
                                                    t('navigation.legal.terms')
                                                }}</Link>
                                                <Link :href="customProps.app.url + imprint.url()" @click="isSheetOpen = false" class="hover:underline">{{
                                                    t('navigation.legal.imprint')
                                                }}</Link>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <!-- <Link href="/contact" @click="isSheetOpen = false" class="font-medium hover:underline">{{
                                    t('navigation.contact')
                                }}</Link> -->
                                <!-- <Link href="/references" @click="isSheetOpen = false" class="font-medium hover:underline">{{
                                    t('navigation.references')
                                }}</Link> -->
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
import { privacyPolicy, termsConditions , imprint } from '@/routes';
import { navigationLinks } from '@/lib/navigation';
import { AppPageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/vue3';
import { HandHeart, Menu } from 'lucide-vue-next';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const page = usePage();
const customProps = page.props as AppPageProps;
const { t } = useI18n();

const isSheetOpen = ref(false);

const redirect = (e: Event) => {
    e.preventDefault();
    window.open('https://github.com/sponsors/Masri-Programmer/masri-web', '_blank');
};

const handleScroll = (id: string) => {
    isSheetOpen.value = false;

    if (page.url === '/') {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        router.visit(`${customProps.app.url}/#${id}`);
    }
};
</script>
