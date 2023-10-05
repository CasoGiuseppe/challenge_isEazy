<template>
  <header style="padding: 10px">isEazy App</header>
  <UserMessage>
    <template #picture>
      <BaseUiPicture :size="Sizes.XLG">
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
          aria-description="Picture image for Name Surname"
        />
      </BaseUiPicture>
    </template>
    <template #message>message message message message message message message message</template>
    <template #date>30 dic 2020 / 08:00</template>
  </UserMessage>
  <br />
  <UserMessage :type="Messages.RECEIVE">
    <template #picture>
      <BaseUiPicture :size="Sizes.XLG">
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
          aria-description="Picture image for Name Surname"
        />
      </BaseUiPicture>
    </template>
    <template #date>30 dic 2020 / 08:00</template>
  </UserMessage>
  <br /><br />
  <UserAttachInfo>
    <template #version>Version 1</template>
    <template #title>file title</template>
    <template #typing>Documento / PDF</template>
    <template #action>
      <BaseUiButton :variant="ButtonVariants.EMPTY" :size="Sizes.XXLG">
        <CloudArrowDownIcon />
      </BaseUiButton>
    </template>
  </UserAttachInfo>
</template>
<script setup lang="ts">
import UserMessage from '@ui/components/user-message/UserMessage.vue';
import BaseUiPicture from '@ui/components/base/base-ui-picture/BaseUiPicture.vue';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import UserAttachInfo from '@ui/components/user-attach-info/UserAttachInfo.vue';

import { CloudArrowDownIcon } from '@heroicons/vue/24/solid';
import { ButtonVariants } from '@ui/components/base/base-ui-button/definitions';

import { Sizes, Messages } from '@shared/types/definitions';
</script>
