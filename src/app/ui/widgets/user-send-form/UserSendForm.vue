<template>
  <section class="user-send-form">
    <form
      :id="id"
      class="user-send-form__submit"
      @submit.prevent="createNewMessage"
      aria-description="Form to send message or upload file"
      novalidate
    >
      <component
        :is="userSendInput"
        :type="Fields.TEXTAREA"
        :modelValue="messageAreaText"
        :disabled="saving || disabled"
        class="user-send-form__input"
        id="user-send-input"
        placeholder="Write here your message"
        @update:modelValue="setNewMessage"
      />
      <component
        :is="userSendButton"
        :role="Roles.SUBMIT"
        :variant="ButtonVariants.CIRCLE"
        :size="Sizes.XLG"
        :disabled="disabled"
        :loading="saving"
        id="user-send-action"
        class="user-send-form__action"
        label="Click to send your message"
      >
        <PaperAirplaneIcon />
      </component>
    </form>
    <component
      :is="userSendButton"
      :role="Roles.FILE"
      :disabled="disabled"
      :loading="saving"
      id="user-send-upload"
      class="user-send-form__action"
      label="Upload a new document version"
    >
      <PaperClipIcon />Upload a new document version
    </component>
  </section>
</template>
<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { Roles, Sizes, Fields } from '@shared/types/definitions';
import { ButtonVariants } from '@ui/components/base/base-ui-button/definitions';
import { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/vue/24/solid';
import useAsyncComponent from '@shared/composables/useAsyncComponent';

const { id, disabled } = defineProps({
  /**
   * Set the unique id of the form
   */
  id: {
    type: String as PropType<string>,
    default: 'formID'
  },
  /**
   * Handle saving state
   */
  saving: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  /**
   * Handle disabled state
   */
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});

// get create method to load lazy component
const { create } = useAsyncComponent();

// lazy load for component instances
const userSendInput = await create({ component: 'components/base/base-ui-input/BaseUiInput' });
const userSendButton = await create({ component: 'components/base/base-ui-button/BaseUiButton' });

// define text area v model
const messageAreaText = ref<string>();

// set new text message content
const setNewMessage = (value: string) => (messageAreaText.value = value);

// define and launch custom events
const customEmits = defineEmits(['createMessage', 'attach']);
const createNewMessage = () => {
  messageAreaText.value = '';
  customEmits('createMessage', { message: messageAreaText.value });
};
</script>
<style lang="scss" src="./UserSendForm.scss" scoped />
