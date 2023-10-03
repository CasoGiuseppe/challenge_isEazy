<template>
  <figure class="base-ui-picture" :data-size="size">picture</figure>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
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
  }
});
</script>
<style lang="scss" src="./BaseUiPicture.scss" scoped />
