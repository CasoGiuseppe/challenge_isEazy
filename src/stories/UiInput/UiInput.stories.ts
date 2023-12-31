import type { Meta, StoryObj } from '@storybook/vue3';
import BaseUiInput from '@ui/components/base/base-ui-input/BaseUiInput.vue';
import { Fields, Types } from '@/app/shared/types/definitions';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Base/Ui Input',
  component: BaseUiInput,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    modelValue: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'select', options: Object.values(Fields) },
    input: { control: 'select', options: Object.values(Types) },
    required: { control: 'radio', options: [true, false] },
    disabled: { control: 'radio', options: [true, false] },
    hidden: { control: 'radio', options: [true, false] },
    accept: { control: 'text' },
    error: { control: 'text' },
    label: { control: 'text' }
  },
  args: {
    id: 'defaultID',
    modelValue: 'default input value',
    placeholder: 'default input placeholder',
    type: Fields.INPUT,
    input: Types.TEXT,
    required: true,
    disabled: false,
    hidden: false,
    accept: '*',
    error: '',
    label: 'label'
  }
} satisfies Meta<typeof BaseUiInput>;

export default meta;

type Story = StoryObj<typeof BaseUiInput>;

const Template: Story = {
  render: (args) => ({
    components: { BaseUiInput },
    setup() {
      return { args };
    },
    template: `<base-ui-input v-bind="args" @input="input" @change="change" @click="click">
      <template #label>{{ args.label }}</template>
      <template #error>{{ args.error }}</template>
    </base-ui-input>`,
    methods: { input: action('input'), change: action('change'), click: action('click') }
  })
};

export const Default: Story = {
  ...Template,
  args: {}
};
