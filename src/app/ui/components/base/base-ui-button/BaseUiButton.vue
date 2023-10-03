<template>
  <component
    data-testID="ui-button"
    :data-variant="variant"
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
import { ButtonType, ButtonVariants } from '@shared/types/definitions';

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
  }
});

const getInputType = computed(() => ['submit', 'file'].includes(type));
const getIsType = computed(() => {
  return getInputType.value ? 'input' : type;
});
</script>
<style lang="scss" src="./BaseUiButton.scss" scoped />
