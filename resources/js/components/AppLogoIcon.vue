<script setup lang="ts">
// import logo from '@/images/MasriProgrammer/logo.svg';
import logo from '@/images/MasriProgrammer/logoBlack.svg';
import { Link } from '@inertiajs/vue3';
import type { HTMLAttributes } from 'vue';

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
        <img :src="logo" alt="Masri Programmer" class="dark:invert" />
    </Link>
</template>
