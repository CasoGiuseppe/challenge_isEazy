import type { Meta, StoryObj } from '@storybook/vue3';
import BaseUiButton from '@ui/components/base/base-ui-button/BaseUiButton.vue';
import { ButtonVariants } from '@ui/components/base/base-ui-button/definitions';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { Roles, Sizes } from '@shared/types/definitions';
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'Base/Ui Button',
  component: BaseUiButton,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    role: { control: 'select', options: Object.values(Roles) },
    disabled: { control: 'radio', options: [true, false] },
    variant: { control: 'select', options: Object.values(ButtonVariants)},
    size: { if: { arg: 'variant', neq: 'default' }, control: 'select', options: ['lg', 'xlg', 'xxlg']},
    loading: { control: 'radio', options: [true, false] },
    default: { if: { arg: 'variant', eq: 'default' }, control: 'text'}
  },
  args: {
    id: 'defaultID',
    label: 'button aria title',
    role: Roles.BUTTON,
    disabled: false,
    variant: ButtonVariants.DEFAULT,
    size: Sizes.XLG,
    loading: false,
    default: 'Button label',
  }
} satisfies Meta<typeof BaseUiButton>

export default meta;

type Story = StoryObj<typeof BaseUiButton>;

const Template: Story = {
  render: (args) => ({
    components: { BaseUiButton, XMarkIcon },
    setup() { return { args }},
    template: `
      <base-ui-button v-bind="args" @click="action">
        <template v-if="args.default">{{ args.default }}</template>
        <template v-else><XMarkIcon /></template>
      </base-ui-button>`,
    methods: { action: action('clicked') }
  })
}

export const Default: Story = {
  ...Template,
  args: {}
}