import React from 'react';
import { FaHome, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { RiServiceLine } from 'react-icons/ri';

const Navbar = ({ cartItems, products, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, itemId) => {
      const item = products.find((product) => product.id === itemId);
      return total + (item ? item.price : 0);
    }, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <FaHome /> Shopping Cart
        </div>
        <div className="navbar-cart">
          <span>
            <FaShoppingCart /> Cart Quantity: {cartItems.length}
          </span>
          <span>
            Total Price: ${getTotalPrice()}
          </span>
          <ul className="cart-items">
            {cartItems.map((itemId) => (
              <li key={itemId}>
                {products.find((product) => product.id === itemId)?.name}{' '}
                <button onClick={() => removeFromCart(itemId)}>
                  <FaTrash /> Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-services">
          <span>
            <RiServiceLine /> Services
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
