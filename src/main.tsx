import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { routes } from '@routes/routes';

// i18next configuration file
import '../i18n';

// styles
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
