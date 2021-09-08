import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Highlight from '.';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/borderlands-2',
  backgroundImage: '/img/borderlands-img.jpg',
};

describe('Component: <Highlight />', () => {
  it('should render headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });
});
