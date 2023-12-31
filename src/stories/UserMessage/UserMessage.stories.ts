import type { Meta, StoryObj } from '@storybook/vue3';
import UserMessage from '@ui/components/user-message/UserMessage.vue';
import BaseUiPicture from '@ui/components/base/base-ui-picture/BaseUiPicture.vue';
import { Messages } from '@/app/shared/types/definitions';

const meta = {
  title: 'User/User Message',
  component: UserMessage,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    type: { control: 'select', options: Object.values(Messages) },
    picture: { control: 'text' },
    message: { control: 'text' },
    date: { control: 'text' },
  },
  args: {
    id: 'defaultID',
    type: Messages.SEND,
    message: 'user message',
    date: '30 dic 2020 / 08:00',
    picture: '<img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles" aria-description="Picture image for Name Surname"/>'
  }
} satisfies Meta<typeof UserMessage>;

export default meta;

type Story = StoryObj<typeof UserMessage>;

const Template: Story = {
  render: (args) => ({
    components: { UserMessage, BaseUiPicture },
    setup() { return { args }},
    template: `
      <user-message v-bind="args">
        <template #message>{{ args.message }}</template>
        <template #date>{{ args.date }}</template>
        <template #picture>
          <base-ui-picture size="xlg">
            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles" aria-description="Picture image for Name Surname"/>
          </base-ui-picture>
        </template>
      </user-message>`,
  })
}

export const Default: Story = {
  ...Template,
  args: {}
}
