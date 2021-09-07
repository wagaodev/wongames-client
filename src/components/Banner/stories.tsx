import { Story, Meta } from '@storybook/react';
import Banner, { BannerProps } from '.';

export default {
  title: 'Components/Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  argTypes: {
    ribbon: {
      type: 'string',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithRibbon = Template.bind({});
WithRibbon.args = {
  ribbon: '20% OFF',
};
