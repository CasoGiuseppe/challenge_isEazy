<template>
  <fieldset :class="['base-ui-field', hidden ? 'base-ui-field--is-hidden' : null]">
    <label v-if="slotLabel" class="base-ui-field__label" :for="id"><slot name="label" /></label>
    <component
      :aria-placeholder="placeholder"
      :aria-required="required"
      :id="id"
      :is="type"
      :name="id"
      :type="input ?? null"
      :value="modelValue"
      :aria-invalid="slotError"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      :accept="accept ?? null"
      :aria-hidden="hidden"
      data-testID="ui-input"
      autocomplete="one-time-code"
      class="base-ui-field__user-input"
      pattern=".{4,}"
      aria-describedby="ui-error"
      @input="updateValue"
      @change="changeValue"
      @click="clickValue"
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

    <span ref="error" v-if="slotError" class="base-ui-field__display-error" id="ui-error">
      <!-- @slot Slot for error message -->
      <slot name="error"></slot>
    </span>
  </fieldset>
</template>
<script setup lang="ts">
import { useSlots, type PropType, computed } from 'vue';
import { Fields, Types } from '@shared/types/definitions';
import { TrashIcon } from '@heroicons/vue/24/solid';

const { id, type, input, required, modelValue, placeholder } = defineProps({
  /**
   * Set the unique id of the ui input
   */
  id: {
    type: String as PropType<string>,
    default: 'fieldID'
  },
  /**
   * Set type of user field [input, textarea]
   */
  type: {
    type: String as PropType<Fields>,
    validator: (prop: Fields) => Object.values(Fields).includes(prop),
    default: Fields.INPUT
  },
  /**
   * Set the type of input field [emai, file, password, submit, text, button]
   */
  input: {
    type: String as PropType<Types>,
    validator: (prop: Types) => Object.values(Types).includes(prop),
    default: Types.TEXT
  },
  /**
   * Set the required property
   */
  required: {
    type: Boolean as PropType<Boolean>,
    default: true
  },
  /**
   * Set the input value
   */
  modelValue: {
    type: String as PropType<string>
  },
  /**
   * Set the start placeholder value
   */
  placeholder: {
    type: String as PropType<string>,
    default: 'Add here your text'
  },
  /**
   * Handle disabled state
   */
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  /**
   * Handle hidden state
   */
  hidden: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  /**
   * Set accepted file
   */
  accept: {
    type: String as PropType<string>
  }
});

const slots = useSlots();
const slotError = computed(() => !!slots['error'] && slots?.error?.()[0].children !== '');
const slotLabel = computed(() => !!slots['label']);

const customEmits = defineEmits(['update:modelValue', 'reset', 'change', 'click']);
const updateValue = ({ target: { value } }: { target: { value: string } }) =>
  customEmits('update:modelValue', value);
const resetInputValue = () => customEmits('reset');
const changeValue = ({ target }: { target: HTMLInputElement }) => customEmits('change', { target });
const clickValue = () => customEmits('click');
</script>
<style lang="scss" src="./BaseUiInput.scss" scoped />
