<script setup lang="ts">
import { useStorage } from '@vueuse/core'

import { Button } from '@/components/ui/button'

const selectedCurrency = useStorage<'eur' | 'usd'>('user-selected-currency', 'eur')

/**
 * A simple function to update the currency in storage.
 * @param {'eur' | 'usd'} currency The currency to set as active.
 */
function setCurrency(currency: 'eur' | 'usd') {
  selectedCurrency.value = currency
}
</script>

<template>
  <div class="flex items-center gap-2">
    <Button
      :variant="selectedCurrency === 'eur' ? 'secondary' : 'ghost'"
      size="icon"
      aria-label="Set currency to Euro"
      @click="setCurrency('eur')"
    >
      €
    </Button>

    <Button
      :variant="selectedCurrency === 'usd' ? 'secondary' : 'ghost'"
      size="icon"
      aria-label="Set currency to US Dollar"
      @click="setCurrency('usd')"
    >
      $
    </Button>
  </div>
</template>