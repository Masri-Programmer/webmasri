<script setup lang="ts">
import BlurReveal from '@/components/ui/blur-reveal/BlurReveal.vue';
import { Button } from '@/components/ui/button';
import { CardContainer } from '@/components/ui/card-3d';
import FlipWords from '@/components/ui/flip-words/FlipWords.vue';
import InteractiveGridPattern from '@/components/ui/interactive-grid-pattern/InteractiveGridPattern.vue';
import SafariMockup from '@/components/ui/safari-mockup/SafariMockup.vue';
import ShimmerButton from '@/components/ui/shimmer-button/ShimmerButton.vue';
import TextGenerateEffect from '@/components/ui/text-generate-effect/TextGenerateEffect.vue';
import { Book } from 'lucide-vue-next';
import webmockup from './mockup.png';
// import resume from '../../images/resume.webp';
</script>

<template>
    <section id="Hero" class="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div class="z-10 container mx-auto max-w-7xl px-4 py-12">
            <div class="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 align-top">
                <div class="flex flex-col items-start justify-center space-y-6">
                    <BlurReveal :delay="0.2" :duration="0.75">
                        <h1 class="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl xl:text-7xl/none">
                            {{ $t('hero.title') }}
                            <FlipWords :words="[$t('hero.flipWords.craft'), $t('hero.flipWords.design'), $t('hero.flipWords.create')]" :duration="2000" class="!text-sidebar-ring" />.
                        </h1>
                    </BlurReveal>

                    <p class="max-w-prose text-muted-foreground md:text-xl">
                        <TextGenerateEffect
                            class=""
                            :words="$t('hero.description')"
                        />
                    </p>

                    <div class="flex flex-wrap gap-4">
                        <a target="_blank" href="https://cal.com/mohamad-masri-jfc90n/30min">
                            <ShimmerButton class="shadow-2xl" shimmer-size="2px">
                                <span
                                    class="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10"
                                >
                                    {{ $t('hero.cta.bookMeeting') }}
                                </span>
                            </ShimmerButton>
                        </a>
                        <Button as="a" href="#Faq" rel="noopener noreferrer" size="lg" class="rounded-full" variant="secondary">
                            <Book class="mr-2 h-4 w-4" />
                            {{ $t('hero.cta.learnMore') }}
                        </Button>
                    </div>
                </div>

                <div class="flex items-center justify-center">
                    <CardContainer>
                        <SafariMockup url="" :src="webmockup" class="size-full" />
                        </CardContainer>
                </div>
            </div>
        </div>
        <InteractiveGridPattern
            class="absolute inset-0 h-full w-full skew-y-12 [mask-image:radial-gradient(1000px_circle_at_left_center,white,transparent)]"
        />
    </section>
</template>