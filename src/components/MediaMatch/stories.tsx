import { Story, Meta } from '@storybook/react';
import MediaMatch from '.';

export default {
  title: 'Components/MediaMatch',
  component: MediaMatch,
} as Meta;

const Template: Story = (args) => <MediaMatch {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  greaterThan: 'medium',
  children: 'Only on desktop',
};

export const Mobile = Template.bind({});
Mobile.args = {
  lessThan: 'medium',
  children: 'Only on mobile',
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
