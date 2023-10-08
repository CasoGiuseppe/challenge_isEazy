<template>
  <figure
    data-testID="ui-picture"
    :id="id"
    :class="[slotDefaultExist ? null : 'base-ui-picture--no-picture', 'base-ui-picture']"
    :data-size="size"
    :aria-label="label"
  >
    <!-- @slot Default slot for picture image -->
    <slot>
      <img
        src="https://api.dicebear.com/7.x/bottts/svg?seed=Harley"
        aria-description="Default image for user picture"
      />
    </slot>
  </figure>
</template>
<script setup lang="ts">
import { type PropType, useSlots, computed } from 'vue';
import { Sizes } from '@shared/types/definitions';

const { id, size, label } = defineProps({
  /**
   * Set the unique id of the ui picture
   */
  id: {
    type: String as PropType<string>,
    default: 'pictureID'
  },
  /**
   * Set the size of picture component
   */
  size: {
    type: String as PropType<Sizes>,
    default: Sizes.XXLG,
    validator: (prop: Sizes) => Object.values(Sizes).includes(prop)
  },
  /**
   * Set the aria accesibility label
   */
  label: {
    type: String as PropType<string>,
    default: 'This is a user picture image'
  }
});

const slots = useSlots();
const slotDefaultExist = computed(() => !!slots['default']);
</script>
<style lang="scss" src="./BaseUiPicture.scss" scoped />
