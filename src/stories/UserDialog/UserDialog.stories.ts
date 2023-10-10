import type { Meta, StoryObj } from '@storybook/vue3';
import UserDialog from '@ui/components/user-dialog/UserDialog.vue';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';

const meta = {
  title: 'User dialog',
  component: UserDialog,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    open: { control: 'radio', options: [true, false] },
    content: { control: 'text' },
    close: { control: 'text' },
    title: { control: 'text' },
    extra: { control: 'text' },
  },
  args: {
    id: 'defaultID',
    open: true,
    content: 'this is a content dialog',
    close: 'close',
    title: 'Dialog title',
    extra: 'Dialog extra info'
  }
} satisfies Meta<typeof UserDialog>;

export default meta;

type Story = StoryObj<typeof UserDialog>;

const Template: Story = {
  render: (args) => ({
    components: { UserDialog, BaseUiButton, XMarkIcon },
    setup() {
      return { args };
    },
    template: `
      <user-dialog v-bind="args">
        <template #content>{{ args.content }}</template>
        <template #title>{{ args.title }}</template>
        <template #extra>{{ args.extra }}</template>
      </user-dialog>`
  })
};

export const Default: Story = {
  ...Template,
  args: {}
};
