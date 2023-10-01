<template>
  <component :is="type"></component>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import { FieldType } from '@shared/types';

export interface Props {
  type?: FieldType
}

const { type } = defineProps({
  type: {
    type: String as PropType<FieldType>,
    validator: (prop: FieldType) => [FieldType.INPUT, FieldType.TEXTAREA].includes(prop),
    default: FieldType.INPUT
  }
})
</script>