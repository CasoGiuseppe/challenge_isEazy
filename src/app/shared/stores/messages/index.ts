import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { IMessageState } from './type';

export const messagesStore = defineStore('messagesStore', () => {
  const state = ref<IMessageState[]>();

  const setMessage = (message: IMessageState) => {
    state.value = [...(state.value || []), message];
  };

  const getMessage = computed(() => state.value);

  return {
    state,
    setMessage,
    getMessage
  }
});

export const useMessageStore = messagesStore()
export type MessageStore = typeof useMessageStore
