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
    content: { control: 'text' },
    close: { control: 'text' },
    trigger: { control: 'text' },
  },
  args: {
    id: 'defaultID',
    content: 'this is a content dialog',
    close: 'close',
    trigger: 'Open/close dialog'

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
        <template #trigger>
          <base-ui-button>{{ args.trigger }}</base-ui-button>
        </template>
        <template #close><XMarkIcon /></template>
      </user-dialog>`
  })
};

export const Default: Story = {
  ...Template,
  args: {}
};
