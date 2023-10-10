import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { initUserState } from './definitions';
import type { IUserState } from "@/server/types/users";

export const userStore = defineStore('userStore', () => {
  const state = ref<IUserState>(initUserState);

  const setUser = ({ id, name, surname, email, picture }: IUserState): void => {
    state.value = { id, name, surname, email, picture };
  };

  const getUser = computed((): IUserState | undefined => {
    return {
      id: state?.value?.id,
      completeName: `${state.value.name}, ${state.value.surname}`,
      picture: state.value.picture,
      email: state.value.email
    };
  })

  return {
    state,
    setUser,
    getUser
  };
});

export const useUserStore = userStore()
export type UserStore = typeof useUserStore
