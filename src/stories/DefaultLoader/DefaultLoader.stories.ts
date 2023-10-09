import type { Meta, StoryObj } from '@storybook/vue3';
import DefaultLoader from '@ui/components/defaults/default-loader/DefaultLoader.vue'

const meta = {
  title: 'Default/Loader',
  component: DefaultLoader,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    default: { control: 'text'}

  },
  args: {
    id: 'defaultID',
    default: 'default loade message'
  }
} satisfies Meta<typeof DefaultLoader>

export default meta;

type Story = StoryObj<typeof DefaultLoader>;

const Template: Story = {
  render: (args) => ({
    components: { DefaultLoader },
    setup() { return { args }},
    template: `<default-loader v-bind="args">{{ args.default }}</default-loader>`,
  })
}

export const Default: Story = {
  ...Template,
  args: {}
}