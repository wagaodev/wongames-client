import { Story, Meta } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};
