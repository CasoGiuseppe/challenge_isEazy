<template>
  <fieldset class="base-user-input">
    <component
      data-testID="user-input"
      autocomplete="one-time-code"
      class="base-user-field"
      aria-describedby="field-error"
      pattern=".{4,}"
      :id="id"
      :is="type"
      :type="input ?? null"
      :value="modelValue"
      :aria-invalid="hasError"
      :required="required"
      @input="updateValue"
    />
    <button
      data-testID="user-reset"
      v-if="hasError"
      class="base-user-input__reset"
      aria-label="Reset input state"
      @click="resetInputValue"
    >
      <TrashIcon class="text-red" />
    </button>

    <span v-if="hasError" data-error id="field-error">
      <slot name="error"></slot>
    </span>
  </fieldset>
</template>
<script setup lang="ts">
import { useSlots, type PropType, computed } from 'vue';
import { FieldType, InputType } from '@shared/types/definitions';
import { FieldAllowedArray, InputAllowedArray } from './definitions';
import { TrashIcon } from '@heroicons/vue/24/solid';

const { id, type, input, required, modelValue } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'fieldID'
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
const hasError = computed(() => !!getSlots['error']);

const customEmits = defineEmits(['update:modelValue', 'reset']);
const updateValue = ({ target: { value } }: { target: { value: string } }) =>
  customEmits('update:modelValue', value);
const resetInputValue = () => customEmits('reset');
</script>
<style lang="scss" src="./BaseUserInput.scss" scoped />
@/app/shared/types/definitions
