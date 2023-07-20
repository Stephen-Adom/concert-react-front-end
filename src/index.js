import React from 'react';
import ReactDOM from 'react-dom/client';
import 'flowbite/dist/flowbite.css';
import 'flowbite/dist/flowbite.js';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './index.css';
import 'swiper/css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './routes/routes';
import store from './store/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
