<template>
  <header style="padding: 10px">
    isEazy App
    {{ message }}
    <BaseUiInput :input="Types.TEXT" v-model="message" placeholder="Write your message" /><br />
    <BaseUiInput :input="Types.TEXT" @reset="reset">
      <template #error> error </template>
    </BaseUiInput>
    <br />
    <BaseUiInput :type="Fields.TEXTAREA" />
    <br />
    <hr />
    <br />
    <BaseUiButton @submit="submit"> ciccio </BaseUiButton>
    <BaseUiButton @submit="submit" loading> ciccio </BaseUiButton>
    <br />
    <br />
    <BaseUiButton disabled> ciccio </BaseUiButton>
    <br />
    <br />
    <BaseUiButton :variant="ButtonVariants.CIRCLE" :role="Roles.FILE"><PlayIcon /></BaseUiButton>
    <BaseUiButton :variant="ButtonVariants.CIRCLE" :role="Roles.FILE" loading>
      <PlayIcon />
    </BaseUiButton>
    <BaseUiButton :variant="ButtonVariants.CIRCLE" :size="Sizes.XLG"><PlayIcon /></BaseUiButton>
    <BaseUiButton :variant="ButtonVariants.CIRCLE" :size="Sizes.XLG"><PlayIcon /></BaseUiButton>
    <BaseUiButton :variant="ButtonVariants.CIRCLE" :size="Sizes.XXLG"><PlayIcon /></BaseUiButton>
    <BaseUiButton :variant="ButtonVariants.CIRCLE" :size="Sizes.XXLG" loading>
      <PlayIcon />
    </BaseUiButton>
    <br />
    <br />
    <BaseUiButton :variant="ButtonVariants.EMPTY" :size="Sizes.XXLG"
      ><CloudArrowDownIcon
    /></BaseUiButton>
    <br />
    <br />
    <BaseUiButton :variant="ButtonVariants.EMPTY" :size="Sizes.XXLG" loading>
      <CloudArrowDownIcon />
    </BaseUiButton>
    <br /><br />
    <BaseUiPicture />
    <BaseUiPicture :size="Sizes.XLG" />
    <BaseUiPicture>
      <img
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
        aria-description="Picture image for Name Surname"
      />
    </BaseUiPicture>
    <BaseUiPicture :size="Sizes.XLG">
      <img
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
        aria-description="Picture image for Name Surname"
      />
    </BaseUiPicture>
  </header>
</template>
<script setup lang="ts">
import BaseUiInput from '@ui/components/base/base-ui-input/BaseUiInput.vue';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import BaseUiPicture from '@ui/components/base/base-ui-picture/BaseUiPicture.vue';

import { PlayIcon, CloudArrowDownIcon } from '@heroicons/vue/24/solid';
import { Fields, Types, Sizes, Roles } from '@shared/types/definitions';
import { ButtonVariants } from '@ui/components/base/base-ui-button/definitions';
import { ref } from 'vue';

const message = ref('hello');
const reset = () => console.log('reset');
const submit = () => console.log('submit');
</script>
