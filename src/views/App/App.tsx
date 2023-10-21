import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthWrapper } from '@auth/AuthWrapper';
import { GamesFiltersProvider } from '@hooks/useGamesFilterContext';
import { LanguageSwitcher } from '@components/LanguageSwitcher';
import { Logo } from '@components/Logo';

import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <AuthWrapper>
      <GamesFiltersProvider>
        <LanguageSwitcher />
        <Logo />
        <div className='mx-6 sm:mx-auto bg-white my-0 mx-auto pt-[2rem] px-[2rem] pb-[7rem] max-w-[990px] rounded'>
          <Outlet />
        </div>
        <ToastContainer />
      </GamesFiltersProvider>
    </AuthWrapper>
  );
};
