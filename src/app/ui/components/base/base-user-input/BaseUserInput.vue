<template>
  <fieldset class="base-user-input">
    <component :is="type" :type="input ?? null" class="user-field" />
  </fieldset>
</template>
<script setup lang="ts">
import type { PropType, computed } from 'vue';
import { FieldType, InputType } from '@shared/types';
import { Props, FieldAllowedArray, InputAllowedArray } from './definitions';


const { type, input } = defineProps({
  type: {
    type: String as PropType<FieldType>,
    validator: (prop: FieldType) => FieldAllowedArray.includes(prop),
    default: FieldType.INPUT
  },

  input: {
    type: String as PropType<InputType>,
    validator: (prop: InputType) => InputAllowedArray.includes(prop),
  }
});

</script>
<style lang="scss" src="./BaseUserInput.scss" scoped />