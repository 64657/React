import React, { useContext } from 'react';
import faker from '/node_modules/faker'; // Adjust the path as needed
import { useState } from 'react';
import SingleProduct from './SingleProduct';
import './styles.css'
import {  CartState } from '../Context';


const Home = () => {
   const {products} = CartState();

  
 
  
  // console.log(productsArray);

  return (
    <div style={{textAlign: 'center'}}>
    <div className='productsContainer'>{products.map((prod) => (
      // <span>{prod.name}</span>
      <SingleProduct prod={prod} key={prod.id} />
    ))}
    </div> 
    </div>
  );
};

export default Home;
