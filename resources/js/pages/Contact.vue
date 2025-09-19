<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification' 
import { contact } from '@/routes'
import { useFetch } from '@vueuse/core'

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
const { isFetching, execute } = useFetch(contact.url(), {
  immediate: false,
  afterFetch: (ctx) => {
    if (ctx.data && !ctx.response?.ok) {
      toast.success(t('contactForm.success'))
      form.name = ''
      form.email = ''
      form.message = ''
    }
    return ctx
  },
  onFetchError: (ctx) => {
    toast.error(t('contactForm.error'))
    return ctx
  },
}).post(form)

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) {
    toast.warning(t('contactForm.missingFields'))
    return
  }
  
  const emailData = {
      ...form,
      subject: `New Contact Form Submission from ${form.name}`,
      to: 'hallo@masri-programmer.de',
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
          <Button variant="outline" class="w-full" size="lg" :disabled="isFetching">
            {{ t('consultation.button') }}
          </Button>
        </a>
      </CardFooter>
    </Card>
  </div>
 </Layout>
</template>