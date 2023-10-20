import { Link } from 'react-router-dom';
import { Button, Grid, Icon } from 'semantic-ui-react';

export const GameLaunch = () => {
  return (
    <>
      <Grid.Column width={2} textAlign='center'>
        <Link to='/games'>
          <Button secondary floated='right' inverted size='tiny'>
            <Icon name='chevron left' />
            Back
          </Button>
        </Link>
      </Grid.Column>
      <Grid.Column width={14}>
        <div id='game-launch'></div>
      </Grid.Column>
    </>
  );
};
