import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WishlistProvider from './context/wishlistContext';
import BasketProvider from './context/basketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>
);

