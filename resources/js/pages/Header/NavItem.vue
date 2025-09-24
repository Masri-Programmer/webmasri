<template>
    <component :is="componentTag" v-bind="componentAttrs">
        <div v-if="isDesktop" class="text-sm leading-tight font-medium">
            {{ t(item.i18nKey) }}
        </div>
        <template v-else>{{ t(item.i18nKey) }}</template>
    </component>
</template>

<script setup lang="ts">
import { useScrollSpy } from '@/composables/useScrollSpy';
import { Link } from '@inertiajs/vue3';
import { computed, type Component } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
    item: {
        type: 'scroll' | 'link' | 'external';
        i18nKey: string;
        target: any;
    };
    onNavigate?: () => void;
    context: 'desktop' | 'mobile';
}>();

const { t } = useI18n();

const { activeSection, handleScroll } = useScrollSpy();
const isDesktop = computed(() => props.context === 'desktop');
const isActive = computed(() => props.item.type === 'scroll' && props.item.target === activeSection);

const componentTag = computed<string | Component>(() => {
    switch (props.item.type) {
        case 'scroll':
            return 'button';
        case 'link':
            return Link;
        case 'external':
            return 'a';
        default:
            return 'div';
    }
});

const itemClasses = computed(() => [
    isDesktop.value
        ? 'flex h-full w-full select-none flex-col justify-end rounded-md p-4 text-left no-underline outline-none hover:bg-accent focus:bg-accent'
        : 'text-left hover:underline',
    { 'text-blue-600 hover:text-blue-700': isActive.value },
]);
const handleScrollClick = () => {
    handleScroll(props.item.target as string);
    if (props.onNavigate) {
        props.onNavigate();
    }
};

const componentAttrs = computed(() => {
    const attrs: Record<string, any> = {
        class: itemClasses.value,
    };

    switch (props.item.type) {
        case 'scroll':
            attrs['aria-label'] = t(props.item.i18nKey);
            attrs.onClick = handleScrollClick;
            break;
        case 'link':
            attrs.href = props.item.target.url();
            if (props.onNavigate) attrs.onClick = props.onNavigate;
            break;
        case 'external':
            attrs.href = props.item.target as string;
            attrs.target = '_blank';
            attrs.rel = 'noopener noreferrer';
            if (props.onNavigate) attrs.onClick = props.onNavigate;
            break;
    }
    return attrs;
});
</script>
