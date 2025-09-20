<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useIntersectionObserver } from '@vueuse/core';
import { onMounted, onUnmounted, ref } from 'vue';
import { navigationLinks } from '@/lib/navigation';
import { useI18n } from 'vue-i18n';
import { usePage } from '@inertiajs/vue3';
import { AppPageProps } from '@/types';

const page = usePage();
const customProps = page.props as AppPageProps;
const { t } = useI18n();

const activeSection = ref('hero');
const isNavVisible = ref(false);

const isScrollingProgrammatically = ref(false);
const targetSectionId = ref<string | null>(null);

// Handles mouse movement to show/hide the navigation
const handleMouseMove = (event: MouseEvent) => {
    const threshold = 250; 
    const { clientX } = event;
    const windowWidth = window.innerWidth;

    isNavVisible.value = clientX <= threshold || clientX >= windowWidth - threshold;
};

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const elements = navigationLinks.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

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

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
});

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        isScrollingProgrammatically.value = true;
        targetSectionId.value = id;
        activeSection.value = '';
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<template>
    <Transition name="nav-fade">
        <nav v-if="isNavVisible"  class="
            fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around  backdrop-blur-sm shadow-t-lg
            md:flex-col md:w-auto md:h-auto md:justify-center md:top-1/2 md:right-4 md:left-auto md:bottom-auto md:-translate-y-1/2 md:transform md:rounded-full md:p-2 md:shadow-lg
        ">
            <TooltipProvider :delay-duration="100">
                <ul class="flex sm:flex-col items-center gap-3">
                    <li v-for="item in navigationLinks" :key="item.id" class=" sm:hover:-translate-x-2.5 ease-in-out duration-200">
                        <Tooltip>
                            <TooltipTrigger as-child>
                                <a
                                    :href="`${customProps.app.url}/#${item.id}`"
                                    :aria-label="t(item.i18nKey)"
                                    class="relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ease-in-out"
                                    :class="'bg-primary'"
                                    @click.prevent="handleScroll(item.id)"
                                >
                                    <div
                                        :class="'scale-0'"
                                        class="h-1.5 w-1.5 rounded-full bg-muted-foreground transition-transform duration-300"
                                    ></div>
                                    <component
                                        :is="item.icon"
                                        :class="'scale-100 opacity-100'"
                                        class="absolute h-5 w-5 text-secondary transition-all duration-300"
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
