<script setup lang="ts">
import FAQ from '@/components/FAQ.vue';
import Layout from '@/layouts/Layout.vue';
import { faq } from '@/routes';
import { useI18n } from 'vue-i18n';

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
    'technologiesUser',
];
</script>

<template>
    <Layout :head="t('faq.title')" :link="faq.url()" :description="t('faq.subtitle')">
        <div class="mt-8">
            <FAQ :faqKeys="faqKeys" id="faq_page" />
        </div>
    </Layout>
</template>
