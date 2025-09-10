<template>
    <header class="bg-secondary text-xs sm:text-sm fixed top-0 left-0 right-0 px-4 z-10" @click="redirect">
        <div class="container mx-auto flex items-center justify-center hover:p-4 text-primary transition-all duration-300 ease-in-out ">
            <HandHeart :size="15" />
            <i18n-t keypath="header.donationMessage" tag="span" class="ml-2">
                <template #link>
                    <a href="https://github.com/sponsors/Masri-Programmer?o=esb" class="underline cursor-pointer">
                        {{ $t('header.donationLink') }}
                    </a>
                </template>
            </i18n-t>
        </div>
    </header>
</template>

<script setup lang="ts">
import { HandHeart } from 'lucide-vue-next';

const redirect = (e: Event) => {
    e.preventDefault(); 
    window.open('https://github.com/sponsors/Masri-Programmer?o=esb', '_blank');
}
</script>