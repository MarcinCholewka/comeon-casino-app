import { Button, Icon, Grid, List, Image } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { BASE_API } from '@utils/constants';
import { useAuth } from '@auth/AuthWrapper';

export const PlayerInfo = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'PlayerInfo' });
  const auth = useAuth();

  if (!auth.player) return;

  const { avatar, event, name } = auth.player;

  const handleLogout = async () => {
    try {
      const username = name.split(' ')[0].toLowerCase();

      const response = await fetch(`${BASE_API}/logout`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
        }),
      });

      if (!response.ok) return;

      auth.logout();
    } catch (error) {
      console.error(
        '🚀 ~ file: PlayerInfo.tsx:31 ~ handleLogout ~ error:',
        error,
      );
    }
  };

  return (
    <Grid.Column largeScreen='12' tablet='10' computer='10'>
      <List size='tiny'>
        <List.Item className='player'>
          <Image className='avatar' src={avatar} alt='avatar' />
          <List.Content>
            <List.Header>{name}</List.Header>
            <div className='description event'>{event}</div>
          </List.Content>
        </List.Item>
      </List>
      <Button secondary={true} onClick={handleLogout}>
        <Icon name='chevron left' />
        {t('logoutButton')}
      </Button>
    </Grid.Column>
  );
};
