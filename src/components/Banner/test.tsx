import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('Component: <Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /Defy death/i })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="best seller"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/best seller/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1',
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
