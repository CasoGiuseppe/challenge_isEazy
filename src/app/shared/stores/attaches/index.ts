import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { unique } from '@shared/helpers';
import type { IAttachState } from "@/server/types/attaches";

export const attachesStore = defineStore('attachesStore', () => {
  const state = ref<IAttachState[]>([]);

  const saveAttach = (attach: IAttachState): void => {
    const current = state.value;
    state.value = unique({ array: [...current, attach]})
  };

  const getAttaches = computed(() => {
    if (!state.value) return;
    return state.value.length > 0 ? state.value : undefined
  });

  return {
    state,
    saveAttach,
    getAttaches
  }
})

export const useAttachStore = attachesStore()
export type AttachStore = typeof useAttachStore