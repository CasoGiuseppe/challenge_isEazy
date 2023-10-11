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
import useMessages from '@shared/composables/useMessagesDetails';
import type { IMessagesDetails } from '@shared/composables/interfaces/useMessagesDetails';
import userAsyncComponent from '@shared/composables/useAsyncComponent';
import type { IAsyncComponent } from '@shared/composables/interfaces/useAsyncComponent';
import useObserver from '@shared/composables/useObserver';
import type { IObserver } from '@shared/composables/interfaces/useObserver';

// import services
import { HTTPService } from '@shared/providers/http/http.service';

const UseUserInfo = useUserInfo(useUserStore, new HTTPService());
const UseMessages = useMessages(useMessageStore, new HTTPService());
const UseAsyncComponent = userAsyncComponent();
const UseObserver = useObserver();

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app.use(pinia);
app.use(router);

router.isReady().then(() => app.mount("#app"));

app.provide<IUserInfo>('UseUserInfo', UseUserInfo);
app.provide<IMessagesDetails>('UseMessages', UseMessages);
app.provide<IAsyncComponent>('UseAsyncComponent', UseAsyncComponent);
app.provide<IObserver>('UseObserver', UseObserver)
