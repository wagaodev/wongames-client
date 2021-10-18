import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Email } from '@styled-icons/material-outlined';

import { renderWithTheme } from 'utils/tests/helpers';
import TextField from '.';

describe('<TextField />', () => {
  it('should render with Label', () => {
    renderWithTheme(<TextField label="Label" name="Label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('should render with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('should changes it value when typing', async () => {
    const onInputChange = jest.fn();

    renderWithTheme(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
    });
    expect(onInputChange).toHaveBeenCalledWith(text);
  });

  it('should not changes it value when disabled', async () => {
    const onInputChange = jest.fn();
    renderWithTheme(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInputChange).not.toHaveBeenCalled();
  });

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        error="Error message"
      />
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be accessible by tab', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" />);

    const input = screen.getByLabelText('TextField');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).toHaveFocus();
  });

  it('should not accessible by tab when disabled', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />);

    const input = screen.getByLabelText('TextField');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).not.toHaveFocus();
  });
});
