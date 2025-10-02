<script setup lang="ts">
import Title from '@/components/Title.vue';
import Layout from '@/layouts/Layout.vue';
import { termsConditions } from '@/routes';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const sections = tm('termsConditions.sections') as any[];
</script>

<template>
    <Layout :head="t('termsConditions.title')" :link="termsConditions.url()" :description="t('termsConditions.description')">
        <div class="read page-custom">
            <Title class="border-b pb-8" title="termsConditions.title" subtitle-key="termsConditions.description" tag="h1" align="left" />
            <main class="prose dark:prose-invert mt-8 max-w-none space-y-8">
                <section v-for="(section, key) in sections" :key="key" :aria-labelledby="`section-title-${key}`">
                    <h2 :id="`section-title-${key}`" class="not-prose rounded-md bg-primary p-2 text-xl font-semibold text-primary-foreground">
                        {{ section.title }}
                    </h2>
                    <div class="mt-4 space-y-4">
                        <template v-for="(item, index) in section.content" :key="index">
                            <p v-if="item.type === 'p'" v-html="item.text"></p>

                            <ul v-else-if="item.type === 'ul'" class="list-disc space-y-2 pl-5">
                                <li v-for="(listItem, i) in item.items" :key="i">{{ listItem }}</li>
                            </ul>
                        </template>
                    </div>
                </section>
            </main>
        </div>
    </Layout>
</template>
