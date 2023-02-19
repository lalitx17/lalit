import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './contact.css';
import './about.css';
import './experience.css';
import './preloader.css';
import './navbar.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL} >
       <App />
  </BrowserRouter>
  </React.StrictMode>
);
