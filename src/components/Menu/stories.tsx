import { Story, Meta } from '@storybook/react';
import Menu from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story = () => <Menu />;

export const Default = Template.bind({});
