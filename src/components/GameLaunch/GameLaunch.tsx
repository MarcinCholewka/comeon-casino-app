import { Button, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const GameLaunch = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'GameLaunch' });

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
              {t('backButton')}
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
