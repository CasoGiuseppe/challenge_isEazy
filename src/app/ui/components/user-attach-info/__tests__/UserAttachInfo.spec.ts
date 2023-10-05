import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/utilities';
import { $version, $title, $uiTypingTrigger } from './utilities';
import UserAttachInfo from '../UserAttachInfo.vue';

let $wrapper: any;
describe('UserAttachInfo component tests', () => {
  describe('Test slost behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(UserAttachInfo, {
        slots: {
          version: $version,
          title: $title
        }
      });
    });

    it('Should version and title slots contain correct text', () => {
      expect($wrapper.html()).toContain($version);
      expect($wrapper.html()).toContain($title);
    });

    it('Should reset button be visible', () => {
      expect($wrapper.find(`${$uiTypingTrigger}`).exists()).toBeFalsy();
    });
  });
})