import { Button, Header, Icon, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { TGame } from '@components/Games';

type Props = {
  game: TGame;
};

export const GameItem = ({ game }: Props) => {
  const { code, icon, name, description } = game;

  const handlePlayClick = () => {};

  return (
    <Item className='game'>
      <Item.Image src={icon} alt='game-icon' size='small' ui={true} />
      <Item.Content>
        <Header>{name}</Header>
        <div className='description'>{description}</div>
        <div className='extra'>
          <Link to={`/games/${code}`}>
            <Button
              className='play'
              floated='right'
              secondary={true}
              inverted={true}
              type='button'
              onClick={handlePlayClick}>
              Play
              <Icon name='chevron right' />
            </Button>
          </Link>
        </div>
      </Item.Content>
    </Item>
  );
};
