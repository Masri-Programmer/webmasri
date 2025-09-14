<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import { useI18n } from 'vue-i18n';
import { privacyPolicy } from '@/routes';

const { t } = useI18n();
console.log(privacyPolicy.url());
</script>

<template>
   <Layout :head=" t('privacyPolicy.title')" :link="privacyPolicy.url()" >
  <div class="bg-background text-foreground p-4 md:p-8">
    <div class="max-w-4xl mx-auto container space-y-8">
      <header class="flex justify-between items-center border-b pb-4">
        <h1 class="text-3xl md:text-4xl font-bold text-primary">
          {{ t('privacyPolicy.title') }}
        </h1>
      </header>

      <main class="space-y-6 prose dark:prose-invert max-w-none">
        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.introduction.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.introduction.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.introduction.p2') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.dataCollection.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.dataCollection.p1') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li v-for="item in t('privacyPolicy.sections.dataCollection.list').split(',')" :key="item">{{ item.trim() }}</li>
          </ul>
          <p>{{ t('privacyPolicy.sections.dataCollection.p2') }}</p>
          <p>{{ t('privacyPolicy.sections.dataCollection.p3') }}</p>
        </section>
        
        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.hosting.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.hosting.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.hosting.p2') }}</p>
          <p>{{ t('privacyPolicy.sections.hosting.p3') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.cookies.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.cookies.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.cookies.p2') }}</p>
          <p>{{ t('privacyPolicy.sections.cookies.p3') }}</p>
          <p>{{ t('privacyPolicy.sections.cookies.p4') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.contact.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.contact.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.contact.p2') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.rights.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.rights.p1') }}</p>
          <ul class="list-disc pl-5 space-y-1">
            <li v-for="item in t('privacyPolicy.sections.rights.list').split(',')" :key="item">{{ item.trim() }}</li>
          </ul>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-destructive-foreground bg-destructive p-2 rounded-md uppercase">
            {{ t('privacyPolicy.sections.objection.title') }}
          </h2>
          <p class="font-bold">{{ t('privacyPolicy.sections.objection.p1') }}</p>
          <p>{{ t('privacyPolicy.sections.objection.p2') }}</p>
          <p class="font-bold">{{ t('privacyPolicy.sections.objection.p3') }}</p>
          <p>{{ t('privacyPolicy.sections.objection.p4') }}</p>
        </section>

        <section>
          <h2 class="font-semibold text-xl text-primary-foreground bg-primary p-2 rounded-md">
            {{ t('privacyPolicy.sections.duration.title') }}
          </h2>
          <p>{{ t('privacyPolicy.sections.duration.p1') }}</p>
        </section>
      </main>
    </div>
  </div>
  </Layout>
</template>

<style scoped>
.prose h2 {
    margin-top: 1.5em;
    margin-bottom: 0.8em;
}
.prose p, .prose ul {
    margin-bottom: 1em;
}
</style>