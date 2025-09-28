<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ShimmerButton from '@/components/ui/shimmer-button/ShimmerButton.vue';
import webmockup from '@/images/mockup.webp';
import { pricing } from '@/routes';
import { Book } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});
const { t } = useI18n();
</script>

<template>
    <section id="hero" class="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div class="z-10 container mx-auto mt-6 max-w-7xl px-4 py-12 sm:px-6 md:mt-0 lg:px-8">
            <div class="z-10 grid w-full max-w-7xl grid-cols-1 items-start gap-8 align-top lg:grid-cols-2">
                <div class="flex flex-col items-start justify-center space-y-6">
                    <h1 class="text-focus-in text-5xl font-bold tracking-tighter text-foreground sm:text-6xl xl:text-7xl/none">
                        {{ t('hero.title') }}
                        <!-- <FlipWords
                            :words="[t('hero.flipWords.craft'), t('hero.flipWords.design'), t('hero.flipWords.create')]"
                            :duration="2000"
                            class="!text-sidebar-ring"
                            v-if="isMounted"
                        />. -->
                    </h1>

                    <p class="text-focus-in max-w-prose text-muted-foreground md:text-xl">
                        {{ t('hero.description') }}
                        <!-- <TextGenerateEffect v-if="isMounted" class="" :words="t('hero.description')" /> -->
                    </p>

                    <div class="flex flex-wrap gap-4">
                        <a target="_blank" href="https://cal.com/mohamad-masri-jfc90n/30min">
                            <ShimmerButton class="shadow-2xl" shimmer-size="2px">
                                <span
                                    class="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10"
                                >
                                    {{ t('hero.cta.bookMeeting') }}
                                </span>
                            </ShimmerButton>
                        </a>
                        <Button as="a" :href="pricing.url()" rel="noopener noreferrer" size="lg" class="rounded-full" variant="secondary">
                            <Book class="mr-2 h-4 w-4" />
                            {{ t('hero.cta.learnMore') }}
                        </Button>
                    </div>
                </div>
                <img :src="webmockup" alt="web mockup safari" class="swing-in-top-fwd rounded" loading="lazy" decoding="async" />
                <!-- <div class="flex items-center justify-center" v-if="isMounted">
                    <CardContainer>
                        <SafariMockup url="" :src="webmockup" class="size-full" />
                    </CardContainer>
                </div> -->
            </div>
        </div>
        <!-- <InteractiveGridPattern
            v-if="isMounted"
            class="absolute inset-0 h-full w-full skew-y-12 [mask-image:radial-gradient(1000px_circle_at_left_center,white,transparent)]"
        /> -->
    </section>
</template>
