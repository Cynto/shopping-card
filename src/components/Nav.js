import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Nav.css'

function Nav(props) {
  const { navColor, borderClass, underlineClass, leaveHome } = props;

  return (
    <div className="nav-container">
      <nav className={`navbar ${borderClass}`}>
        <ul className="nav-links">
          <li>
            <NavLink
              style={navColor}
              className={`title nav-link text underline-color ${underlineClass}`}
              to="/"
            >
              InTech
            </NavLink>
          </li>
          <li>
            <NavLink
              style={navColor}
              className={`shop-nav nav-link text underline-color ${underlineClass}`}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <i style={navColor} className="fas fa-search nav-link search"></i>
          </li>

          <li>
            <NavLink onClick={leaveHome} style={navColor} to="/basket">
              <i className="fas fa-shopping-basket nav-link basket-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
