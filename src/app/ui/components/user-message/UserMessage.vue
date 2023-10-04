<template>
  <article
    data-testID="ui-message"
    :id="id"
    :data-type="`display-${type}`"
    class="user-message"
    aria-describedby="message"
  >
    <slot name="picture" />
    <p id="message" class="user-message__text">message</p>
  </article>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { Positions } from '@shared/types/definitions';

const { id, type } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'messageID'
  },
  type: {
    type: String as PropType<Positions>,
    validator: (prop: Positions) => Object.values(Positions).includes(prop),
    default: Positions.LEFT
  }
});
</script>
<style lang="scss" src="./UserMessage.scss" scoped />
