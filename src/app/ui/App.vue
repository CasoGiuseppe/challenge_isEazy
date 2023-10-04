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
</template>
<script setup lang="ts">
import UserMessage from '@ui/components/user-message/UserMessage.vue';
import BaseUiPicture from './components/base/base-ui-picture/BaseUiPicture.vue';
import { Sizes, Messages } from '@shared/types/definitions';
</script>
