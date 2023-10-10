import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { IMessageState } from "@/server/types/messages";

export const messagesStore = defineStore('messagesStore', () => {
  const state = ref<IMessageState[] | []>([]);

  const saveMessage = (message: IMessageState) => {
    const current = state.value;
    state.value = [...current, message];
  };

  const getMessages = computed(() => {
    if (!state.value) return;
    return state.value.length > 0 ? state.value : undefined
  });

  return {
    state,
    saveMessage,
    getMessages
  }
});

export const useMessageStore = messagesStore()
export type MessageStore = typeof useMessageStore
