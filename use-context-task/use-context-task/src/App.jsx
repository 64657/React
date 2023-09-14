// App.jsx
import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useCart } from './cartContext';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const { dispatch } = useCart();

  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Products />
        <Cart />
      </div>
    </>
  );
}

export default App;
