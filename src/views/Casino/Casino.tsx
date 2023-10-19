import { Grid, Input } from 'semantic-ui-react';

import { Categories } from '@components/Categories';
import { Games } from '@components/Games';
import { PlayerInfo } from '@components/PlayerInfo';

export const Casino = () => {
  return (
    <div className='casino'>
      <Grid>
        <PlayerInfo />
        <div className='four wide column'>
          <Input
            icon={{ name: 'search' }}
            type='text'
            placeholder='Search Game'
          />
        </div>
      </Grid>
      <Grid>
        <Games />
        <Categories />
      </Grid>
    </div>
  );
};
