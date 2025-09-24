<script setup lang="ts">
import { Motion } from 'motion-v';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Props definition
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitleKey: {
        type: String,
        required: false,
    },
    tagline: {
        type: String,
        required: false,
        default: null,
    },
    align: {
        type: String as () => 'center' | 'left',
        default: 'center',
    },
    tag: {
        type: String as () => 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
        default: 'h2',
        validator: (value: string) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
    },
});

const { t } = useI18n();
const titleCharacters = computed(() => t(props.title).split(''));

// Optimized and corrected class computation
const containerClasses = computed(() => [
    'space-y-4',
    {
        'flex flex-col items-center justify-center text-center': props.align === 'center',
        'text-left': props.align === 'left',
    },
]);
</script>

<template>
    <div :class="containerClasses">
        <div class="space-y-2">
            <div v-if="tagline" class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {{ t(tagline) }}
            </div>

            <component :is="tag" class="mb-6 text-3xl font-bold tracking-tighter sm:text-5xl">
                <Motion
                    v-for="(char, idx) in titleCharacters"
                    :key="`${char}-${idx}`"
                    as="span"
                    class="inline-block"
                    :initial="{ x: -10, opacity: 0 }"
                    :animate="{ x: 0, opacity: 1 }"
                    :transition="{ duration: 0.5, delay: idx * 0.04 }"
                    v-html="char === ' ' ? '&nbsp;' : char"
                />
            </component>

            <p v-if="subtitleKey" class="max-w-[900px] text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {{ t(subtitleKey) }}
            </p>
        </div>
    </div>
</template>
