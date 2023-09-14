import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
