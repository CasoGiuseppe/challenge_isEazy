<template>
  <header>
    isEazy App {{ message }}
    <BaseInput :input="InputType.TEXT" v-model="message" /><br /><br />
    <BaseInput :input="InputType.TEXT" @reset="reset">
      <template #error> error </template>
    </BaseInput>
    <BaseInput :type="FieldType.TEXTAREA" />
  </header>
</template>
<script setup lang="ts">
import BaseInput from '@ui/components/base/base-user-input/BaseUserInput.vue';
import { FieldType, InputType } from '@shared/types/definitions';
import { ref } from 'vue';

const message = ref('hello');
const reset = () => console.log('reset');
</script>
