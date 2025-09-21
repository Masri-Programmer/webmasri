<script setup lang="ts">
import Title from '@/components/Title.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faq } from '@/routes';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const summaryFaqKeys = ['projectFlow', 'costs', 'duration'];

const faqs = computed(() =>
    summaryFaqKeys.map((key) => ({
        question: t(`faq.list.${key}.question`),
        answer: t(`faq.list.${key}.answer`),
    })),
);
</script>

<template>
    <section id="faq" class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10">
            <Title :title="'faqSummary.title'" :subtitleKey="'faqSummary.subtitle'" />
            <Accordion type="single" collapsible class="w-full text-foreground">
                <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`">
                    <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
                    <AccordionContent
                        class="prose prose-a:text-blue-600 prose-a:underline prose-a:hover:text-blue-800 dark:prose-invert max-w-none"
                        v-html="faq.answer"
                    />
                </AccordionItem>
            </Accordion>

            <div class="mt-8 flex justify-center">
                <Button as="a" :href="faq.url()" size="lg">
                    {{ t('faqSummary.viewAllButton') }}
                </Button>
            </div>
        </div>
    </section>
</template>
