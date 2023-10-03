<template>
  <header style="padding: 10px">
    isEazy App {{ message }}
    <BaseUiInput
      :input="InputType.TEXT"
      v-model="message"
      placeholder="Write your message"
    /><br />
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
    <br />
    <br />
    <BaseUiButton :variant="ButtonVariants.EMPTY"
      ><CloudArrowDownIcon
    /></BaseUiButton>
  </header>
</template>
<script setup lang="ts">
import BaseUiInput from '@ui/components/base/base-ui-input/BaseUiInput.vue';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import { PlayIcon, CloudArrowDownIcon } from '@heroicons/vue/24/solid';
import {
  FieldType,
  InputType,
  ButtonVariants
} from '@shared/types/definitions';
import { ref } from 'vue';

const message = ref('hello');
const reset = () => console.log('reset');
</script>
