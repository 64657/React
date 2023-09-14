// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CartProvider } from './cartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
