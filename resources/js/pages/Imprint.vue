<script setup lang="ts">
import Title from '@/components/Title.vue';
import Layout from '@/layouts/Layout.vue';
import { imprint } from '@/routes';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <Layout :head="t('imprint.title')" :link="imprint.url()" :description="t('imprint.subTitle')">
        <div class="read page-custom">
            <header class="border-b pb-4">
                <Title title="imprint.title" tag="h1" align="left" />
            </header>

            <main class="mt-8 max-w-none">
                <div class="bg-card text-card-foreground rounded-md border p-6">
                    <h2 class="mb-4 text-2xl font-semibold tracking-tight">
                        {{ t('imprint.subTitle') }}
                    </h2>
                    <div class="space-y-2 text-base">
                        <p class="font-semibold">{{ t('imprint.contact.company') }}</p>
                        <p v-html="t('imprint.contact.nameAndAddress').replace(/\n/g, '<br />')"></p>
                        <p>
                            <span class="font-medium">{{ t('imprint.contact.phoneLabel') }}</span>
                            <a :href="'tel:' + t('imprint.contact.phoneNumber')" class="text-primary ml-2 hover:underline">
                                {{ t('imprint.contact.phoneNumber') }}
                            </a>
                        </p>
                        <p>
                            <span class="font-medium">{{ t('imprint.contact.emailLabel') }}</span>
                            <a :href="'mailto:hallo@masri-programmer.de'" class="text-primary ml-2 hover:underline"> hallo@masri-programmer.de </a>
                        </p>
                    </div>
                </div>

                <div class="mt-8">
                    <h3 class="font-semibold">{{ t('imprint.vat.title') }}</h3>
                    <p>{{ t('imprint.vat.subTitle') }} {{ t('imprint.vat.number') }}</p>
                </div>

                <!-- <div class="mt-8 not-prose text-center">
          <img 
            :src="t('imprint.legalSupport.imageUrl')" 
            :alt="t('imprint.legalSupport.altText')" 
            class="mx-auto h-24 w-auto object-contain"
          >
          <p class="mt-2 text-sm text-muted-foreground">{{ t('imprint.legalSupport.caption') }}</p>
        </div> -->

                <section class="mt-8">
                    <h2 class="not-prose bg-primary text-primary-foreground rounded-md p-2 text-xl font-semibold">
                        {{ t('imprint.copyright.title') }}
                    </h2>
                    <div class="mt-4 space-y-4">
                        <p>{{ t('imprint.copyright.p1') }}</p>
                        <p>{{ t('imprint.copyright.p2') }}</p>
                    </div>
                </section>
            </main>
        </div>
    </Layout>
</template>
