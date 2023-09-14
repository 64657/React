// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/full-stack" component={FullStack} />
        <Route path="/data-science" component={DataScience} />
        <Route path="/cyber-security" component={CyberSecurity} />
        <Route path="/career" component={Career} />
      </Routes>
    </Router>
  );
}

export default App;
