import { Story, Meta } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story = () => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto',
    }}
  >
    <Footer />
  </div>
);

export const Default = Template.bind({});
