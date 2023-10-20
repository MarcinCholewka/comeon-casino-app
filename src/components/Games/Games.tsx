import { Card, Grid, Header, Image, Loader } from 'semantic-ui-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import { useEffect, useMemo, useState } from 'react';

import { BASE_API } from '@constants';
import { GameItem } from '@components/GameItem';
import { useGamesFilters } from '@hooks/useGamesFilterContext';
import searchImage from '@assets/search/search-image.jpg';

export type TGame = {
  name: string;
  description: string;
  code: string;
  icon: string;
  categoryIds: number[];
};

export const Games = () => {
  const [games, setGames] = useState<TGame[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { filters, setCategory, setKeyword } = useGamesFilters();

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_API}/games`);
        const data = await response.json();

        setGames(data);
      } catch (error: unknown) {
        console.error('🚀 ~ file: Games.tsx:31 ~ fetchGames ~ error:', error);

        toast.error('Something went wrong! Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();

    return () => {
      setCategory(0);
      setKeyword('');
    };
  }, []);

  const filteredGames = useMemo(() => {
    const { category, keyword } = filters;

    return games.filter(
      (game) =>
        game.categoryIds.includes(category) &&
        game.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [filters, games]);

  return (
    <HelmetProvider>
      <Grid.Column width='twelve'>
        <Header as='h3' dividing={true}>
          Games
        </Header>
        {isLoading ? (
          <Loader active={true} inline='centered' size='big' />
        ) : (
          <>
            <Helmet>
              <script src='lib/comeon.game-1.1.min.js' defer></script>
            </Helmet>
            <div className='ui relaxed divided game items links'>
              {isEmpty(filteredGames) ? (
                <Card centered={true} color='olive'>
                  <Image src={searchImage} />
                  <Card.Content>
                    <Card.Header className='!text-[#8EB50E]' textAlign='center'>
                      No results found
                    </Card.Header>
                    <Card.Description textAlign='center'>
                      We could't find what you searched for.
                      <br />
                      Try searching again.
                    </Card.Description>
                  </Card.Content>
                </Card>
              ) : (
                filteredGames.map((game) => (
                  <GameItem key={game.code} game={game} />
                ))
              )}
            </div>
          </>
        )}
      </Grid.Column>
    </HelmetProvider>
  );
};
