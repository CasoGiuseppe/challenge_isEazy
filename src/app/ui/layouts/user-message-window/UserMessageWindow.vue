<template>
  <Suspense>
    <section :id="id" class="user-message-window">
      <header v-if="slotHeaderExist" class="user-message-window__header">
        <!-- @slot Slot for fill header content -->
        <slot name="header" />
      </header>
      <ul class="user-message-window__content" ref="content">
        <li v-for="node in list" :key="node.id">
          <slot :property="{ node }" name="properties"></slot>
        </li>
        <!-- @slot Slot with list of content -->
        <slot />
      </ul>
      <footer v-if="slotFooterExist" class="user-message-window__footer">
        <!-- @slot Slot for fill footer content -->
        <slot name="footer" />
      </footer>
    </section>
  </Suspense>
</template>
<script setup lang="ts">
import { useSlots, computed, ref, onUpdated, type PropType } from 'vue';

const { id } = defineProps({
  /**
   * Set the unique id user message window
   */
  id: {
    type: String as PropType<string>,
    default: 'userMessageID'
  },
  list: {
    type: Array as PropType<Array<Record<string, any>>>,
    default: () => []
  }
});

const content = ref<HTMLElement>();

const slots = useSlots();
const slotHeaderExist = computed(() => !!slots['header']);
const slotFooterExist = computed(() => !!slots['footer']);

onUpdated(() => {
  console.log(document.querySelector('.user-message-window__content'));
});
</script>
<style lang="scss" src="./UserMessageWindow.scss" scoped />
