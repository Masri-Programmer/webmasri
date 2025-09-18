<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { contact } from '@/routes'
import { useFetch } from '@vueuse/core'

// Assuming you have shadcn-vue or similar components set up.
// If not, these can be standard HTML elements styled with Tailwind CSS.
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { reactive } from 'vue'
import Layout from '@/layouts/Layout.vue'

// --- SETUP ---
const { t } = useI18n()
const toast = useToast()

// --- STATE ---
const form = reactive({
  name: '',
  email: '',
  message: '',
})

// --- FORM SUBMISSION ---
// Note: Replace '/api/contact' with your actual backend endpoint.
const { isFetching, execute } = useFetch('/api/contact', {
  immediate: false, // Don't execute immediately
  // The 'afterFetch' hook is called when the request is finished.
  afterFetch: (ctx) => {
    if (ctx.data && !ctx.response?.ok) {
      toast.success(t('contactForm.success'))
      // Reset form on success
      form.name = ''
      form.email = ''
      form.message = ''
    }
    return ctx
  },
  // The 'onFetchError' hook is called when a network error occurs.
  onFetchError: (ctx) => {
    toast.error(t('contactForm.error'))
    return ctx
  },
}).post(form)

// --- HANDLERS ---
async function handleSubmit() {
  if (!form.name || !form.email || !form.message) {
    toast.warning('Please fill out all fields.')
    return
  }
  
  const emailData = {
      ...form,
      subject: `New Contact Form Submission from ${form.name}`,
      to: 'hallo@masri-programmer.de', // The target email address
  };

  await execute(emailData as any)
}

// Schedule a Consultation
</script>

<template>
  <Layout :head="t('contact.title')" :link="contact.url()" :description="t('contact.description')">
  <div class="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <Card>
      <CardHeader>
        <CardTitle class="text-3xl">
          {{ t('contactForm.title') }}
        </CardTitle>
        <CardDescription>
          {{ t('contactForm.description') }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="space-y-2">
            <Label for="name">{{ t('contactForm.name.label') }}</Label>
            <Input
              id="name"
              v-model="form.name"
              type="text"
              :placeholder="t('contactForm.name.placeholder')"
              required
            />
          </div>
          <div class="space-y-2">
            <Label for="email">{{ t('contactForm.email.label') }}</Label>
            <Input
              id="email"
              v-model="form.email"
              type="email"
              :placeholder="t('contactForm.email.placeholder')"
              required
            />
          </div>
          <div class="space-y-2">
            <Label for="message">{{ t('contactForm.message.label') }}</Label>
            <Textarea
              id="message"
              v-model="form.message"
              :placeholder="t('contactForm.message.placeholder')"
              class="min-h-[120px]"
              required
            />
          </div>
          <Button type="submit" class="w-full" :disabled="isFetching">
            <span v-if="isFetching">{{ t('contactForm.submitting') }}</span>
            <span v-else>{{ t('contactForm.submit') }}</span>
          </Button>
        </form>
      </CardContent>
      <CardFooter class="flex flex-col items-center gap-4 pt-6 border-t">
        <p class="text-sm text-muted-foreground">
          {{ t('consultation.text') }}
        </p>
        <a href="https://masri.blog/Book-a-Meeting" target="_blank" rel="noopener noreferrer" class="w-full">
          <Button variant="outline" class="w-full">
            {{ t('consultation.button') }}
          </Button>
        </a>
      </CardFooter>
    </Card>
  </div>
 </Layout>
</template>