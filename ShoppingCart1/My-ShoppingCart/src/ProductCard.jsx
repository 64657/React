import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart, inCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imageLink}  />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {inCart ? (
          <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
        ) : (
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
