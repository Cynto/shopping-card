import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  
  const {navColor, borderClass, underlineClass, openShop, setNavColor, setBorderClass, setUnderlineClass} = props

  const setNavColorFunction = (color) => {
    
  };

  const openHome = () => {
    setNavColor({ color: 'white' });
    setBorderClass('no-border')
    setUnderlineClass('white-underline')
  }

  return (
    <div className="nav-container">
      <nav className={`navbar ${borderClass}`}>
        <ul className="nav-links">
          <li>
            <NavLink
              onClick={openHome}
              style={navColor}
              className={`title nav-link text underline-color ${underlineClass}`}
              to="/"
            >
              InTech
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={openShop}
              style={navColor}
              className={`shop nav-link text underline-color ${underlineClass}`}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <i style={navColor} className="fas fa-search nav-link search"></i>
          </li>

          <li>
            <NavLink style={navColor} to="/basket">
              <i className="fas fa-shopping-basket nav-link basket" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
