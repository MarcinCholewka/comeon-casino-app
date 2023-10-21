import { render } from '@testing-library/react';
import { CategoryItem } from './CategoryItem';

describe('<CategoryItem />', () => {
  const category = {
    id: 1,
    name: 'Category #1',
  };

  it('should render without crashing', () => {
    const { container, getByText } = render(
      <CategoryItem category={category} />,
    );
    const categoryName = getByText(category.name);

    expect(categoryName).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
