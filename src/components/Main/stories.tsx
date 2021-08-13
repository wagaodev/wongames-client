import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from '.';

export default {
  title: 'Components/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, Next.js e Styled Components',
};
