<template>
  <Suspense>
    <section :id="id" class="user-message-window">
      <!-- @slot Slot for default windows content -->
      <slot name="content" />
      <footer v-if="slotFooterExist" class="user-message-window__footer">
        <!-- @slot Slot for fill footer content -->
        <slot name="footer" />
      </footer>
    </section>
  </Suspense>
</template>
<script setup lang="ts">
import { useSlots, computed, type PropType, onMounted } from 'vue';

const { id } = defineProps({
  /**
   * Set the unique id user message window
   */
  id: {
    type: String as PropType<string>,
    default: 'userMessageID'
  }
});
const slots = useSlots();
const slotFooterExist = computed(() => !!slots['footer']);

const customEmits = defineEmits(['mounted']);
onMounted(() => customEmits('mounted'));
</script>
<style lang="scss" src="./UserMessageWindow.scss" scoped />
