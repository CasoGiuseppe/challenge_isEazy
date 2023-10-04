import { mount } from '@vue/test-utils';
import BaseUiPicture from '../BaseUiPicture.vue';

export const mountComponent = async (props?: Record<string, any>) => {
  return await mount(BaseUiPicture, props);
};
