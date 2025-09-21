<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { HandHeart } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import DonationBtns from './DonationBtns.vue'

const { t } = useI18n()
</script>

<template>
  <TooltipProvider>
    <Tooltip :delay-duration="0">
      <DropdownMenu>
        <TooltipTrigger as-child>
          <DropdownMenuTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              :aria-label="t('header.donationMessage')"
              class="size-9"
            >
              <HandHeart class="h-4 w-4 text-pink-500" />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>{{ t('header.donationMessage') }}</p>
        </TooltipContent>
        <DropdownMenuContent align="end">
         <DonationBtns />
        </DropdownMenuContent>
      </DropdownMenu>
    </Tooltip>
  </TooltipProvider>
</template>