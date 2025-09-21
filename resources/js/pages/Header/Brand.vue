<template>
    <Link v href="/" class="flex grow items-center justify-start gap-x-3">
        <AppLogoIcon class-name="h-15 w-15" />
        <div class="hidden sm:block text-lg cursor-pointer transition-all duration-100 ease-in-out hover:font-bold">
            Masri Programmer
        </div>
    </Link>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import AppLogoIcon from '@/components/AppLogoIcon.vue';
</script>
