<template>
  <header style="padding: 10px">
    isEazy App
    {{ message }}
    <BaseUiInput :input="InputType.TEXT" v-model="message" placeholder="Write your message" /><br />
    <BaseUiInput :input="InputType.TEXT" @reset="reset">
      <template #error> error </template>
    </BaseUiInput>
    <br />
    <BaseUiInput :type="FieldType.TEXTAREA" />
    <br />
    <hr />
    <br />
    <BaseUiButton> ciccio </BaseUiButton>
    <br />
    <br />
    <BaseUiButton disabled> ciccio </BaseUiButton>
    <br />
    <br />
    <BaseUiButton :variant="ButtonVariants.CIRCLE"><PlayIcon /></BaseUiButton>
    <BaseUiButton :variant="ButtonVariants.CIRCLE" :size="Sizes.XLG"><PlayIcon /></BaseUiButton>
    <BaseUiButton :variant="ButtonVariants.CIRCLE" :size="Sizes.XXLG"><PlayIcon /></BaseUiButton>
    <br />
    <br />
    <BaseUiButton :variant="ButtonVariants.EMPTY" :size="Sizes.XXLG"
      ><CloudArrowDownIcon
    /></BaseUiButton>
  </header>
</template>
<script setup lang="ts">
import BaseUiInput from '@ui/components/base/base-ui-input/BaseUiInput.vue';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import { PlayIcon, CloudArrowDownIcon } from '@heroicons/vue/24/solid';
import { FieldType, InputType, Sizes } from '@shared/types/definitions';
import { ButtonVariants } from '@ui/components/base/base-ui-button/definitions';
import { ref } from 'vue';

const message = ref('hello');
const reset = () => console.log('reset');
</script>
