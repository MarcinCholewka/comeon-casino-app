import { Button, Header, Icon, Item } from 'semantic-ui-react';

type Props = {
  code: string;
  description: string;
  icon: string;
  name: string;
};

export const Game = ({ code, description, icon, name }: Props) => {
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
