import { Card, Icon, Button } from 'semantic-ui-react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ErrorBoundary = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'ErrorBoundary' });
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoToGamesClick = () => {
    navigate('/games');

    window.location.reload();
  };

  return (
    <Card centered={true} color='olive'>
      <Icon
        className='!m-5 self-center'
        name='exclamation circle'
        size='massive'
      />
      <Card.Content>
        <Card.Header className='!text-[#8EB50E]' textAlign='center'>
          {t('header')}
        </Card.Header>
        <Card.Description textAlign='center'>
          {/* @ts-ignore */}
          {error.message}
          <Button className='!mt-5' onClick={handleGoToGamesClick}>
            {t('goToGamesButton')}
          </Button>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
