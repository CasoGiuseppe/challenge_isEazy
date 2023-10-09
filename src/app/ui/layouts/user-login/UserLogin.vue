<template>
  <form class="user-login" @submit.prevent="sendLogin">
    <h2 v-if="slotTitle" class="user-login__title"><slot name="title" /></h2>
    {{ activeUserButton }}{{ email }}{{ password }}
    <!-- user email -->
    <component
      id="email"
      placeholder="giuseppe@isEazy.com"
      :is="userInput"
      :type="Fields.INPUT"
      :input="Types.EMAIL"
      :modelValue="email"
      :disabled="loading"
      required
      @update:modelValue="setEmail"
    >
      <template #label>Write here your email</template>
    </component>

    <!-- user password -->
    <component
      id="password"
      placeholder="isEazy"
      :is="userInput"
      :type="Fields.INPUT"
      :input="Types.TEXT"
      :modelValue="password"
      :disabled="loading"
      required
      @update:modelValue="setPassword"
    >
      <template #label>Write here your password</template>
    </component>

    <!-- user action -->
    <component :is="userAction" id="login" :role="Roles.SUBMIT" :disabled="activeUserButton"
      >Login</component
    >
  </form>
</template>
<script setup lang="ts">
import { inject, useSlots, computed, ref } from 'vue';
import { Fields, Types, Roles } from '@shared/types/definitions';
import type { IAsyncComponent } from '@shared/composables/interfaces/useAsyncComponent';
import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';

// ref values for email and login
const email = ref<string>(null);
const password = ref<string>(null);

// inject composables
const useAsyncComponent = inject<IAsyncComponent>('UseAsyncComponent') as IAsyncComponent;
const useInfoUserState = inject<IUserInfo>('UseUserInfo') as IUserInfo;

// get create method to load lazy component
const { create } = useAsyncComponent;

// get user composable states
const { getUser, signIn, loading, error } = useInfoUserState;

// async define components
const userInput = await create({ component: 'base/base-ui-input/BaseUiInput' });
const userAction = await create({ component: 'base/base-ui-button/BaseUiButton' });

// check slots
const slots = useSlots();
const slotTitle = computed(() => !!slots['title']);

// form validation
const setEmail = (value) => (email.value = value);
const setPassword = (value) => (password.value = value);

const activeUserButton = computed(() =>
  [email.value, password.value].some((el) => el === null || el === '')
);
// form submit action
const sendLogin = (): void => console.log('loin');
</script>
<style lang="scss" src="./UserLogin.scss" scoped />
