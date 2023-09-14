// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">All</Link></li>
        <li><Link to="/full-stack">FULL STACK DEVELOPMENT</Link></li>
        <li><Link to="/data-science">DATA SCIENCE</Link></li>
        <li><Link to="/cyber-security">CYBER SECURITY</Link></li>
        <li><Link to="/career">CAREER</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
