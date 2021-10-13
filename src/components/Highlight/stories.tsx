import { Story, Meta } from '@storybook/react';

import Highlight, { HighlightProps } from '.';
import item from './mock';

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: { ...item },
} as Meta;

const Template: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithFloatImage = Template.bind({});
WithFloatImage.args = {
  floatImage: '/img/borderlands-float.png',
};
