<script setup lang="ts">
import Title from '@/components/Title.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const props = defineProps({
    faqKeys: {
        type: Array,
        required: true,
        default: () => [],
    },
});
const faqs = computed(() =>
    props.faqKeys.map((key) => ({
        question: t(`faq.list.${key}.question`),
        answer: tm(`faq.list.${key}.answer`),
    })),
);
</script>

<template>
    <Title :title="'faq.title'" :subtitleKey="'faq.subtitle'" align="left" />
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
                                    <a
                                        v-if="chunk.type === 'link'"
                                        :href="chunk.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="text-blue-600 underline hover:text-blue-800"
                                    >
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
</template>
