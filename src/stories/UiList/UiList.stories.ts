import type { Meta, StoryObj } from '@storybook/vue3';
import BaseUiList from '@ui/components/base/base-ui-list/BaseUiList.vue';

const meta = {
  title: 'Base/Ui List',
  component: BaseUiList,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    list: { control: 'array' },
    maxHeight: { control: 'text' },
    loader: { control: 'text' },
  },
  args: {
    id: 'defaultID',
    list: [{title: 'first list item'}, {title: 'second list item'}],
    maxHeight: 'none',
    loader: ''
  }
} satisfies Meta<typeof BaseUiList>;

export default meta;

type Story = StoryObj<typeof BaseUiList>;

const Template: Story = {
  render: (args) => ({
    components: { BaseUiList },
    setup() {
      return { args };
    },
    template: `<base-ui-list v-bind="args">
      <template #properties="{property: {item: { title }}}">{{ title }}</template>
      <template #loader>{{ args.loader }}</template>
    </base-ui-list>`,
  })
};

export const Default: Story = {
  ...Template,
  args: {}
};
