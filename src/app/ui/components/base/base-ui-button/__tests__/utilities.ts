import { mount } from '@vue/test-utils'
import BaseUiButton from '../BaseUiButton.vue';

export const mountComponent = async (props?: Record<string, any>) => {
  return  await mount(BaseUiButton, props)
}
export const $buttonLabel = 'This is a button label';