<template>
  <component
    data-testID="ui-button"
    :class="[loading ? 'is--loading' : null, 'base-ui-button']"
    :aria-disabled="disabled || loading"
    :aria-label="label"
    :data-variant="variant"
    :data-size="size"
    :id="id"
    :is="Types.BUTTON"
    :disabled="disabled || loading"
    :type="role"
    :title="label"
    @click="sendSubmit"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { Roles, Sizes, Types } from '@shared/types/definitions';
import { ButtonVariants } from './definitions';

const { id, role, disabled, variant, size, label, loading } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'buttonID'
  },
  role: {
    type: String as PropType<Roles>,
    validator: (prop: Roles) => Object.values(Roles).includes(prop)
  },
  disabled: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  variant: {
    type: String as PropType<ButtonVariants>,
    validator: (prop: ButtonVariants) => Object.values(ButtonVariants).includes(prop),
    default: ButtonVariants.DEFAULT
  },
  size: {
    type: String as PropType<Sizes>,
    default: Sizes.LG,
    validator: (prop: Sizes) => Object.values(Sizes).includes(prop)
  },
  label: {
    type: String as PropType<String>,
    default: 'Click here to launch your custom action'
  },
  loading: {
    type: Boolean as PropType<Boolean>,
    default: false
  }
});

const customEmits = defineEmits(['submit']);
const sendSubmit = () => customEmits('submit');
</script>
<style lang="scss" src="./BaseUiButton.scss" scoped />
