<template>
  <section class="user-dialog">
    <dialog
      :id="id"
      ref="dialog"
      class="user-dialog__modal"
      aria-labelledby="title"
      aria-describedby="description"
      @keydown.esc="handleDialogState"
    >
      <button
        aria-label="To close click here or press ESC"
        title="To close click here or press ESC"
        @click="handleDialogState"
      >
        <slot name="close">x</slot>
      </button>
      <slot name="content" />
    </dialog>
    <div role="button" @click="handleDialogState">
      <slot name="trigger"></slot>
    </div>
  </section>
</template>
<script setup lang="ts">
import { type PropType, watch, ref } from 'vue';

const { id } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'dialogID'
  }
});

const dialog = ref<HTMLDialog>(null);
const state = ref<boolean>(false);

watch(state, (newValue) => (newValue ? dialog.value.showModal() : dialog.value.close()));

const handleDialogState = () => {
  state.value = !state.value;
  console.log(state.value);
};
</script>
<style lang="scss" src="./UserDialog.scss" scoped />
