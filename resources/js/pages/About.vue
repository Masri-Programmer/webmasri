<template>
    <section id="About" class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div class="space-y-4 text-left">
                <h2
                    class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent whitespace-pre-wrap max-lg:-mt-12 dark:from-white dark:to-slate-900/10"
                >
                    {{ $t('about.title') }}
                </h2>
                <i18n-t keypath="about.description" tag="p" class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    <template #blogLink>
                        <a href="https://masri.blog" target="_blank" class="underline">
                            {{ $t('about.blogLinkText') }}
                        </a>
                    </template>
                    <template #contactLink>
                        <a href="mailto:masri_mohamad@protonmail.com" class="underline">
                            {{ $t('about.contactLinkText') }}
                        </a>
                    </template>
                </i18n-t>
            </div>

            <div
                class="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background px-40 pt-8 pb-40 md:pb-60 md:shadow-xl"
            >
                <span
                    class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent whitespace-pre-wrap max-lg:-mt-12 dark:from-white dark:to-slate-900/10"
                >
                    {{ $t('about.globeTitle') }}
                </span>
                <Globe class="top-28" />
                <div
                    class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Globe from '@/components/ui/globe/Globe.vue';
</script>