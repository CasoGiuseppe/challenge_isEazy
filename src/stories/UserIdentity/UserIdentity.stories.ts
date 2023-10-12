import type { Meta, StoryObj } from '@storybook/vue3';
import UserIdentity from '@ui/components/user-identity/UserIdentity.vue';
import BaseUiPicture from '@ui/components/base/base-ui-picture/BaseUiPicture.vue';

const meta = {
  title: 'User/User Identity',
  component: UserIdentity,
  tags: ['autodocs'],
  argTypes: {
    picture: { control: 'text' },
    name: { control: 'text' },
    role: { control: 'text' },
  },
  args: {
    picture: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ginger',
    name: 'Name Surname',
    role: 'Role'
  }
} satisfies Meta<typeof UserIdentity>;

export default meta;

type Story = StoryObj<typeof UserIdentity>;

const Template: Story = {
  render: (args) => ({
    components: { UserIdentity, BaseUiPicture },
    setup() {
      return { args };
    },
    template: `
      <user-identity>
        <template #picture>
          <base-ui-picture size="xxlg">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Ginger" aria-description="Picture image for {{ args.name }}"/>
          </base-ui-picture>
        </template>
        <template #name>{{ args.name }}</template>
        <template #role>{{ args.role }}</template>
      </user-identity>`
  })
};

export const Default: Story = {
  ...Template,
  args: {}
};
