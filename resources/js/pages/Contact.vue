<script setup lang="ts">
import Title from '@/components/Title.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/layouts/Layout.vue';
import { contact } from '@/routes';
import { useFetch } from '@vueuse/core';
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useToast } from 'vue-toastification';

const { t } = useI18n();
const toast = useToast();

const form = reactive({
    name: '',
    email: '',
    message: '',
});

const { isFetching, execute } = useFetch(contact.url(), {
    immediate: false,
    afterFetch: (ctx) => {
        if (ctx.data && ctx.response?.ok) {
            toast.success(t('contactForm.success'));
            form.name = '';
            form.email = '';
            form.message = '';
        }
        return ctx;
    },
    onFetchError: (ctx) => {
        toast.error(t('contactForm.error'));
        return ctx;
    },
}).post(form);

async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
        toast.warning(t('contactForm.missingFields'));
        return;
    }

    await execute(form as any);
}
</script>

<template>
    <Layout :head="t('Contact')" :link="contact.url()" :description="t('Contact')">
        <div class="container mx-auto mt-8 max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <Card>
                <CardHeader>
                    <Title title="contactForm.title" subtitle-key="contactForm.description" tag="h1" />
                </CardHeader>
                <CardContent>
                    <form class="space-y-6" @submit.prevent="handleSubmit">
                        <div class="space-y-2">
                            <Label for="name">{{ t('contactForm.name.label') }}</Label>
                            <Input
                                id="name"
                                v-model="form.name"
                                autocomplete="true"
                                type="text"
                                :placeholder="t('contactForm.name.placeholder')"
                                required
                            />
                        </div>
                        <div class="space-y-2">
                            <Label for="email">{{ t('contactForm.email.label') }}</Label>
                            <Input id="email" autocomplete="true" v-model="form.email" type="email" placeholder="name@example.com" required />
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
                <CardFooter class="flex flex-col items-center gap-4 border-t pt-6">
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
