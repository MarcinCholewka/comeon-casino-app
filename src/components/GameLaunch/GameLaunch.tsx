import { Link } from 'react-router-dom';
import { Button, Grid, Icon } from 'semantic-ui-react';

export const GameLaunch = () => {
  return (
    <>
      <Grid.Row>
        <Grid.Column width='15' textAlign='center'>
          <Link to='/games'>
            <Button
              secondary={true}
              floated='right'
              inverted={true}
              size='tiny'>
              <Icon name='chevron left' />
              Back
            </Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width='15'>
          <div id='game-launch'></div>
        </Grid.Column>
      </Grid.Row>
    </>
  );
};
