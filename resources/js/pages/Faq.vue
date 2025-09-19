<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Layout from '@/layouts/Layout.vue';
import { faq } from '@/routes';

const { t } = useI18n();

const faqKeys = [
  'projectFlow',
  'selfMaintenance',
  'costs',
  'newWebsiteNeeded',
  'ownershipWebsite',
  'ownershipPrint',
  'duration',
  'brandWorkshop',
  'whatSetsMeApart',
  'clientContribution',
  'imageFormats',
  'hostingProvider',
  'seoToDo',
  'metaKeywords',
  'accessibility',
  'responsiveDesign',
];

const faqs = computed(() =>
  faqKeys.map(key => ({
    question: t(`faq.list.${key}.question`),
    answer: t(`faq.list.${key}.answer`),
  }))
);
</script>

<template>
   <Layout :head="t('faq.title')" :link="faq.url()" :description="t('faq.subtitle')">
    <section class="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mt-8">
      <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10">
        <div class="space-y-4 text-left">
          <h4 class="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">{{ $t('faq.title') }}</h4>
          <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {{ $t('faq.subtitle') }}
          </p>
        </div>
        <Accordion type="single" collapsible class="w-full text-foreground">
          <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`">
            <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
            <AccordionContent class="prose max-w-none prose-a:text-blue-600 prose-a:underline prose-a:hover:text-blue-800 dark:prose-invert" v-html="faq.answer" />
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  </Layout>
</template>