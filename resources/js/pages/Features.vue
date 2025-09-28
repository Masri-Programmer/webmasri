<script setup lang="ts">
import Title from '@/components/Title.vue';
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
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});

const iconMap = {
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
};

const featureDefinitions = [
    // --- Core & Value ---
    { key: 'features.list.saveTime', iconName: 'DollarSign' },
    { key: 'features.list.selfHost', iconName: 'Server' },
    { key: 'features.list.noTracking', iconName: 'EyeOff' },
    { key: 'features.list.secure', iconName: 'Lock' },
    { key: 'features.list.seoFriendly', iconName: 'Search' },
    { key: 'features.list.gdprCompliant', iconName: 'ShieldCheck' },
    // --- Design & Customization ---
    { key: 'features.list.multipleTemplates', iconName: 'LayoutTemplate' },
    { key: 'features.list.figmaFiles', iconName: 'Figma' },
    { key: 'features.list.customPages', iconName: 'Palette' },
    { key: 'features.list.dragDrop', iconName: 'Move' },
    { key: 'features.list.customLayouts', iconName: 'LayoutGrid' },
    { key: 'features.list.customSections', iconName: 'PlusSquare' },
    { key: 'features.list.googleFonts', iconName: 'Type' },
    { key: 'features.list.responsiveDesign', iconName: 'MonitorSmartphone' },
    { key: 'features.list.lightDarkTheme', iconName: 'SunMoon' },
    // ... add the rest of your features here using iconName: 'IconNameString'
    { key: 'features.list.continuousImprovements', iconName: 'RefreshCw' },
];

const features = computed(() =>
    featureDefinitions.map((feature) => ({
        text: t(feature.key),
        icon: iconMap[feature.iconName as keyof typeof iconMap],
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
                <Title :title="'features.title'" :subtitleKey="'features.description'" align="left" />
                <div>
                     
                    <div v-if="isMounted" class="space-y-4">
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

                     <noscript data-ssr-features>
                        <ul class="flex flex-wrap gap-2">
                            <li
                                v-for="feature in features"
                                :key="feature.text"
                                class="flex items-center gap-2 rounded-lg bg-muted p-3 text-sm font-medium text-muted-foreground"
                            >
                                 <span>{{ feature.text }}</span>
                            </li>
                        </ul>
                    </noscript>
                </div>
            </div>
        </div>
    </section>
</template>
