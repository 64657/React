import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    // Navbar container with light background color
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container " style={{ backgroundColor: "green" }}>
        {/* Brand logo linking to the home page */}
        <NavLink className="navbar-brand" to="/">
          <h2>CRUD-AXIOS</h2>
        </NavLink>

        {/* Navbar toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Home link with an active class when on the home page */}
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active" // Applies the "active" class when this link is active
              >
                <h3>HOME</h3>
              </NavLink>
            </li>
            
            {/* User's Data link with an active class when on the ListPages page */}
            <li className="nav-item">
              <NavLink
                to="/ListPages"
                className="nav-link"
                activeClassName="active" // Applies the "active" class when this link is active
              >
                <h3>USER's DATA</h3>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;