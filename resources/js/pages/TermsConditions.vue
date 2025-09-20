<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import { termsConditions } from '@/routes';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

// Use tm() to get the structured object from the i18n messages
const sections = tm('termsConditions.sections');
</script>

<template>
    <Layout :head="t('termsConditions.title')" :link="termsConditions.url()" :description="t('termsConditions.description')">
        <div class="container mx-auto mt-12 max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <header class="border-b pb-4">
                <h1 class="text-3xl font-bold tracking-tighter text-primary md:text-4xl">
                    {{ t('termsConditions.title') }}
                </h1>
            </header>

            <main class="prose dark:prose-invert mt-8 max-w-none space-y-8">
                <section v-for="(section, key) in sections" :key="key">
                    <h2 class="not-prose rounded-md bg-primary p-2 text-xl font-semibold text-primary-foreground">
                        {{ section.title }}
                    </h2>
                    <div class="mt-4 space-y-4">
                        <template v-for="(item, index) in section.content" :key="index">
                            <p v-if="item.type === 'p'" v-html="item.text"></p>

                            <ul v-else-if="item.type === 'list'" class="list-disc space-y-2 pl-5">
                                <li v-for="(listItem, i) in item.items" :key="i" v-html="listItem"></li>
                            </ul>
                        </template>
                    </div>
                </section>
            </main>
        </div>
    </Layout>
</template>
