import { ChangeEvent, useCallback, useMemo } from 'react';
import { Grid, Input } from 'semantic-ui-react';

import { DEBOUNCE_TIME } from '@constants';
import { useGamesFilters } from '@hooks/useGamesFilterContext';
import debounce from '@utils/debounce';

export const SearchBox = () => {
  const { setKeyword } = useGamesFilters();

  const handleChangeSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    },
    [setKeyword],
  );
  const debouncedHandleChangeSearch = useMemo(
    () => debounce(handleChangeSearch, DEBOUNCE_TIME),
    [handleChangeSearch],
  );

  return (
    <Grid.Column width='four'>
      <Input
        icon={{ name: 'search' }}
        type='text'
        placeholder='Search Game'
        onChange={debouncedHandleChangeSearch}
      />
    </Grid.Column>
  );
};
