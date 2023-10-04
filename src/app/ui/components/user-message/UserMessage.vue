<template>
  <article
    data-testID="ui-message"
    :id="id"
    :data-type="type"
    class="user-message"
    aria-describedby="message"
  >
    <slot name="picture" />
    <p id="message" class="user-message__text">message</p>
  </article>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { Messages } from '@shared/types/definitions';

const { id, type } = defineProps({
  id: {
    type: String as PropType<String>,
    default: 'messageID'
  },
  type: {
    type: String as PropType<Messages>,
    validator: (prop: Messages) => Object.values(Messages).includes(prop)
  }
});
</script>
<style lang="scss" src="./UserMessage.scss" scoped />
