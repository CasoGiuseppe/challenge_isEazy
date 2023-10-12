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
                  <template #action>
                    <component
                      :is="userActionButton"
                      :variant="ButtonVariants.EMPTY"
                      :size="Sizes.XXLG"
                    >
                      <CloudArrowDownIcon />
                    </component>
                  </template>
                </component>
              </template>
              <template v-else #loader>
                <UserDefaultLoader>
                  Wait please...we are recovering your messages
                </UserDefaultLoader>
              </template>
            </messagesList>
          </template>
          <template #footer>
            <userSendForm
              :disabled="!items || isLoading"
              :saving="isSaving"
              :upload="isUpload"
              @createMessage="attachMessage"
              @uploadFile="attachNewFile"
            />
          </template>
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
          <template #name>{{ `Hi! ${getUser.completeName}` }}</template>
          <template #role>{{ `Your're logged as ${getUser.id}` }}</template>
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
import type { IAttachments } from '@shared/composables/interfaces/useAttach';
import { Sizes, Messages, ListType } from '@shared/types/definitions';
import { delay } from '@shared/helpers';
import { CloudArrowDownIcon } from '@heroicons/vue/24/solid';
import { ButtonVariants } from '@ui/components/base/base-ui-button/definitions';
import {
  useAggregatorKey,
  useAsyncComponentKey,
  useMessagesKey,
  useObserverKey,
  useUploadAttachKey,
  useUserInfoKey
} from '@shared/types/symbols';

// inject composables
const useAsyncComponent = inject<IAsyncComponent>(useAsyncComponentKey) as IAsyncComponent;
const useInfoUserState = inject<IUserInfo>(useUserInfoKey) as IUserInfo;
const useMessages = inject<IMessagesDetails>(useMessagesKey) as IMessagesDetails;
const useObserver = inject<IObserver>(useObserverKey) as IObserver;
const useAggregator = inject<IAggregator>(useAggregatorKey) as IAggregator;
const useUploadAttach = inject<IAttachments>(useUploadAttachKey) as IAttachments;

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
const userActionButton = await create({ component: 'components/base/base-ui-button/BaseUiButton' });

// check item list type [message, attach]
const factoryItemType = (type: string) => (type === ListType.MESSAGE ? userMessage : userAttach);

// set refs to dynamic values
const open = ref<boolean>(true);

// handle messages
const { getUsersMessages, createMessage, isSaving } = useMessages;
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

const { aggregateItems, items, isLoading } = useAggregator;
const { getUsersAttachments, uploadFile, isUpload } = useUploadAttach;
const fillAggragator = async () =>
  await aggregateItems({ collection: [{ fn: getUsersMessages }, { fn: getUsersAttachments }] });

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

// user attach new file
const attachNewFile = async ({
  name,
  size,
  type,
  lastModified
}: {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}) => {
  const body = { name, size, type, date: new Date(lastModified) };
  await aggregateItems({
    collection: [
      {
        fn: uploadFile,
        params: { body }
      }
    ]
  });
};
</script>
