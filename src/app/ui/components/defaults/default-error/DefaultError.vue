<template>
  <!-- get error message from error attribute -->
  <aside :id="id" class="default-error"><ExclamationTriangleIcon />UPS!:</aside>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid';
const { id } = defineProps({
  /**
   * Set the unique id of the default errror message
   */
  id: {
    type: String as PropType<string>,
    default: 'errorID'
  }
});
</script>
<style lang="scss" src="./DefaultError.scss" scoped />
