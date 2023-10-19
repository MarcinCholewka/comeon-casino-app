import { Form, useFormikContext } from 'formik';
import { Button, Icon, Input } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

import { TFormValues } from '@views/Login';

export const LoginForm = () => {
  const { isSubmitting, errors, handleChange, touched } =
    useFormikContext<TFormValues>();

  return (
    <Form>
      <div className='fields'>
        <div className='required field m-[10px]'>
          <Input
            error={!!(touched.username && errors.username)}
            icon={{ name: 'user' }}
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChange}
          />
          {touched.username && errors.username && (
            <div className='text-red-500 text-sm text-left pl-1'>
              {errors.username}
            </div>
          )}
        </div>
        <div className='required field m-[10px]'>
          <Input
            error={!!(touched.password && errors.password)}
            icon={{ name: 'lock' }}
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
          />
          {touched.password && errors.password && (
            <div className='text-red-500 text-sm text-left pl-1'>
              {errors.password}
            </div>
          )}
        </div>
        <div className='field m-[10px]'>
          <Button
            disabled={!isEmpty(errors)}
            loading={isSubmitting}
            type='submit'>
            Login
            <Icon name='chevron right' />
          </Button>
        </div>
      </div>
    </Form>
  );
};
