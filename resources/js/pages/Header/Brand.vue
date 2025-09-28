<template>
    <Link href="/" class="inline-flex items-center">
        <AppLogoIcon class-name="h-12 w-12" />
        <div class="hidden cursor-pointer text-lg transition-all duration-100 ease-in-out hover:font-bold sm:block">Masri Programmer</div>
    </Link>
</template>

<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { Link } from '@inertiajs/vue3';
</script>
