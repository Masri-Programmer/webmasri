<template>
    <button
        v-if="item.type === 'scroll'"
        :aria-label="t(item.i18nKey)"
        @click="handleScrollClick"
        :class="itemClasses"
    >
        <div v-if="isDesktop" class="text-sm font-medium leading-tight">
            {{ t(item.i18nKey) }}
        </div>
        <template v-else>{{ t(item.i18nKey) }}</template>
    </button>

    <Link
        v-else-if="item.type === 'link'"
        :href="item.target.url()"
        @click="onNavigate"
        :class="itemClasses"
    >
        <div v-if="isDesktop" class="text-sm font-medium leading-tight">
            {{ t(item.i18nKey) }}
        </div>
        <template v-else>{{ t(item.i18nKey) }}</template>
    </Link>

    <a
        v-else-if="item.type === 'external'"
        :href="item.target as string"
        target="_blank"
        rel="noopener noreferrer"
        @click="onNavigate"
        :class="itemClasses"
    >
        <div v-if="isDesktop" class="text-sm font-medium leading-tight">
            {{ t(item.i18nKey) }}
        </div>
        <template v-else>{{ t(item.i18nKey) }}</template>
    </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    item: any;
    handleScroll: (id: string) => void;
    onNavigate?: () => void;
    context: 'desktop' | 'mobile';
}>();

const { t } = useI18n();

const isDesktop = computed(() => props.context === 'desktop');

const itemClasses = computed(() =>
    isDesktop.value
        ? 'flex h-full w-full select-none flex-col justify-end rounded-md p-4 text-left no-underline outline-none hover:bg-accent focus:bg-accent'
        : 'text-left hover:underline'
);

const handleScrollClick = () => {
    props.handleScroll(props.item.target as string);
    if (props.onNavigate) {
        props.onNavigate();
    }
};
</script>


