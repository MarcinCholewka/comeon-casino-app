import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { App } from '@views/App';
import { Casino } from '@views/Casino';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Ingame } from '@views/Ingame/Ingame';
import { Login } from '@views/Login';
import { NotFound } from '@components/NotFound';
import { RequireAuth } from '@components/RequireAuth';

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route
        path='/games'
        element={
          <RequireAuth>
            <Casino />
          </RequireAuth>
        }
      />
      <Route
        errorElement={<ErrorBoundary />}
        path='/games/:code'
        element={
          <RequireAuth>
            <Ingame />
          </RequireAuth>
        }
      />
      <Route path='*' element={<NotFound />} />
      <Route path='login' element={<Login />} />
    </Route>,
  ),
);
