import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import New from './New';
import Medicine from './Medicine';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
    <Medicine />
    <New />
  </React.StrictMode>
);