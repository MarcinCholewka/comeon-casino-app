import { ChangeEvent, useCallback, useMemo } from 'react';
import { Grid, Input } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { DEBOUNCE_TIME } from '@utils/constants';
import { useGamesFilters } from '@hooks/useGamesFilterContext';
import debounce from '@utils/debounce';

export const SearchBox = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'SearchBox' });
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
        placeholder={t('searchPlaceholder')}
        onChange={debouncedHandleChangeSearch}
      />
    </Grid.Column>
  );
};
