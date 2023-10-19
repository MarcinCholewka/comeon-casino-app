import { Grid } from 'semantic-ui-react';

export const Ingame = () => {
  return (
    <div className='ingame'>
      <Grid centered={true}>
        <div className='three wide column'>
          <div className='ui right floated secondary button inverted'>
            <i className='left chevron icon'></i>Back
          </div>
        </div>
        <div className='ten wide column'>
          <div id='game-launch'></div>
        </div>
        <div className='three wide column'></div>
      </Grid>
    </div>
  );
};
