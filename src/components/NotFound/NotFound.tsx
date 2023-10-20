import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'semantic-ui-react';

export const NotFound = () => {
  return (
    <Card centered={true} color='olive'>
      <Icon
        className='!m-5 self-center'
        name='exclamation circle'
        size='massive'
      />
      <Card.Content>
        <Card.Header className='!text-[#8EB50E]' textAlign='center'>
          Sorry, the page you were looking for was not found.
        </Card.Header>
        <Card.Description textAlign='center'>
          <Link to='/games'>
            <Button className='!mt-5'>Return to main page</Button>
          </Link>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
