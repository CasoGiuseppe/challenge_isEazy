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
  </UserMessage>
</template>
<script setup lang="ts">
import UserMessage from '@ui/components/user-message/UserMessage.vue';
import BaseUiPicture from './components/base/base-ui-picture/BaseUiPicture.vue';
import { Sizes } from '@shared/types/definitions';
</script>
