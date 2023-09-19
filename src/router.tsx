import { createBrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import HomePage from './pages/Homepage/Homepage';
import RegisterPage from './pages/Registerpage/Registerpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
