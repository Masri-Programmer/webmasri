<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import { useI18n } from 'vue-i18n';
import { contact } from '@/routes';

const { t } = useI18n();
</script>

<template>
  <Layout :head="t('contact.title')" :link="contact.url()">

  </Layout>
</template>