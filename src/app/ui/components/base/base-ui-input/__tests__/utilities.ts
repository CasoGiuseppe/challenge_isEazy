import { mount } from '@vue/test-utils'
import BaseUserInput from '../BaseUiInput.vue';

export const mountComponent = async (props?: Record<string, any>) => {
  return  await mount(BaseUserInput, props)
}

export const $initEmittedValue = 'init emitted value';
export const $newEmittedValue = 'new emitted value';
export const $errorMessage = 'This is an error';
export const $uiInputTrigger = '[data-testID=ui-input]';
export const $uiResetTrigger = '[data-testID=ui-reset]';