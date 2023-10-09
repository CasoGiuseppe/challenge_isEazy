<template>
  <Suspense>
    <template #default>
      <UserDialog>
        <template #content>
          <UserMessageWindow>
            <template #header>Comments</template>
            <li>
              <UserMessage>
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <li>
              <UserMessage id="1" :type="Messages.RECEIVE">
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <li>
              <UserMessage>
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <li>
              <UserMessage id="1" :type="Messages.RECEIVE">
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <li>
              <UserMessage>
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <li>
              <UserMessage id="1" :type="Messages.RECEIVE">
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <li>
              <UserMessage>
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <li>
              <UserMessage id="1" :type="Messages.RECEIVE">
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <li>
              <UserMessage>
                <template #picture>
                  <BaseUiPicture :size="Sizes.XLG">
                    <img
                      src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                      aria-description="Picture image for Name Surname"
                    />
                  </BaseUiPicture>
                </template>
                <template #message>
                  Reprehenderit est mollit proident labore enim fugiat esse sint.
                </template>
                <template #date>date</template>
              </UserMessage>
            </li>
            <template #footer><UserSendForm /></template>
          </UserMessageWindow>
        </template>
        <template #close><XMarkIcon /></template>
      </UserDialog>
    </template>
    <!-- <UserSendForm></UserSendForm> -->

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
// import useAsyncComponent from '@shared/composables/useAsyncComponent';

// const { create } = useAsyncComponent();
// const UserMessageWindow = await create({
//   component: 'layouts/user-message-window/UserMessageWindow.vue'
// });
</script>
