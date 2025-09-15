<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'
import { Cookie } from 'lucide-vue-next'

// Assuming your shadcn-vue components are in a 'components/ui' directory.
// Please adjust the import paths according to your project structure.
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// i18n setup
const { t } = useI18n()

// Use localStorage to remember the user's choice.
// The banner will not show again if a value ('accepted' or 'declined') is set.
const cookieConsent = useStorage<'accepted' | 'declined' | null>('cookie-consent', null)

const showBanner = ref(!cookieConsent.value)

/**
 * Sets the cookie consent to 'accepted' and hides the banner.
 */
function acceptCookies() {
  cookieConsent.value = 'accepted'
  showBanner.value = false
  // You can add logic here to initialize analytics scripts, etc.
}

/**
 * Sets the cookie consent to 'declined' and hides the banner.
 */
function declineCookies() {
  cookieConsent.value = 'declined'
  showBanner.value = false
}
</script>

<template>
  <transition
    enter-active-class="animate-duration-500 animate-fade-in-up"
    leave-active-class="animate-duration-300 animate-fade-out-down"
  >
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 sm:left-auto sm:bottom-4 sm:right-4"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Consent Banner"
    >
      <Card class="w-full max-w-md shadow-2xl">
        <CardHeader>
          <div class="flex items-center justify-between">
            <CardTitle>{{ t('cookieBanner.title') }}</CardTitle>
            <Cookie class="h-6 w-6" />
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            {{ t('cookieBanner.description') }}
            <a href="/cookie-policy" class="underline transition-colors hover:text-foreground">
              {{ t('cookieBanner.learnMore') }}
            </a>
          </p>
        </CardContent>
        <CardFooter class="flex justify-end gap-x-3">
          <Button variant="outline" @click="declineCookies">
            {{ t('cookieBanner.decline') }}
          </Button>
          <Button @click="acceptCookies">
            {{ t('cookieBanner.accept') }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </transition>
</template>