<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const testimonialDefinitions = [
 {
  name: 'Marvin Piepjack',
  handle: 'https://piepjack-clothing.de',
    key: 'testimonials.list.marvinPiepjack.text',
  rating: 5,
 },
 {
  name: 'Hussein Khashan',
  handle: 'https://hk-energieberatung.de',
    key: 'testimonials.list.husseinKhashab.text',
    rating: 5,
 },
];

const testimonials = computed(() =>
    testimonialDefinitions.map(testimonial => ({
        ...testimonial,
        text: t(testimonial.key),
    }))
);
</script>

<template>
  <section id="Testimonials" class="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
   <div class="flex flex-col items-center text-center">
    <h3 class="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">{{ $t('testimonials.title') }}</h3>
   </div>
   <div class="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="testimonial in testimonials" :key="testimonial.handle" class="rounded shadow-md ">
     <div class="flex items-center space-x-4">
      <div>
       </div>
     </div>
     <div class="relative">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512"
       fill="currentColor"
       class="absolute left-0 top-0 h-8 w-8 text-muted"
      >
       <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
       <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
      </svg>
      <blockquote class="px-12 py-1 text-base italic text-muted-foreground">{{ testimonial.text }} - {{ testimonial.name }}</blockquote>
      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512"
       fill="currentColor"
      	class="absolute bottom-0 right-0 h-8 w-8 text-muted"
      >
       <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z" />
       <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z" />
      </svg>
     </div>
    </div>
   </div>
  </section>
</template>