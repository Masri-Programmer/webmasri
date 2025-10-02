<script setup lang="ts">
// import logo from '@/images/MasriProgrammer/logo.svg';
import logo from '@/images/newLogo/192x192/192x192_logo_dark_no_bg.svg';
import { Link } from '@inertiajs/vue3';
import type { HTMLAttributes } from 'vue';
import { defineOptions, defineProps } from 'vue';

defineOptions({
    inheritAttrs: false,
});

interface Props {
    className?: HTMLAttributes['class'];
}

defineProps<Props>();
</script>

<template>
    <Link href="/" :class="className" v-bind="$attrs">
        <img :src="logo" alt="Masri Programmer" class="dark:invert" loading="lazy" decoding="async" />
    </Link>
</template>
