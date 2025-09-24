<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Layout from '@/layouts/Layout.vue';
import { faq } from '@/routes';

const { t, tm } = useI18n();

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
    answer: tm(`faq.list.${key}.answer`),
  }))
);
</script>

<template>
  <Layout :head="t('faq.title')" :link="faq.url()" :description="t('faq.subtitle')">
    <section class="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mt-8">
      <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10">
        <div class="space-y-4 text-left">
          <h4 class="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">{{ t('faq.title') }}</h4>
          <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {{ t('faq.subtitle') }}
          </p>
        </div>
        <Accordion type="single" collapsible class="w-full text-foreground">
          <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`">
            <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
            <AccordionContent>
              <div class="space-y-4">
                <template v-for="(block, blockIndex) in faq.answer" :key="blockIndex">
                  <ul v-if="block.type === 'list'" class="list-disc space-y-2 pl-5">
                    <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
                      {{ item }}
                    </li>
                  </ul>

                  <p v-else-if="block.type === 'paragraph'">
                    <template v-if="Array.isArray(block.content)">
                      <template v-for="(chunk, chunkIndex) in block.content" :key="chunkIndex">
                        <a v-if="chunk.type === 'link'" :href="chunk.href" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">
                          {{ chunk.value }}
                        </a>
                        <span v-else>{{ chunk.value }}</span>
                      </template>
                    </template>
                    <template v-else>
                      {{ block.content }}
                    </template>
                  </p>
                  
                  <small v-else-if="block.type === 'small'" class="block text-sm">
                     {{ block.content }}
                   </small>
                </template>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  </Layout>
</template>