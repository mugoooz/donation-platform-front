import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './tailwind.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

