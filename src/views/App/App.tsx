import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AuthWrapper } from '@auth/AuthWrapper';
import { GamesFiltersProvider } from '@hooks/useGamesFilterContext';
import { Logo } from '@components/Logo';

export const App = () => {
  return (
    <AuthWrapper>
      <GamesFiltersProvider>
        <Logo />
        <div className='mx-6 sm:mx-auto bg-white my-0 mx-auto pt-[2rem] px-[2rem] pb-[7rem] max-w-[990px] rounded'>
          <Outlet />
        </div>
        <ToastContainer />
      </GamesFiltersProvider>
    </AuthWrapper>
  );
};
