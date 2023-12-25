import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import router from './route'
import { UserProvider } from './components/Login/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserProvider>
    <App />
    </UserProvider>
  </BrowserRouter>,
);

