import { useEffect, useState } from 'react';
import { Header, Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';

import { Game } from '@components/Game';
import { BASE_API } from '@constants';

type Game = {
  name: string;
  description: string;
  code: string;
  icon: string;
  categoryIds: number[];
};

export const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  return (
    <div className='twelve wide column'>
      <Header as='h3' dividing={true}>
        Games
      </Header>
      {isLoading ? (
        <Loader active={true} inline='centered' size='big' />
      ) : (
        <div className='ui relaxed divided game items links'>
          {games.map(({ code, name, icon, description }) => (
            <Game
              key={code}
              code={code}
              description={description}
              icon={icon}
              name={name}
            />
          ))}
        </div>
      )}
    </div>
  );
};
