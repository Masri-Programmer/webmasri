<script setup lang="ts">
import Title from '@/components/Title.vue';
import Layout from '@/layouts/Layout.vue';
import { privacyPolicy } from '@/routes';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const sections = tm('privacyPolicy.sections');
</script>

<template>
    <Layout :head="t('privacyPolicy.title')" :link="privacyPolicy.url()" :description="t('privacyPolicy.description')">
        <div class="read page-custom">
            <Title title="privacyPolicy.title" subtitle-key="privacyPolicy.description" tag="h1" align="left" />
            <hr />
            <main class="prose dark:prose-invert mt-8 max-w-none space-y-8">
                <section v-for="(section, key) in sections" :key="key">
                    <h2
                        class="not-prose rounded-md p-2 text-xl font-semibold"
                        :class="{
                            'bg-primary text-primary-foreground': section.style !== 'destructive',
                            'bg-destructive text-destructive-foreground uppercase': section.style === 'destructive',
                        }"
                    >
                        {{ section.title }}
                    </h2>

                    <div class="mt-4 space-y-4">
                        <template v-for="(item, index) in section.content" :key="index">
                            <p v-if="item.type === 'p'" :class="{ 'font-semibold': item.style === 'bold' }">
                                {{ item.text }}
                            </p>

                            <ul v-else-if="item.type === 'list'" class="list-disc space-y-2 pl-5">
                                <li v-for="(listItem, i) in item.items" :key="i">
                                    {{ listItem }}
                                </li>
                            </ul>
                        </template>
                    </div>
                </section>
            </main>
        </div>
    </Layout>
</template>
