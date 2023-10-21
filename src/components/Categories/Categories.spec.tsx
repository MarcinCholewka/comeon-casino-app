import { render } from '@testing-library/react';
import { Categories } from './Categories';

describe('<Categories/ >', () => {
  test('should render without crashing', () => {
    const { container, getByText } = render(<Categories />);

    expect(getByText('Categories')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
