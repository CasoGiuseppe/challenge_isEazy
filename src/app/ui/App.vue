<template>
  <section id="app-layout">
    <Suspense>
      <template #default>
        <!-- <UserDialog>
        <template #content>
          <UserMessageWindow :id="userID" :list="items">
            <template #header>Comments</template>
            <template
              #properties="{
                property: {
                  node: {
                    id,
                    item: { text, date }
                  }
                }
              }"
            >
              <UserMessage :type="id !== userID ? Messages.RECEIVE : Messages.SEND">
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      :aria-description="`Picture image for ${name}`"
                      :title="`Picture image for ${name}`"
                    />
                  </BaseUiPicture>
                </template>
                <template #message> {{ text }}</template>
                <template #date>{{ date }}</template>
              </UserMessage>
            </template>
            <template #footer><UserSendForm /></template>
          </UserMessageWindow>
        </template>
        <template #close><XMarkIcon /></template>
        <template #trigger>{{ loader }}</template>
      </UserDialog> -->
        <RouterView v-slot="{ Component }">
          <transition appear name="appear-change-view" mode="out-in">
            <component :is="Component">
              <template #title>Access to your private area {{ isSuccess }}</template>
            </component>
          </transition>
        </RouterView>
      </template>

      <!-- fallback loader state -->
      <template #fallback><UserDefaultLoader /></template>
    </Suspense>
    <Suspense>
      <template #default>
        <component v-if="isSuccess" :is="dialog">
          <template #content>content</template>
          <template #close><XMarkIcon /></template>
          <template #title>Comments</template>
          <template #extra>Extra</template>
        </component>
      </template>
    </Suspense>
  </section>
</template>
<script setup lang="ts">
import UserSendForm from '@ui/widgets/user-send-form/UserSendForm.vue';
import UserMessageWindow from '@ui/layouts/user-message-window/UserMessageWindow.vue';
import UserDefaultLoader from '@ui/components/defaults/default-loader/DefaultLoader.vue';
import UserDialog from '@ui/components/user-dialog/UserDialog.vue';
import UserMessage from '@ui/components/user-message/UserMessage.vue';
import BaseUiPicture from '@ui/components/base/base-ui-picture/BaseUiPicture.vue';
import { Messages, Sizes } from '@shared/types/definitions';
import { XMarkIcon } from '@heroicons/vue/24/solid';

import type { IMessagesDetails } from '@shared/composables/interfaces/useMessagesDetails';

// ok
import { inject, ref } from 'vue';
import type { IAsyncComponent } from '@shared/composables/interfaces/useAsyncComponent';
import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';

const useMessagesDetailsState = inject<IMessagesDetails>('UseMessagesDetails') as IMessagesDetails;

const { items } = useMessagesDetailsState;

// inject composables
const useAsyncComponent = inject<IAsyncComponent>('UseAsyncComponent') as IAsyncComponent;
const useInfoUserState = inject<IUserInfo>('UseUserInfo') as IUserInfo;

// get create method to load lazy component
const { create } = useAsyncComponent;

// get user composable states
const { isSuccess } = useInfoUserState;

const showDialog = ref<boolean>(isSuccess.value);
const dialog = await create({ component: 'user-dialog/UserDialog.vue' });

const removeDialog = () => console.log('remove');
</script>
