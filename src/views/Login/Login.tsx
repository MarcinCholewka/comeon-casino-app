import * as Yup from 'yup';
import { Formik } from 'formik';
import { Grid } from 'semantic-ui-react';
import { toast } from 'react-toastify';

import { BASE_API } from '@constants';
import { LoginForm } from '@components/LoginForm';
import { useAuth } from '@auth/AuthWrapper';
import { useNavigate } from 'react-router-dom';

export type TFormValues = {
  username: string;
  password: string;
};

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required.'),
    password: Yup.string().required('This field is required.'),
  });

  const handleSubmit = async (values: TFormValues): Promise<void> => {
    try {
      const { password, username } = values;

      const response = await fetch(`${BASE_API}/login`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const { error, player } = await response.json();

      if (!response.ok) {
        const errorMessage = error.charAt(0).toUpperCase() + error.slice(1);

        toast.error(errorMessage);

        return;
      }

      auth.login(player);
      navigate('/');
    } catch (error) {
      console.error('🚀 ~ file: Login.tsx:22 ~ handleSubmit ~ error:', error);
    }
  };

  return (
    <Grid centered={true}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <LoginForm />
      </Formik>
    </Grid>
  );
};
