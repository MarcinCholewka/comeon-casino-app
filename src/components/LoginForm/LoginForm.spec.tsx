import { render } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { Formik } from 'formik';

describe('<LoginForm />', () => {
  it('should render without crashing', () => {
    const { container, getByPlaceholderText, getByText } = render(
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={jest.fn()}>
        <LoginForm />
      </Formik>,
    );

    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
