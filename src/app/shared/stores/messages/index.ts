import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { IMessageState } from "@/server/types/messages";

export const messagesStore = defineStore('messagesStore', () => {
  const state = ref<IMessageState[] | []>([]);

  const setMessage = (message: IMessageState) => {
    state.value = [...(state.value || []), message];
  };

  const getMessages = computed(() => {
    if (!state.value) return;
    return state.value
  });

  return {
    state,
    setMessage,
    getMessages
  }
});

export const useMessageStore = messagesStore()
export type MessageStore = typeof useMessageStore
