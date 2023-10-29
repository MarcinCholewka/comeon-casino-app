import { Card, Grid, Header, Image, Loader } from 'semantic-ui-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { isEmpty, isUndefined } from 'lodash';
import { useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation, Trans } from 'react-i18next';

import { fetchGames } from '@api';
import { GameItem } from '@components/GameItem';
import { useGamesFilters } from '@hooks/useGamesFilterContext';
import searchImage from '@assets/search/search-image.jpg';

export const Games = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Games' });
  const { filters, setCategory, setKeyword } = useGamesFilters();

  const { data: games, isLoading } = useQuery({
    queryFn: () => fetchGames(),
    queryKey: ['games'],
  });

  useEffect(() => {
    return () => {
      setCategory(0);
      setKeyword('');
    };
  }, []);

  const filteredGames = useMemo(() => {
    const { category, keyword } = filters;

    return games?.filter(
      (game) =>
        game.categoryIds.includes(category) &&
        game.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [filters, games]);

  return (
    <HelmetProvider>
      <Grid.Column width='twelve'>
        <Header as='h3' dividing={true}>
          {t('header')}
        </Header>
        {isLoading ? (
          <Loader active={true} inline='centered' size='big' />
        ) : (
          <>
            <Helmet>
              <script src='lib/comeon.game-1.1.min.js' defer></script>
            </Helmet>
            <div className='ui relaxed divided game items links'>
              {isEmpty(filteredGames) || isUndefined(filteredGames) ? (
                <Card centered={true} color='olive'>
                  <Image src={searchImage} />
                  <Card.Content>
                    <Card.Header className='!text-[#8EB50E]' textAlign='center'>
                      {t('noResults#1')}
                    </Card.Header>
                    <Card.Description textAlign='center'>
                      <Trans i18nKey='Games.noResults#2'>
                        We could't find what you searched for. <br /> Try
                        searching again.
                      </Trans>
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
