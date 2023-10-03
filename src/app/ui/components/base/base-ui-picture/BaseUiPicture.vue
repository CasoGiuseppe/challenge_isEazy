<template>
  <figure
    :class="[slotPicture ? null : 'base-ui-picture--no-picture', 'base-ui-picture']"
    :data-size="size"
    :aria-label="label"
  >
    <slot />
  </figure>
</template>
<script setup lang="ts">
import { type PropType, useSlots, computed } from 'vue';
import { Sizes } from '@shared/types/definitions';

const { id, size } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'pictureID'
  },
  size: {
    type: String as PropType<Sizes>,
    default: Sizes.XXLG,
    validator: (prop: Sizes) => Object.values(Sizes).includes(prop)
  },
  label: {
    type: String as PropType<String>,
    default: 'This is a user picture image'
  }
});

const slots = useSlots();
const slotPicture = computed(() => !!slots['default']);
</script>
<style lang="scss" src="./BaseUiPicture.scss" scoped />
