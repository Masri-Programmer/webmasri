<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import { useI18n } from 'vue-i18n';
import { privacyPolicy } from '@/routes';

const { t, tm } = useI18n();

const sections = tm('privacyPolicy.sections');
</script>

<template>
  <Layout :head="t('privacyPolicy.title')" :link="privacyPolicy.url()" :description="t('privacyPolicy.description')">
    <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header class="border-b pb-4">
        <h1 class="text-3xl md:text-4xl font-bold text-primary">
          {{ t('privacyPolicy.title') }}
        </h1>
      </header>

      <main class="mt-8 space-y-8 prose dark:prose-invert max-w-none">
        <section v-for="(section, key) in sections" :key="key">
          <h2
            class="font-semibold text-xl p-2 rounded-md not-prose"
            :class="{
              'text-primary-foreground bg-primary': section.style !== 'destructive',
              'text-destructive-foreground bg-destructive uppercase': section.style === 'destructive',
            }"
          >
            {{ section.title }}
          </h2>

          <div class="mt-4 space-y-4">
            <template v-for="(item, index) in section.content" :key="index">
              <p v-if="item.type === 'p'" :class="{ 'font-bold': item.style === 'bold' }">
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