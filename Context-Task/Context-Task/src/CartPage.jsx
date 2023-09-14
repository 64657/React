import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./CartPage.css"; // Import the CSS file for styling

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">No items in the cart.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
