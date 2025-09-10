<script setup lang="ts">
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue'
import { Card, CardContent } from '@/components/ui/card'
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const statDefinitions = [
    { value: 25.00, key: 'statistics.experience' },
    { value: 40, key: 'statistics.projects' },
    { value: 25, key: 'statistics.clients' },
    { value: 10, key: 'statistics.technologies' },
];

const stats = computed(() => 
    statDefinitions.map(stat => ({
        value: stat.value,
        label: t(stat.key),
    }))
);
</script>

<template>
  <section id="Statistics" class="w-full py-16 px-4">
    <div class="container mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
      <Card
        v-for="stat in stats"
        :key="stat.label"
        class="text-center"
      >
        <CardContent class="flex flex-col items-center justify-center p-6">
          <div class="text-4xl font-bold tracking-tighter text-primary md:text-5xl">
            <NumberTicker :value="stat.value" />+
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            {{ stat.label }}
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
</template>