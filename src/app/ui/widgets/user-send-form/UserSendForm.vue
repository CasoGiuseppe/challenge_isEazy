<template>
  <section class="user-send-form">
    <form
      class="user-send-form__submit"
      @submit.prevent="sendForm"
      aria-description="Form to send message or upload file"
      novalidate
    >
      <component
        :is="userSendMessageInput"
        class="user-send-form__input"
        id="user-send-input"
        placeholder="Write here your message"
      />
      <component
        :is="userSendMessageButton"
        :role="Roles.SUBMIT"
        :variant="ButtonVariants.CIRCLE"
        :size="Sizes.XLG"
        id="user-send-action"
        class="user-send-form__action"
        label="Click to send your message"
      >
        <PaperAirplaneIcon />
      </component>
    </form>
    <component
      :is="userSendMessageButton"
      :role="Roles.FILE"
      id="user-send-attach"
      class="user-send-form__action"
      label="Attach a new document version"
      ><PaperClipIcon />Attach a new document version</component
    >
  </section>
</template>
<script setup lang="ts">
import { Roles, Sizes } from '@shared/types/definitions';
import { ButtonVariants } from '@ui/components/base/base-ui-button/definitions';
import { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/vue/24/solid';
import useAsyncComponent from '@shared/composables/useAsyncComponent';

const { create } = useAsyncComponent();

// async define components
const userSendMessageInput = await create({
  component: 'base/base-ui-input/BaseUiInput'
});
const userSendMessageButton = await create({
  component: 'base/base-ui-button/BaseUiButton'
});

const sendForm = () => console.log('send');
</script>
<style lang="scss" src="./UserSendForm.scss" scoped />
