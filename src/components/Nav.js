import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink className="title nav-link" to="/">
              Title
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <i className="fas fa-search nav-link search"></i>
          </li>
          <li><i className="fas fa-shopping-basket nav-link basket"/></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
