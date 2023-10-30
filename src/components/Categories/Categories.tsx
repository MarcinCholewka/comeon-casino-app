import { Grid, Header, List, Loader } from 'semantic-ui-react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { CategoryItem } from '@components/CategoryItem/CategoryItem';
import { fetchCategories } from '@api';

export const Categories = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Categories' });
  const { data: categories, isLoading } = useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ['categories'],
  });

  return (
    <Grid.Column width='four'>
      <Header as='h3' dividing={true}>
        {t('header')}
      </Header>
      {isLoading ? (
        <Loader active={true} inline='centered' size='big' />
      ) : (
        <List selection={true} animated={true}>
          {categories?.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </List>
      )}
    </Grid.Column>
  );
};
