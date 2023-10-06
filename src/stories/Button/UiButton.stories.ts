import type { Meta, StoryObj } from '@storybook/vue3';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import { ButtonVariants } from '@ui/components/base/base-ui-button/definitions';
import { Roles, Sizes, Types } from '@shared/types/definitions';

const meta = {
  title: 'Base/Ui Button',
  component: BaseUiButton,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    role: { control: 'select', options: Object.values(Roles) },
    disabled: { control: 'radio', options: [true, false] },
    variant: { control: 'select', options: Object.values(ButtonVariants)},
    size: { control: 'select', options: ['lg', 'xlg', 'xxlg']},
    loading: { control: 'radio', options: [true, false] },
  },
  args: {
    id: 'defaultID',
    disabled: false
  }
}satisfies Meta<typeof BaseUiButton>

export default meta;

type Story = StoryObj<typeof BaseUiButton>;

const Template: Story = {
  render: (args) => ({
    components: { BaseUiButton },
    setup() { return { args }},
    template: `<BaseUiButton v-bind="args">default label</BaseUiButton>`
  })
}

export const Default: Story = {
  ...Template,
  args: {}
}