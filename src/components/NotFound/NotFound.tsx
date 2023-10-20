import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'NotFound' });
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
          <Link to='/games'>
            <Button className='!mt-5'>{t('toMainPageButton')}</Button>
          </Link>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
