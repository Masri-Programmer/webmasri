<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useScrollSpy } from '@/composables/useScrollSpy';
import { navigationLinks } from '@/lib/navigation';
import { onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isNavVisible = ref(false);

const { activeSection, handleScroll } = useScrollSpy();

const handleMouseMove = (event: MouseEvent) => {
    const threshold = 250;
    const { clientX } = event;
    const windowWidth = window.innerWidth;
    isNavVisible.value = clientX <= threshold || clientX >= windowWidth - threshold;
};

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
    <Transition name="nav-fade">
        <nav
            v-if="isNavVisible"
            class="shadow-t-lg bg-red- fixed right-0 bottom-0 left-0 z-50 m-3 flex h-16 w-auto content-center items-center justify-around rounded-full md:top-1/2 md:right-6 md:bottom-auto md:left-auto md:h-auto md:w-auto md:-translate-y-1/2 md:transform md:flex-col md:justify-center md:p-2 md:shadow-lg"
        >
            <TooltipProvider :delay-duration="100">
                <ul class="flex w-full content-center items-center justify-between gap-0 rounded-full p-1 backdrop-blur-sm sm:gap-3 md:flex-col">
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

@media (min-width: 768px) {
    .nav-fade-enter-from,
    .nav-fade-leave-to {
        opacity: 0;
        transform: translateY(-50%) translateX(100%);
    }
}

@media (max-width: 767px) {
    .nav-fade-enter-from,
    .nav-fade-leave-to {
        opacity: 0;
        transform: translateY(100%);
    }
}
</style>
