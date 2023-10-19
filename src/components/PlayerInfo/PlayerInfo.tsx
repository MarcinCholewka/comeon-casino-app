import { Button, Icon } from 'semantic-ui-react';

import { BASE_API } from '@constants';
import { useAuth } from '@auth/AuthWrapper';

export const PlayerInfo = () => {
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
    <div className='twelve wide column'>
      <div className='ui list'>
        <div className='player item'>
          <img className='ui avatar image' src={avatar} alt='avatar' />
          <div className='content'>
            <div className='header'>
              <b className='name'>{name}</b>
            </div>
            <div className='description event'>{event}</div>
          </div>
        </div>
      </div>
      <Button secondary={true} onClick={handleLogout}>
        <Icon name='chevron left' />
        Log Out
      </Button>
    </div>
  );
};
