import { Grid, Header, Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import { BASE_API } from '@constants';
import { CategoryItem } from '@components/CategoryItem/CategoryItem';

type Category = {
  id: number;
  name: string;
};

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${BASE_API}/categories`);
        const data = await response.json();

        setCategories(data);
      } catch (error) {
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
        Categories
      </Header>
      {isLoading ? (
        <Loader active={true} inline='centered' size='big' />
      ) : (
        <div className='ui selection animated list category items'>
          {categories.map(({ id, name }) => (
            <CategoryItem key={id} id={id} name={name} />
          ))}
        </div>
      )}
    </Grid.Column>
  );
};
