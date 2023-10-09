<template>
  <Suspense>
    <template #default>
      <UserDialog>
        <template #content>
          <UserMessageWindow :id="userID" :list="getMessage">
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
      </UserDialog>
    </template>

    <!-- fallback loader state -->
    <template #fallback><UserDefaultLoader /></template>
  </Suspense>
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

// user local store
import { useUserStore } from '@shared/stores/user';
import { useMessageStore } from '@shared/stores/messages';
import { storeToRefs } from 'pinia';

// get user id from local store
const { getUser } = storeToRefs(useUserStore);
const { getMessage } = storeToRefs(useMessageStore);

const { id: userID, name } = getUser.value;
// import useAsyncComponent from '@shared/composables/useAsyncComponent';

// const { create } = useAsyncComponent();
// const UserMessageWindow = await create({
//   component: 'layouts/user-message-window/UserMessageWindow.vue'
// });
</script>
