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
        <userMessages @mounted="getMessages">
          <template #content>
            <messagesList :list="items" :loader="isLoading">
              <template
                v-if="items"
                #properties="{
                  property: {
                    item: {
                      user,
                      picture,
                      item: { text, date }
                    }
                  }
                }"
              >
                <userMessage
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
                </userMessage>
              </template>
              <template v-else #loader>
                <UserDefaultLoader>
                  Wait please...we are recovering your messages
                </UserDefaultLoader>
              </template>
            </messagesList>
          </template>
          <template #footer
            ><userSendForm :disabled="!items" @createMessage="attachMessage"
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
import { inject, ref } from 'vue';
import UserDefaultLoader from '@ui/components/defaults/default-loader/DefaultLoader.vue';
import type { IAsyncComponent } from '@shared/composables/interfaces/useAsyncComponent';
import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';
import type { IMessagesDetails } from '@shared/composables/interfaces/useMessagesDetails';
import { Sizes, Messages } from '@shared/types/definitions';

// inject composables
const useAsyncComponent = inject<IAsyncComponent>('UseAsyncComponent') as IAsyncComponent;
const useInfoUserState = inject<IUserInfo>('UseUserInfo') as IUserInfo;
const useMessages = inject<IMessagesDetails>('UseMessages') as IMessagesDetails;

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

// set refs to dynamic values
const open = ref<boolean>(true);

// get user messages method to download from API
const { getUsersMessages, createMessage, isLoading, items } = useMessages;

// handle messages load
const getMessages = async () => await getUsersMessages();

// handle attach new message to db
const attachMessage = async ({ message }: { message: string }) => {
  const { id, picture } = getUser.value;
  await createMessage({
    body: {
      user: id,
      picture,
      item: {
        text: message,
        date: new Date()
      }
    }
  });

  await getMessages();
};
</script>
