import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('Component: <Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument();
  });

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', {
      hidden: true,
    });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.getAllByText(/sign in/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
  });

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="brfeitoza" />);

    expect(screen.getByText(/my account/i)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});
