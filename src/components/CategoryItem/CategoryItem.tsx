import { List } from 'semantic-ui-react';

import { TCategory } from '@components/Categories';
import { useGamesFilters } from '@hooks/useGamesFilterContext';

type Props = {
  category: TCategory;
};

export const CategoryItem = ({ category }: Props) => {
  const { id, name } = category;
  const { setCategory, filters } = useGamesFilters();
  const activeCategory = filters.category === id;

  const handleCategoryClick = () => setCategory(id);

  return (
    <List.Item active={activeCategory} onClick={handleCategoryClick}>
      {name}
    </List.Item>
  );
};
