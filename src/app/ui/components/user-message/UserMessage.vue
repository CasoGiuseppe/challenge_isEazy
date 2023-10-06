<template>
  <article
    data-testID="ui-message"
    :id="id"
    :data-type="type"
    class="user-message"
    aria-describedby="message"
  >
    <slot name="picture" />
    <p id="message" class="user-message__text">
      <slot name="message">{{ NO_MESSAGE_FOUND }}</slot>
      <span v-if="$slots.date" class="user-message__date">
        <slot name="date" />
      </span>
    </p>
  </article>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { NO_MESSAGE_FOUND } from './definitions';
import { Messages } from '@shared/types/definitions';

const { id, type } = defineProps({
  /**
   * Set the unique id for user message
   */
  id: {
    type: String as PropType<String>,
    default: 'messageID'
  },
  /**
   * Set message type [receive, send]
   */
  type: {
    type: String as PropType<Messages>,
    validator: (prop: Messages) => Object.values(Messages).includes(prop),
    default: Messages.SEND
  }
});
</script>
<style lang="scss" src="./UserMessage.scss" scoped />
