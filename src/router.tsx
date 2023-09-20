import { createBrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import HomePage from './pages/Homepage/Homepage';
import RegisterPage from './pages/Registerpage/Registerpage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
