<template>
    <div class="fixed top-0 right-0 left-0 z-50">
        <div class="bg-secondary text-xs text-secondary-foreground shadow-sm">
            <div
                class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-0 flex h-8 cursor-pointer items-center justify-center gap-6 text-primary transition-all duration-100 ease-in-out hover:font-bold"
            >
                <div class="flex grow items-center justify-start gap-x-3 text-xs sm:text-sm"> <Link href="/" class="text-lg font-semibold">Masri Programmer</Link></div>
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
                                                <Link :href="privacyPolicy.url()" @click="isSheetOpen = false" class="hover:underline">{{
                                                    t('navigation.legal.privacy')
                                                }}</Link>
                                                <Link :href="termsConditions.url()" @click="isSheetOpen = false" class="hover:underline">{{
                                                    t('navigation.legal.terms')
                                                }}</Link>
                                                <Link :href="imprint.url()" @click="isSheetOpen = false" class="hover:underline">{{
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
                                <span class="flex items-center text-muted-foreground">
                                    {{ $t('header.donationMessage') }}
                                    <HandHeart class="mr-1.5 h-4 w-4 text-pink-500" />
                                </span>

                                <div class="flex flex-col items-stretch gap-2 p-2">
    <a
        href="https://github.com/sponsors/Masri-Programmer"
        target="_blank"
        rel="noopener noreferrer"
        title="Sponsor Masri-Programmer"
        class="flex items-center justify-center gap-x-2 rounded-md bg-pink-50 px-3 py-2 text-xs font-semibold text-pink-600 transition-colors hover:bg-pink-100 dark:bg-pink-950 dark:text-pink-300 dark:hover:bg-pink-900"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
        <span>{{ t('sponsor.github') }}</span>
    </a>

    <a
        href="https://g.page/r/CQl3_s6R1DkiEAE/review"
        target="_blank"
        rel="noopener noreferrer"
        title="Leave us a review on Google"
        class="flex items-center justify-center gap-x-2 rounded-md bg-[#4285F4] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3367D6]"
    >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="white">
            <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
        </svg>
        <span>{{ t('sponsor.google') }}</span>
    </a>
</div>
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
import { imprint, privacyPolicy, termsConditions } from '@/routes';
import { AppPageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/vue3';
import { HandHeart, Menu } from 'lucide-vue-next';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const page = usePage();
const customProps = page.props as AppPageProps;
const { t } = useI18n();

const isSheetOpen = ref(false);

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
