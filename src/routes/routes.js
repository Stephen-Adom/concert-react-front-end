import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages';
import SignIn from '../features/pages/authentication/SignIn';
import SignUp from '../features/pages/authentication/SignUp';
import Welcome from '../pages/Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
    ],
  },
  {
    path: '/home',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
