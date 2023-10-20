import { Grid } from 'semantic-ui-react';

import { Categories } from '@components/Categories';
import { Games } from '@components/Games';
import { PlayerInfo } from '@components/PlayerInfo';
import { SearchBox } from '@components/SearchBox';

export const Casino = () => {
  return (
    <div className='casino'>
      <Grid>
        <PlayerInfo />
        <SearchBox />
      </Grid>
      <Grid>
        <Games />
        <Categories />
      </Grid>
    </div>
  );
};
