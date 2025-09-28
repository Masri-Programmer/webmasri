<script setup lang="ts">
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
        <div class="text-focus-in space-y-2">
            <div v-if="tagline" class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {{ t(tagline) }}
            </div>

            <h1 v-if="tag === 'h1'" class="mb-6 text-3xl font-semibold tracking-tighter sm:text-5xl">
                {{ t(title) }}
            </h1>
            <h2 v-else-if="tag === 'h2'" class="mb-6 text-3xl font-semibold tracking-tighter sm:text-5xl">
                {{ t(title) }}
            </h2>
            <h3 v-else-if="tag === 'h3'" class="mb-6 text-3xl font-semibold tracking-tighter sm:text-5xl">
                {{ t(title) }}
            </h3>
            <h4 v-else-if="tag === 'h4'" class="mb-6 text-3xl font-semibold tracking-tighter sm:text-5xl">
                {{ t(title) }}
            </h4>
            <h5 v-else-if="tag === 'h5'" class="mb-6 text-3xl font-semibold tracking-tighter sm:text-5xl">
                {{ t(title) }}
            </h5>
            <h6 v-else-if="tag === 'h6'" class="mb-6 text-3xl font-semibold tracking-tighter sm:text-5xl">
                {{ t(title) }}
            </h6>

            <p v-if="subtitleKey" class="max-w-[900px] text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {{ t(subtitleKey) }}
            </p>
        </div>
    </div>
</template>
