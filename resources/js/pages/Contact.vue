
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useForm } from '@inertiajs/vue3'
import { useToast } from 'vue-toastification' // A great choice for notifications from your package.json
import { contact } from '@/routes'
/**
 * Note: These imports assume you have shadcn-vue or a similar UI library set up.
 * The paths might need to be adjusted based on your project structure.
 * e.g., '@/lib/utils', '@/components/ui/button', etc.
 */
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const { t } = useI18n()
const toast = useToast()

type Plan = 'landingPage' | 'website' | 'shop' | 'shop_cms'

const plans = [
    { id: 'landingPage', titleKey: 'plans.landingPage.title', descriptionKey: 'plans.landingPage.description' },
    { id: 'website', titleKey: 'plans.website.title', descriptionKey: 'plans.website.description' },
    { id: 'shop', titleKey: 'plans.shop.title', descriptionKey: 'plans.shop.description' },
    { id: 'shop_cms', titleKey: 'plans.shop_cms.title', descriptionKey: 'plans.shop_cms.description' },
]

// 3. Set up the form using Inertia's helper for state management, validation, and submission
const form = useForm({
    plan: null as Plan | null,
    name: '',
    email: '',
    message: '',
})

const handleSubmit = () => {
    form.post('/contact', {
        onSuccess: () => {
            toast.success(t('messages.success'))
            form.reset() 
        },
        onError: () => {
            toast.error(t('messages.error'))
        },
    })
}

const isPlanSelected = computed(() => !!form.plan)
</script>

<template>
  <Layout :head="t('contact.title')" :link="contact.url()" :description="t('contact.description')">
 <div class="container mx-auto max-w-4xl py-12 md:py-16">
        <Card class="w-full">
            <CardHeader class="text-center">
                <CardTitle class="text-3xl font-bold">{{ t('title') }}</CardTitle>
                <CardDescription>{{ t('subtitle') }}</CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit.prevent="handleSubmit" class="space-y-8">
                    <fieldset class="space-y-4">
                        <legend class="text-xl font-semibold">{{ t('step1.title') }}</legend>
                        <RadioGroup v-model="form.plan" class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div v-for="plan in plans" :key="plan.id">
                                <RadioGroupItem :id="plan.id" :value="plan.id" class="peer sr-only" />
                                <Label
                                    :for="plan.id"
                                    class="flex h-full cursor-pointer flex-col rounded-md border-2 border-muted bg-popover p-4 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <span class="mb-1 font-semibold">{{ t(plan.titleKey) }}</span>
                                    <p class="text-sm text-muted-foreground">{{ t(plan.descriptionKey) }}</p>
                                </Label>
                            </div>
                        </RadioGroup>
                        <div v-if="form.errors.plan" class="text-sm font-medium text-destructive">{{ form.errors.plan }}</div>
                    </fieldset>

                    <div v-if="isPlanSelected" class="space-y-4 animate-in fade-in duration-500">
                        <h2 class="text-xl font-semibold">{{ t('step2.title') }}</h2>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                             <div class="space-y-2">
                                <Label for="name">{{ t('step2.labels.name') }}</Label>
                                <Input
                                    id="name"
                                    v-model="form.name"
                                    :placeholder="t('step2.placeholders.name')"
                                    required
                                />
                                <div v-if="form.errors.name" class="text-sm font-medium text-destructive">{{ form.errors.name }}</div>
                            </div>
                             <div class="space-y-2">
                                <Label for="email">{{ t('step2.labels.email') }}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    v-model="form.email"
                                    :placeholder="t('step2.placeholders.email')"
                                    required
                                />
                                <div v-if="form.errors.email" class="text-sm font-medium text-destructive">{{ form.errors.email }}</div>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <Label for="message">{{ t('step2.labels.message') }}</Label>
                            <Textarea
                                id="message"
                                v-model="form.message"
                                :placeholder="t('step2.placeholders.message')"
                                class="min-h-[120px]"
                                required
                            />
                            <div v-if="form.errors.message" class="text-sm font-medium text-destructive">{{ form.errors.message }}</div>
                        </div>
                    </div>

                    <div v-if="isPlanSelected" class="flex justify-end pt-4">
                         <Button type="submit" size="lg" :disabled="form.processing">
                             {{ form.processing ? t('button.sending') : t('button.send') }}
                         </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
  </Layout>
</template>