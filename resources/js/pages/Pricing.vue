<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Layout from '@/layouts/Layout.vue'
import { pricing } from '@/routes'
// Shadcn-vue & Lucide Icons
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, XCircle, Globe, Mail, MessageCircle, MapPin, Star, Clock, ShoppingCart } from 'lucide-vue-next'
import { ref } from 'vue'
import { ServiceCategory } from '@/types';

const { t } = useI18n()

// --- DATA STRUCTURE ---
const pricingData: Record<string, ServiceCategory> = {
  landingPage: {
    title: 'landingPage',
    priceRange: '200 Euro - 2,800 Euro',
    packages: [
      {
        structure: 'onePage',
        flexibility: 'infoAndBranding',
        languages: '1',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: false,
        liveOpeningHours: false,
        onlineStore: false,
      },
      {
        structure: 'multiplePages',
        flexibility: 'fullyCustomizable',
        languages: '1+',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: true,
        liveOpeningHours: true,
        onlineStore: false,
      },
      {
        structure: 'fullyCustomizable',
        flexibility: 'fullyCustomizable',
        languages: '1+',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: true,
        liveOpeningHours: true,
        onlineStore: false,
      },
    ],
  },
  website: {
    title: 'website',
    priceRange: '600 Euro to 5,000 Euro',
    packages: [
      {
        structure: 'onePage',
        flexibility: 'infoAndBranding',
        languages: '1',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: false,
        liveOpeningHours: false,
        onlineStore: false,
      },
      {
        structure: 'multiplePages',
        flexibility: 'fullyCustomizable',
        languages: '1+',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: true,
        liveOpeningHours: true,
        onlineStore: false,
      },
      {
        structure: 'fullyCustomizable',
        flexibility: 'fullyCustomizable',
        languages: '1+',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: true,
        liveOpeningHours: true,
        onlineStore: true,
      },
    ],
  },
  onlineShop: {
    title: 'onlineShop',
    priceRange: '2,200 Euro to 4,000 Euro',
    packages: [
      {
        structure: 'onePage',
        flexibility: 'infoAndBranding',
        languages: '1',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: false,
        liveOpeningHours: false,
        onlineStore: true,
      },
      {
        structure: 'multiplePages',
        flexibility: 'fullyCustomizable',
        languages: '1+',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: true,
        liveOpeningHours: true,
        onlineStore: true,
      },
      {
        structure: 'fullyCustomizable',
        flexibility: 'fullyCustomizable',
        languages: '1+',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: true,
        liveOpeningHours: true,
        onlineStore: true,
      },
    ],
  },
  onlineShopCMS: {
    title: 'onlineShopCMS',
    priceRange: '2,200 Euro to 4,000 Euro (incl. website and blog)',
    packages: [
      {
        structure: 'onePage',
        flexibility: 'infoAndBranding',
        languages: '1',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: false,
        liveOpeningHours: false,
        onlineStore: true,
      },
      {
        structure: 'multiplePages',
        flexibility: 'fullyCustomizable',
        languages: '1+',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: true,
        liveOpeningHours: true,
        onlineStore: true,
      },
      {
        structure: 'fullyCustomizable',
        flexibility: 'fullyCustomizable',
        languages: '1+',
        googleMaps: true,
        emailContact: true,
        whatsappContact: true,
        googleReviewsStars: true,
        googleReviewsIndividual: true,
        liveOpeningHours: true,
        onlineStore: true,
      },
    ],
  },
}

const additionalServices = {
  hosting: {
    title: 'hosting.title',
    price: 'hosting.price',
  },
  maintenance: [
    {
      title: 'maintenance.selfService.title',
      description: 'maintenance.selfService.description',
      price: 'maintenance.selfService.price',
    },
    {
      title: 'maintenance.fullService.title',
      description: 'maintenance.fullService.description',
      price: 'maintenance.fullService.price',
    },
  ],
  emailAndDomain: {
    title: 'emailAndDomain.title',
    description: 'emailAndDomain.description',
    price: 'emailAndDomain.price',
  },
}

// --- COMPONENT LOGIC ---
const selectedCategory = ref('website') 

// Get feature icon
const getFeatureIcon = (featureName: string) => {
  const icons = {
    googleMaps: MapPin,
    emailContact: Mail,
    whatsappContact: MessageCircle,
    googleReviewsStars: Star,
    googleReviewsIndividual: Star,
    liveOpeningHours: Clock,
    onlineStore: ShoppingCart,
    languages: Globe,
  }
  return icons[featureName as keyof typeof icons] || CheckCircle2
}

// Get package level name (Basic, Pro, Premium)
const getPackageLevel = (index: number) => {
  const levels = ['Basic', 'Pro', 'Premium']
  return levels[index] || `Package ${index + 1}`
}

// Check if category is featured (website is most popular)
const isFeaturedCategory = (categoryKey: string) => {
  return categoryKey === 'website'
}
</script>

<template>
  <Layout :head="t('pricing.pricing.title')" :link="pricing.url()">
  <section class="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="mx-auto max-w-4xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {{ t('pricing.title') }}
      </h1>
      <p class="mt-6 text-lg text-muted-foreground leading-relaxed">
        {{ t('pricing.description') }}
      </p>
    </div>

    <!-- Service Category Selector -->
    <div class="mt-12 flex flex-wrap justify-center gap-3">
      <Button
        v-for="(category, key) in pricingData"
        :key="key"
        :variant="selectedCategory === key ? 'default' : 'outline'"
        @click="selectedCategory = key"
        class="relative"
      >
        {{ t(category.title) }}
        <Badge v-if="isFeaturedCategory(key)" variant="secondary" class="ml-2 text-xs">
          {{ t('pricing.featured') }}
        </Badge>
      </Button>
    </div>

    <!-- Selected Category Display -->
    <div class="mt-12">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-foreground">
          {{ t(pricingData[selectedCategory].title) }}
        </h2>
        <p class="mt-2 text-lg font-semibold text-primary">
          {{ pricingData[selectedCategory].priceRange }}
        </p>
      </div>

      <!-- Package Cards -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="(pkg, index) in pricingData[selectedCategory].packages"
          :key="index"
          class="relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          :class="{
            'border-2 border-primary shadow-lg scale-105': index === 1,
            'border-border': index !== 1
          }"
        >
          <!-- Popular Badge for middle package -->
          <div v-if="index === 1" class="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <Badge class="bg-primary text-primary-foreground px-4 py-1">
              {{ t('pricing.featured') }}
            </Badge>
          </div>

          <CardHeader class="text-center pb-4">
            <CardTitle class="text-xl">{{ getPackageLevel(index) }}</CardTitle>
            <div class="mt-2">
              <Badge variant="outline" class="text-sm">
                {{ t(`packages.${pkg.structure}`) }}
              </Badge>
            </div>
          </CardHeader>

          <CardContent class="space-y-6">
            <!-- Structure & Flexibility -->
            <div class="space-y-3">
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium">{{ t('pricing.packages.structure') }}:</span>
                <span class="text-muted-foreground">{{ t(`packages.${pkg.structure}`) }}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium">{{ t('pricing.packages.flexibility') }}:</span>
                <span class="text-muted-foreground">{{ t(`packages.${pkg.flexibility}`) }}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium">{{ t('pricing.packages.languages') }}:</span>
                <span class="text-muted-foreground">{{ pkg.languages }}</span>
              </div>
            </div>

            <hr class="border-border">

            <!-- Features List -->
            <div class="space-y-3">
              <h4 class="font-semibold text-sm text-foreground mb-3">Included Features:</h4>

              <div
                v-for="(value, feature) in pkg"
                :key="feature"
                class="flex items-center space-x-3 text-sm"
                v-show="!['structure', 'flexibility', 'languages'].includes(feature)"
              >
                <component
                  :is="getFeatureIcon(feature)"
                  class="h-4 w-4 flex-shrink-0"
                  :class="{
                    'text-green-500': value === true,
                    'text-muted-foreground opacity-50': value === false,
                    'text-blue-500': typeof value === 'string'
                  }"
                />

                <span class="flex-1" :class="{
                  'text-foreground': value === true || typeof value === 'string',
                  'text-muted-foreground line-through': value === false
                }">
                  {{ t(`packages.${feature}`) }}
                </span>

                <div class="flex-shrink-0">
                  <CheckCircle2 v-if="value === true" class="h-4 w-4 text-green-500" />
                  <XCircle v-else-if="value === false" class="h-4 w-4 text-muted-foreground opacity-50" />
                  <Badge v-else-if="typeof value === 'string'" variant="secondary" class="text-xs">
                    {{ value }}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button
              class="w-full"
              :variant="index === 1 ? 'default' : 'outline'"
              size="lg"
            >
              {{ t('pricing.contactUs') }}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>

    <!-- Additional Services -->
    <div class="mt-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-foreground">
          {{ t('pricing.additionalServices') }}
        </h2>
        <p class="mt-4 text-muted-foreground">
          Essential services to complete your web presence
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <!-- Hosting -->
        <Card class="text-center">
          <CardHeader>
            <CardTitle class="text-lg">{{ t('pricing.hosting.title') }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground">{{ t('pricing.hosting.price') }}</p>
          </CardContent>
        </Card>

        <!-- Email & Domain -->
        <Card class="text-center">
          <CardHeader>
            <CardTitle class="text-lg">{{ t('pricing.emailAndDomain.title') }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-xs text-muted-foreground mb-2">{{ t('pricing.emailAndDomain.description') }}</p>
            <p class="text-sm font-semibold">{{ t('pricing.emailAndDomain.price') }}</p>
          </CardContent>
        </Card>

        <!-- Maintenance Options -->
        <Card
          v-for="(maintenance, index) in additionalServices.maintenance"
          :key="index"
          class="text-center"
        >
          <CardHeader>
            <CardTitle class="text-lg">{{ t(maintenance.title) }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-xs text-muted-foreground mb-2">{{ t(maintenance.description) }}</p>
            <p class="text-sm font-semibold">{{ t(maintenance.price) }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</Layout>
</template>