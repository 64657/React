// import logo from './logo.svg';
import './App.css';
import "./bootstrap.min.css"
import {BrowserRouter as Router, Route ,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
function App() {
  return (
    <div className="App">
       <Navbar/>

       <Router>
       <Routes>
          <Route path="/" exact component={Homescreen} />
          <Route path="/cart" exact component={Cartscreen}/>
          <Route path="/register" exact component={Registerscreen}/>
          <Route path='/login' exact component={Loginscreen}/>
          <Route path='/orders' exact component={Ordersscreen}/>
          <Route path='/admin' component={Adminscreen}/>
        </Routes>
       </Router>
    
    </div>
  );
}

export default App;
