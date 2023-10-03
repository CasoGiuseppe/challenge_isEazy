<template>
  <component
    data-testID="ui-button"
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
import { computed, useSlots, type PropType } from 'vue';
import { ButtonType } from '@shared/types/definitions';
import { ButtonAllowedArray } from './definitions';

const { id, type, disabled } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'buttonID'
  },

  type: {
    type: String as PropType<ButtonType>,
    validator: (prop: ButtonType) => ButtonAllowedArray.includes(prop),
    default: ButtonType.BUTTON
  },

  disabled: {
    type: Boolean as PropType<Boolean>,
    default: false
  }
});

const getSlots = useSlots();
const hasError = computed(() => getSlots['default']);

const getInputType = computed(() => ['submit', 'file'].includes(type));
const getIsType = computed(() => {
  return getInputType.value ? 'input' : type;
});
</script>
