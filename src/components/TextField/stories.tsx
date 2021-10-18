import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined';

import TextField, { TextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false,
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithError = Template.bind({});
WithError.args = {
  error: 'Ops...something is wrong',
};
