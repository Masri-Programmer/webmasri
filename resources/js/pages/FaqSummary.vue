<script setup lang="ts">
import FAQ from '@/components/FAQ.vue';

const faqKeys = ['projectFlow', 'selfMaintenance', 'costs', 'newWebsiteNeeded'];
</script>

<template>
    <FAQ :faqKeys="faqKeys" id="faq" />
</template>
