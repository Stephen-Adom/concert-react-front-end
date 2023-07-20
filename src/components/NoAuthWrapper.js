import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import localforage from 'localforage';
import LoadingPage from './LoadingPage';
import { AuthWrapperProp } from '../model/model.types';

const NoAuthWrapper = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    localforage.getItem('token').then((value) => {
      setAuthenticated(!!value);
    });
  }, []);

  useEffect(() => {
    if (authenticated === true) {
      toast.success('You are already signed in', {
        position: 'top-center',
        duration: 4000,
      });
    }
  }, [authenticated]);

  if (authenticated === null) {
    return <LoadingPage />;
  }

  if (authenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

NoAuthWrapper.propTypes = AuthWrapperProp;

export default NoAuthWrapper;
