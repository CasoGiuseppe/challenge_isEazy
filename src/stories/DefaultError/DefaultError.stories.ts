import type { Meta, StoryObj } from '@storybook/vue3';
import DefaultError from '@ui/components/defaults/default-error/DefaultError.vue'

const meta = {
  title: 'Default/Error',
  component: DefaultError,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
  },
  args: {
    id: 'defaultID',
  }
} satisfies Meta<typeof DefaultError>

export default meta;

type Story = StoryObj<typeof DefaultError>;

const Template: Story = {
  render: (args) => ({
    components: { DefaultError },
    setup() { return { args }},
    template: `<default-error v-bind="args" error="error type"></default-error>`,
  })
}

export const Default: Story = {
  ...Template,
  args: {}
}