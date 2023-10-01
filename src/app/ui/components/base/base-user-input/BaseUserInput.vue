<template>
  <fieldset
    :class="[
      $slots['error'] ? 'base-user-input--has-error' : null,
      'base-user-input'
    ]"
  >
    <component
      autocomplete="one-time-code"
      class="base-user-field"
      :is="type"
      :type="input ?? null"
      :value="modelValue"
      @input="updateValue"
    />
    <span v-if="$slots['error']" data-error>
      <slot name="error"></slot>
    </span>
  </fieldset>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import { FieldType, InputType } from '@shared/types';
import { FieldAllowedArray, InputAllowedArray } from './definitions';

const { type, input, modelValue } = defineProps({
  type: {
    type: String as PropType<FieldType>,
    validator: (prop: FieldType) => FieldAllowedArray.includes(prop),
    default: FieldType.INPUT
  },

  input: {
    type: String as PropType<InputType>,
    validator: (prop: InputType) => InputAllowedArray.includes(prop)
  },

  modelValue: {
    type: String as PropType<String>
  }
});

const updateEmit = defineEmits(['update:modelValue']);
const updateValue = ({ target: { value } }: { target: { value: string } }) =>
  updateEmit('update:modelValue', value);
</script>
<style lang="scss" src="./BaseUserInput.scss" scoped />
