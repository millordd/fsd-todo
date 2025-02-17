import { createBrowserRouter } from 'react-router-dom';

import { SuccessPage } from './success';
import { ServerErrorPage } from './server-error';
import { TodoPage } from './todo-page';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoPage/>,
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
