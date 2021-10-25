import { Story, Meta } from '@storybook/react';

import GameInfo, { GameInfoProps } from '.';

import mockGame from './mock';

export default {
  title: 'Components/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: mockGame,
} as Meta;

const Template: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);

export const Default = Template.bind({});
