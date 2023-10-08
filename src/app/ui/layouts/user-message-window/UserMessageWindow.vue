<template>
  <Suspense>
    <section class="user-message-window">
      <header v-if="slotHeaderExist" class="user-message-window__header">
        <slot name="header" />
      </header>
      <section class="user-message-window__content">
        <slot />
      </section>
      <footer v-if="slotFooterExist" class="user-message-window__footer">
        <slot name="footer" />
      </footer>
    </section>
  </Suspense>
</template>
<script setup lang="ts">
import { useSlots, computed } from 'vue';

const slots = useSlots();
const slotHeaderExist = computed(() => !!slots['header']);
const slotFooterExist = computed(() => !!slots['footer']);
</script>
<style lang="scss" src="./UserMessageWindow.scss" scoped />
