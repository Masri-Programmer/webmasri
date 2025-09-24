<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
import { ArrowUp } from 'lucide-vue-next';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { y: scrollY } = useWindowScroll({
    throttle: 100,
});

const scrollHeight = ref(0);
const clientHeight = ref(0);
const isVisible = computed(() => scrollY.value > 400);

const radius = 20;
const circumference = 2 * Math.PI * radius;

const scrollProgress = computed(() => {
    // This line is the fix. It re-calculates dimensions on every scroll check.
    updateScrollDimensions();

    const totalScrollable = scrollHeight.value - clientHeight.value;
    if (totalScrollable <= 0) return 0;
    const progress = (scrollY.value / totalScrollable) * 100;
    return Math.min(progress, 100);
});

const progressOffset = computed(() => {
    return circumference - (scrollProgress.value / 100) * circumference;
});

const scrollToTop = () => {
    if (typeof window === 'undefined') return;

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const updateScrollDimensions = () => {
    if (typeof document === 'undefined') return;
    scrollHeight.value = document.documentElement.scrollHeight;
    clientHeight.value = document.documentElement.clientHeight;
};

onMounted(() => {
    updateScrollDimensions();
    window.addEventListener('resize', updateScrollDimensions);
});

onUnmounted(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateScrollDimensions);
    }
});
</script>

<template>
    <Transition name="fade-scale">
        <button
            v-if="isVisible"
            type="button"
            :title="t('scrollToTop.label')"
            :aria-label="t('scrollToTop.label')"
            class="fixed right-6 bottom-12 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-card p-0 shadow-lg ring-1 ring-border/50 transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            @click="scrollToTop"
        >
            <ArrowUp class="h-6 w-6 text-primary" />
            <svg class="absolute inset-0 h-full w-full" viewBox="0 0 48 48" aria-hidden="true">
                <circle class="stroke-current text-secondary/50" :cx="24" :cy="24" :r="radius" stroke-width="3" fill="none" />
                <circle
                    class="stroke-current text-primary transition-all duration-200 ease-linear"
                    :cx="24"
                    :cy="24"
                    :r="radius"
                    stroke-width="3"
                    fill="none"
                    stroke-linecap="round"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="progressOffset"
                    transform="rotate(-90 24 24)"
                />
            </svg>
        </button>
    </Transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
