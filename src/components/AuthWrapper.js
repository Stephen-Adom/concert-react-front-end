import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import localforage from 'localforage';
import { AuthWrapperProp } from '../model/model.types';
import LoadingPage from './LoadingPage';

const AuthWrapper = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    localforage.getItem('token').then((value) => {
      setAuthenticated(!!value);
    });
  }, []);

  useEffect(() => {
    if (authenticated === false) {
      toast.success('Sign in to have access', {
        position: 'top-center',
        duration: 4000,
      });
    }
  }, [authenticated]);

  if (authenticated === null) {
    return <LoadingPage />;
  }

  if (!authenticated) {
    return <Navigate to="/auth/signin" replace />;
  }

  return children;
};

AuthWrapper.propTypes = AuthWrapperProp;

export default AuthWrapper;
