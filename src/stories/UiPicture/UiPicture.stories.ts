import type { Meta, StoryObj } from '@storybook/vue3';
import BaseUiPicture from '@ui/components/base/base-ui-picture/BaseUiPicture.vue';
import { Sizes } from '@/app/shared/types/definitions';

const meta = {
  title: 'Base/Ui Picture',
  component: BaseUiPicture,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    size: { control: 'select',  options: ['xlg', 'xxlg']},
    label: { control: 'text'},
    default: { control: 'text' }
  },
  args: {
    id: 'defaultID',
    size: Sizes.XLG,
    label: 'picture aria label',
    default: '<img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles" aria-description="Picture image for Name Surname"/>',
  }
} satisfies Meta<typeof BaseUiPicture>

export default meta;

type Story = StoryObj<typeof BaseUiPicture>;

const Template: Story = {
  render: (args) => ({
    components: { BaseUiPicture },
    setup() { return { args }},
    template: `<base-ui-picture v-bind="args">
      <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles" aria-description="Picture image for Name Surname"/>
    </base-ui-picture>`,
  })
}

export const Default: Story = {
  ...Template,
  args: {}
}