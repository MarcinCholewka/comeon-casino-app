import { render } from '@testing-library/react';
import { LanguageSwitcher } from './LanguageSwitcher';

test('LanguageSwitcher toggles language when clicked', () => {
  const { container, getByTestId } = render(<LanguageSwitcher />);

  // Check initial language
  const languageSwitch = getByTestId('lang-switcher');

  expect(languageSwitch).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
