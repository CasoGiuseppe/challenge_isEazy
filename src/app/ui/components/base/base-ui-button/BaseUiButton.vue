<template>
  <component
    data-testID="ui-button"
    :id="id"
    :is="Types.BUTTON"
    :class="[loading ? 'is--loading' : null, 'base-ui-button']"
    :aria-disabled="disabled || loading"
    :aria-label="label"
    :data-variant="variant"
    :data-size="size"
    :disabled="disabled || loading"
    :type="role"
    :title="label"
    @click="sendSubmit"
  >
    <!-- @slot Default slot for button label -->
    <slot />
  </component>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { Roles, Sizes, Types } from '@shared/types/definitions';
import { ButtonVariants } from './definitions';

const { id, role, disabled, variant, size, label, loading } = defineProps({
  /**
   * Set the unique id of the ui button
   */
  id: {
    type: String as PropType<String>,
    default: 'buttonID'
  },
  /**
   * Set the button type [butto, submit, file, reset]
   */
  role: {
    type: String as PropType<Roles>,
    validator: (prop: Roles) => Object.values(Roles).includes(prop)
  },
  /**
   * Set the disabled button state
   */
  disabled: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  /**
   * Set the allowed button variant [default, circle, empty]
   */
  variant: {
    type: String as PropType<ButtonVariants>,
    validator: (prop: ButtonVariants) => Object.values(ButtonVariants).includes(prop),
    default: ButtonVariants.DEFAULT
  },
  /**
   * Set the size of button for circle or empty variant
   */
  size: {
    type: String as PropType<Sizes>,
    default: Sizes.LG,
    validator: (prop: Sizes) => Object.values(Sizes).includes(prop)
  },
  /**
   * Set the aria accesibility label
   */
  label: {
    type: String as PropType<String>,
    default: 'Click here to launch your custom action'
  },
  /**
   * Set the loading button state
   */
  loading: {
    type: Boolean as PropType<Boolean>,
    default: false
  }
});

const customEmits = defineEmits(['submit']);
const sendSubmit = () => customEmits('submit');
</script>
<style lang="scss" src="./BaseUiButton.scss" scoped />
