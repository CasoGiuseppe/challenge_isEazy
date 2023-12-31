<template>
  <form class="user-login" @submit.prevent="sendLogin">
    <h2 v-if="slotTitle" class="user-login__title"><slot name="title" /></h2>
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
import { useAsyncComponentKey, useUserInfoKey } from '@shared/types/symbols';

const emailPlaceholder = `example: name@isEazy.com`;
const pwdPlaceholder = `example: isEazy`;

// ref values for email and login
const email = ref<string>();
const password = ref<string>();

// inject composables
const useAsyncComponent = inject<IAsyncComponent>(useAsyncComponentKey) as IAsyncComponent;
const useInfoUserState = inject<IUserInfo>(useUserInfoKey) as IUserInfo;

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
    if (!email.value || !password.value) return;
    await signIn({ email: email.value, password: password.value });
  } catch (error) {
    throw new Error(error as string);
  }
};
</script>
<style lang="scss" src="./UserLogin.scss" scoped />
