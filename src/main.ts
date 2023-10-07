import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';
import router from '@router/index';

import '@assets/index.scss';
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app.use(createPinia());
app.use(router);

app.mount('#app');
