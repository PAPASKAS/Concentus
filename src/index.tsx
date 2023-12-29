import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '@/reportWebVitals';
import Router from '@/Router';
import '@/styles/main.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
