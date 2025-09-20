<script setup lang="ts">
import Marquee from '@/components/ui/marquee/Marquee.vue';
import {
    BarChart,
    BrainCircuit,
    Cog,
    DollarSign,
    EyeOff,
    Figma,
    FileDown,
    Github,
    Globe,
    Languages,
    LayoutGrid,
    LayoutTemplate,
    Link,
    Lock,
    Mail,
    MonitorSmartphone,
    Move,
    NotebookText,
    Palette,
    PlusSquare,
    RefreshCw,
    Rocket,
    Search,
    Server,
    ShieldCheck,
    SunMoon,
    Type,
} from 'lucide-vue-next';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Define a static structure with translation keys and icons
const featureDefinitions = [
    // --- Core & Value ---
    { key: 'features.list.saveTime', icon: DollarSign },
    { key: 'features.list.selfHost', icon: Server },
    { key: 'features.list.noTracking', icon: EyeOff },
    { key: 'features.list.secure', icon: Lock },
    { key: 'features.list.seoFriendly', icon: Search },
    { key: 'features.list.gdprCompliant', icon: ShieldCheck },
    // --- Design & Customization ---
    { key: 'features.list.multipleTemplates', icon: LayoutTemplate },
    { key: 'features.list.figmaFiles', icon: Figma },
    { key: 'features.list.customPages', icon: Palette },
    { key: 'features.list.dragDrop', icon: Move },
    { key: 'features.list.customLayouts', icon: LayoutGrid },
    { key: 'features.list.customSections', icon: PlusSquare },
    { key: 'features.list.googleFonts', icon: Type },
    { key: 'features.list.responsiveDesign', icon: MonitorSmartphone },
    { key: 'features.list.lightDarkTheme', icon: SunMoon },
    // --- Content & Management ---
    { key: 'features.list.manageContent', icon: Cog },
    { key: 'features.list.personalNotes', icon: NotebookText },
    { key: 'features.list.pdfExport', icon: FileDown },
    { key: 'features.list.hostPublicly', icon: Globe },
    { key: 'features.list.customDomain', icon: Link },
    // --- Integrations & Analytics ---
    { key: 'features.list.aiIntegration', icon: BrainCircuit },
    { key: 'features.list.signInGithub', icon: Github },
    { key: 'features.list.signInGoogle', icon: Globe },
    { key: 'features.list.signInEmail', icon: Mail },
    { key: 'features.list.twoFactorAuth', icon: ShieldCheck },
    { key: 'features.list.analytics', icon: BarChart },
    { key: 'features.list.speedOptimized', icon: Rocket },
    { key: 'features.list.multiLanguage', icon: Languages },
    // --- Support & Future ---
    { key: 'features.list.continuousImprovements', icon: RefreshCw },
];

// Dynamically build the features array based on the current language
const features = computed(() =>
    featureDefinitions.map((feature) => ({
        text: t(feature.key),
        icon: feature.icon,
    })),
);

const third = computed(() => Math.ceil(features.value.length / 3));
const firstThird = computed(() => features.value.slice(0, third.value));
const secondThird = computed(() => features.value.slice(third.value, third.value * 2));
const thirdThird = computed(() => features.value.slice(third.value * 2));
</script>

<template>
    <section id="features" class="parallax-section bg-parallax-1">
        <div class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                <div class="space-y-4 text-left">
                    <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl" style="color: var(--sidebar-primary-foreground);">
                        <!-- <Focus :sentence="$t('features.title')" :animationDuration="0.1" :manualMode="false" :blurAmount="2"/> -->
                        {{ $t('features.title') }}
                    </h2>
                    <p class="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" style="color: var(--sidebar-primary-foreground);">
                        {{ $t('features.description') }}
                    </p>
                </div>
                <div class="space-y-4">
                    <Marquee pause-on-hover class="[--duration:60s]">
                        <div
                            v-for="(feature, index) in firstThird"
                            :key="`first-${index}`"
                            class="flex items-center gap-2 rounded-lg bg-muted p-3 text-sm font-medium text-muted-foreground"
                        >
                            <component :is="feature.icon" class="h-4 w-4 flex-shrink-0" />
                            <span>{{ feature.text }}</span>
                        </div>
                    </Marquee>
                    <Marquee reverse pause-on-hover class="[--duration:60s]">
                        <div
                            v-for="(feature, index) in secondThird"
                            :key="`second-${index}`"
                            class="flex items-center gap-2 rounded-lg bg-muted p-3 text-sm font-medium text-muted-foreground"
                        >
                            <component :is="feature.icon" class="h-4 w-4 flex-shrink-0" />
                            <span>{{ feature.text }}</span>
                        </div>
                    </Marquee>
                    <Marquee pause-on-hover class="[--duration:60s]">
                        <div
                            v-for="(feature, index) in thirdThird"
                            :key="`third-${index}`"
                            class="flex items-center gap-2 rounded-lg bg-muted p-3 text-sm font-medium text-muted-foreground"
                        >
                            <component :is="feature.icon" class="h-4 w-4 flex-shrink-0" />
                            <span>{{ feature.text }}</span>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    </section>
</template>
