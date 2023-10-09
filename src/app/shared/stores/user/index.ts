import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { initUserState } from './definitions';
import type { IUserState } from './type';

export const userStore = defineStore('userStore', () => {
  const state = ref<IUserState>(initUserState);

  const setUser = ({ id, name, email }: IUserState): void => {
    state.value = { id, name, email };
  };

  const getUser = computed((): IUserState => {
    return {
      id: state.value.id,
      name: state.value.name,
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
