import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';

// mock server
import '@/server';

// import global styles
import '@assets/index.scss';

// import stores
import { useUserStore } from '@shared/stores/user';
import { useMessageStore } from '@shared/stores/messages';

// import composables
import useUserInfo from '@shared/composables/useUserInfo';
import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';
import useMessagesDetails from '@shared/composables/useMessagesDetails';
import type { IMessagesDetails } from '@shared/composables/interfaces/useMessagesDetails';
import userAsyncComponent from '@shared/composables/useAsyncComponent';
import type { IAsyncComponent } from '@shared/composables/interfaces/useAsyncComponent';

// import services
import { HTTPService } from '@shared/providers/http/http.service';

const UseUserInfo = useUserInfo(useUserStore, new HTTPService());
const UseMessagesDetais = useMessagesDetails(useMessageStore);
const UseAsyncComponent = userAsyncComponent();

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app.use(pinia);
app.use(router);

app.mount('#app');
app.provide<IUserInfo>('UseUserInfo', UseUserInfo);
app.provide<IMessagesDetails>('UseMessagesDetails', UseMessagesDetais);
app.provide<IAsyncComponent>('UseAsyncComponent', UseAsyncComponent);
