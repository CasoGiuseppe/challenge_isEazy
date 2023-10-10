<template>
  <dialog
    :id="id"
    :open="open"
    ref="dialog"
    class="user-dialog__modal"
    aria-labelledby="title"
    aria-describedby="description"
    @keydown.esc="closeDialog"
  >
    <section class="user-dialog__area">
      <header class="user-dialog__header">
        <button
          v-if="slotCloseExist"
          aria-label="To close click here or press ESC"
          title="To close click here or press ESC"
          class="user-dialog__action"
          @click="closeDialog"
        >
          <!-- @slot Slot for close icon -->
          <slot name="close" />
        </button>

        <!-- @slot Slot for set dialog title -->
        <h2 v-if="slotTitleExist" class="user-dialog__title"><slot name="title" /></h2>

        <!-- @slot Slot for extra header info -->
        <aside v-if="slotExtraExist" class="user-dialog__extra"><slot name="extra" /></aside>
      </header>
      <!-- @slot Slot for dialog content -->
      <slot name="content" />
    </section>
  </dialog>
</template>
<script setup lang="ts">
import { type PropType, ref, useSlots, computed } from 'vue';

// define dialog props
const { id, open } = defineProps({
  /**
   * Set the unique for user dialog
   */
  id: {
    type: String as PropType<string>,
    default: 'dialogID'
  },

  /**
   * Set dialog display mode
   */
  open: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});

// check slots
const slots = useSlots();
const slotCloseExist = computed(() => !!slots['close']);
const slotTitleExist = computed(() => !!slots['title']);
const slotExtraExist = computed(() => !!slots['extra']);

const dialog = ref<HTMLDialogElement>();

const customEmits = defineEmits(['close']);
const closeDialog = () => customEmits('close');
</script>
<style lang="scss" src="./UserDialog.scss" scoped />
