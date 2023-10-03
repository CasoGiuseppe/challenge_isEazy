<template>
  <fieldset class="base-ui-field">
    <component
      data-testID="ui-input"
      autocomplete="one-time-code"
      class="base-ui-field__user-input"
      pattern=".{4,}"
      aria-describedby="ui-error"
      :aria-placeholder="placeholder"
      :aria-required="required"
      :id="id"
      :is="type"
      :type="input ?? null"
      :value="modelValue"
      :aria-invalid="slotError"
      :required="required"
      :placeholder="placeholder"
      @input="updateValue"
    />
    <button
      data-testID="ui-reset"
      v-if="slotError"
      class="base-ui-field__reset"
      aria-label="Reset input state"
      @click="resetInputValue"
    >
      <TrashIcon class="text-red" />
    </button>

    <span v-if="slotError" class="base-ui-field__display-error" id="ui-error">
      <slot name="error"></slot>
    </span>
  </fieldset>
</template>
<script setup lang="ts">
import { useSlots, type PropType, computed } from 'vue';
import { Fields, Types } from '@shared/types/definitions';
import { TrashIcon } from '@heroicons/vue/24/solid';

const { id, type, input, required, modelValue, placeholder } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'fieldID'
  },
  type: {
    type: String as PropType<Fields>,
    validator: (prop: Fields) => Object.values(Fields).includes(prop),
    default: Fields.INPUT
  },
  input: {
    type: String as PropType<Types>,
    validator: (prop: Types) => Object.values(Types).includes(prop)
  },
  required: {
    type: Boolean as PropType<Boolean>,
    default: true
  },
  modelValue: {
    type: String as PropType<String>
  },
  placeholder: {
    type: String as PropType<String>,
    default: 'Add here your text'
  }
});

const slots = useSlots();
const slotError = computed(() => !!slots['error']);

const customEmits = defineEmits(['update:modelValue', 'reset']);
const updateValue = ({ target: { value } }: { target: { value: string } }) =>
  customEmits('update:modelValue', value);
const resetInputValue = () => customEmits('reset');
</script>
<style lang="scss" src="./BaseUiInput.scss" scoped />
