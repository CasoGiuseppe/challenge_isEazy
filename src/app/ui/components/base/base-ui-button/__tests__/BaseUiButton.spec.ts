import { describe, it, expect, beforeEach } from 'vitest';
import { $buttonLabel, $uiSubmitTrigger } from './utilities';
import { Roles, Sizes } from '@shared/types/definitions';
import { ButtonVariants } from '../definitions';
import { mountComponent } from '@tests/utilities';
import BaseUiButton from '../BaseUiButton.vue';

let $wrapper: any;
describe('BaseUiButton component tests', () => {
  describe('Test HTML attribute', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseUiButton, {
        props: {
          disabled: true,
        }
      });
    });

    it('Should input have correct disabled state', () => {
      expect($wrapper.props('disabled')).toBeTruthy;
    });
  });

  describe('Test slost behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseUiButton, {
        slots: {
          default: $buttonLabel
        }
      });
    });

    it('Should default slot have a correct label content', () => {
      expect($wrapper.html()).toContain($buttonLabel);
    });
  });

  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseUiButton, {
        props: {
          id: 'test',
          role: Roles.BUTTON,
          disabled: false,
          variant: ButtonVariants.DEFAULT,
          size: Sizes.XLG,
          label: $buttonLabel
        }
      });
    });

    it('Should props have a correct typeof', async () => {
      expect(typeof $wrapper.props('id')).toBe('string');
      expect(typeof $wrapper.props('role')).toBe('string');
      expect(typeof $wrapper.props('disabled')).toBe('boolean');
      expect(typeof $wrapper.props('variant')).toBe('string');
      expect(typeof $wrapper.props('size')).toBe('string');
      expect(typeof $wrapper.props('label')).toBe('string');
    });

    it('Should prop role have a correct content', async () => {
      expect($wrapper.props('role')).toEqual(Roles.BUTTON);
    });

    it('Should prop variant have a correct content', async () => {
      expect($wrapper.props('variant')).toEqual(ButtonVariants.DEFAULT);
    });
  });

  describe('Test emits behaviours', () => {
    it('Should emit "submit" could have a correct property on reset click', async () => {
      $wrapper.find(`${$uiSubmitTrigger}`).trigger('click');
      expect($wrapper.emitted()).toHaveProperty('submit');
    });
  });
});
