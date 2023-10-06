import type { Meta, StoryObj } from '@storybook/vue3';
import UserAttachInfo from '@ui/components/user-attach-info/UserAttachInfo.vue';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import { CloudArrowDownIcon } from '@heroicons/vue/24/solid';
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'User Attach Info',
  component: UserAttachInfo,
  tags: ['autodocs'],
  argTypes: {
    version: { control: 'text', description: 'Slot version control' },
    title: { control: 'text', description: 'Slot title control' },
    typing: { control: 'text', description: 'Slot typing control' }
  },
  args: {
    version: 'Version 1',
    title: 'file title',
    typing: 'Documento / PDF'
  }
} satisfies Meta<typeof UserAttachInfo>;

export default meta;

type Story = StoryObj<typeof UserAttachInfo>;

const Template: Story = {
  render: (args) => ({
    components: { UserAttachInfo, BaseUiButton, CloudArrowDownIcon },
    setup() {
      return { args };
    },
    template: `
      <user-attach-info v-bind="args">
        <template #version>{{ args.version }}</template>
        <template #title>{{ args.title }}</template>
        <template #typing>{{ args.typing }}</template>
        <template #action>
          <base-ui-button variant="empty" size="xxlg" @click="action">
            <CloudArrowDownIcon />
          </base-ui-button>
        </template>
      </user-attach-info>`,
      methods: { action: action('submit') }
  })
};

export const Default: Story = {
  ...Template,
  args: {}
};
