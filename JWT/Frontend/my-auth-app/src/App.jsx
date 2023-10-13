import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'
import axios from 'axios';
import Register from './Register';
import Login from './Login';
import Protected from './Protected';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
// setting the token in local storage
  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
     // emptying the setToken
  }
 

  return (
    <Router>
      <div className='App'>
        <header>
          <h1>MERN JWT Authentication</h1>
          {token && <button onClick={logout}>Logout</button>}  
        </header>  
        <main>
        <Routes>
          <Route path="/register" Component={Register}></Route>
          <Route path="/login" element={<Login setToken={setToken}></Login>}></Route>
          {/* setToken is passed as a prop */}
          <Route path="/protected" element={token ? <Protected/> : <Navigate to='/login'></Navigate>}></Route>
        </Routes>
        </main>
      </div>     
    </Router>
  )
}

export default App