// router.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { AppLayout, AuthLayout } from '../features';
import {
  Home, ConcertDetails, AddConcert, ManageConcert,
} from '../pages';
import { AuthWrapper, NoAuthWrapper } from '../components';
import SignIn from '../features/pages/authentication/SignIn';
import SignUp from '../features/pages/authentication/SignUp';
import Welcome from '../pages/Welcome';
import ReservationForm from '../features/pages/Reservation/ReservationForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'auth',
        element: (
          <NoAuthWrapper>
            <AuthLayout />
          </NoAuthWrapper>
        ),
        children: [
          {
            path: 'signin',
            element: <SignIn />,
          },
          {
            path: 'signup',
            element: <SignUp />,
          },
        ],
      },
      {
        path: '',
        element: (
          <AuthWrapper>
            <App />
          </AuthWrapper>
        ),
        children: [
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'home/concerts/:id',
            element: <ConcertDetails />,
          },
          {
            path: 'concert/add',
            element: <AddConcert />,
          },
          {
            path: 'concert/make-reservation',
            element: <ReservationForm />,
          },
          {
            path: 'concert/update',
            element: <ManageConcert />,
          },
        ],
      },
    ],
  },
]);

export default router;
