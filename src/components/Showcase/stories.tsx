import { Story, Meta } from '@storybook/react';

import Showcase, { ShowcaseProps } from '.';
import highlightMock from 'components/Highlight/mock';
import gamesMock from 'components/GameCardSlider/mock';

export default {
  title: 'Components/Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

const Template: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutHighlight = Template.bind({});
WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
};

export const WithoutGames = Template.bind({});
WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
};
