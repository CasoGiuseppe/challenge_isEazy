import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';

// import stores
import { useUserStore } from '@shared/stores/user';

// import composables
import useUserInfo from '@shared/composables/useUserInfo';
import type { IUserInfo } from '@shared//composables/interfaces/useUserInfo';

// import global styles
import '@assets/index.scss';

const UseUserInfo = useUserInfo(useUserStore);
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app.use(pinia);
app.use(router);

app.mount('#app');
app.provide<IUserInfo>("UseUserInfo", UseUserInfo);
