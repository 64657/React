import React from 'react'
import SingleProduct from './SingleProduct';
import { CartState } from '../Context';
import { useEffect } from 'react';

const Cart = () => {
  const { cart} =CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart]);
  

  return (
    <div style={{ textAlign: 'center'}}>
      <span style={{ fontSize: 30}}>My Cart</span>
      <br />
      <span style={{ fontSize: 30}}>Total: {total}</span>
      <div classname="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Cart