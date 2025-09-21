<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ShieldAlertIcon } from 'lucide-vue-next'
import { Head } from '@inertiajs/vue3'

const { t } = useI18n()

</script>

<template>
  <Head :title="t('forbidden.title')"/>
  <div class="flex min-h-screen flex-col items-center justify-center bg-background p-6">
    <div class="mx-auto flex max-w-lg flex-col items-center text-center">
      <ShieldAlertIcon
        class="mb-6 h-16 w-16 text-destructive"
        :stroke-width="1.5"
      />
      <h1 class="text-6xl font-bold tracking-tight text-primary">
        {{ t('forbidden.heading') }}
      </h1>
      <h2 class="mt-4 text-2xl font-semibold tracking-tight text-foreground">
        {{ t('forbidden.title') }}
      </h2>
      <p class="mt-4 text-base text-muted-foreground">
        {{ t('forbidden.message') }}
      </p>
      <a
        href="/"
        class="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {{ t('forbidden.button') }}
      </a>
    </div>
  </div>
</template>