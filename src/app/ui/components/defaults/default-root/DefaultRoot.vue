<template>
  <section id="app-layout">
    <Suspense>
      <template #default>
        <RouterView v-slot="{ Component }" name="content">
          <transition appear name="appear-change-view" mode="out-in">
            <component :is="Component">
              <template #title>Access to your private area</template>
            </component>
          </transition>
        </RouterView>
      </template>
      <!-- fallback loader state -->
      <template #fallback><UserDefaultLoader /></template>
    </Suspense>

    <component v-if="isSuccess" :is="dialog" :open="open">
      <template #content>
        <userMessages @mounted="fillAggragator">
          <template #content>
            <messagesList :list="items" :loader="isLoading" max-height="50vh" id="messagesList">
              <template
                v-if="items"
                #properties="{
                  property: {
                    item: {
                      user,
                      picture,
                      type,
                      item: { text, date, version, title, info }
                    }
                  }
                }"
              >
                <component
                  :is="factoryItemType(type)"
                  :id="user"
                  :type="getUser.id === user ? Messages.SEND : Messages.RECEIVE"
                >
                  <template #picture>
                    <userPicture :size="Sizes.XLG">
                      <img :src="picture" :aria-description="`Picture image for ${user}`" />
                    </userPicture>
                  </template>
                  <template #message>{{ text }}</template>
                  <template #date>{{ date }}</template>
                  <template #version>{{ version }}</template>
                  <template #title>{{ title }}</template>
                  <template #typing> {{ info }}</template>
                </component>
              </template>
              <template v-else #loader>
                <UserDefaultLoader>
                  Wait please...we are recovering your messages
                </UserDefaultLoader>
              </template>
            </messagesList>
          </template>
          <template #footer
            ><userSendForm :disabled="!items" :saving="isSaving" @createMessage="attachMessage"
          /></template>
        </userMessages>
      </template>
      <template #title>Comments</template>
      <template #extra>
        <userIdentity>
          <template #picture>
            <userPicture :size="Sizes.XXLG">
              <img
                :src="getUser.picture"
                :aria-description="`Picture image for ${getUser.completeName}`"
              />
            </userPicture>
          </template>
          <template #name>{{ `${getUser.completeName}` }}</template>
          <template #email>{{ getUser.email }}</template>
        </userIdentity>
      </template>
    </component>
  </section>
</template>
<script setup lang="ts">
import { inject, ref, watch } from 'vue';
import UserDefaultLoader from '@ui/components/defaults/default-loader/DefaultLoader.vue';
import type { IAsyncComponent } from '@shared/composables/interfaces/useAsyncComponent';
import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';
import type { IMessagesDetails } from '@shared/composables/interfaces/useMessagesDetails';
import type { IObserver } from '@shared/composables/interfaces/useObserver';
import type { IAggregator } from '@shared/composables/interfaces/useAggregator';
import type { IAttaches } from '@shared/composables/interfaces/useAttach';
import { Sizes, Messages, ListType } from '@shared/types/definitions';
import { delay } from '@shared/helpers';

// inject composables
const useAsyncComponent = inject<IAsyncComponent>('UseAsyncComponent') as IAsyncComponent;
const useInfoUserState = inject<IUserInfo>('UseUserInfo') as IUserInfo;
const useMessages = inject<IMessagesDetails>('UseMessages') as IMessagesDetails;
const useObserver = inject<IObserver>('UseObserver') as IObserver;
const useAggregator = inject<IAggregator>('UseAggregator') as IAggregator;
const useUploadAttach = inject<IAttaches>('UseUploadAttach') as IAttaches;

// get create method to load lazy component
const { create } = useAsyncComponent;

// get user composable states
const { isSuccess, getUser } = useInfoUserState;

// lazy load for component instances
const dialog = await create({ component: 'components/user-dialog/UserDialog' });
const userIdentity = await create({ component: 'components/user-identity/UserIdentity' });
const userPicture = await create({ component: 'components/base/base-ui-picture/BaseUiPicture' });
const userMessages = await create({ component: 'layouts/user-message-window/UserMessageWindow' });
const userSendForm = await create({ component: 'widgets/user-send-form/UserSendForm' });
const messagesList = await create({ component: 'components/base/base-ui-list/BaseUiList' });
const userMessage = await create({ component: 'components/user-message/UserMessage' });
const userAttach = await create({ component: 'components/user-attach-info/UserAttachInfo' });

// check item list type [message, attach]
const factoryItemType = (type: string) => (type === ListType.MESSAGE ? userMessage : userAttach);

// set refs to dynamic values
const open = ref<boolean>(true);

// handle messages
const { getUsersMessages, createMessage } = useMessages;
const attachMessage = async ({ message }: { message: string }) => {
  const { id, picture } = getUser.value;
  const body = {
    id,
    user: id,
    picture,
    item: {
      text: message,
      date: new Date()
    }
  };
  await aggregateItems({
    collection: [
      {
        fn: createMessage,
        params: { body }
      }
    ]
  });
};

const { aggregateItems, items, isLoading, isSaving } = useAggregator;
const fillAggragator = async () => await aggregateItems({ collection: [{ fn: getUsersMessages }] });

const { getUsersAttaches } = useUploadAttach;
await getUsersAttaches();

// handle mutation observer to set list bottom position
const { init: mutationStart } = useObserver;
watch(
  () => items.value,
  () => {
    const messagesList = document.querySelector('#messagesList') as Element;
    mutationStart({
      trigger: messagesList,
      action: async () => {
        messagesList.scrollTop = messagesList.scrollHeight;
        await delay(50).then(() => messagesList.scrollTo(10, messagesList.scrollHeight));
      }
    });
  }
);
</script>
