<template>
  <dialog class="user-dialog">dialog</dialog>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';

const { id, open } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'dialogID'
  },
  role: {
    type: Boolean as PropType<Boolean>,
    default: false
  }
});
</script>
<style lang="scss" src="./UserDialog.scss" scoped />
