import { Grid } from 'semantic-ui-react';

import { Categories } from '@components/Categories';
import { Games } from '@components/Games';
import { PlayerInfo } from '@components/PlayerInfo';
import { SearchBox } from '@components/SearchBox';

export const Casino = () => {
  return (
    <div className='casino'>
      <Grid stackable={true}>
        <PlayerInfo />
        <SearchBox />
      </Grid>
      <Grid stackable={true} reversed='mobile'>
        <Games />
        <Categories />
      </Grid>
    </div>
  );
};
