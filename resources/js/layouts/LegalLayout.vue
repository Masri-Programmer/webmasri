<script setup lang="ts">
import Layout from '@/layouts/Layout.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';


const props = defineProps<{
  pageKey: 'privacyPolicy' | 'termsConditions' | 'imprint';
  route: string;
}>();

const { t, tm } = useI18n();

const title = computed(() => t(`${props.pageKey}.title`));

const sections = computed(() => tm(`${props.pageKey}.sections`));

const isStandardSectionPage = computed(() =>
  ['privacyPolicy', 'termsConditions'].includes(props.pageKey),
);
</script>

<template>
  <Layout :head="title" :link="route">
    <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header class="border-b pb-4">
        <h1 class="text-3xl font-bold text-primary md:text-4xl">
          {{ title }}
        </h1>
      </header>

      <main class="prose dark:prose-invert mt-8 max-w-none">
        <template v-if="isStandardSectionPage">
          <section v-for="(section, key) in sections" :key="key" class="space-y-4">
            <h2
              class="not-prose rounded-md p-2 font-semibold text-xl"
              :class="{
                'bg-primary text-primary-foreground': section.style !== 'destructive',
                'uppercase bg-destructive text-destructive-foreground': section.style === 'destructive',
              }"
            >
              {{ section.title }}
            </h2>

            <div class="mt-4 space-y-4">
              <template v-for="(item, index) in section.content" :key="index">
                <p v-if="item.type === 'p'" :class="{ 'font-bold': item.style === 'bold' }" v-html="item.text" />
                <ul v-else-if="item.type === 'list'" class="list-disc space-y-2 pl-5">
                  <li v-for="(listItem, i) in item.items" :key="i" v-html="listItem" />
                </ul>
              </template>
            </div>
          </section>
        </template>

        <template v-else-if="pageKey === 'imprint'">
          <div class="not-prose rounded-lg border bg-card p-6 text-card-foreground">
            <h2 class="mb-4 text-2xl font-semibold tracking-tight">
              {{ t('imprint.subTitle') }}
            </h2>
            <div class="space-y-2 text-base">
              <p class="font-semibold">{{ t('imprint.contact.company') }}</p>
              <p v-html="t('imprint.contact.nameAndAddress').replace(/\n/g, '<br />')" />
              <p>
                <span class="font-medium">{{ t('imprint.contact.phoneLabel') }}</span>
                <a :href="`tel:${t('imprint.contact.phoneNumber')}`" class="ml-2 text-primary hover:underline">
                  {{ t('imprint.contact.phoneNumber') }}
                </a>
              </p>
              <p>
                <span class="font-medium">{{ t('imprint.contact.emailLabel') }}</span>
                <a :href="`mailto:${t('imprint.contact.emailAddress')}`" class="ml-2 text-primary hover:underline">
                  {{ t('imprint.contact.emailAddress') }}
                </a>
              </p>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="font-semibold">{{ t('imprint.vat.title') }}</h3>
            <p>{{ t('imprint.vat.subTitle') }} {{ t('imprint.vat.number') }}</p>
          </div>

          <div class="not-prose mt-8 text-center">
            <img
              :src="t('imprint.legalSupport.imageUrl')"
              :alt="t('imprint.legalSupport.altText')"
              class="mx-auto h-24 w-auto object-contain"
            >
            <p class="mt-2 text-sm text-muted-foreground">{{ t('imprint.legalSupport.caption') }}</p>
          </div>
          
          <section class="mt-8">
            <h2 class="not-prose rounded-md bg-primary p-2 font-semibold text-xl text-primary-foreground">
              {{ t('imprint.copyright.title') }}
            </h2>
            <div class="mt-4 space-y-4">
              <p>{{ t('imprint.copyright.p1') }}</p>
              <p>{{ t('imprint.copyright.p2') }}</p>
            </div>
          </section>
        </template>
      </main>
    </div>
  </Layout>
</template>