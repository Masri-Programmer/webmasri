<script setup lang="ts">
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

// Assuming your shadcn-vue components are in '~/components/ui'
// Adjust paths if your project structure is different.
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

/**
 * The `useStorage` hook remains the core of the global state management.
 * It reactively syncs the `selectedCurrency` with localStorage.
 */
const selectedCurrency = useStorage<'eur' | 'usd'>('user-selected-currency', 'eur')

/**
 * Toggles the currency between 'eur' and 'usd'.
 * This single function replaces the two separate `setCurrency` methods.
 */
function toggleCurrency() {
  selectedCurrency.value = selectedCurrency.value === 'eur' ? 'usd' : 'eur'
}

/**
 * Dynamically generates an accessible label for screen readers.
 */
const ariaLabel = computed(() =>
  `Toggle currency. Currently selected: ${selectedCurrency.value === 'eur' ? 'Euro' : 'US Dollar'}`
)

/**
 * Provides helpful context for the tooltip.
 */
const tooltipText = computed(() =>
  `Switch to ${selectedCurrency.value === 'eur' ? 'USD' : 'EUR'}`
)
</script>

<template>
  <TooltipProvider>
    <Tooltip :delay-duration="0">
      <TooltipTrigger as-child>
        <Button
          variant="outline"
          size="icon"
          :aria-label="ariaLabel"
          @click="toggleCurrency"
        >
          <span class="text-base font-semibold">
            {{ selectedCurrency === 'eur' ? '€' : '$' }}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{{ tooltipText }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>