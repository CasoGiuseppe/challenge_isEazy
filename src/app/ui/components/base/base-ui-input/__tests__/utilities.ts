import { mount } from '@vue/test-utils'
import BaseUserInput from '../BaseUserInput.vue';

export const mountComponent = async (props?: Record<string, any>) => {
  return  await mount(BaseUserInput, props)
}

export const $initEmittedValue = 'init emitted value';
export const $newEmittedValue = 'new emitted value';
export const $errorMessage = 'This is an error';