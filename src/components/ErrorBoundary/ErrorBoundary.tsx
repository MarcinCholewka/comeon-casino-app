import { useNavigate, useRouteError } from 'react-router-dom';
import { Card, Icon, Button } from 'semantic-ui-react';

export const ErrorBoundary = () => {
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
          Something went wrong!
        </Card.Header>
        <Card.Description textAlign='center'>
          {/* @ts-ignore */}
          {error.message}
          <Button className='!mt-5' onClick={handleGoToGamesClick}>
            Go to games page
          </Button>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
