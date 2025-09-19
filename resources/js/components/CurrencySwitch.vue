<script setup lang="ts">
import { computed } from 'vue'
import { useCurrency } from '@/composables/useCurrency'
import FooterToolbarButton from '@/components/FooterToolbarButton.vue' 

const { selectedCurrency, toggleCurrency, currencySymbol } = useCurrency()

const ariaLabel = computed(() =>
  `Toggle currency. Currently selected: ${selectedCurrency.value === 'eur' ? 'Euro' : 'US Dollar'}`
)

const tooltipText = computed(() =>
  `Switch to ${selectedCurrency.value === 'eur' ? 'USD' : 'EUR'}`
)
</script>

<template>
  <FooterToolbarButton
    :tooltip-text="tooltipText"
    :aria-label="ariaLabel"
    @click="toggleCurrency"
  >
    <span class="text-base font-semibold">
      {{ currencySymbol }}
    </span>
  </FooterToolbarButton>
</template>