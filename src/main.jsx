import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx';

import 'modern-normalize/modern-normalize.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
