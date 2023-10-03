import { describe, it, expect, beforeEach } from 'vitest';
import {
  mountComponent,
  $initEmittedValue,
  $newEmittedValue,
  $errorMessage,
  $uiInputTrigger,
  $uiResetTrigger
} from './utilities';
import { Fields, Types } from '@shared/types/definitions';

let $wrapper: any;
describe('BaseUserInput component tests', () => {
  describe('Test slost behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent({
        slots: {
          error: $errorMessage
        }
      });
    });

    it('Should error slot have a correct text', () => {
      expect($wrapper.html()).toContain($errorMessage);
    });

    it('Should reset button be visible', () => {
      expect($wrapper.find(`${$uiResetTrigger}`)).not.toBeUndefined();
    });
  });

  describe('Test v-model behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent({
        props: {
          modelValue: $initEmittedValue,
          'onUpdate:modelValue': (e: any) =>
            $wrapper.setProps({ modelValue: e })
        }
      });
    });

    it('Should model value have correct text on input change', async () => {
      await $wrapper
        .find(`${$uiInputTrigger}`)
        .setValue($newEmittedValue);
      expect($wrapper.props('modelValue')).toBe($newEmittedValue);
    });
  });

  describe('Test emits behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent({
        slots: {
          error: $errorMessage
        }
      });
    });

    it('Should emit "update:modelValue" could have a correct property on input change', async () => {
      $wrapper.find(`${$uiInputTrigger}`).setValue($newEmittedValue);
      expect($wrapper.emitted()).toHaveProperty('update:modelValue');
    });

    it('Should emit "reset" could have a correct property on reset click', async () => {
      $wrapper.find('[data-testID=ui-reset]').trigger('click');
      expect($wrapper.emitted()).toHaveProperty('reset');
    });

    it('Should emit "update:modelValue" was detected ad have correct value', async () => {
      $wrapper.find(`${$uiInputTrigger}`).setValue($newEmittedValue);
      expect($wrapper.emitted('update:modelValue')).toHaveLength(1);
      expect($wrapper.emitted('update:modelValue')[0][0]).toEqual(
        $newEmittedValue
      );
    });
  });

  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent({
        props: {
          id: 'test',
          type: Fields.INPUT,
          input: Types.TEXT,
          required: true,
          modelValue: $newEmittedValue
        }
      });
    });

    it('Should props have a correct typeof', async () => {
      expect(typeof $wrapper.props('id')).toBe('string');
      expect(typeof $wrapper.props('type')).toBe('string');
      expect(typeof $wrapper.props('input')).toBe('string');
      expect(typeof $wrapper.props('required')).toBe('boolean');
      expect(typeof $wrapper.props('modelValue')).toBe('string');
    });

    it('Should prop type have a correct content', async () => {
      expect($wrapper.props('type')).toEqual(Fields.INPUT);
    })

    it('Should prop input have a correct content', async () => {
      expect($wrapper.props('input')).toEqual(Types.TEXT);
    })
  });
});
