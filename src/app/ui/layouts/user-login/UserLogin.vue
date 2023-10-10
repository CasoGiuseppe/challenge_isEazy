<template>
  <form class="user-login" @submit.prevent="sendLogin">
    <h2 v-if="slotTitle" class="user-login__title"><slot name="title" />{{ isLoading }}</h2>
    <!-- user email -->
    <component
      id="email"
      :placeholder="emailPlaceholder"
      :is="userInput"
      :type="Fields.INPUT"
      :input="Types.EMAIL"
      :modelValue="email"
      :disabled="isLoading"
      required
      @update:modelValue="setEmail"
    >
      <template #label>Email</template>
    </component>

    <!-- user password -->
    <component
      id="password"
      :placeholder="pwdPlaceholder"
      :is="userInput"
      :type="Fields.INPUT"
      :input="Types.PASSWORD"
      :modelValue="password"
      :disabled="isLoading"
      required
      @update:modelValue="setPassword"
    >
      <template #label>Password</template>
    </component>

    <!-- user action -->
    <component
      id="login"
      :is="userAction"
      :role="Roles.SUBMIT"
      :disabled="activeUserButton"
      :loading="isLoading"
    >
      Sign in
    </component>

    <!-- error message -->
    <span v-if="hasError.state" class="user-login__error">{{ hasError.message }}</span>
  </form>
</template>
<script setup lang="ts">
import { inject, useSlots, computed, ref } from 'vue';
import { Fields, Types, Roles } from '@shared/types/definitions';
import type { IAsyncComponent } from '@shared/composables/interfaces/useAsyncComponent';
import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';

const emailPlaceholder = `${import.meta.env.VITE_APP_LOGIN_EMAIL}`;
const pwdPlaceholder = `${import.meta.env.VITE_APP_LOGIN_PASSWORD}`;

// ref values for email and login
const email = ref<string>('giuseppe@isEazy.com');
const password = ref<string>('isEazy');

// inject composables
const useAsyncComponent = inject<IAsyncComponent>('UseAsyncComponent') as IAsyncComponent;
const useInfoUserState = inject<IUserInfo>('UseUserInfo') as IUserInfo;

// get create method to load lazy component
const { create } = useAsyncComponent;

// get user composable states
const { signIn, isLoading, hasError } = useInfoUserState;

// async define components
const userInput = await create({ component: 'components/base/base-ui-input/BaseUiInput' });
const userAction = await create({ component: 'components/base/base-ui-button/BaseUiButton' });

// check slots
const slots = useSlots();
const slotTitle = computed(() => !!slots['title']);

// form validation
const setEmail = (value: string) => (email.value = value);
const setPassword = (value: string) => (password.value = value);

const activeUserButton = computed(() =>
  [email.value, password.value].some((el) => el === null || el === '')
);
// form submit action
const sendLogin = async (): Promise<void> => {
  try {
    await signIn({ email: email.value, password: password.value });
  } catch (error) {
    /* empty */
  }
};
</script>
<style lang="scss" src="./UserLogin.scss" scoped />
