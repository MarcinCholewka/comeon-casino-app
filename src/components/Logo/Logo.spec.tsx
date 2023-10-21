import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render without crashing', () => {
    const { container, getByAltText } = render(<Logo />);

    expect(container).toMatchSnapshot();
    expect(getByAltText('logo')).toBeInTheDocument();
  });
});
