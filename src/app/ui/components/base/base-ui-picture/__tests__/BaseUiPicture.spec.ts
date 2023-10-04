import { describe, it, expect, beforeEach } from 'vitest';
import { Sizes } from '@shared/types/definitions';
import { mountComponent } from './utilities';

let $wrapper: any;
describe('BaseUiPicture component tests', () => {
  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent({
        props: {
          id: 'test',
          size: Sizes.XLG,
          label: 'label'
        }
      });
    });

    it('Should props have a correct typeof', async () => {
      expect(typeof $wrapper.props('id')).toBe('string');
      expect(typeof $wrapper.props('size')).toBe('string');
      expect(typeof $wrapper.props('label')).toBe('string');
    });

    it('Should prop size have a correct content', async () => {
      expect($wrapper.props('size')).toEqual(Sizes.XLG);
    });
  });
});
