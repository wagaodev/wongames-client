import { Story, Meta } from '@storybook/react';
import GameCard, { GameCardProps } from '.';

export default {
  title: 'Components/GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
  },
} as Meta;

const Template: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const Default = Template.bind({});
