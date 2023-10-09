import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { initUserState } from './definitions';
import type { IUserState } from "@/server/types/users";

export const userStore = defineStore('userStore', () => {
  const state = ref<IUserState>(initUserState);

  const setUser = ({ id, name, surname, email, password, picture }: IUserState): void => {
    state.value = { id, name, surname, password, email, picture };
  };

  const getUser = computed((): IUserState => {
    return {
      id: state.value.id,
      name: state.value.name,
      surname: state.value.surname,
      password: state.value.password,
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
