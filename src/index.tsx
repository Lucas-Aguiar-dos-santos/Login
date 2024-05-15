import React from 'react';
import ReactDOM from 'react-dom/client';



import  GlobalStyle  from './global';

import App from "../src/Pages/Login/Index"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


