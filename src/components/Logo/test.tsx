import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';
import Logo from '.';

describe('Component: <Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem',
    });
  });

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem',
    });
  });

  it('should render a bigger logo without text on mobile if hideOnMobile is true', () => {
    renderWithTheme(<Logo hideOnMobile />);

    const element = screen.getByLabelText(/won games/i).parentElement;
    const options = {
      media: '(max-width: 768px)',
    };

    expect(element).toHaveStyleRule('width', '5.8rem', options);
    expect(element).toHaveStyleRule('height', '4.5rem', options);
  });
});
