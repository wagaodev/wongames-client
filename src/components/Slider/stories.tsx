import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import Slider, { SliderProps } from '.';

export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta;

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

const Template: Story<SliderProps> = (args) => (
  <Slider settings={args.settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
  </Slider>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  settings: {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: false,
    slidesToShow: 1,
  },
};
