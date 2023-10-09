<template>
  <aside class="default-loader">
    <ClockIcon />
    <!-- @slot Default slot laoding message -->
    <slot>wait a moment please...</slot>
  </aside>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { ClockIcon } from '@heroicons/vue/24/solid';
const { id } = defineProps({
  /**
   * Set the unique id of the default loading message
   */
  id: {
    type: String as PropType<string>,
    default: 'errorID'
  }
});
</script>
<style lang="scss" src="./DefaultLoader.scss" scoped />
