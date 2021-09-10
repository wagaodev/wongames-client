import { Story, Meta } from '@storybook/react';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: {
    title: 'Borderlands 3',
    subtitle: 'Borderlands it’s back.',
    backgroundImage: '/img/borderlands-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/borderlands-2',
  },
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
