import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { IUserState } from "@/server/types/users";

export const userStore = defineStore('userStore', () => {
  const state = ref<IUserState | undefined>(undefined);

  const saveUser = ({ id, completeName, email, picture }: IUserState): void => {
    state.value = { id, completeName, email, picture };
  };

  const getUser = computed((): IUserState | undefined => {
    if (!state.value) return;
    return {
      id: state?.value?.id,
      completeName: state?.value?.completeName,
      picture: state?.value?.picture,
      email: state?.value?.email
    };
  })

  return {
    state,
    saveUser,
    getUser
  };
});

export const useUserStore = userStore()
export type UserStore = typeof useUserStore
