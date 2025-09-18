<template>
       <div class="flex flex-col items-stretch gap-2 p-2">
                                    <a
                                        href="https://github.com/sponsors/Masri-Programmer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Sponsor Masri-Programmer"
                                        class="flex items-center justify-center gap-x-2 rounded-md bg-pink-50 px-3 py-2 text-xs font-semibold text-pink-600 transition-colors hover:bg-pink-100 dark:bg-pink-950 dark:text-pink-300 dark:hover:bg-pink-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                                            />
                                        </svg>
                                        <span>{{ t('sponsor.github') }}</span>
                                    </a>

                                    <a
                                        href="https://g.page/r/CQl3_s6R1DkiEAE/review"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Leave us a review on Google"
                                        class="flex items-center justify-center gap-x-2 rounded-md bg-[#4285F4] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3367D6]"
                                    >
                                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="white">
                                            <path
                                                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.19,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.19,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
                                            />
                                        </svg>
                                        <span>{{ t('sponsor.google') }}</span>
                                    </a>
                                </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<style scoped>

</style>