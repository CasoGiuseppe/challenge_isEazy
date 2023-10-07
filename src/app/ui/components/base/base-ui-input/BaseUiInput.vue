<template>
  <fieldset class="base-ui-field">
    <component
      :aria-placeholder="placeholder"
      :aria-required="required"
      :id="id"
      :is="type"
      :type="input ?? null"
      :value="modelValue"
      :aria-invalid="slotError"
      :required="required"
      :placeholder="placeholder"
      data-testID="ui-input"
      autocomplete="one-time-code"
      class="base-ui-field__user-input"
      pattern=".{4,}"
      aria-describedby="ui-error"
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
    validator: (prop: Types) => Object.values(Types).includes(prop)
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
  }
});

const slots = useSlots();
const slotError = computed(() => !!slots['error'] && slots?.error?.()[0].children !== '');

const customEmits = defineEmits(['update:modelValue', 'reset']);
const updateValue = ({ target: { value } }: { target: { value: string } }) =>
  customEmits('update:modelValue', value);
const resetInputValue = () => customEmits('reset');
</script>
<style lang="scss" src="./BaseUiInput.scss" scoped />
