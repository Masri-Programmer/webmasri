<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useIntersectionObserver, useTimeoutFn } from '@vueuse/core';
import { BarChart3, HelpCircle, Home, MessageSquareQuote, Sparkles, UserCircle } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const navItems = [
    { id: 'Hero', i18nKey: 'navigation.hero', icon: Home },
    { id: 'Features', i18nKey: 'navigation.features', icon: Sparkles },
    { id: 'About', i18nKey: 'navigation.about', icon: UserCircle },
    { id: 'Statistics', i18nKey: 'navigation.statistics', icon: BarChart3 },
    { id: 'Testimonials', i18nKey: 'navigation.testimonials', icon: MessageSquareQuote },
    { id: 'Faq', i18nKey: 'navigation.faq', icon: HelpCircle },
];

const activeSection = ref('Hero');

const { isPending: isScrollingProgrammatically, start: startScrollLock } = useTimeoutFn(() => {}, 800, { immediate: false });

onMounted(() => {
    const elements = navItems.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => {
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if (isIntersecting && !isScrollingProgrammatically.value) {
                    activeSection.value = el.id;
                }
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            },
        );
    });
});

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        activeSection.value = id;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        startScrollLock();
    }
};
</script>

<template>
    <Transition name="nav-fade">
        <nav v-if="activeSection !== 'Hero'" class="fixed top-1/2 right-8 z-50 -translate-y-1/2 transform">
            <TooltipProvider :delay-duration="100">
                <ul class="flex flex-col items-center gap-3">
                    <li v-for="item in navItems" :key="item.id">
                        <Tooltip>
                            <TooltipTrigger as-child>
                                <a
                                    :href="`#${item.id}`"
                                    :aria-label="t(item.i18nKey)"
                                    class="relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-in-out"
                                    :class="activeSection === item.id ? 'bg-primary' : 'bg-card/80 backdrop-blur-sm hover:bg-muted'"
                                    @click.prevent="handleScroll(item.id)"
                                >
                                    <div
                                        :class="activeSection === item.id ? 'scale-0' : 'scale-100'"
                                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground transition-transform duration-300"
                                    ></div>
                                    <component
                                        :is="item.icon"
                                        :class="activeSection === item.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
                                        class="absolute h-5 w-5 text-primary-foreground transition-all duration-300"
                                    />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="left" class="bg-foreground text-background">
                                <p>{{ t(item.i18nKey) }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </li>
                </ul>
            </TooltipProvider>
        </nav>
    </Transition>
</template>

<style scoped>
.nav-fade-enter-active,
.nav-fade-leave-active {
    transition:
        opacity 0.4s ease,
        transform 0.4s ease;
}

.nav-fade-enter-from,
.nav-fade-leave-to {
    opacity: 0;
    transform: translateY(-50%) translateX(100%);
}
</style>
