<template>
    <div id="technologies" v-if="isMounted" class="relative hidden lg:block">
        <div class="absolute right-0 bottom-0 grid place-content-center p-6">
            <IconCloud :images="imageUrls" />
        </div>
    </div>
</template>

<script setup lang="ts">
import IconCloud from '@/components/ui/icon-cloud/IconCloud.vue';
import { onMounted, ref } from 'vue';

const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});

const slugs = ['typescript', 'javascript', 'vue', 'laravel', 'html5', 'css3', 'MySQL', 'nginx', 'git', 'github', 'visualstudiocode', 'figma'];

const imageUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
</script>
