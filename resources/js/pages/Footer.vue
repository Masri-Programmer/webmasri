<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Link } from '@inertiajs/vue3';
import { Book, Heart, Linkedin, Github } from 'lucide-vue-next';
import googleIcon from '@/images/googleIcon.webp';

import { navigationLinks } from '@/lib/navigation';
import { privacyPolicy, termsConditions, imprint, contact, faq } from '@/routes';
import AppLogoIcon from '@/components/AppLogoIcon.vue';

const { t } = useI18n();
const year = new Date().getFullYear();

// Define all footer link data in a structured and maintainable way
const footerSections = computed(() => ({
    // These are links to sections on the homepage.
    // They are dynamically generated from the main navigation config for consistency.
    product: navigationLinks
        .filter(link => ['features', 'about', 'projects', 'statistics', 'pricing', 'testimonials'].includes(link.id))
        .map(link => ({
            text: t(link.i18nKey),
            href: link.href, // Use the href directly from navigation.ts (e.g., '/#features')
        })),

    // These are links to other resources, both internal and external.
    community: [
        { text: t('footer.links.github'), href: 'https://github.com/Masri-Programmer', isExternal: true },
        { text: t('footer.links.blogPortfolio'), href: 'https://masri.blog', isExternal: true },
        { text: t('footer.links.bookMeeting'), href: 'https://masri.blog/Book-a-Meeting', isExternal: true },
        { text: t('footer.links.contact'), href: contact.url(), isExternal: false },
        { text: t('footer.links.faq'), href: faq.url(), isExternal: false }, // Link to the dedicated FAQ page
    ],

    // These are internal links to legal pages.
    legal: [
        { text: t('footer.links.privacyPolicy'), href: privacyPolicy.url(), isExternal: false },
        { text: t('footer.links.termsOfService'), href: termsConditions.url(), isExternal: false },
        { text: t('footer.links.imprint'), href: imprint.url(), isExternal: false },
    ],
}));

// Consolidate social media icons for a cleaner, iterable template
const socialLinks = computed(() => [
    {
        name: 'GitHub',
        href: 'https://github.com/Masri-Programmer',
        ariaLabel: t('footer.githubAriaLabel'), // NOTE: Add this translation key
        icon: Github,
        isSvg: false,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mohamad-masri-89778915a/',
        ariaLabel: t('footer.linkedinAriaLabel'),
        icon: Linkedin,
        isSvg: false,
    },
    {
        name: 'Google Maps',
        href: 'https://share.google/6xMW6IuA4AZ6yzrNu',
        ariaLabel: t('footer.googleAriaLabel'),
        icon: googleIcon,
        isSvg: true,
    },
]);
</script>

<template>
    <footer class="w-full border-t border-border bg-background">
        <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative">
            <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div class="col-span-2 flex flex-col items-start gap-4 md:col-span-1">
                    <div class="flex flex-col items-center gap-2">
                        <Link href="/">
                            <AppLogoIcon class-name="cursor-pointer m-auto h-60 w-65 relative -top-3 left-0 hidden sm:block" />
                        </Link>
                    </div>
                    <!-- <p class="text-sm text-muted-foreground">{{ $t('footer.tagline') }}</p> -->
                </div>

                
                <div class="space-y-4">
                    <h4 class="font-semibold  tracking-tighter 
                    ">{{ $t('footer.headings.product') }}</h4>
                    <ul class="space-y-2">
                        <li v-for="link in footerSections.product" :key="link.text">
                            <a :href="link.href" class="text-sm text-muted-foreground transition-colors hover:text-foreground">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h4 class="font-semibold  tracking-tighter 
                    ">{{ $t('footer.headings.community') }}</h4>
                    <ul class="space-y-2">
                        <li v-for="link in footerSections.community" :key="link.text">
                            <a v-if="link.isExternal" :href="link.href" class="text-sm text-muted-foreground transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
                            <Link v-else :href="link.href" class="text-sm text-muted-foreground transition-colors hover:text-foreground">{{ link.text }}</Link>
                        </li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h4 class="font-semibold  tracking-tighter 
                    ">{{ $t('footer.headings.legal') }}</h4>
                    <ul class="space-y-2">
                        <li v-for="link in footerSections.legal" :key="link.text">
                            <Link :href="link.href" class="text-sm text-muted-foreground transition-colors hover:text-foreground">{{ link.text }}</Link>
                        </li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <Link href="/">
                            <AppLogoIcon class-name="cursor-pointer m-auto h-60 w-65 relative -top-3 left-0 sm:hidden " />
                        </Link>
                </div>

            </div>
        </div>

        <div class="border-t border-border py-6">
            <div class="container mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
                <p class="text-center text-sm text-muted-foreground sm:text-left">{{ $t('footer.copyright', { year }) }}</p>

                <i18n-t keypath="footer.madeWith" tag="p" class="hidden items-center gap-1.5 text-center text-sm text-muted-foreground md:flex">
                    <template #heartIcon>
                        <Heart class="h-4 w-4 fill-red-500 text-red-500" />
                    </template>
                    <template #authorLink>
                        <a href="https://masri.blog" target="_blank" rel="noopener noreferrer" class="font-medium text-foreground hover:underline tracking-tighter">Masri Programmer</a>
                    </template>
                </i18n-t>

                <div class="flex items-center gap-1">
                    <a
                        v-for="social in socialLinks"
                        :key="social.name"
                        :href="social.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="social.ariaLabel"
                        class="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                          <component v-if="!social.isSvg" :is="(social.icon as any)" class="h-4 w-4" />
                        <img v-else :src="social.icon as any" class="h-4 w-4" :alt="social.name" />
                    </a>
                    </div>
            </div>
        </div>
    </footer>
</template>