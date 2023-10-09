<template>
  <dialog
    :id="id"
    ref="dialog"
    class="user-dialog__modal"
    aria-labelledby="title"
    aria-describedby="description"
    @keydown.esc="closeDialog"
  >
    <header class="user-dialog__header">
      <button
        v-if="slotCloseExist"
        aria-label="To close click here or press ESC"
        title="To close click here or press ESC"
        @click="closeDialog"
      >
        <!-- @slot Slot for close icon -->
        <slot name="close" />
      </button>

      <!-- @slot Slot for set dialog title -->
      <h2 v-if="slotTitleExist" class="user-dialog__title"><slot name="title" /></h2>

      <!-- @slot Slot for extra header info -->
      <slot name="extra"></slot>
    </header>
    <!-- @slot Slot for dialog content -->
    <slot name="content" />
  </dialog>
</template>
<script setup lang="ts">
import { type PropType, ref, useSlots, computed, onMounted } from 'vue';

// define dialog props
const { id } = defineProps({
  /**
   * Set the unique for user dialog
   */
  id: {
    type: String as PropType<string>,
    default: 'dialogID'
  }
});

// check slots
const slots = useSlots();
const slotCloseExist = computed(() => !!slots['close']);
const slotTitleExist = computed(() => !!slots['title']);

const dialog = ref<any>();
onMounted(() => dialog.value.showModal());

const customEmits = defineEmits(['close']);
const closeDialog = () => customEmits('close');
</script>
<style lang="scss" src="./UserDialog.scss" scoped />
