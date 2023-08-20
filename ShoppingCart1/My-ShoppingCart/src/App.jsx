import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

const productsData = [
  {
    id: 1,
    name: 'Shoe 1',
    description: 'Description for Shoe 1',
    price: 49.99,
    imageLink:'https://th.bing.com/th/id/OIP.kGgpJsy1JQymjmpoItwk9wHaHK?w=198&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    id: 2,
    name: 'Shoe 2',
    description: 'Description for Shoe 2',
    price: 59.99,
    imageLink: 'https://th.bing.com/th/id/OIP.MlI8IDUx0IADPe_BIUpOkwHaFW?w=290&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 3,
    name: 'Shoe 3',
    description: 'Description for Shoe 3',
    price: 39.99,
    imageLink: 'https://th.bing.com/th/id/OIP.wRz84ajO194X3IfGPwuVoQHaGI?w=221&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 4,
    name: 'Shoe 4',
    description: 'Description for Shoe 4',
    price: 69.99,
    imageLink: 'https://th.bing.com/th/id/OIP.8zeC_oZc932xBVgWInKLvAHaFd?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 5,
    name: 'Shoe 5',
    description: 'Description for Shoe 5',
    price: 79.99,
    imageLink: 'https://th.bing.com/th/id/OIP.RAk0wTpA1sO5rqsVXz1MZQHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    id: 6,
    name: 'Shoe 6',
    description: 'Description for Shoe 6',
    price: 89.99,
    imageLink: 'https://th.bing.com/th/id/OIP.LAQdUJeZNakfd27ikMynogHaFP?w=294&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (productId) => {
    if (!cartItems.includes(productId)) {
      setCartItems([...cartItems, productId]);
    }
  };
  
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((id) => id !== productId));
  };
  
  return (
    <div className="App">
      <Navbar cartItems={cartItems} products={productsData} removeFromCart={removeFromCart} />
      <div className="product-container">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            inCart={cartItems.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
