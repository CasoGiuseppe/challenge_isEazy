<template>
  <section :id="id" class="base-ui-list">
    <slot name="loader" />
    <ul v-if="list?.length !== 0" class="base-ui-list__items">
      <li v-for="item in list" :key="item.id">
        <slot :property="{ item }" name="properties"></slot>
      </li>
    </ul>
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
  }
});
</script>
<style lang="scss" src="./BaseUiList.scss" scoped />
