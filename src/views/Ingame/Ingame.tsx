import { Grid } from 'semantic-ui-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { GameLaunch } from '@components/GameLaunch';

declare global {
  interface Window {
    comeon: {
      game: {
        launch: (code: string) => void;
      };
    };
  }
}

export const Ingame = () => {
  const { code } = useParams<{ code: string }>();

  useEffect(() => {
    const launchGame = () => {
      if (
        window.comeon &&
        window.comeon.game &&
        typeof window.comeon.game.launch === 'function'
      ) {
        code && window.comeon.game.launch(code);
      } else {
        throw new Error(
          'ComeOn library or required functions not found. Make sure it is properly loaded.',
        );
      }
    };

    launchGame();

    return () => {
      const iframe = document.querySelector('#game');

      if (iframe) {
        iframe.remove();
      }
    };
  }, [code]);

  return (
    <div className='ingame'>
      <Grid centered={true} container={true} stackable={true}>
        <GameLaunch />
      </Grid>
    </div>
  );
};
