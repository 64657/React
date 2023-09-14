import React, { createContext, useState } from "react";
import productsData from "./ProductsData";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    // Find the product by ID from the productsData
    const productToAdd = productsData.products.find(
      (product) => product.id === productId
    );

    // Add the product to the cartItems state
    setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
  };

  const removeFromCart = (productId) => {
    // Remove the product from the cartItems state
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
