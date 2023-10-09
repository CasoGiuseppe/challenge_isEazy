import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';

// import stores
import { useUserStore } from '@shared/stores/user';
import { useMessageStore } from '@shared/stores/messages';

// import composables
import useUserInfo from '@shared/composables/useUserInfo';
import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';
import useMessagesDetails from '@shared/composables/useMessagesDetails';
import type { IMessagesDetails } from '@shared/composables/interfaces/useMessagesDetails';

// import global styles
import '@assets/index.scss';

const UseUserInfo = useUserInfo(useUserStore);
const UseMessagesDetais = useMessagesDetails(useMessageStore);

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app.use(pinia);
app.use(router);

app.mount('#app');
app.provide<IUserInfo>("UseUserInfo", UseUserInfo);
app.provide<IMessagesDetails>("UseMessagesDetails", UseMessagesDetais)
