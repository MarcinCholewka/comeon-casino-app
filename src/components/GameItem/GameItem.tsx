import { Button, Header, Icon, Item } from 'semantic-ui-react';

import { TGame } from '@components/Games';

type Props = {
  game: TGame;
};

export const GameItem = ({ game }: Props) => {
  const { code, icon, name, description } = game;

  const handlePlayClick = async () => {
    console.info('PLAY TIME =>', code);
  };

  return (
    <Item className='game'>
      <Item.Image src={icon} alt='game-icon' size='small' ui={true} />
      <Item.Content>
        <Header>{name}</Header>
        <div className='description'>{description}</div>
        <div className='extra'>
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
        </div>
      </Item.Content>
    </Item>
  );
};
