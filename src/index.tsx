import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/App.css';
import './stylesheets/sidebar.css';
import App from './App';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
