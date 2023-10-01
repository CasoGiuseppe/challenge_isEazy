<template>
  <header>
    isEazy App {{ message }}
    <BaseInput :input="InputType.TEXT" v-model="message" />
    <BaseInput :input="InputType.TEXT">
      <template #error> error </template>
    </BaseInput>
    <BaseInput :type="FieldType.TEXTAREA" />
  </header>
</template>
<script setup lang="ts">
import BaseInput from '@ui/components/base/base-user-input/BaseUserInput.vue';
import { FieldType, InputType } from '@shared/types';
import { ref } from 'vue';

const message = ref('hello');
</script>
