<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { useFetch } from '@vueuse/core'
import { contact } from '@/routes'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Layout from '@/layouts/Layout.vue'

// --- COMPOSABLES ---
const { t } = useI18n()
const toast = useToast()

// --- STATE MANAGEMENT ---
// State for the form inputs, bound with v-model
const form = reactive({
  name: '',
  email: '',
  message: '',
})

// State for holding validation errors for each field
const errors = reactive({
  name: '',
  email: '',
  message: '',
})

// Reactive payload that will be sent to the API.
// useFetch will automatically track changes to this object.
const apiPayload = reactive({
  name: '',
  email: '',
  message: '',
  subject: '',
  to: '',
})

// --- VALIDATION ---
/**
 * Validates the form fields and populates the errors object.
 * @returns {boolean} - True if the form is valid, otherwise false.
 */
function validateForm(): boolean {
  // Clear previous errors before re-validating
  Object.assign(errors, { name: '', email: '', message: '' })
  let isValid = true

  // Name validation
  if (!form.name.trim()) {
    errors.name = t('contactForm.validation.nameRequired', 'Name is required.')
    isValid = false
  }

  // Email validation
  if (!form.email.trim()) {
    errors.email = t('contactForm.validation.emailRequired', 'Email is required.')
    isValid = false
  }
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = t('contactForm.validation.emailInvalid', 'Please enter a valid email address.')
    isValid = false
  }

  // Message validation
  if (!form.message.trim()) {
    errors.message = t('contactForm.validation.messageRequired', 'A message is required.')
    isValid = false
  }

  return isValid
}

// --- API SUBMISSION ---
const { isFetching, execute } = useFetch(contact.url(), {
  immediate: false, // Do not execute immediately on component load
  afterFetch: (ctx) => {
    // This hook runs after the fetch request is finished
    if (ctx.response && ctx.response.ok) {
      toast.success(t('contactForm.success', 'Message sent successfully!'))
      // Reset form and error states
      Object.assign(form, { name: '', email: '', message: '' })
      Object.assign(errors, { name: '', email: '', message: '' })
      Object.assign(apiPayload, { name: '', email: '', message: '', subject: '', to: '' })
    }
    else {
      // Handle server-side validation errors or other non-2xx responses
      const errorMessage = ctx.data?.message || t('contactForm.error', 'An unexpected error occurred.')
      toast.error(errorMessage)
    }
    return ctx
  },
  onFetchError: (ctx) => {
    // This hook runs when a network error occurs (e.g., failed to fetch)
    const errorMessage = ctx.data?.message || t('contactForm.error', 'A network error occurred. Please try again.')
    toast.error(errorMessage)
    return ctx
  },
}).post(apiPayload) // Tell useFetch to use the POST method and send our reactive payload

// --- EVENT HANDLERS ---
/**
 * Handles the form submission event.
 */
async function handleSubmit() {
  if (!validateForm()) {
    // If validation fails, do not proceed with submission
    return
  }

  // If validation passes, update the reactive payload
  // This will be automatically picked up by useFetch when execute() is called
  Object.assign(apiPayload, {
    ...form,
    subject: `New Contact Form Submission from ${form.name}`,
    to: 'hallo@masri-programmer.de', // For security, consider making this a server-side env variable
  })

  await execute()
}
</script>

<template>
  <Layout :head="t('contact')" :link="contact.url()" :description="t('contact')">
    <div class="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Card class="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle class="text-3xl">
            {{ t('contactForm.title') }}
          </CardTitle>
          <CardDescription>
            {{ t('contactForm.description') }}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form class="space-y-6" @submit.prevent="handleSubmit" novalidate>
            <!-- Name Field -->
            <div class="space-y-2">
              <Label for="name">{{ t('contactForm.name.label') }}</Label>
              <Input
                id="name"
                v-model="form.name"
                type="text"
                :placeholder="t('contactForm.name.placeholder')"
                required
                :aria-invalid="!!errors.name"
                aria-describedby="name-error"
                :class="{ 'border-red-500 focus-visible:ring-red-500': errors.name }"
              />
              <p v-if="errors.name" id="name-error" class="text-sm text-red-600">
                {{ errors.name }}
              </p>
            </div>

            <!-- Email Field -->
            <div class="space-y-2">
              <Label for="email">{{ t('contactForm.email.label') }}</Label>
              <Input
                id="email"
                v-model="form.email"
                type="email"
                :placeholder="t('contactForm.email.placeholder')"
                required
                :aria-invalid="!!errors.email"
                aria-describedby="email-error"
                :class="{ 'border-red-500 focus-visible:ring-red-500': errors.email }"
              />
              <p v-if="errors.email" id="email-error" class="text-sm text-red-600">
                {{ errors.email }}
              </p>
            </div>

            <!-- Message Field -->
            <div class="space-y-2">
              <Label for="message">{{ t('contactForm.message.label') }}</Label>
              <Textarea
                id="message"
                v-model="form.message"
                :placeholder="t('contactForm.message.placeholder')"
                class="min-h-[120px]"
                required
                :aria-invalid="!!errors.message"
                aria-describedby="message-error"
                :class="{ 'border-red-500 focus-visible:ring-red-500': errors.message }"
              />
              <p v-if="errors.message" id="message-error" class="text-sm text-red-600">
                {{ errors.message }}
              </p>
            </div>

            <!-- Submit Button -->
            <Button type="submit" class="w-full" :disabled="isFetching">
              <span v-if="isFetching">{{ t('contactForm.submitting', 'Submitting...') }}</span>
              <span v-else>{{ t('contactForm.submit', 'Send Message') }}</span>
            </Button>
          </form>
        </CardContent>

        <!-- Consultation Footer -->
        <CardFooter class="flex flex-col items-center gap-4 pt-6 border-t">
          <p class="text-sm text-muted-foreground text-center">
            {{ t('consultation.text') }}
          </p>
          <a href="https://masri.blog/Book-a-Meeting" target="_blank" rel="noopener noreferrer" class="w-full">
            <Button variant="outline" class="w-full" size="lg">
              {{ t('consultation.button') }}
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  </Layout>
</template>
