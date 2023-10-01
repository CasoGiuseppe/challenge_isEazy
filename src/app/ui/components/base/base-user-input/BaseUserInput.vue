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
      aria-describedby="field-error"
      pattern=".{4,}"
      :id="id"
      :is="type"
      :type="input ?? null"
      :value="modelValue"
      :aria-invalid="hasErrorSlot"
      :required="required"
      @input="updateValue"
    />
    <span v-if="hasErrorSlot" data-error id="field-error">
      <slot name="error"></slot>
    </span>
  </fieldset>
</template>
<script setup lang="ts">
import { useSlots, type PropType, computed } from 'vue';
import { FieldType, InputType } from '@shared/types';
import { FieldAllowedArray, InputAllowedArray } from './definitions';

const { id, type, input, required, modelValue } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'field'
  },

  type: {
    type: String as PropType<FieldType>,
    validator: (prop: FieldType) => FieldAllowedArray.includes(prop),
    default: FieldType.INPUT
  },

  input: {
    type: String as PropType<InputType>,
    validator: (prop: InputType) => InputAllowedArray.includes(prop)
  },

  required: {
    type: Boolean as PropType<Boolean>,
    default: true
  },

  modelValue: {
    type: String as PropType<String>
  }
});

const getSlots = useSlots();
const hasErrorSlot = computed(() => !!getSlots['error']);

const updateEmit = defineEmits(['update:modelValue']);
const updateValue = ({ target: { value } }: { target: { value: string } }) =>
  updateEmit('update:modelValue', value);
</script>
<style lang="scss" src="./BaseUserInput.scss" scoped />
