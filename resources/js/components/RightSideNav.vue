<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { navigationLinks } from '@/lib/navigation';
import { AppPageProps } from '@/types';
import { usePage } from '@inertiajs/vue3';
import { onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const page = usePage();
const customProps = page.props as AppPageProps;
const { t } = useI18n();

const activeSection = ref('hero');
const isNavVisible = ref(false); // Initial state is `false` for SSR
const isScrollingProgrammatically = ref(false);

const handleMouseMove = (event: MouseEvent) => {
    const threshold = 250;
    const { clientX } = event;
    const windowWidth = window.innerWidth;
    isNavVisible.value = clientX <= threshold || clientX >= windowWidth - threshold;
};

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        isScrollingProgrammatically.value = true;
        activeSection.value = id;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            isScrollingProgrammatically.value = false;
        }, 1000);
    }
};

const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const elements = navigationLinks.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

    observer.value = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isScrollingProgrammatically.value) {
                    activeSection.value = entry.target.id;
                }
            });
        },
        {
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
        },
    );

    elements.forEach((el) => observer.value?.observe(el));
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    if (observer.value) {
        observer.value.disconnect();
    }
});
</script>

<template>
    <Transition name="nav-fade">
        <nav
            v-if="isNavVisible"
            class="shadow-t-lg fixed right-0 bottom-0 left-0 z-50 flex h-16 items-center justify-around backdrop-blur-sm md:top-1/2 md:right-4 md:bottom-auto md:left-auto md:h-auto md:w-auto md:-translate-y-1/2 md:transform md:flex-col md:justify-center md:rounded-full md:p-2 md:shadow-lg"
        >
            <TooltipProvider :delay-duration="100">
                <ul class="flex items-center gap-3 md:flex-col">
                    <li v-for="item in navigationLinks" :key="item.id" class="duration-200 ease-in-out md:hover:-translate-x-2.5">
                        <Tooltip>
                            <TooltipTrigger as-child>
                                <a
                                    :href="`#${item.id}`"
                                    :aria-label="t(item.i18nKey)"
                                    class="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300"
                                    :class="activeSection === item.id ? 'bg-primary' : 'bg-muted/60 hover:bg-muted'"
                                    @click.prevent="handleScroll(item.id)"
                                >
                                    <component
                                        :is="item.icon"
                                        class="h-5 w-5 transition-colors"
                                        :class="activeSection === item.id ? 'text-primary-foreground' : 'text-muted-foreground'"
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

/* Adjust transition for desktop (right side) */
@media (min-width: 768px) {
    .nav-fade-enter-from,
    .nav-fade-leave-to {
        opacity: 0;
        transform: translateY(-50%) translateX(100%);
    }
}

/* Adjust transition for mobile (bottom) */
@media (max-width: 767px) {
    .nav-fade-enter-from,
    .nav-fade-leave-to {
        opacity: 0;
        transform: translateY(100%);
    }
}
</style>
