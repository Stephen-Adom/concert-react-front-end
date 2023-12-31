import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { ConfirmDialog } from 'primereact/confirmdialog';
import localforage from 'localforage';
import { setCurrentUser, setAuthToken, authSelector } from '../storeSlice/authSlice';

const AppLayout = () => {
  const dispatch = useDispatch();

  const { error } = useSelector(authSelector);
  // const toast = useRef(null);
  const show = (errors) => {
    if (typeof errors === 'string') {
      toast.error(errors, {
        position: 'top-center',
        duration: 4000,
      });
    } else {
      errors.forEach((error) => {
        toast.error(error, {
          position: 'top-center',
          duration: 4000,
        });
      });
    }
  };

  useEffect(() => {
    if (error) {
      show(error.error);
    }
  }, [error]);

  useEffect(() => {
    localforage.getItem('user_info', (err, value) => {
      if (err) {
        return null;
      }
      dispatch(setCurrentUser(JSON.parse(value)));
      return null;
    });

    localforage.getItem('token', (err, value) => {
      if (err) {
        return null;
      }
      dispatch(setAuthToken(value));
      return null;
    });
  }, []);

  return (
    <>
      <ConfirmDialog />
      <Toaster />
      <Outlet />
    </>
  );
};

export default AppLayout;
