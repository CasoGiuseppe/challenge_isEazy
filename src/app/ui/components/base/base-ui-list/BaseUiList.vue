<template>
  <section :id="id" :style="{ '--max-height': maxHeight }" class="base-ui-list">
    <!-- @slot Slot to handle loading state -->
    <slot name="loader" />
    <TransitionGroup
      appear
      v-if="list?.length !== 0"
      tag="ul"
      class="base-ui-list__items"
      name="appear-message"
    >
      <li v-for="item in list" :key="item.id">
        <!-- @slot Slot for list of content -->
        <slot :property="{ item }" name="properties"></slot>
      </li>
    </TransitionGroup>
    <aside v-else class="base-ui-list__fallback">No items was found</aside>
  </section>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
const { id, list } = defineProps({
  /**
   * Set the unique id user message window
   */
  id: {
    type: String as PropType<string>,
    default: 'userMessageID'
  },

  /**
   * Set elements for list items
   */
  list: {
    type: Array as PropType<Array<Record<string, any>>>,
    default: () => undefined
  },

  /**
   * Set elements for list items
   */
  maxHeight: {
    type: String as PropType<string>,
    default: 'none'
  }
});
</script>
<style lang="scss" src="./BaseUiList.scss" scoped />
