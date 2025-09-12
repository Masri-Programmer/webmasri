<script setup lang="ts">
import AppearanceIcon from '@/components/AppearanceIcon.vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import Button from '@/components/ui/button/Button.vue';
import { Book, Github, Heart, Linkedin } from 'lucide-vue-next';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const linkDefinitions = {
    product: [
        { key: 'footer.links.features', href: '#features' },
        { key: 'footer.links.about', href: '#about' },
        { key: 'footer.links.statistics', href: '#statistics' },
        { key: 'footer.links.testimonials', href: '#testimonials' },
        { key: 'footer.links.faq', href: '#faq' },
    ],
    community: [
        { key: 'footer.links.github', href: 'https://github.com/Masri-Programmer/resumetowebsite.git' },
        { key: 'footer.links.blogPortfolio', href: 'https://masri.blog' },
        { key: 'footer.links.whatsapp', href: 'https://api.whatsapp.com/send/?phone=4917631579669&text&type=phone_number&app_absent=0' },
    ],
    legal: [
        { key: 'footer.links.privacyPolicy', href: '#' },
        { key: 'footer.links.termsOfService', href: '#' },
        { key: 'footer.links.imprint', href: '#' },
        { key: 'footer.links.contact', href: '#' },
    ],
};

const links = computed(() => ({
    product: linkDefinitions.product.map(link => ({ ...link, text: t(link.key) })),
    community: linkDefinitions.community.map(link => ({ ...link, text: t(link.key) })),
    legal: linkDefinitions.legal.map(link => ({ ...link, text: t(link.key) })),
}));

const year = new Date().getFullYear();
</script>

<template>
    <footer class="w-full border-t border-border bg-background">
        <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div class="col-span-2 flex flex-col items-start gap-4 md:col-span-1">
                    <div class="flex items-center gap-2">
                        <Book class="h-6 w-6" />
                        <span class="text-lg font-semibold">Masri Programmer</span>
                    </div>
                    <p class="text-sm">{{ $t('footer.tagline') }}</p>
                    <!-- <p class="text-xs">{{ $t('footer.germanLaw') }}</p> -->
                </div>

                <div class="space-y-4">
                    <h4 class="font-semibold">{{ $t('footer.headings.product') }}</h4>
                    <ul class="space-y-2">
                        <li v-for="link in links.product" :key="link.text">
                            <a :href="link.href" class="text-sm hover:text-foreground">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="font-semibold">{{ $t('footer.headings.community') }}</h4>
                    <ul class="space-y-2">
                        <li v-for="link in links.community" :key="link.text">
                            <a :href="link.href" class="text-sm hover:text-foreground" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="font-semibold">{{ $t('footer.headings.legal') }}</h4>
                    <ul class="space-y-2">
                        <li v-for="link in links.legal" :key="link.text">
                            <a :href="link.href" class="text-sm hover:text-foreground">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="border-t border-border py-4">
            <div class="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
                <p class="text-sm text-muted-foreground">{{ $t('footer.copyright', { year }) }}</p>

                <i18n-t keypath="footer.madeWith" tag="p" class="flex items-center gap-1.5 text-center text-sm">
                    <template #heartIcon>
                        <Heart class="h-4 w-4 fill-red-500 text-red-500" />
                    </template>
                    <template #authorLink>
                        <a href="https://masri.blog" target="_blank" rel="noopener noreferrer" class="font-medium hover:underline">Mohamad Masri</a>
                    </template>
                </i18n-t>

                <div class="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <a
                            href="https://github.com/Masri-Programmer/masri-web.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="$t('footer.githubAriaLabel')"
                        >
                            <Github class="h-5 w-5 hover:text-foreground" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon">
                         <a
                            href="https://www.linkedin.com/in/mohamad-masri-89778915a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="$t('footer.linkedinAriaLabel')"
                        >
                            <Linkedin class="h-5 w-5 hover:text-foreground" />
                        </a>
                    </Button>
                    <AppearanceIcon />
                    <LanguageSwitch />
                </div>
            </div>
        </div>
    </footer>
</template>