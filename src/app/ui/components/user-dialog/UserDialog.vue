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
        v-if="slotCloseExist"
        aria-label="To close click here or press ESC"
        title="To close click here or press ESC"
        @click="handleDialogState"
      >
        <!-- @slot Slot for close icon -->
        <slot name="close" />
      </button>
      <!-- @slot Slot for dialog content -->
      <slot name="content" />
    </dialog>
    <div role="button" @click="handleDialogState">
      <!-- @slot Slot for trigger that handle open/close dialog -->
      <slot name="trigger">Open dialog</slot>
    </div>
  </section>
</template>
<script setup lang="ts">
import { type PropType, watch, ref, useSlots, computed } from 'vue';

const { id } = defineProps({
  /**
   * Set the unique for user dialog
   */
  id: {
    type: String as PropType<string>,
    default: 'dialogID'
  }
});

const dialog = ref<any>(null);
const state = ref<boolean>(false);

watch(state, (newValue: boolean) => {
  if (!dialog.value) return;
  newValue ? dialog.value.showModal() : dialog.value.close();
});

const handleDialogState = () => (state.value = !state.value);
const slots = useSlots();
const slotCloseExist = computed(() => !!slots['close']);
</script>
<style lang="scss" src="./UserDialog.scss" scoped />
