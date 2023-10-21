import { Grid, Header, List, Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BASE_API } from '@utils/constants';
import { CategoryItem } from '@components/CategoryItem';

export type TCategory = {
  id: number;
  name: string;
};

export const Categories = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Categories' });
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${BASE_API}/categories`);
        const data = await response.json();

        setCategories(data);
      } catch (error: unknown) {
        console.log(
          '🚀 ~ file: Categories.tsx:25 ~ fetchCategories ~ error:',
          error,
        );

        toast.error('Something went wrong! Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Grid.Column width='four'>
      <Header as='h3' dividing={true}>
        {t('header')}
      </Header>
      {isLoading ? (
        <Loader active={true} inline='centered' size='big' />
      ) : (
        <List selection={true} animated={true}>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </List>
      )}
    </Grid.Column>
  );
};
