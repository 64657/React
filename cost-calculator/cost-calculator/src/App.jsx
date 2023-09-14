import { useEffect } from 'react';
import './App.css'
import axios from "axios";
import { cartReducer } from './reducers/cartReducer';
import { useReducer } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
// ? need something to manage the state, in that state to keep our product data , cart data .., everthing 
// that we are looking to manage in the state , useReducer is used 
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  })
  // console.log(state) 
  // states has the product array , 


  const fetchProducts = async () => {
    const {data} = await axios.get("https://dummyjson.com/products");

    // console.log(data.products);
    // we should populate the products array , hence dispatch is used 
    // (data.products) data send here to populate the products array in the state
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
      // products only needed not the data
    })
  };
// to call the fetch products whenever the component is rendered(useEffect is used)

  useEffect(() => {
    fetchProducts();
     }
  , [])
  

  return (
    <>
    <div style = {{
      display: "flex"
    }}>
    <Products state={state} dispatch={dispatch} />
    <Cart state={state} dispatch={dispatch} />

    </div>
   
    </>
  )
}

export default App
