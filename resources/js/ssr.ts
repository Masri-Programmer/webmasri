import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { MotionPlugin } from '@vueuse/motion';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, DefineComponent, h } from 'vue';
import Toast, { type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { renderToString } from 'vue/server-renderer';
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
createServer(
    (page: any) =>
        createInertiaApp({
            page,
            render: renderToString,
            title: (title) => (title ? `${title} - ${appName}` : appName),
            resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
            setup({ App, props, plugin }) {
                const ssrApp = createSSRApp({ render: () => h(App, props) });

                ssrApp.use(plugin);
                ssrApp.use(MotionPlugin);
                ssrApp.use(Toast, options);
                ssrApp.use(i18n);

                return ssrApp;
            },
        }),
    { cluster: true },
);
