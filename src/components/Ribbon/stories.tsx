import { Story, Meta } from '@storybook/react';

import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Components/Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

const Template: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888',
    }}
  >
    <Ribbon {...args} />
  </div>
);

export const Default = Template.bind({});
