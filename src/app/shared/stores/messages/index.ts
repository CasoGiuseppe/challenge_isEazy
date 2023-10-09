import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { IMessageState } from './type';
import { initMessagesState } from './definitions';

export const messagesStore = defineStore('messagesStore', () => {
  const state = ref<IMessageState[]>(initMessagesState);

  const setMessage = (message: IMessageState) => {
    state.value = [...(state.value || []), message];
  };

  const getMessages = computed(() => state.value);

  return {
    state,
    setMessage,
    getMessages
  }
});

export const useMessageStore = messagesStore()
export type MessageStore = typeof useMessageStore
