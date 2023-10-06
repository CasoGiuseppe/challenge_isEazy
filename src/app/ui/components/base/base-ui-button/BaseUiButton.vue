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
    <slot />
    {{ disabled }}
  </component>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { Roles, Sizes, Types } from '@shared/types/definitions';
import { ButtonVariants } from './definitions';

const { id, role, disabled, variant, size, label, loading } = defineProps({
  /**
   * The id of the ui button
   */
  id: {
    type: String as PropType<String>,
    default: 'buttonID'
  },
  /**
   * The type of the ui button
   */
  role: {
    type: String as PropType<Roles>,
    validator: (prop: Roles) => Object.values(Roles).includes(prop)
  },
  /**
   * The disabled state of the ui button
   */
  disabled: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  /**
   * The variant of the ui button
   */
  variant: {
    type: String as PropType<ButtonVariants>,
    validator: (prop: ButtonVariants) => Object.values(ButtonVariants).includes(prop),
    default: ButtonVariants.DEFAULT
  },
  /**
   * The size of the ui button
   */
  size: {
    type: String as PropType<Sizes>,
    default: Sizes.LG,
    validator: (prop: Sizes) => Object.values(Sizes).includes(prop)
  },
  /**
   * The label of the ui button
   */
  label: {
    type: String as PropType<String>,
    default: 'Click here to launch your custom action'
  },
  /**
   * The loading state of the ui button
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
