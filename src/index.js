import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Lab from './Lab';
import Medicine from './Medicine';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
    <Medicine />
    <Lab />
  </React.StrictMode>
);