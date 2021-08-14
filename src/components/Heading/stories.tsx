import { Story, Meta } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Most Populars',
  color: 'black',
};
