import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { MotionPlugin } from '@vueuse/motion';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import Toast, { type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { initializeTheme } from './composables/useAppearance';
import i18n from './i18n';
const appName = import.meta.env.VITE_APP_NAME || 'Masri Programmer';

const options: PluginOptions = {
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
};
createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .use(MotionPlugin)
            .use(Toast, options)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
