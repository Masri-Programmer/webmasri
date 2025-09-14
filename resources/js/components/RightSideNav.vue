<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useIntersectionObserver,  } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import { navigationLinks } from '@/lib/navigation';
import { useI18n } from 'vue-i18n';
import { usePage } from '@inertiajs/vue3';
import { AppPageProps } from '@/types'; 


const page = usePage();
const customProps = page.props as AppPageProps;
const { t } = useI18n();

const activeSection = ref('hero');

const isScrollingProgrammatically = ref(false);
const targetSectionId = ref<string | null>(null);

onMounted(() => {
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
        <nav v-if="activeSection !== 'hero'" class="hidden md:block fixed top-1/2 right-8 z-50 -translate-y-1/2 transform">
            <TooltipProvider :delay-duration="100">
                <ul class="flex flex-col items-center gap-3">
                    <li v-for="item in navigationLinks" :key="item.id">
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
