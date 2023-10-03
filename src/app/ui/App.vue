<template>
  <header>
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
    <BaseUiButton> ciccio </BaseUiButton>
  </header>
</template>
<script setup lang="ts">
import BaseUiInput from '@ui/components/base/base-ui-input/BaseUiInput.vue';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import { FieldType, InputType } from '@shared/types/definitions';
import { ref } from 'vue';

const message = ref('hello');
const reset = () => console.log('reset');
</script>
