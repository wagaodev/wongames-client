import { renderWithTheme } from 'utils/tests/helpers';
import { Container } from '.';

describe('Component: <Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule('max-width', '130rem');
    expect(container.firstChild).toMatchSnapshot();
  });
});
