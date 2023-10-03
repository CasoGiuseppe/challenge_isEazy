import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent, $buttonLabel } from './utilities';
import { Roles, Sizes } from '@shared/types/definitions';
import { ButtonVariants } from '../definitions';

let $wrapper: any;
describe('BaseUiButton component tests', () => {
  describe('Test slost behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent({
        slots: {
          default: $buttonLabel
        }
      });
    });

    it('Should default slot have a correct label content', () => {
      expect($wrapper.html()).toContain($buttonLabel);
    });
  })

  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent({
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
    })

    it('Should prop variant have a correct content', async () => {
      expect($wrapper.props('variant')).toEqual(ButtonVariants.DEFAULT);
    })
  })
})