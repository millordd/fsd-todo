import { createBrowserRouter } from 'react-router-dom';

import { SuccessPage } from './success';
import { ServerErrorPage } from './server-error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>MAIN</h1>,
  },
  {
    path: '/success',
    element: <SuccessPage />,
  },
  {
    path: '/server-error',
    element: <ServerErrorPage />,
  },
]);
