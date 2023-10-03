<template>
  <component
    data-testID="ui-button"
    :data-variant="variant"
    :data-size="size"
    class="base-ui-button"
    :id="id"
    :is="getIsType"
    :type="getInputType ? type : null"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { ButtonType, Sizes } from '@shared/types/definitions';
import { ButtonVariants } from './definitions';

const { id, type, disabled, variant } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'buttonID'
  },
  type: {
    type: String as PropType<ButtonType>,
    validator: (prop: ButtonType) => Object.values(ButtonType).includes(prop),
    default: ButtonType.BUTTON
  },
  disabled: {
    type: Boolean as PropType<Boolean>,
    default: false
  },
  variant: {
    type: String as PropType<ButtonVariants>,
    validator: (prop: ButtonVariants) =>
      Object.values(ButtonVariants).includes(prop),
    default: ButtonVariants.DEFAULT
  },
  size: {
    type: String as PropType<Sizes>,
    default: Sizes.LG,
    validator: (prop: Sizes) => Object.values(Sizes).includes(prop)
  }
});

const getInputType = computed(() => ['submit', 'file'].includes(type));
const getIsType = computed(() => {
  return getInputType.value ? 'input' : type;
});
</script>
<style lang="scss" src="./BaseUiButton.scss" scoped />
