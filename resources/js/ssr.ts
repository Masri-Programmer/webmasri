import createServer from '@inertiajs/vue3/server';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, DefineComponent, h } from 'vue';
import { renderToString } from 'vue/server-renderer';

import i18n from './i18n';

const appName = import.meta.env.VITE_APP_NAME || 'Masri Programmer';

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
                ssrApp.use(i18n);

                return ssrApp;
            },
        }),
    { cluster: true },
);
