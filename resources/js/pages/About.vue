<template>
    <section id="about" class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10">
            <div class="mt-12 space-y-4 text-left">
                <h2
                    class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl leading-none font-semibold whitespace-pre-wrap text-transparent max-lg:-mt-12 sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-slate-900/10"
                >
                    {{ t('about.title') }}
                </h2>
                <i18n-t
                    keypath="about.description"
                    tag="p"
                    class="text-start text-muted-foreground md:text-xl/loose lg:text-base/loose xl:text-xl/loose"
                >
                    <template #blogLink>
                        <a href="https://masri.blog" target="_blank" class="underline">
                            {{ t('about.blogLinkText') }}
                        </a>
                    </template>
                    <template #contactLink>
                        <a href="mailto:hallo@masri-programmer.de" class="underline">
                            {{ t('about.contactLinkText') }}
                        </a>
                    </template>
                </i18n-t>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});
</script>
