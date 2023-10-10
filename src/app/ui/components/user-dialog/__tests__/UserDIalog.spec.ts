import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/utilities';
import { $closeLabel, $content } from './utilities';
import UserDialog from '../UserDialog.vue';

let $wrapper: any;
describe('UserDialog component tests', () => {
  beforeEach(async () => {
    $wrapper = await mountComponent(UserDialog, {
      
      slots: {
        close: $closeLabel,
        content:  $content

      }
    })
  })

  describe('Test emits behaviours', () => {
     it('Should slots have a correct content', () => {
      expect($wrapper.html()).toContain($closeLabel);
      expect($wrapper.html()).toContain($content);
    });
  })
})