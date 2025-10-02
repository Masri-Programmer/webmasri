<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        default: 'default', // 'default', 'muted'
    },
    fullWidth: {
        type: Boolean,
        default: false,
    },
});

const sectionClasses = computed(() => {
    const classes = [];
    if (props.background === 'muted') {
        classes.push('bg-muted/40 dark:bg-background');
    }
    // Add more background variations here if needed
    // else if (props.background === 'dark') { ... }

    if (!props.fullWidth) {
        classes.push('py-16 sm:py-20 lg:py-24');
    }
    return classes;
});
</script>
<template>
    <section :id="id" :class="sectionClasses">
        <div class="container mx-auto max-w-7xl overflow-hidden px-8 sm:px-14 lg:px-20" :class="{ 'py-16 sm:py-20 lg:py-24': fullWidth }">
            <slot />
        </div>
    </section>
</template>
