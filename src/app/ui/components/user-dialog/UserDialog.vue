<template>
  <dialog
    :id="id"
    ref="dialog"
    class="user-dialog"
    aria-labelledby="title"
    aria-describedby="description"
    @keydown.esc="closeDialog"
  >
    <slot name="close">x</slot>
    <slot name="content" />
  </dialog>
</template>
<script setup lang="ts">
import { type PropType, watch, ref } from 'vue';

const props = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'dialogID'
  },
  open: {
    type: Boolean as PropType<Boolean>,
    default: false
  }
});

const dialog = ref<HTMLDialog>(null);
watch(
  () => props.open,
  (newValue) => {
    newValue ? dialog.value.showModal() : dialog.value.close();
  }
);

const customEmits = defineEmits(['close']);
const closeDialog = () => customEmits('close');
</script>
<style lang="scss" src="./UserDialog.scss" scoped />
