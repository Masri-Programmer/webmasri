<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Motion } from 'motion-v'

// Props definition remains unchanged
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitleKey: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: false,
    default: null,
  },
  align: {
    type: String as () => '' | 'center',
    default: 'center',
  },
})

const { t } = useI18n()
const titleCharacters = computed(() => t(props.title).split(''))

const containerClasses = computed(() => {
  if (props.align === 'center') {
    return 'flex flex-col items-center justify-center space-y-4 text-center'
  }
  return 'space-y-4 text-'
})
</script>

<template>
  <div :class="containerClasses">
    <div class="space-y-2">
      <div
        v-if="tagline"
        class="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
      >
        {{ t(tagline) }}
      </div>

      <h2 class="text-3xl font-bold  sm:text-5xl">
        <Motion
          v-for="(char, idx) in titleCharacters"
          :key="`${char}-${idx}`"
          as="span"
          class="inline-block"
          :initial="{ x: -10, opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
          :transition="{ duration: 0.5, delay: idx * 0.04 }"
          v-html="char === ' ' ? '&nbsp;' : char"
        />
      </h2>

      <p class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {{ t(subtitleKey) }}
      </p>
    </div>
  </div>
</template>