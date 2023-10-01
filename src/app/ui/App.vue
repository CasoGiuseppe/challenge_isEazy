

<template>
  <header>
    isEazy App
    <BaseInput :input="InputType.TEXT" />
    <BaseInput :type="FieldType.TEXTAREA" />
  </header>
</template>
<script setup lang="ts">
import BaseInput from '@ui/components/base/base-user-input/BaseUserInput.vue';
import { FieldType, InputType } from '@shared/types';
</script>
