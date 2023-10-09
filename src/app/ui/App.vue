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
              <template #title>Access messages</template>
            </component>
          </transition>
        </RouterView>
      </template>

      <!-- fallback loader state -->
      <template #fallback><UserDefaultLoader /></template>
    </Suspense>
  </section>
</template>
<script setup lang="ts">
import { inject, onMounted } from 'vue';
import UserSendForm from '@ui/widgets/user-send-form/UserSendForm.vue';
import UserMessageWindow from '@ui/layouts/user-message-window/UserMessageWindow.vue';
import UserDefaultLoader from '@ui/components/defaults/default-loader/DefaultLoader.vue';
import UserDialog from '@ui/components/user-dialog/UserDialog.vue';
import UserMessage from '@ui/components/user-message/UserMessage.vue';
import BaseUiPicture from '@ui/components/base/base-ui-picture/BaseUiPicture.vue';
import { Messages, Sizes } from '@shared/types/definitions';
import { XMarkIcon } from '@heroicons/vue/24/solid';

import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';
import type { IMessagesDetails } from '@shared/composables/interfaces/useMessagesDetails';

const useInfoUserState = inject<IUserInfo>('UseUserInfo') as IUserInfo;
const useMessagesDetailsState = inject<IMessagesDetails>('UseMessagesDetails') as IMessagesDetails;

const { getUser, loginUser, loading, error } = useInfoUserState;
const { items } = useMessagesDetailsState;

onMounted(async () => await loginUser());
</script>
